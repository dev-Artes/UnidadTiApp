import {
    signInWithEmailAndPassword,
    signInWithPopup,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    type User as FirebaseUser,
} from 'firebase/auth'
import { setDoc, doc, Timestamp, getDoc } from 'firebase/firestore'
import { auth, googleProvider, db } from '../firebase/firebase-config'


const registerUser = async ( email: string, password: string, name: string ): Promise<FirebaseUser> => {
    try {
        const { user } = await createUserWithEmailAndPassword( auth, email, password )

        await updateProfile(user, { displayName: name })

        await setDoc(doc(db, 'users', user.uid), {
            name,
            email,
            provider: 'local',
            created_at: Timestamp.now(),
            last_login: Timestamp.now(),
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

        const userRef = doc(db, 'users', user.uid)
        const userSnap = await getDoc(userRef)

        if(!userSnap.exists()) {
            await setDoc(userRef, {
                name: user.displayName,
                email: user.email,
                provider: 'google',
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
            created_at: Timestamp.now(),
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

export { registerUser, loginWithEmail, loginWithGoogle, logout, onAuthChange }