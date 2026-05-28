import { createContext } from 'react'
import type { User as FirebaseUser } from 'firebase/auth'

export interface AuthContextType {
    user: FirebaseUser | null
    loading: boolean
    loginWithEmail: (email: string, password: string) => Promise<void>
    loginWithGoogle: () => Promise<void>
    registerUser: (email: string, password: string, name: string) => Promise<void>
    logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | null>(null)