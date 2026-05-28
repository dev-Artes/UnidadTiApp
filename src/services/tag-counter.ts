import { doc, runTransaction } from 'firebase/firestore'
import { db } from '../firebase/firebase-config'
import type { TagCounterType } from '../types/entidades'

export const getNextTag = async (type: TagCounterType): Promise<string> => {
  const ref = doc(db, 'tag_counters', type)

  return runTransaction(db, async (transaction) => {
    const snap = await transaction.get(ref)
    const isSpecial = type === 'PC-LE'

    if (snap.exists() && snap.data().isStatic) return '-'

    if (!snap.exists()) {
      transaction.set(ref, {
        prefix: isSpecial ? type : `${type}-`,
        lastNumber: 1
      })
      return isSpecial ? `${type}0001` : `${type}-0001`
    }

    const next = (snap.data().lastNumber as number) + 1
    transaction.update(ref, { lastNumber: next })

    return isSpecial
      ? `${type}${String(next).padStart(4, '0')}`
      : `${type}-${String(next).padStart(4, '0')}`
  })
}

