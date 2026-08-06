import { useEffect, useState } from "react";
import { getComputers } from "../../../services";
import type { Computer } from "../../../types/entidades";

const ALLOWED_DEVICE_NAMES = ["notebook", "pc de escritorio", "pc de escritorio aio"];

export const useEquipo = () => {
	const [equipos, setEquipos] = useState<Computer[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const computers = await getComputers();
				const filtered = computers.filter((c) => {
					const typeName =
						typeof c.type === "string" ? c.type : c.type?.name;
					return (
						typeName &&
						ALLOWED_DEVICE_NAMES.includes(typeName.toLowerCase())
					);
				});

				const map = new Map<string, Computer>();
				for (const c of filtered) {
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

				setEquipos(Array.from(map.values()));
			} catch (_err) {
				setError("Error loading equipos");
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return { equipos, error, loading };
};
