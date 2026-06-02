import React, { useState } from "react"
import { addSoftware } from "../../../services"
import { Timestamp } from "firebase/firestore"
import { useNavigateTo } from "../../../hooks/useNavigateTo"


export const useSoftwareForm = () => {
    const { toAllSoftware } = useNavigateTo()
    const [ software , setSoftware ] = useState('')
    const [ loading, setLoading ] = useState(false)

    const currentUser = {
        uid: 'Vfog3tRIC4QWPfHSRAGR',
        name: 'Mario Labbé',
    }

    const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()

        if ( !software.trim() ) {
            alert('El nombre es obligatorio')
            return
        }

        try {
            setLoading(true)
            await addSoftware({
                name: software,
                active: true,
                created_by: currentUser,
                created_at: Timestamp.now()
            })
            setSoftware('')
            toAllSoftware()
        } catch ( error ) {
            console.error( error )
            alert('Error en la creación')
        } finally {
            setLoading(false)
        }
    }

    return {
        loading, setLoading, setSoftware, software, handleSubmit
    }
}