import { useState } from "react"

import { addDevice } from "../../../services"

import { Timestamp } from "firebase/firestore"
import { useNavigateTo } from "../../../hooks/useNavigateTo"


export const useDeviceForm = () => {
    const { toAllDevices } = useNavigateTo()
    const [ device, setDevice ] = useState('')
    const [ loading, setLoading ] = useState(false)

    const currentUser = {
        uid: 'Vfog3tRIC4QWPfHSRAGR',
        name: 'Mario Labbé',
    }

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
                created_by: currentUser,
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