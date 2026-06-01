import {
  doc, addDoc, getDoc, getDocs,
  updateDoc, deleteDoc, collection,
  Timestamp
} from 'firebase/firestore'

import { db } from '../firebase/firebase-config'
import type { ActionBy, Computer, Reassignment } from '../types/entidades'

const addComputer = async (computer: Omit<Computer, 'id'>): Promise<void> => {
  try {
    const docRef = await addDoc(collection(db, 'computers'), computer)
    console.log(`Computer created with id: ${docRef.id}`)
  } catch (error) {
    console.error('Error creating computer:', error)
    throw error
  }
}

const getComputerById = async (computerId: string): Promise<Computer | undefined> => {
  try {
    const computerDoc = doc(db, 'computers', computerId)
    const snapshot = await getDoc(computerDoc)
    if (snapshot.exists()) return { id: snapshot.id, ...snapshot.data() } as Computer
  } catch (error) {
    console.error('Error getting computer by id:', error)
    throw error
  }
}

const getComputers = async (): Promise<Computer[]> => {
  try {
    const snapshot = await getDocs(collection(db, 'computers'))
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Computer))
  } catch (error) {
    console.error('Error getting computers:', error)
    throw error
  }
}

const updateComputer = async (computerId: string, updatedComputer: Partial<Computer>): Promise<void> => {
  try {
    await updateDoc(doc(db, 'computers', computerId), updatedComputer)
  } catch (error) {
    console.error('Error updating computer:', error)
    throw error
  }
}

const deleteComputer = async (computerId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, 'computers', computerId))
  } catch (error) {
    console.error('Error deleting computer:', error)
    throw error
  }
}

const reassignComputer = async (
    computerId: string,
    newUserName: string,
    updatedBy: ActionBy
): Promise<void> => {
    try {
        const computer = await getComputerById(computerId)
        if (!computer) throw new Error(`Computer ${computerId} not found`)

        const newReassignment: Reassignment = {
            id: doc(collection(db, '_')).id,
            previousUser: computer.assignedTo ?? 'Sin asignaciones previas',
            updated_at: Timestamp.now(),
            updated_by: updatedBy
        }

        await updateComputer(computerId, {
            assignedTo: newUserName,
            reassignments: [...(computer.reassignments ?? []), newReassignment]
        })
    } catch (error) {
        console.error('Error reassigning computer:', error)
        throw error
    }
}

export { addComputer, getComputers, updateComputer, deleteComputer, getComputerById, reassignComputer }