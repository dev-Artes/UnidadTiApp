import { useEffect, useState } from "react"
import { getUsers, updateUserRole, toggleUserActive  } from "../../../services"
import type { User, Role } from "../../../types/entidades"
import { useAuth } from "../../../hooks/useAut"

export const useUser = () => {
    const { user } = useAuth()
    const [ users, setUsers ] = useState<User[]>( [] )
    const [ error, setError ] = useState<string | null>(null)
    const [ loading, setLoading ] = useState( true )

    const updatedBy = {
        uid: user?.uid ?? '',
        name: user?.displayName ?? '',
    }

    useEffect( () => {
        const fetchData = async () => {
            try {
                const data = await getUsers()
                const dataSorted = data.sort((a, b) => a.name.localeCompare(b.name))
                setUsers(dataSorted)
            } catch ( error ) {
                setError('Error loading users')
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const deleteUserById = async (id: string) => {
        await toggleUserActive(id, false, updatedBy)
        setUsers(prev => prev.map(u => u.id === id ? { ...u, active: false, updated_by: updatedBy } : u))
    }

    const changeUserRole = async (id: string, role: Role) => {
        await updateUserRole(id, role, updatedBy)
        setUsers(prev => prev.map(u => u.id === id ? { ...u, role, updated_by: updatedBy } : u))
    }

    const toggleActive = async (id: string, active: boolean) => {
        await toggleUserActive(id, active, updatedBy)
        setUsers(prev => prev.map(u => u.id === id ? { ...u, active, updated_by: updatedBy } : u))
    }

    return {
        users,
        error,
        loading,
        deleteUserById,
        changeUserRole,
        toggleActive,
    }
}