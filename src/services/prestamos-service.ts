import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import type { NewPrestamo, Prestamo, PrestamoStatus } from "../types/entidades";

const addPrestamo = async (prestamo: NewPrestamo): Promise<void> => {
	try {
		const docRef = doc(collection(db, "loans"));
		await setDoc(docRef, {
			id: docRef.id,
			...prestamo,
		});
	} catch (error) {
		console.error("Error creating prestamo:", error);
		throw error;
	}
};

const getPrestamos = async (): Promise<Prestamo[]> => {
	try {
		const snapshot = await getDocs(collection(db, "loans"));
		return snapshot.docs.map(
			(doc) => ({ id: doc.id, ...doc.data() }) as Prestamo,
		);
	} catch (error) {
		console.error("Error getting prestamos: ", error);
		throw error;
	}
};

const deletePrestamo = async (prestamoId: string): Promise<void> => {
	try {
		await deleteDoc(doc(db, "loans", prestamoId));
	} catch (error) {
		console.error("Error deleting prestamo:", error);
		throw error;
	}
};

const updatePrestamoStatus = async (
	prestamoId: string,
	status: PrestamoStatus,
	extra?: { loanDate?: Date; returnDate?: Date },
): Promise<void> => {
	try {
		const updateData: Record<string, unknown> = { status };
		if (extra?.loanDate) updateData.loanDate = extra.loanDate;
		if (extra?.returnDate) updateData.returnDate = extra.returnDate;
		await updateDoc(doc(db, "loans", prestamoId), updateData);
	} catch (error) {
		console.error("Error updating prestamo status:", error);
		throw error;
	}
};

export { addPrestamo, deletePrestamo, getPrestamos, updatePrestamoStatus };
