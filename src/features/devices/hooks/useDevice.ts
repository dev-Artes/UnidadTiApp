import { useEffect, useState } from "react"
import type { Device } from "../../../types/entidades"
import { getDevices, deleteDevice } from "../../../services"


export const useDevice = () => {
    const [ devices, setDevices ] = useState<Device[]>([])
    const [ error, setError ] = useState<string | null>(null)
    const [ loading , setLoading ] = useState(true)

    useEffect( () => {
        const fetchData = async () => {
            try {
                const data = await getDevices()
                const dataSorted = data.sort((a, b) => a.name.localeCompare(b.name))
                setDevices(dataSorted)

            } catch ( error ) {
                setError( 'Error loading brands' )
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const deleteDeviceById = async ( id: string ) => {
        await deleteDevice(id)
        setDevices( prev => prev.filter( d=> d.id !== id) )
    }

    return {
        devices, error, loading, deleteDeviceById
    }

}