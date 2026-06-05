import {
  runTransaction, addDoc, collection, deleteDoc,
  doc, getDoc, getDocs, setDoc, updateDoc
} from 'firebase/firestore'
import { db } from '../firebase/firebase-config'
import type { Certificate, CertificateRecord } from '../types/entidades'

const getCertificateNumber = async (): Promise<number> => {
  const counterRef = doc(db, 'certificates', '_counter')

  return runTransaction(db, async (transaction) => {
    const snap = await transaction.get(counterRef)

    if (!snap.exists()) {
      transaction.set(counterRef, { certificateNumber: 1 })
      return 1
    }

    const newNumber = (snap.data().certificateNumber as number) + 1
    transaction.update(counterRef, { certificateNumber: newNumber })
    return newNumber
  })
}

const getLastCertificateNumber = async (): Promise<number> => {
  try {
    const counterDoc = doc(db, 'certificates', '_counter')
    const snapshot = await getDoc(counterDoc)

    if (snapshot.exists()) {
      return (snapshot.data().certificateNumber as number) + 1
    }

    await setDoc(counterDoc, { certificateNumber: 0 })
    return 0
  } catch (error) {
    console.error('Error getting certificate counter:', error)
    throw error
  }
}

const migrateCertificate = async (certificate: Certificate): Promise<void> => {
  try {
    const { id, ...rest } = certificate
    const docRef = doc(collection(db, 'certificates'))
    await setDoc(docRef, {
        id: docRef.id,
        ...rest,
    })
  } catch (error) {
    console.error('Error migrating certificate:', error)
    throw error
  }
}


const addCertificate = async (certificate: Omit<Certificate, 'id' | 'certificateNumber'>): Promise<number> => {
  try {
    const certificateNumber = await getCertificateNumber()
    const newCertificate = { ...certificate, certificateNumber }
    const docRef = await addDoc(collection(db, 'certificates'), newCertificate)

    if (!docRef) throw new Error('Failed to create certificate')
    return certificateNumber
  } catch (error) {
    console.error('Error adding certificate:', error)
    throw error
  }
}

const getCertificates = async (): Promise<CertificateRecord[]> => {
  try {
    const snapshot = await getDocs(collection(db, 'certificates'))
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CertificateRecord))
  } catch (error) {
    console.error('Error getting certificates:', error)
    throw error
  }
}

const getCertificateById = async (certificateId: string): Promise<Certificate | undefined> => {
  try {
    const certDoc = doc(db, 'certificates', certificateId)
    const snapshot = await getDoc(certDoc)
    if (snapshot.exists()) return { id: snapshot.id, ...snapshot.data() } as Certificate
  } catch (error) {
    console.error('Error getting certificate by id:', error)
    throw error
  }
}

const updateCertificate = async (certificateId: string, updatedCertificate: Partial<Certificate>): Promise<void> => {
  try {
    await updateDoc(doc(db, 'certificates', certificateId), updatedCertificate)
  } catch (error) {
    console.error('Error updating certificate:', error)
    throw error
  }
}

const deleteCertificate = async (certificateId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, 'certificates', certificateId))
  } catch (error) {
    console.error('Error deleting certificate:', error)
    throw error
  }
}

export {
  addCertificate, getCertificates, deleteCertificate,
  updateCertificate, getCertificateById, migrateCertificate,
  getCertificateNumber, getLastCertificateNumber
}