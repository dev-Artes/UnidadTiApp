import {
    signInWithEmailAndPassword,
    signInWithPopup,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    type User as FirebaseUser
} from 'firebase/auth'
import { setDoc, doc, Timestamp } from 'firebase/firestore'
import { auth, googleProvider, db } from '../firebase/firebase-config'


const registerUser = async (email: string, password: string, name: string): Promise<FirebaseUser> => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)

        await setDoc(doc(db, 'users', user.uid), {
            name,
            email,
            created_at: Timestamp.now(),
        })

        return user
    } catch (error) {
        console.error('Error al registrar usuario:', error)
        throw error
    }
}

const loginWithEmail = async (email: string, password: string): Promise<FirebaseUser> => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        console.error('Error al iniciar sesión:', error)
        throw error
    }
}

const loginWithGoogle = async (): Promise<FirebaseUser> => {
    try {
        const { user } = await signInWithPopup(auth, googleProvider)
        await setDoc(doc(db, 'users', user.uid), {
            name: user.displayName,
            email: user.email,
            created_at: Timestamp.now(),
        }, { merge: true })

        return user
    } catch (error) {
        console.error('Error al iniciar sesión con Google:', error)
        throw error
    }
}

const logout = async (): Promise<void> => {
    try {
        await signOut(auth)
    } catch (error) {
        console.error('Error al cerrar sesión:', error)
        throw error
    }
}

const onAuthChange = (callback: (user: FirebaseUser | null) => void): () => void => {
    return onAuthStateChanged(auth, callback)
}

export { registerUser, loginWithEmail, loginWithGoogle, logout, onAuthChange }