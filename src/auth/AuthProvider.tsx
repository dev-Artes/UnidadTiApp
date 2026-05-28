import { useEffect, useState } from 'react'
import type { User as FirebaseUser } from "firebase/auth";
import { AuthContext, type AuthContextType } from './AuthContext'
import {
    loginWithEmail,
    loginWithGoogle,
    registerUser,
    logout,
    onAuthChange
} from '../services/auth-service'  // 👈 todo viene del service, el provider solo orquesta

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<FirebaseUser | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const unsubscribe = onAuthChange((currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const authValue: AuthContextType = {
        user,
        loading,
        loginWithEmail: async (email, password) => {
            setLoading(true)
            await loginWithEmail(email, password)
        },
        loginWithGoogle: async () => {
            setLoading(true)
            await loginWithGoogle()
        },
        registerUser: async (email, password, name) => {
            setLoading(true)
            await registerUser(email, password, name)
        },
        logout: async () => {
            setLoading(true)
            await logout()
        },
    }

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider