import { useEffect, useState } from "react";
import { deletePrestamo, getPrestamos } from "../../../services";
import type { Prestamo } from "../../../types/entidades";

export const usePrestamo = () => {
	const [prestamos, setPrestamos] = useState<Prestamo[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getPrestamos();
				setPrestamos(data);
			} catch (_err) {
				setError("Error loading prestamos");
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	const deletePrestamoById = async (id: string) => {
		await deletePrestamo(id);
		setPrestamos((prev) => prev.filter((p) => p.id !== id));
	};

	return { prestamos, error, loading, deletePrestamoById };
};
