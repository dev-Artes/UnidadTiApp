import { useEffect, useMemo, useState } from "react"

import { db } from "../../../firebase/firebase-config"
import { getDocs, collection } from 'firebase/firestore'

import { getCertificates, getDevices } from "../../../services"

import type { CertificateRecord, Device } from "../../../types/entidades"


export const useCertificate = () => {
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState<string | null>(null)
    
    const [ devices, setDevices ] = useState<Device[]>([])

    const [ searchText, setSearchText ] = useState("")
    const [ tagPrefixes, setTagPrefixes ] = useState<string[]>([])
    const [  activeFilter , setActiveFilter ] = useState<string>("ALL")    
    
    const [ certificates, setCertificates ] = useState<CertificateRecord[]>([])
    const [ detailItem, setDetailItem ] = useState<CertificateRecord | null>(null)
    const [ editingItem, setEditingItem ] = useState<CertificateRecord | null>(null)

    const [ activeSubFilter, setActiveSubFilter ] = useState<string | null>(null)

    const handleEdit = (item: CertificateRecord) => setEditingItem(item)
    const handleDetail = (item: CertificateRecord) => setDetailItem(item)

    const [ typeFilter, setTypeFilter ] = useState<'all' | 'reasignacion'>('all')

    const [isTypeMenuOpen, setIsTypeMenuOpen] = useState(false)

    const typeOptions = [
        { value: 'all', label: 'Todos' },
        { value: 'reasignacion', label: 'Reasignaciones' }
    ]

    const excludedDevices = [
        'Notebook',
        'PC de Escritorio',
        'PC de Escritorio AIO'
    ]

    useEffect( () => {
        const fetchData = async () => {
            try {
                const data = await getCertificates()
                const sorted = data.sort(
                    (a, b) => a.certificateNumber - b.certificateNumber
                )

                setCertificates(sorted)

            } catch ( error ) {
                setError("Error loading certificates")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    useEffect( () => {
        const loadPrefixes = async () => {
            const snap = await getDocs(collection(db, 'tag_counters'))
            const prefixes = snap.docs.map( d => d.id ).filter( id => id !== 'NO-APLICA')
            setTagPrefixes(prefixes)
        }
        loadPrefixes()
    }, [])

    useEffect(() => {
        const loadDevices = async () => {
            const data = await getDevices()
            setDevices(data)
        }
        loadDevices()
    }, [])

    // const filteredCertificates = useMemo(() => {
    //     if (activeFilter === 'ALL') return certificates

    //     if (activeFilter === 'OTROS') {
    //         return certificates.filter(c => {
    //             const tag = c.computer?.internalTag ?? ''
    //             const matchesOtros = !tagPrefixes.some(prefix => tag.startsWith(prefix))
    //             if (!activeSubFilter) return matchesOtros
    //             return matchesOtros && c.computer?.type?.name === activeSubFilter
    //         })
    //     }

    //     return certificates.filter( c => 
    //         (c.computer?.internalTag ?? '').startsWith(activeFilter)
            
    //     )

    // }, [certificates, activeFilter, tagPrefixes, activeSubFilter])

    const filteredCertificates = useMemo(() => {
        return certificates.filter( c => {
            const tag = c.computer?.internalTag ?? ''
            const deviceType = c.computer?.type?.name ?? ''

            const matchType = typeFilter === 'all' || c.type === typeFilter
            const matchSearch = searchText === '' || tag.toLowerCase().includes(searchText.toLocaleLowerCase())

            if ( !matchSearch ) return false
            if ( !matchType ) return false

            if ( activeFilter === 'ALL' ) return true

            if ( activeFilter === 'OTROS' ) {
                const matchesOtros = !tagPrefixes.some(prefix => tag.startsWith(prefix))

                if ( !matchesOtros ) return false

                if ( !activeSubFilter ) return !excludedDevices.includes(deviceType)
                
                return deviceType === activeSubFilter
            }

            return tag.startsWith( activeFilter )
        })
    }, [ certificates, searchText, activeFilter, tagPrefixes, activeSubFilter, typeFilter ])

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter)
        setActiveSubFilter(null) 
    }

    const otherDevices = useMemo(
        () =>
            devices.filter( d => !excludedDevices.includes(d.name) ),
            [devices]
    )

    return {
        certificates: filteredCertificates, setCertificates,
        error, loading,

        devices, otherDevices,
        searchText, setSearchText,

        tagPrefixes, setTagPrefixes, 
        activeFilter, setActiveFilter,

        editingItem, setEditingItem,
        
        handleEdit,
        
        detailItem, setDetailItem, handleDetail,
        handleFilterChange,

        typeFilter, setTypeFilter,

        typeOptions, isTypeMenuOpen, setIsTypeMenuOpen,
        
        activeSubFilter, setActiveSubFilter
    }
}

