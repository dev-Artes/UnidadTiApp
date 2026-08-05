import { useEffect, useState } from 'react'
import {  getSoftware, updateSoftware, deleteSoftware } from '../../../services/'
import type { Software } from '../../../types/entidades'
import { useAuth } from '../../../hooks/useAut'

export const useSoftware = () => {
    const { user } = useAuth()
    const [softwareList, setSoftwareList] = useState<Software[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const updatedBy = {
        uid: user?.uid ?? '',
        name: user?.displayName ?? '',
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSoftware()
                setSoftwareList(data.filter(s => s.active))
            } catch {
                setError('Error loading software')
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const handleToggleActive = async (software: Software) => {
        await updateSoftware(software.id, { active: !software.active, updated_by: updatedBy })
        setSoftwareList(prev =>
            prev.map(s => s.id === software.id ? { ...s, active: !s.active, updated_by: updatedBy } : s)
        )
    }

    const handleDelete = async (softwareId: string) => {
        await deleteSoftware(softwareId)
        setSoftwareList(prev => prev.filter(s => s.id !== softwareId))
    }

    return {
        softwareList,
        loading,
        error,
        handleToggleActive,
        handleDelete,
    }
}