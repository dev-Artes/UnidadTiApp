import { useEffect, useState } from "react";
import { getCertificates } from "../../../services";
import type { Computer } from "../../../types/entidades";

export const useEquipo = () => {
	const [equipos, setEquipos] = useState<Computer[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const certificates = await getCertificates();
				const map = new Map<string, Computer>();
				for (const cert of certificates) {
					const tag = cert.computer?.internalTag;
					if (tag) {
						map.set(tag, {
							...cert.computer,
							registrationType:
								cert.type === "reasignacion" ? "reasignacion" : "entrega",
						});
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
