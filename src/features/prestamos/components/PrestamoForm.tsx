import { useEffect, useState } from "react";
import { Button, Input } from "../../../components";
import { getComputers, getAllAvailability } from "../../../services";
import type { Computer } from "../../../types/entidades";
import { usePrestamoForm } from "../hooks/";

const PrestamoForm = () => {
	const {
		loading,
		computer,
		setComputer,
		assignedTo,
		setAssignedTo,
		internalTag,
		setInternalTag,
		handleSubmit,
	} = usePrestamoForm();

	const [computers, setComputers] = useState<Computer[]>([]);

	useEffect(() => {
		const loadComputers = async () => {
			const data = await getComputers();
			const availabilityMap = await getAllAvailability();
			const filtered = data.filter((c) => {
				if (c.registrationType !== "prestamo") return false;
				const status = availabilityMap.get(c.internalTag) ?? "disponible";
				return status === "disponible";
			});
			setComputers(filtered);
		};
		loadComputers();
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<label>Etiqueta:</label>
			<Input
				id="internalTag"
				value={internalTag}
				name="internalTag"
				type="text"
				required
				placeholder="Ej: PCART-001"
				handleChange={(e) => setInternalTag(e.target.value)}
			/>

			<label>Equipo:</label>
			<select
				className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white mb-4
					focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
				value={computer?.id ?? ""}
				onChange={(e) => {
					const found = computers.find((c) => c.id === e.target.value);
					setComputer(found ?? null);
				}}
			>
				<option value="">Seleccionar equipo</option>
				{computers.map((c) => (
					<option key={c.id} value={c.id}>
						{c.internalTag} - {c.brand?.name} {c.model}
					</option>
				))}
			</select>

			<label>Usuario asignado:</label>
			<Input
				id="assignedTo"
				value={assignedTo}
				name="assignedTo"
				type="text"
				required
				placeholder="Nombre del usuario"
				handleChange={(e) => setAssignedTo(e.target.value)}
			/>

			<Button variant="green" type="submit">
				{loading ? "Guardando..." : "Guardar"}
			</Button>
		</form>
	);
};

export default PrestamoForm;
