import { useState } from "react"
import { checkUserExists } from "../../../utils"
import { addUser } from "../../../services"


export const useUserForm = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ loading, setLoading ] = useState( false )

    const resetForm = () => {
        setName('')
        setEmail('')
    }
    const currentUser = {
        uid: 'Vfog3tRIC4QWPfHSRAGR',
        name: 'Mario Labbé',
    }

    const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()

        if ( !name.trim() || !email.trim()) {
            alert('Todos los campos son obligatorios') 
            return
        }

        try {
            setLoading(true)
            const exists = await checkUserExists({ email })
            
            if ( exists ) {
                throw new Error('User already exists')
            } 
            
            await addUser({
                name: name,
                email: email,
                created_by: currentUser
            })
            
            resetForm()
        } catch ( error ) {
            console.error(error )
            alert('Hubo un error creando el usuario, intente nuevamente')
        } finally {
          setLoading(false)
        }
    }

    return {
        handleSubmit,
        name,
        email,
        setName,
        loading,
        setEmail,
    }
}