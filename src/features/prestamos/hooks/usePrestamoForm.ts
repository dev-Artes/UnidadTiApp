import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAut";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import { addPrestamo } from "../../../services";
import type { Computer } from "../../../types/entidades";

export const usePrestamoForm = () => {
	const { toAllLoans } = useNavigateTo();
	const { user } = useAuth();

	const [computer, setComputer] = useState<Computer | null>(null);
	const [assignedTo, setAssignedTo] = useState("");
	const [internalTag, setInternalTag] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!computer) {
			alert("Debe seleccionar o crear un equipo");
			return;
		}
		if (!internalTag.trim()) {
			alert("La etiqueta es obligatoria");
			return;
		}
		if (!assignedTo.trim()) {
			alert("El usuario asignado es obligatorio");
			return;
		}

		try {
			setLoading(true);
			await addPrestamo({
				computer,
				assignedTo: assignedTo.trim(),
				internalTag: internalTag.trim(),
				status: "disponible",
				created_by: {
					uid: user?.uid ?? "",
					name: user?.displayName ?? "",
				},
				created_at: Timestamp.now(),
			});

			setComputer(null);
			setAssignedTo("");
			setInternalTag("");
			toAllLoans();
		} catch (err) {
			console.error(`Error creando préstamo: ${err}`);
			alert("Hubo un error creando el préstamo, intente nuevamente");
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		computer,
		setComputer,
		assignedTo,
		setAssignedTo,
		internalTag,
		setInternalTag,
		handleSubmit,
	};
};
