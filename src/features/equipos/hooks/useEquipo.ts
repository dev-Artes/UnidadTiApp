import { useEffect, useState } from "react";
import { deleteComputer, getComputers } from "../../../services";
import type { Computer } from "../../../types/entidades";

export const useEquipo = () => {
	const [equipos, setEquipos] = useState<Computer[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getComputers();
				setEquipos(data);
			} catch (_err) {
				setError("Error loading equipos");
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	const deleteEquipoById = async (id: string) => {
		await deleteComputer(id);
		setEquipos((prev) => prev.filter((e) => e.id !== id));
	};

	return { equipos, error, loading, deleteEquipoById };
};
