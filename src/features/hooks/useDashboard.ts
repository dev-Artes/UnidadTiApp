import { useEffect, useState } from "react";
import { getComputers, getPrestamos, getAllAvailability } from "../../services";
import type { Computer, Prestamo, EquipmentStatus } from "../../types/entidades";

const ALLOWED_DEVICE_NAMES = ["notebook", "pc de escritorio", "pc de escritorio aio"];

interface DashboardData {
	totalEquipos: number;
	prestamosActa: number;
	reasignados: number;
	disponibles: number;
	prestados: number;
	noDisponibles: number;
	prestamosActivos: number;
}

export const useDashboard = () => {
	const [data, setData] = useState<DashboardData>({
		totalEquipos: 0,
		prestamosActa: 0,
		reasignados: 0,
		disponibles: 0,
		prestados: 0,
		noDisponibles: 0,
		prestamosActivos: 0,
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [computers, prestamos, availabilityMap] = await Promise.all([
					getComputers(),
					getPrestamos(),
					getAllAvailability(),
				]);

				const map = new Map<string, Computer>();
				for (const c of computers) {
					const typeName = typeof c.type === "string" ? c.type : c.type?.name;
					if (!typeName || !ALLOWED_DEVICE_NAMES.includes(typeName.toLowerCase())) continue;

					const existing = map.get(c.internalTag);
					if (!existing) {
						map.set(c.internalTag, c);
					} else {
						const dateNew = c.created_at?.toMillis() ?? 0;
						const dateOld = existing.created_at?.toMillis() ?? 0;
						if (dateNew > dateOld) {
							map.set(c.internalTag, c);
						}
					}
				}

				const uniqueComputers = Array.from(map.values());

				const prestamosActa = uniqueComputers.filter((c) => c.registrationType === "prestamo").length;
				const reasignados = uniqueComputers.filter((c) => c.registrationType === "reasignacion").length;

				let disponibles = uniqueComputers.filter(
					(c) => !availabilityMap.has(c.internalTag)
				).length;
				let prestados = 0;
				let noDisponibles = 0;
				for (const status of availabilityMap.values()) {
					if (status === "disponible") disponibles++;
					else if (status === "prestado") prestados++;
					else if (status === "no_disponible") noDisponibles++;
				}

				const prestamosActivos = prestamos.filter((p: Prestamo) => p.status === "prestado").length;

				setData({
					totalEquipos: uniqueComputers.length,
					prestamosActa,
					reasignados,
					disponibles,
					prestados,
					noDisponibles,
					prestamosActivos,
				});
			} catch (_err) {
				setError("Error cargando datos del dashboard");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return { data, loading, error };
};
