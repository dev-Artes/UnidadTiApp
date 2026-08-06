import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import { Button, Layout, StateHandler, Table } from "../../../components";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import { updatePrestamoStatus } from "../../../services";
import type { Prestamo } from "../../../types/entidades";
import { usePrestamo } from "../hooks/";
import { headersTableConfig } from "../table.config";

const PrestamoView = () => {
	const { error, loading, prestamos, deletePrestamoById } = usePrestamo();
	const { toNewLoan } = useNavigateTo();
	const [updatingId, setUpdatingId] = useState<string | null>(null);

	const handleStatusToggle = async (prestamo: Prestamo) => {
		const newStatus =
			prestamo.status === "disponible" ? "prestado" : "disponible";
		const confirmMsg =
			newStatus === "prestado"
				? `¿Marcar como prestado el equipo "${prestamo.computer?.brand?.name} ${prestamo.computer?.model}"?`
				: `¿Devolver el equipo "${prestamo.computer?.brand?.name} ${prestamo.computer?.model}"?`;

		const confirmed = window.confirm(confirmMsg);
		if (!confirmed) return;

		try {
			setUpdatingId(prestamo.id);
			const extra =
				newStatus === "prestado"
					? { loanDate: Timestamp.now().toDate() }
					: { returnDate: Timestamp.now().toDate() };
			await updatePrestamoStatus(prestamo.id, newStatus, extra);
			window.location.reload();
		} catch (err) {
			console.error("Error updating status:", err);
			alert("Error al actualizar el estatus");
		} finally {
			setUpdatingId(null);
		}
	};

	const renderCell = (
		item: Prestamo,
		header: { id: string; label: string; field: keyof Prestamo | string },
	) => {
		if (header.field === "internalTag") return item.internalTag;

		if (header.field === "computer") {
			return (
				<span>
					{item.computer?.brand?.name} {item.computer?.model}
				</span>
			);
		}

		if (header.field === "assignedTo") return item.assignedTo;

		if (header.field === "status") {
			const isAvailable = item.status === "disponible";
			return (
				<span
					className={`px-2 py-1 rounded text-xs font-medium ${
						isAvailable
							? "bg-green-100 text-green-700"
							: "bg-yellow-100 text-yellow-700"
					}`}
				>
					{isAvailable ? "Disponible" : "Prestado"}
				</span>
			);
		}

		if (header.field === "actions") {
			return (
				<div className="flex justify-center gap-2">
					<button
						type="button"
						onClick={() => handleStatusToggle(item)}
						disabled={updatingId === item.id}
						className={`px-2 py-1 rounded text-white text-sm ${
							item.status === "disponible"
								? "bg-yellow-500 hover:bg-yellow-600"
								: "bg-green-500 hover:bg-green-600"
						} disabled:opacity-50`}
					>
						{updatingId === item.id
							? "..."
							: item.status === "disponible"
								? "Prestar"
								: "Devolver"}
					</button>
					<button
						type="button"
						onClick={() => {
							const confirmed = window.confirm(
								`¿Eliminar el préstamo de "${item.assignedTo}"?`,
							);
							if (confirmed) deletePrestamoById(item.id);
						}}
						className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"
					>
						Eliminar
					</button>
				</div>
			);
		}
	};

	return (
		<Layout>
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold mb-4">Préstamos registrados</h2>
					<Button variant="green" type="submit" onClick={toNewLoan}>
						{"Nuevo préstamo"}
					</Button>
				</div>
				<div className="bg-white p-6 shadow rounded">
					<StateHandler loading={loading} error={error}>
						<Table
							data={prestamos}
							headers={headersTableConfig.headers}
							renderCellContent={renderCell}
						/>
					</StateHandler>
				</div>
			</div>
		</Layout>
	);
};

export default PrestamoView;
