import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAut";
import { deleteDevice, getDevices, updateDevice } from "../../../services";
import type { Device } from "../../../types/entidades";

export const useDevice = () => {
	const { user } = useAuth();
	const [devices, setDevices] = useState<Device[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	const updatedBy = {
		uid: user?.uid ?? "",
		name: user?.displayName ?? "",
	};

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

	const handleToggleActive = async (device: Device) => {
		await updateDevice(device.id, {
			active: !device.active,
			updated_by: updatedBy,
		});
		setDevices((prev) =>
			prev.map((d) =>
				d.id === device.id
					? { ...d, active: !d.active, updated_by: updatedBy }
					: d,
			),
		);
	};

	return {
		devices,
		error,
		loading,
		deleteDeviceById,
		handleToggleActive,
	};
};
