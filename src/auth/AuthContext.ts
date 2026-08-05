import { createContext } from 'react'
import type { User as FirebaseUser } from 'firebase/auth'
import type { Role } from '../types/entidades'

export interface AuthContextType {
    user: FirebaseUser | null
    userRole: Role | null
    userActive: boolean
    loading: boolean
    loginWithEmail: (email: string, password: string) => Promise<void>
    loginWithGoogle: () => Promise<void>
    registerUser: (email: string, password: string, name: string) => Promise<void>
    resetPassword: (email: string) => Promise<void>
    logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | null>(null)

