import {
	collection,
	doc,
	getDoc,
	getDocs,
	setDoc,
	updateDoc,
	Timestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import type {
	EquipmentAvailability,
	EquipmentStatus,
	ActionBy,
} from "../types/entidades";

const COLLECTION = "equipment_availability";

const getAvailability = async (
	internalTag: string,
): Promise<EquipmentAvailability | null> => {
	try {
		const snap = await getDoc(doc(db, COLLECTION, internalTag));
		if (snap.exists()) {
			return snap.data() as EquipmentAvailability;
		}
		return null;
	} catch (error) {
		console.error("Error getting availability:", error);
		return null;
	}
};

const getAllAvailability = async (): Promise<
	Map<string, EquipmentStatus>
> => {
	try {
		const snapshot = await getDocs(collection(db, COLLECTION));
		const map = new Map<string, EquipmentStatus>();
		for (const docSnap of snapshot.docs) {
			const data = docSnap.data() as EquipmentAvailability;
			map.set(data.internalTag, data.status);
		}
		return map;
	} catch (error) {
		console.error("Error getting all availability:", error);
		return new Map();
	}
};

const setAvailability = async (
	internalTag: string,
	status: EquipmentStatus,
	updatedBy: ActionBy,
): Promise<void> => {
	try {
		const ref = doc(db, COLLECTION, internalTag);
		const snap = await getDoc(ref);

		const data = {
			internalTag,
			status,
			updatedAt: Timestamp.now(),
			updatedBy,
		};

		if (snap.exists()) {
			await updateDoc(ref, data);
		} else {
			await setDoc(ref, data);
		}
	} catch (error) {
		console.error("Error setting availability:", error);
		throw error;
	}
};

export { getAvailability, getAllAvailability, setAvailability };
