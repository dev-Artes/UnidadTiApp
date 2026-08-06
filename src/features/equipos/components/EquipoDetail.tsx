import { useEffect, useState } from "react";
import { Button } from "../../../components";
import type { Computer, EquipmentStatus } from "../../../types/entidades";
import { getAvailability, setAvailability } from "../../../services";
import { useAuth } from "../../../hooks/useAut";

interface EquipoDetailProps {
	item: Computer;
	onClose: () => void;
}

const EquipoDetail = ({ item, onClose }: EquipoDetailProps) => {
	const { user } = useAuth();
	const [status, setStatus] = useState<EquipmentStatus>("disponible");

	useEffect(() => {
		const loadStatus = async () => {
			const avail = await getAvailability(item.internalTag);
			if (avail) setStatus(avail.status);
		};
		loadStatus();
	}, [item.internalTag]);

	const registroLabel =
		item.registrationType === "prestamo"
			? "Préstamo"
			: item.registrationType === "reasignacion"
				? "Reasignación"
				: "Entrega";

	const registroColor =
		item.registrationType === "prestamo"
			? "bg-yellow-100 text-yellow-700"
			: item.registrationType === "reasignacion"
				? "bg-purple-100 text-purple-700"
				: "bg-blue-100 text-blue-700";

	const statusStyles: Record<EquipmentStatus, string> = {
		disponible: "bg-green-100 text-green-700",
		prestado: "bg-yellow-100 text-yellow-700",
		no_disponible: "bg-red-100 text-red-700",
	};

	const statusLabels: Record<EquipmentStatus, string> = {
		disponible: "Disponible",
		prestado: "Prestado",
		no_disponible: "No disponible",
	};

	const handleToggleStatus = async () => {
		if (!user) return;
		const nextStatus: EquipmentStatus =
			status === "disponible" ? "no_disponible" : "disponible";
		await setAvailability(item.internalTag, nextStatus, {
			uid: user.uid,
			name: user.displayName ?? "",
		});
		setStatus(nextStatus);
	};

	return (
		<div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-white p-6 rounded-lg shadow-lg relative w-[600px] max-h-[90vh] overflow-y-auto">
				<Button onClick={onClose} variant="gray">
					{"X"}
				</Button>

				<h2 className="text-lg font-bold mb-6 text-center">
					{item.brand?.name} {item.model}
				</h2>

				<div className="space-y-3">
					<div>
						<span className="text-md font-bold">Etiqueta Interna: </span>{" "}
						{item.internalTag}
					</div>
					<div>
						<span className="text-md font-bold">Marca: </span>{" "}
						{item.brand?.name}
					</div>
					<div>
						<span className="text-md font-bold">Modelo: </span> {item.model}
					</div>
					<div>
						<span className="text-md font-bold">Número de serie: </span>{" "}
						{item.serialNumber}
					</div>
					<div>
						<span className="text-md font-bold">Tipo: </span> {item.type?.name}
					</div>
					<div>
						<span className="text-md font-bold">Asignado a: </span>{" "}
						{item.assignedTo}
					</div>
					<div>
						<span className="text-md font-bold">Registro: </span>{" "}
						<span
							className={`px-2 py-0.5 rounded text-xs font-medium ${registroColor}`}
						>
							{registroLabel}
						</span>
					</div>
					<div className="flex items-center gap-3">
						<span className="text-md font-bold">Disponibilidad: </span>
						<span
							className={`px-2 py-0.5 rounded text-xs font-medium ${statusStyles[status]}`}
						>
							{statusLabels[status]}
						</span>
						{status !== "prestado" && (
							<button
								type="button"
								onClick={handleToggleStatus}
								className="text-xs text-indigo-600 hover:text-indigo-800 underline"
							>
								Cambiar a {status === "disponible" ? "No disponible" : "Disponible"}
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EquipoDetail;
