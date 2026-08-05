import { doc, getDoc, getDocs, updateDoc, deleteDoc, collection, setDoc } from 'firebase/firestore'

import { db } from '../firebase/firebase-config'

import type { User, NewUser, Role, ActionBy } from '../types/entidades'

const addUser = async (user: NewUser): Promise<void> => {
  try {
    const docRef = doc(collection(db, 'users'))

    await setDoc(docRef, {
      id: docRef.id,
      ...user,
    })

  } catch (error) {
    console.error('Error creating user:', error)
    throw error
  }
}

const getUserById = async ( userId: string ): Promise<User | undefined> => {
  try {
    const userDoc = doc(db, 'users', userId)

    const snapshot = await getDoc(userDoc)

    if (snapshot.exists()) {
      return {
        id: snapshot.id,
        ...snapshot.data()
      } as User
    }

  } catch (error) {
    throw new Error(`User not found: ${error}`)
  }
}

const getUsers = async (): Promise<User[]> => {
  try {
    const snapshot = await getDocs(collection(db, 'users'))

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as User[]

  } catch (error) {
    console.error('Error getting users:', error)
    throw error
  }
}

const updateUser = async ( userId: string, updatedUser: Partial<NewUser> ): Promise<void> => {
  try {
    await updateDoc(
      doc(db, 'users', userId),
      updatedUser
    )

  } catch (error) {
    console.error(`Error updating user ${userId}:`, error)
    throw error
  }
}

const deleteUser = async ( userId: string ): Promise<void> => {
  try {
    await deleteDoc(doc(db, 'users', userId))
  } catch (error) {
    console.error(`Error deleting user ${userId}:`, error)
    throw error
  }
}

const updateUserRole = async (userId: string, role: Role, updatedBy: ActionBy): Promise<void> => {
  try {
    await updateDoc(doc(db, 'users', userId), { role, updated_by: updatedBy })
  } catch (error) {
    console.error(`Error updating role for user ${userId}:`, error)
    throw error
  }
}

const toggleUserActive = async (userId: string, active: boolean, updatedBy: ActionBy): Promise<void> => {
  try {
    await updateDoc(doc(db, 'users', userId), { active, updated_by: updatedBy })
  } catch (error) {
    console.error(`Error toggling active for user ${userId}:`, error)
    throw error
  }
}

export {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserById,
  updateUserRole,
  toggleUserActive
}