import { useState } from "react"

import { addDevice } from "../../../services"

import { Timestamp } from "firebase/firestore"
import { useNavigateTo } from "../../../hooks/useNavigateTo"
import { useAuth } from "../../../hooks/useAut"


export const useDeviceForm = () => {
    const { toAllDevices } = useNavigateTo()
    const { user } = useAuth()
    const [ device, setDevice ] = useState('')
    const [ loading, setLoading ] = useState(false)

    const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        
        if (!device.trim()) {
            alert('El nombre de la marca es obligatorio')    
            return 
        }
        
        try {
            setLoading(true)
            await addDevice({ 
                name: device,
                created_by: {
                    uid: user?.uid ?? '',
                    name: user?.displayName ?? '',
                },
                created_at: Timestamp.now()
            })

            setDevice('')
            toAllDevices()
        } catch ( error ) {
            console.error(`Error creando marca: ${error}`)
            alert('Hubo un error creando la marca, intente nuevamente')
        } finally {
            setLoading(false)
        }
    }
    return {
        loading, setDevice, handleSubmit, device
    }
}