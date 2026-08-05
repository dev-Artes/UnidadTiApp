import {
    signInWithEmailAndPassword,
    signInWithPopup,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
    type User as FirebaseUser,
} from 'firebase/auth'
import { setDoc, doc, Timestamp, getDoc, getDocs, collection } from 'firebase/firestore'
import { auth, googleProvider, db } from '../firebase/firebase-config'
import type { Role } from '../types/entidades'


const registerUser = async ( email: string, password: string, name: string ): Promise<FirebaseUser> => {
    try {
        const { user } = await createUserWithEmailAndPassword( auth, email, password )

        await updateProfile(user, { displayName: name })

        await setDoc(doc(db, 'users', user.uid), {
            name,
            email,
            provider: 'local',
            role: 'analista',
            active: true,
            created_at: Timestamp.now(),
            last_login: Timestamp.now(),
        })

        return user
    } catch (error) {
        console.error('Error al registrar usuario:', error)
        throw error
    }
}

const createUserByAdmin = async (
    email: string,
    name: string,
    role: Role,
    createdBy: { uid: string; name: string }
): Promise<FirebaseUser> => {
    try {
        const tempPassword = crypto.randomUUID()

        const { user } = await createUserWithEmailAndPassword(auth, email, tempPassword)

        await updateProfile(user, { displayName: name })

        await setDoc(doc(db, 'users', user.uid), {
            name,
            email,
            provider: 'local',
            role,
            active: true,
            created_by: createdBy,
            created_at: Timestamp.now(),
        })

        await sendPasswordResetEmail(auth, email)

        return user
    } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
            const snapshot = await getDocs(collection(db, 'users'))
            const existing = snapshot.docs.find(d => d.data().email === email)

            if (existing) {
                await sendPasswordResetEmail(auth, email)
                return { uid: existing.id, email, displayName: name } as FirebaseUser
            }

            throw new Error('El email ya está registrado pero no se encontró el perfil.')
        }

        console.error('Error al crear usuario por admin:', error)
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

        const userRef = doc(db, 'users', user.uid)
        const userSnap = await getDoc(userRef)

        if(!userSnap.exists()) {
            await setDoc(userRef, {
                name: user.displayName,
                email: user.email,
                provider: 'google',
                role: 'analista',
                active: true,
                created_at: Timestamp.now(),
                last_login: Timestamp.now(),
            })
        } else {
            await setDoc(userRef, { last_login: Timestamp.now() }, { merge: true })
        }

        await setDoc(doc(db, 'users', user.uid), {
            name: user.displayName,
            email: user.email,
            provider: 'google',
            last_login: Timestamp.now(),
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

const resetPassword = async (email: string): Promise<void> => {
    try {
        await sendPasswordResetEmail(auth, email)
    } catch (error) {
        console.error('Error al enviar email de recuperación:', error)
        throw error
    }
}

export { registerUser, createUserByAdmin, loginWithEmail, loginWithGoogle, logout, onAuthChange, resetPassword }