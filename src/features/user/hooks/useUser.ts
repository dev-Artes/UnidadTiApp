import { useEffect, useState } from "react"
import { getUsers, deleteUser  } from "../../../services"
import type { User } from "../../../types/entidades"

export const useUser = () => {
    const [ users, setUsers ] = useState<User[]>( [] )
    const [ error, setError ] = useState<string | null>(null)
    const [ loading, setLoading ] = useState( true )

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
        await deleteUser(id)
        setUsers(prev => prev.filter(u => u.id !== id))
    }

    return {
        users,
        error,
        loading,
        deleteUserById,
    }
}