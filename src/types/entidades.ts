import type { Timestamp } from "firebase/firestore";

export type Role = "admin" | "jefe_ti" | "analista";

export interface User {
	id: string;
	name: string;
	email: string;
	role: Role;
	active: boolean;
	created_by: ActionBy;
	updated_by?: ActionBy;
}

export type NewUser = Omit<User, "id">;

export interface Brand {
	id: string;
	name: string;
	created_at: Timestamp;
	created_by: ActionBy;
	updated_by?: ActionBy;
}

export type CheckUserExistsPayload = {
	email: string;
};

export type NewBrand = Omit<Brand, "id">;

export interface Device {
	id: string;
	name: string;
	created_at: Timestamp;
	created_by: ActionBy;
	updated_by?: ActionBy;
}

export type NewDevice = Omit<Device, "id">;

export interface ActionBy {
	uid: string;
	name: string;
}

export interface Reassignment {
	id: string;
	previousUser: string;
	updated_at: Timestamp;
	updated_by: {
		uid: string;
		name: string;
	};
}

export interface Computer {
	id?: string;
	brand: Brand;
	model: string;
	serialNumber: string;
	internalTag: string;
	type: Device;
	assignedTo: string;
	registrationType: "prestamo" | "entrega" | "reasignacion";
	reassignments?: Reassignment[];
	created_at: Timestamp;
	created_by: ActionBy;
}

export interface ComputerEmbedded {
	brand: Brand;
	model: string;
	serialNumber: string;
	internalTag: string;
	type: Device;
	assignedTo: string;
	registrationType: "prestamo" | "entrega" | "reasignacion";
}

export type CertificateType = "entrega" | "reasignacion";

export interface Certificate {
	id?: string;
	certificateNumber: number;
	observations: string;
	computer: Computer;
	software?: SoftwareItem[];
	type?: CertificateType;
	created_by: ActionBy;
	created_at: Timestamp;
}

export type CertificateRecord = Certificate & { id: string };

export type RealTagCounterType =
	| "PCART"
	| "PC-LE"
	| "PCMACF"
	| "PCMACQ"
	| "PCMAPA"
	| "PCTNCH"
	| "PCISUCH";

export type SpecialTagCounterType = "NO-APLICA";

export type TagCounterType = RealTagCounterType | SpecialTagCounterType;

export interface TagCounter {
	id: RealTagCounterType;
	prefix: string;
	lastNumber?: number;
	isStatic?: boolean;
}

export interface Software {
	id: string;
	name: string;
	active: boolean;

	created_at: Timestamp;

	created_by: ActionBy;
	updated_by?: ActionBy;
}

export interface SoftwareItem {
	id: string;
	name: string;
}

export type NewSoftware = Omit<Software, "id">;

export type PrestamoStatus = "disponible" | "prestado";

export interface Prestamo {
	id: string;
	computer: Computer;
	assignedTo: string;
	internalTag: string;
	status: PrestamoStatus;
	loanDate?: Timestamp;
	returnDate?: Timestamp;
	created_at: Timestamp;
	created_by: ActionBy;
	updated_by?: ActionBy;
}

export type NewPrestamo = Omit<Prestamo, "id">;
