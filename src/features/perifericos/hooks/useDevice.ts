import { useEffect, useState } from "react";
import { deleteDevice, getDevices } from "../../../services";
import type { Device } from "../../../types/entidades";

export const useDevice = () => {
	const [devices, setDevices] = useState<Device[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getDevices();
				const dataSorted = data.sort((a, b) => a.name.localeCompare(b.name));
				setDevices(dataSorted);
			} catch (_error) {
				setError("Error loading perifericos");
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	const deleteDeviceById = async (id: string) => {
		await deleteDevice(id);
		setDevices((prev) => prev.filter((d) => d.id !== id));
	};

	return {
		devices,
		error,
		loading,
		deleteDeviceById,
	};
};
