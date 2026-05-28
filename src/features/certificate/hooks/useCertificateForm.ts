import { useEffect, useState } from "react"
import { collection, doc, getDocs, serverTimestamp, Timestamp } from "firebase/firestore"

import { useCertificatePDF } from "./useCertificatePDF"

import { addCertificate, getBrands, getComputers, getDevices, getLastCertificateNumber, getNextTag, updateComputer } from "../../../services"

import type { Brand, Certificate, Computer, Device, Reassignment, SoftwareItem, TagCounter, TagCounterType } from "../../../types/entidades"

import { auth, db } from "../../../firebase/firebase-config"

import { useSoftware } from "../../software/hooks/useSoftware"

export const useCertificateForm = () => {

    const { generatePDF } = useCertificatePDF()

    const { softwareList: availableSoftware } = useSoftware() 
    const [selectedSoftware, setSelectedSoftware] = useState<SoftwareItem[]>([])

    const [ tag, setTag ] = useState("")
    const [ user, setUser ] = useState("")
    const [ model, setModel ] = useState("")
    const [ observations, setObservations ] = useState("")
    const [ serialNumber, setSerialNumber ] = useState("")
    const [ softwareList, setSoftwareList ] = useState<SoftwareItem[]>([])
    const [ previewNumber, setPreviewNumber ] = useState<number | null>(null)
    
    const [ selectedBrand, setSelectedBrand ] = useState<Brand | null>(null)
    const [ selectedDevice, setSelectedDevice ] = useState<Device | null>(null)

    const [ selectedTagType, setSelectedTagType ] = useState<TagCounterType | null>(null)

    const [ tagCounters, setTagCounters ] = useState<TagCounter[]>([])
    const [ selectedTagCounter, setSelectedTagCounter] = useState<TagCounter | null>(null)

    const [ computers, setComputers ] = useState<Computer[]>([])
    const [ devices, setDevices ] = useState<Device[]>([])
    const [ brands, setBrands ] = useState<Brand[]>([])

    const [selectedComputer, setSelectedComputer] = useState<Computer | null>(null)
    const [newUser, setNewUser] = useState('') 
    const [previousUser, setPreviousUser] = useState('')

    const [ loading, setLoading ] = useState(false)

    const { currentUser } = auth


    useEffect( () => {
        const loadData = async () => {
            const [brandsData, devicesData] = await Promise.all([
                getBrands(), getDevices()
            ])

            setBrands(brandsData)
            setDevices(devicesData)
        }
        loadData()
    }, [])


    useEffect(() => {
        const fetch = async () => {
            const nextNumber = await getLastCertificateNumber()
            setPreviewNumber(nextNumber)
        }

        fetch()
    }, [])

    useEffect(() => {
        const loadData = async () => {
            const [ brandsData, devicesData, tagCountersSnap, computersData ] = await Promise.all([
                getBrands(),
                getDevices(),
                getDocs(collection(db, 'tag_counters')),
                getComputers(),
            ])

            setBrands(brandsData)
            setDevices(devicesData)
            setTagCounters(
                tagCountersSnap.docs
                    .map(d => ({ id: d.id, ...d.data() } as TagCounter))
                    .filter(t => !t.isStatic)
            )
            setComputers(computersData)
        }
        loadData()
    }, [])


    const handleTagTypeChange = async (type: TagCounter) => {
        setSelectedTagCounter(type)
        const newTag = await getNextTag(type.id as TagCounterType)
        setTag(newTag)
    }

    const resetForm = () => {
        setTag("")
        setUser("")
        setObservations("")
        setSoftwareList([])
        setSerialNumber("")
        setSelectedBrand(null)
        setSelectedTagCounter(null)
        setSelectedDevice(null)
    }

    const handleReassignment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        setLoading(true)
        
        try {
            const reassignmentId  = doc(collection(db, '_')).id
            
            const reassignmentData: Reassignment = {
                id: reassignmentId,
                previousUser,
                updated_at: serverTimestamp() as Timestamp,
                updated_by: {
                    uid: currentUser!.uid,
                    name: currentUser!.displayName ?? 'Sin nombre',
                },
            }
            if (!selectedComputer) {
                alert('Selecciona un equipo')
                return
            }
            
            const computerData: Computer = {
                ...selectedComputer,
                assignedTo: newUser,
                reassignments: [
                    ...(selectedComputer?.reassignments ?? []),
                    reassignmentData
                ]
            }

            await updateComputer(selectedComputer?.id!, computerData)

            const certificateReassignmentData: Omit<Certificate, 'id' | 'certificateNumber' | 'software'> = {
                observations,
                computer: computerData,
                created_by: {
                    uid: currentUser!.uid,
                    name: currentUser!.displayName ?? 'Sin nombre',
                },
                created_at: serverTimestamp() as Timestamp,

            }
            const newNumber = await addCertificate(certificateReassignmentData)

            const completeCertificate: Certificate = {
                ...certificateReassignmentData,
                certificateNumber: newNumber,
            }

            generatePDF(completeCertificate)  
            resetForm()
            
        } catch ( error ) {
            console.error( error )
            alert('Ha ocurrido un error en el registro')
        } finally {
            setLoading(false)
        }

    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!user.trim() || !tag.trim() || !selectedDevice || !selectedBrand) {
            alert('Por favor completa todos los campos obligatorios')
            return
        }

        try {
            const { currentUser } = auth

            const certificateData: Omit<Certificate, 'id' | 'certificateNumber'> = {
                observations,
                software: softwareList,
                computer: {
                    internalTag: tag,
                    assignedTo: user,
                    brand: selectedBrand,
                    type: selectedDevice,
                    model,
                    serialNumber,
                    created_by: {
                        uid: currentUser!.uid,
                        name: currentUser!.displayName ?? 'Sin nombre',
                    },
                    created_at: serverTimestamp() as Timestamp,
                },
                created_by: {
                    uid: currentUser!.uid,
                    name: currentUser!.displayName ?? 'Sin nombre',
                },
                created_at: serverTimestamp() as Timestamp,
            }

            const newNumber = await addCertificate(certificateData)

            const completeCertificate: Certificate = {
                ...certificateData,
                certificateNumber: newNumber,
            }

            generatePDF(completeCertificate)  // 👈
            resetForm()

            setSelectedTagType(null)

        } catch (error) {
            console.error('Error al guardar certificado:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleSoftwareChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target
        const name = e.target.dataset.name ?? value

        if (checked) {
            setSelectedSoftware(prev => [...prev, { id: value, name }])
        } else {
            setSelectedSoftware(prev => prev.filter(item => item.id !== value))
        }
    }

    const handleComputerSelect = ( computerId: string ) => {
        const computer = computers.find( c => c.id === computerId ) ?? null
        setSelectedComputer(computer)
        setPreviousUser(computer?.assignedTo ?? '')
    }


    return {
        tag, setTag,
        user, setUser,
        model, setModel,
        devices,
        previewNumber,
        brands, loading,
        setDevices, selectedTagType,
        observations, setObservations,
        softwareList, setSoftwareList,
        serialNumber, setSerialNumber,
        selectedBrand, setSelectedBrand,
        selectedDevice, setSelectedDevice,
        handleSubmit, handleTagTypeChange, handleSoftwareChange,
        tagCounters, handleReassignment,
        selectedTagCounter,
        availableSoftware,  
        selectedSoftware,
        computers, handleComputerSelect,
        selectedComputer, setSelectedComputer,
        previousUser, setPreviewNumber, newUser, setNewUser, setPreviousUser,
    }
}


