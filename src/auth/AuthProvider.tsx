import { useEffect, useState } from 'react'
import type { User as FirebaseUser } from "firebase/auth";
import { AuthContext, type AuthContextType } from './AuthContext'
import {
    loginWithEmail,
    loginWithGoogle,
    registerUser,
    logout,
    onAuthChange,
    resetPassword
} from '../services/auth-service'
import { getUserById } from '../services/users-service'
import type { Role } from '../types/entidades'

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<FirebaseUser | null>(null)
    const [userRole, setUserRole] = useState<Role | null>(null)
    const [userActive, setUserActive] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const unsubscribe = onAuthChange(async (firebaseUser) => {
            setUser(firebaseUser)

            if (firebaseUser) {
                try {
                    const userProfile = await getUserById(firebaseUser.uid)
                    if (userProfile) {
                        setUserRole(userProfile.role ?? 'analista')
                        setUserActive(userProfile.active ?? true)

                        if (userProfile.active === false) {
                            await logout()
                            setUser(null)
                            setUserRole(null)
                            setUserActive(true)
                        }
                    } else {
                        setUserRole('analista')
                        setUserActive(true)
                    }
                } catch {
                    setUserRole('analista')
                    setUserActive(true)
                }
            } else {
                setUserRole(null)
                setUserActive(true)
            }

            setLoading(false)
        })

        return unsubscribe
    }, [])

    const authValue: AuthContextType = {
        user,
        userRole,
        userActive,
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
        resetPassword: async (email) => {
            await resetPassword(email)
        },
        logout: async () => {
            setLoading(true)
            setUserRole(null)
            setUserActive(true)
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
