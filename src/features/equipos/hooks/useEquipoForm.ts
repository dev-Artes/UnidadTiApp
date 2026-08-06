import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAut";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import { addComputer } from "../../../services";
import type { Brand } from "../../../types/entidades";

export const useEquipoForm = () => {
	const { toAllEquipos } = useNavigateTo();
	const { user } = useAuth();

	const [brand, setBrand] = useState<Brand | null>(null);
	const [deviceType, setDeviceType] = useState("");
	const [model, setModel] = useState("");
	const [serialNumber, setSerialNumber] = useState("");
	const [internalTag, setInternalTag] = useState("");
	const [registrationType, setRegistrationType] = useState<
		"prestamo" | "entrega" | "reasignacion"
	>("prestamo");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!brand) {
			alert("Debe seleccionar una marca");
			return;
		}
		if (!deviceType) {
			alert("Debe seleccionar un tipo de periférico");
			return;
		}
		if (!model.trim()) {
			alert("El modelo es obligatorio");
			return;
		}
		if (!serialNumber.trim()) {
			alert("El número de serie es obligatorio");
			return;
		}
		if (!internalTag.trim()) {
			alert("La etiqueta es obligatoria");
			return;
		}

		try {
			setLoading(true);
			await addComputer({
				brand,
				type: {
					id: "",
					name: deviceType,
					created_at: Timestamp.now(),
					created_by: { uid: "", name: "" },
				},
				model: model.trim(),
				serialNumber: serialNumber.trim(),
				internalTag: internalTag.trim(),
				assignedTo: "",
				registrationType,
				created_at: Timestamp.now(),
				created_by: {
					uid: user?.uid ?? "",
					name: user?.displayName ?? "",
				},
			});

			setBrand(null);
			setDeviceType("");
			setModel("");
			setSerialNumber("");
			setInternalTag("");
			setRegistrationType("prestamo");
			toAllEquipos();
		} catch (err) {
			console.error(`Error creando equipo: ${err}`);
			alert("Hubo un error creando el equipo, intente nuevamente");
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		brand,
		setBrand,
		deviceType,
		setDeviceType,
		model,
		setModel,
		serialNumber,
		setSerialNumber,
		internalTag,
		setInternalTag,
		registrationType,
		setRegistrationType,
		handleSubmit,
	};
};
