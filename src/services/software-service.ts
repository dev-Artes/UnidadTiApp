import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase-config'
import type { Software, NewSoftware } from '../types/entidades'

const addSoftware = async (software: NewSoftware): Promise<void> => {
    try {
        const docRef = doc(collection(db, 'software'))
        await setDoc(docRef, {
            id: docRef.id,
            ...software,
        })
    } catch (error) {
        console.error('Error creating software:', error)
        throw error
    }
}

const getSoftware = async (): Promise<Software[]> => {
    try {
        const snapshot = await getDocs(collection(db, 'software'))
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Software))
    } catch (error) {
        console.error('Error getting software:', error)
        throw error
    }
}

const updateSoftware = async (softwareId: string, updated: Partial<Software>): Promise<void> => {
    try {
        await updateDoc(doc(db, 'software', softwareId), updated)
    } catch (error) {
        console.error('Error updating software:', error)
        throw error
    }
}

const deleteSoftware = async (softwareId: string): Promise<void> => {
    try {
        await deleteDoc(doc(db, 'software', softwareId))
    } catch (error) {
        console.error('Error deleting software:', error)
        throw error
    }
}

export { addSoftware, getSoftware, updateSoftware, deleteSoftware }