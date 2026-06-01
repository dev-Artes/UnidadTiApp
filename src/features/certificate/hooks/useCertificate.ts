import { useEffect, useMemo, useState } from "react"

import type { CertificateRecord, Device } from "../../../types/entidades"

import { getCertificates, getDevices } from "../../../services"
import { getDocs, collection } from 'firebase/firestore'
import { db } from "../../../firebase/firebase-config"

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

    const filteredCertificates = useMemo(() => {
        if (activeFilter === 'ALL') return certificates

        if (activeFilter === 'OTROS') {
            return certificates.filter(c => {
                const tag = c.computer?.internalTag ?? ''
                const matchesOtros = !tagPrefixes.some(prefix => tag.startsWith(prefix))
                if (!activeSubFilter) return matchesOtros
                return matchesOtros && c.computer?.type?.name === activeSubFilter
            })
        }

        return certificates.filter( c => 
            (c.computer?.internalTag ?? '').startsWith(activeFilter)
            
        )

    }, [certificates, activeFilter, tagPrefixes, activeSubFilter])


    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter)
        setActiveSubFilter(null) 
    }

    return {
        certificates: filteredCertificates,
        setCertificates,
        loading,
        error,

        devices,
        searchText,
        setSearchText,

        tagPrefixes,
        activeFilter,
        setTagPrefixes,
        setActiveFilter,

        setEditingItem,
        editingItem,
        handleEdit,
        
        setDetailItem,
        handleDetail,
        detailItem,
        handleFilterChange,
        
        activeSubFilter,
        setActiveSubFilter
    }
}

