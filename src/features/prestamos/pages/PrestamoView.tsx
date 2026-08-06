import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import { Button, Layout, StateHandler, Table } from "../../../components";
import { useAuth } from "../../../hooks/useAut";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import { updatePrestamoStatus, setAvailability } from "../../../services";
import type { Prestamo } from "../../../types/entidades";
import { usePrestamo } from "../hooks/";
import { headersTableConfig } from "../table.config";

const formatDate = (timestamp?: Timestamp) => {
	if (!timestamp) return "—";
	const date = timestamp.toDate();
	return date.toLocaleDateString("es-AR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
};

const PrestamoView = () => {
	const { error, loading, prestamos, deletePrestamoById } = usePrestamo();
	const { toNewLoan } = useNavigateTo();
	const { user } = useAuth();
	const [updatingId, setUpdatingId] = useState<string | null>(null);

	const handleReturn = async (prestamo: Prestamo) => {
		const confirmed = window.confirm(
			`¿Devolver el equipo "${prestamo.computer?.brand?.name} ${prestamo.computer?.model}"?`,
		);
		if (!confirmed) return;

		try {
			setUpdatingId(prestamo.id);
			await updatePrestamoStatus(prestamo.id, "disponible", {
				returnDate: Timestamp.now().toDate(),
			});

			if (user && prestamo.computer?.internalTag) {
				await setAvailability(prestamo.computer.internalTag, "disponible", {
					uid: user.uid,
					name: user.displayName ?? "",
				});
			}

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

		if (header.field === "assignedTo") return item.assignedTo;

		if (header.field === "created_at") {
			return formatDate(item.created_at);
		}

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
					{item.status === "prestado" && (
						<button
							type="button"
							onClick={() => handleReturn(item)}
							disabled={updatingId === item.id}
							className="px-2 py-1 rounded bg-green-500 hover:bg-green-600 text-white text-sm disabled:opacity-50"
						>
							{updatingId === item.id ? "..." : "Devolver"}
						</button>
					)}
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
