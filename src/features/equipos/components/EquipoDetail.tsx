import { useEffect, useState } from "react";
import type { Computer, EquipmentStatus } from "../../../types/entidades";
import { getAvailability, setAvailability, updateComputer, deleteComputer } from "../../../services";
import { useAuth } from "../../../hooks/useAut";

interface EquipoDetailProps {
	item: Computer;
	onClose: () => void;
	onUpdate?: () => void;
}

const EquipoDetail = ({ item, onClose, onUpdate }: EquipoDetailProps) => {
	const { user } = useAuth();
	const [status, setStatus] = useState<EquipmentStatus>("disponible");
	const [registrationType, setRegistrationType] = useState(item.registrationType);

	useEffect(() => {
		const loadStatus = async () => {
			const avail = await getAvailability(item.internalTag);
			if (avail) setStatus(avail.status);
		};
		loadStatus();
	}, [item.internalTag]);

	const registroLabel =
		registrationType === "prestamo"
			? "Préstamo"
			: registrationType === "reasignacion"
				? "Reasignación"
				: "Entrega";

	const registroColor =
		registrationType === "prestamo"
			? "bg-amber-100 text-amber-800 border-amber-200"
			: registrationType === "reasignacion"
				? "bg-violet-100 text-violet-800 border-violet-200"
				: "bg-sky-100 text-sky-800 border-sky-200";

	const statusStyles: Record<EquipmentStatus, string> = {
		disponible: "bg-emerald-100 text-emerald-800 border-emerald-200",
		prestado: "bg-amber-100 text-amber-800 border-amber-200",
		no_disponible: "bg-rose-100 text-rose-800 border-rose-200",
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

	const handleRegistrationChange = async (
		newType: "prestamo" | "entrega" | "reasignacion",
	) => {
		if (!item.id) return;
		await updateComputer(item.id, { registrationType: newType });
		setRegistrationType(newType);
		onUpdate?.();
	};

	const handleDelete = async () => {
		const confirmed = window.confirm(
			`¿Eliminar el equipo "${item.brand?.name} ${item.model}"?`,
		);
		if (!confirmed || !item.id) return;
		await deleteComputer(item.id);
		onClose();
		onUpdate?.();
	};

	return (
		<>
			<div
				className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
				onClick={onClose}
			/>

			<div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col animate-slide-in">
				<div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
					<h2 className="text-lg font-semibold text-gray-900">
						Detalle del equipo
					</h2>
					<button
						type="button"
						onClick={onClose}
						className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
					>
						<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
					<div className="flex items-center gap-4">
						<div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
							<svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 7.41A2.25 2.25 0 012.25 5.495V5.25" />
							</svg>
						</div>
						<div>
							<h3 className="text-xl font-bold text-gray-900">
								{item.brand?.name} {item.model}
							</h3>
							<p className="text-sm text-gray-500">{item.internalTag}</p>
						</div>
					</div>

					<div className="flex gap-2">
						<span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status]}`}>
							<span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${status === "disponible" ? "bg-emerald-500" : status === "prestado" ? "bg-amber-500" : "bg-rose-500"}`} />
							{statusLabels[status]}
						</span>
						<span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${registroColor}`}>
							{registroLabel}
						</span>
					</div>

					<div className="space-y-1">
						<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
							Información
						</h4>
						<div className="bg-gray-50 rounded-xl p-4 space-y-3">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-500">Marca</span>
								<span className="text-sm font-medium text-gray-900">{item.brand?.name}</span>
							</div>
							<div className="border-t border-gray-200" />
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-500">Modelo</span>
								<span className="text-sm font-medium text-gray-900">{item.model}</span>
							</div>
							<div className="border-t border-gray-200" />
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-500">N° Serie</span>
								<span className="text-sm font-medium text-gray-900">{item.serialNumber}</span>
							</div>
							<div className="border-t border-gray-200" />
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-500">Tipo</span>
								<span className="text-sm font-medium text-gray-900">{item.type?.name}</span>
							</div>
							<div className="border-t border-gray-200" />
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-500">Asignado a</span>
								<span className="text-sm font-medium text-gray-900">{item.assignedTo || "—"}</span>
							</div>
						</div>
					</div>

					<div className="space-y-1">
						<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
							Acciones
						</h4>
						<div className="bg-gray-50 rounded-xl p-4 space-y-3">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-500">Tipo de registro</span>
								<select
									value={registrationType}
									onChange={(e) =>
										handleRegistrationChange(
											e.target.value as "prestamo" | "entrega" | "reasignacion",
										)
									}
									className="text-sm font-medium text-gray-900 bg-transparent border-0 focus:ring-0 cursor-pointer text-right pr-1"
								>
									<option value="entrega">Entrega</option>
									<option value="prestamo">Préstamo</option>
									<option value="reasignacion">Reasignación</option>
								</select>
							</div>
							<div className="border-t border-gray-200" />
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-500">Disponibilidad</span>
								{status !== "prestado" ? (
									<button
										type="button"
										onClick={handleToggleStatus}
										className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
									>
										Cambiar a {status === "disponible" ? "No disponible" : "Disponible"}
									</button>
								) : (
									<span className="text-sm text-gray-400">En préstamo</span>
								)}
							</div>
							<div className="border-t border-gray-200" />
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-500">Eliminar</span>
								<button
									type="button"
									onClick={handleDelete}
									className="text-sm font-medium text-red-600 hover:text-red-800 transition"
								>
									Eliminar equipo
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EquipoDetail;
