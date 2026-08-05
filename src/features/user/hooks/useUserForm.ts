import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUserByAdmin } from "../../../services"
import { useAuth } from "../../../hooks/useAut"
import type { Role } from "../../../types/entidades"


export const useUserForm = () => {
    const navigate = useNavigate()
    const { user, logout } = useAuth()

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ role, setRole ] = useState<Role>('analista')
    const [ loading, setLoading ] = useState( false )

    const resetForm = () => {
        setName('')
        setEmail('')
        setRole('analista')
    }

    const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()

        if ( !name.trim() || !email.trim()) {
            alert('Todos los campos son obligatorios') 
            return
        }

        try {
            setLoading(true)

            await createUserByAdmin(email, name, role, {
                uid: user?.uid ?? '',
                name: user?.displayName ?? '',
            })
            
            resetForm()
            await logout()
            navigate('/login', { state: { message: 'Usuario creado correctamente. Inicie sesión nuevamente.' } })
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
        role,
        setName,
        setEmail,
        setRole,
        loading,
    }
}
