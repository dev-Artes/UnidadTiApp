import type { Timestamp } from "firebase/firestore"

export interface User {
    id: string
    name: string
    email: string
    created_by: ActionBy
}

export type NewUser = Omit<User, 'id'>

export interface Brand {
    id: string
    name: string
    created_at: Timestamp
    created_by: ActionBy
}

export type CheckUserExistsPayload = {
  email: string
}

export type NewBrand = Omit<Brand, 'id'>

export interface SoftwareItem {
    name: string
}

export interface Device {
    id: string
    name: string
    created_at: Timestamp
    created_by: ActionBy
}

export type NewDevice= Omit<Device, 'id'>

export interface ActionBy {
    uid: string
    name: string
}

export interface Reassignment {
    id: string
    previousUser: string
    updated_at: Timestamp
    updated_by: {
        uid: string
        name: string
    }
}

export interface Computer {
    id?: string
    brand: Brand
    model: string
    serialNumber: string
    internalTag: string
    type: Device
    assignedTo: string
    reassignments?: Reassignment[]
    created_at: Timestamp
    created_by: ActionBy
}

export interface ComputerEmbedded {
    brand: Brand
    model: string
    serialNumber: string
    internalTag: string
    type: Device
    assignedTo: string
}

export interface Certificate {
    id?: string
    certificateNumber: number
    observations: string
    computer: Computer
    software?: SoftwareItem[]  
    created_by: ActionBy
    created_at: Timestamp
}

export type CertificateRecord = Certificate & { id: string }

export type RealTagCounterType =
  | 'PC-LE'
  | 'PCART'
  | 'PCISUCH'
  | 'PCMAC'
  | 'PCMAPA'
  | 'PCTNCH'

export type SpecialTagCounterType = 'NO APLICA'

export type TagCounterType = RealTagCounterType | SpecialTagCounterType

export interface TagCounter {
    id: RealTagCounterType 
    prefix: string
    lastNumber: number
    isStatic?: boolean
}

export interface Software {
    id: string
    name: string
    active: boolean

    created_at: Timestamp

    created_by: ActionBy
}

export interface SoftwareItem {
    id: string
    name: string
}

export type NewSoftware = Omit<Software, 'id'>