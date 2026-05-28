import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore'

import { db } from '../firebase/firebase-config'

import type { Brand, NewBrand } from '../types/entidades'

const addBrand = async ( brand: NewBrand ): Promise<void> => {

  try {

    const docRef = doc(collection(db, 'brands'))

    await setDoc(docRef, {
      id: docRef.id,
      ...brand,
    })

  } catch (error) {
    console.error('Error creating brand:', error)
    throw error
  }
}

const getBrandById = async (brandId: string): Promise<Brand | undefined> => {
  try {
      const brandDoc = doc(db, 'brands', brandId)
      const snapshot = await getDoc(brandDoc)
      if( snapshot.exists() ) return { id: snapshot.id, ...snapshot.data() } as Brand
  } catch ( error ) {
      console.error('Error getting brand: ', error)
      throw error
  }
}

const getBrands = async (): Promise<Brand[]> => {
  try {
      const snapshot = await getDocs(collection(db, 'brands'))
      
      return snapshot.docs.map(
        doc => ({ id: doc.id, ...doc.data() } )) as Brand[]
  } catch ( error ) {
      console.error('Error getting brands: ', error)
      throw error
  }
}

const updateBrand = async (brandId: string, updatedBrand: Partial<NewBrand>): Promise<void> => {
  try {
    await updateDoc(doc(db, 'brands', brandId), updatedBrand)
  } catch (error) {
    console.error('Error updating brand:', error)
    throw error
  }
}

const deleteBrand = async (brandId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, 'brands', brandId))
  } catch (error) {
    console.error('Error deleting brand:', error)
    throw error
  }
}

export { addBrand, getBrands, updateBrand, deleteBrand, getBrandById }