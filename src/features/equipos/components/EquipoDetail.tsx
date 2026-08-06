import { Button } from "../../../components";
import type { Computer } from "../../../types/entidades";

interface EquipoDetailProps {
	item: Computer;
	onClose: () => void;
}

const EquipoDetail = ({ item, onClose }: EquipoDetailProps) => {
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
				</div>
			</div>
		</div>
	);
};

export default EquipoDetail;
