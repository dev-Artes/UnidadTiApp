import { doc, getDoc, runTransaction } from 'firebase/firestore'
import { db } from '../firebase/firebase-config'
import type { TagCounterType } from '../types/entidades'

export const getNextTag = async (type: TagCounterType): Promise<string> => {
  const ref = doc(db, 'tag_counters', type)

  return runTransaction(db, async (transaction) => {
    const snap = await transaction.get(ref)
    const isSpecial = type === 'PC-LE'
    const isThreeDigit = type === 'PCMACF' || type === 'PCMACQ'

    if (snap.exists() && snap.data().isStatic) return '-'

    if (!snap.exists()) {
      transaction.set(ref, {
        prefix: isSpecial ? type : `${type}-`,
        lastNumber: 1
      })
      if (isSpecial) return `${type}0001`
      if (isThreeDigit) return `${type}-001`
      return `${type}-0001`
    }

    const next = (snap.data().lastNumber as number) + 1
    transaction.update(ref, { lastNumber: next })

    if (isSpecial) return `${type}${String(next).padStart(4, '0')}`
    if (isThreeDigit) return `${type}-${String(next).padStart(3, '0')}`
    return `${type}-${String(next).padStart(4, '0')}`
  })
}

export const peekNextTag = async (type: TagCounterType): Promise<string> => {
    const counterRef = doc(db, 'tag_counters', type)
    const snap = await getDoc(counterRef)
    
    const isSpecial = type === 'PC-LE'
    const isThreeDigit = type === 'PCMACF' || type === 'PCMACQ'

    if (!snap.exists()) {
      if (isSpecial) return `${type}0001`
      if (isThreeDigit) return `${type}-001`
      return `${type}-0001`
    }
    
    const current = snap.data().lastNumber as number
    
    if (isSpecial) return `${type}${String(current + 1).padStart(4, '0')}`
    if (isThreeDigit) return `${type}-${String(current + 1).padStart(3, '0')}`
    return `${type}-${String(current + 1).padStart(4, '0')}`
}