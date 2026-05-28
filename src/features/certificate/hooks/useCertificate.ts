import { useEffect, useMemo, useState } from "react"

import type { CertificateRecord } from "../../../types/entidades"

import { getCertificates } from "../../../services"

export const useCertificate = () => {
    const [ certificates, setCertificates ] = useState<CertificateRecord[]>([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState<string | null>(null)
    
    const [ searchText, setSearchText ] = useState("")
    const [ tagPrefixes, setTagPrefixes ] = useState<string[]>([])

    const [editingItem, setEditingItem] = useState<CertificateRecord | null>(null)
    const [detailItem, setDetailItem] = useState<CertificateRecord | null>(null)

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

    const filteredCertificates = useMemo(()=>{
        return certificates.filter( (certificate) => {
            const search = searchText.toLowerCase()
            const tag = certificate.computer?.internalTag?.toLowerCase() || ""
            const assigned = certificate.computer?.assignedTo?.toLowerCase() || ""

            const matchesText = tag.includes(search) || assigned.includes(search)

            const matchesPrefix = tagPrefixes.length === 0
                ? true
                : tagPrefixes.some(prefix =>
                    tag.startsWith(prefix.toLowerCase())
                )

            return matchesText && matchesPrefix
        })
    }, [certificates, searchText, tagPrefixes])

    return {
        certificates: filteredCertificates,
        setCertificates,
        loading,
        error,

        searchText,
        setSearchText,

        tagPrefixes,
        setTagPrefixes,

        setEditingItem,
        editingItem,
        handleEdit,
        
        setDetailItem,
        handleDetail,
        detailItem,
    }
}

