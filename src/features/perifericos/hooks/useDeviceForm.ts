import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAut";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import { addDevice } from "../../../services";

export const useDeviceForm = () => {
	const { toAllDevices } = useNavigateTo();
	const { user } = useAuth();
	const [device, setDevice] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!device.trim()) {
			alert("El nombre del periférico es obligatorio");
			return;
		}

		try {
			setLoading(true);
			await addDevice({
				name: device,
				created_by: {
					uid: user?.uid ?? "",
					name: user?.displayName ?? "",
				},
				created_at: Timestamp.now(),
			});

			setDevice("");
			toAllDevices();
		} catch (error) {
			console.error(`Error creando periférico: ${error}`);
			alert("Hubo un error creando el periférico, intente nuevamente");
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		setDevice,
		handleSubmit,
		device,
	};
};
