import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore'

import { db } from '../firebase/firebase-config'

import type { Device, NewDevice } from '../types/entidades'

const addDevice = async ( Device: NewDevice ): Promise<void> => {
  try {
    const docRef = doc(collection(db, 'devices'))

    await setDoc(docRef, {
      id:docRef.id,
      ...Device,
    })

  } catch (error) {
    console.error('Error creating Device:', error)
    throw error
  }
}

const getDevicesById = async (DeviceId: string): Promise<Device | undefined> => {
  try {
    const DeviceDoc = doc(db, 'devices', DeviceId)
    const snapshot = await getDoc(DeviceDoc)
    if (snapshot.exists()) return { id: snapshot.id, ...snapshot.data() } as Device
  } catch (error) {
    console.error('Error getting Device by id:', error)
    throw error
  }
}

const getDevices = async (): Promise<Device[]> => {
  try {
    const snapshot = await getDocs(collection(db, 'devices'))
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Device))
  } catch (error) {
    console.error('Error getting Devices:', error)
    throw error
  }
}

const updateDevice = async (DeviceId: string, updatedDevice: Partial<NewDevice>): Promise<void> => {
  try {
    await updateDoc(doc(db, 'devices', DeviceId), updatedDevice)
  } catch (error) {
    console.error('Error updating Device:', error)
    throw error
  }
}

const deleteDevice = async (DeviceId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, 'devices', DeviceId))
  } catch (error) {
    console.error('Error deleting Device:', error)
    throw error
  }
}

const migrateDevice = async (device: Device): Promise<void> => {
    try {
        await setDoc(doc(db, 'devices', device.id), device)  // 👈 mismo patrón
    } catch (error) {
        console.error('Error migrating device:', error)
        throw error
    }
}

export { addDevice, getDevices, updateDevice, deleteDevice, getDevicesById, migrateDevice }