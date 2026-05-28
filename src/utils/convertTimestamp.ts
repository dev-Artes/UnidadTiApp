import type { Timestamp } from "firebase/firestore"


const MONTHS = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
const DAYS = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado']

const toDate = (timestamp: Timestamp): Date => timestamp.toDate()

const padZero = (n: number): string => n < 10 ? '0' + n : String(n)


export const fullDateNumber = ( timestamp: Timestamp ): string => {
    const date = toDate(timestamp)
    const dd = padZero(date.getDate())
    const mm = padZero(date.getMonth() + 1)
    const yyyy = date.getFullYear()
    return `${dd}/${mm}/${yyyy}`
}

export const dateToYear = (timestamp: Timestamp): number => toDate(timestamp).getFullYear()

export const monthOfYear = (timestamp: Timestamp): number => toDate(timestamp).getMonth() + 1

export const nameOfMonth = (timestamp: Timestamp): string => MONTHS[toDate(timestamp).getMonth()]

export const dayOfMonth = (timestamp: Timestamp): number => toDate(timestamp).getDate()

export const dayOfWeek = (timestamp: Timestamp): string => DAYS[toDate(timestamp).getDay()]

export const fullDateText = (timestamp: Timestamp): string => {
    const date = toDate(timestamp);
    const dayName = DAYS[date.getDay()];
    const day = date.getDate();
    const monthName = MONTHS[date.getMonth()];
    
    return `${dayName} ${day} de ${monthName}`;
}