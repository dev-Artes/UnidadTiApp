import { useState } from "react";
import { Button, Layout, StateHandler, Table } from "../../../components";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import type { Computer } from "../../../types/entidades";
import { useEquipo } from "../hooks/";
import { headersTableConfig } from "../table.config";

const EquipoView = () => {
	const { error, loading, equipos, deleteEquipoById } = useEquipo();
	const { toNewEquipo } = useNavigateTo();

	const [filterBrand, setFilterBrand] = useState("");
	const [filterTag, setFilterTag] = useState("");
	const [filterRegistration, setFilterRegistration] = useState("");

	const filteredEquipos = equipos.filter((e) => {
		const matchBrand =
			!filterBrand ||
			e.brand?.name.toLowerCase().includes(filterBrand.toLowerCase());
		const matchTag =
			!filterTag ||
			e.internalTag.toLowerCase().includes(filterTag.toLowerCase());
		const matchRegistration =
			!filterRegistration || e.registrationType === filterRegistration;
		return matchBrand && matchTag && matchRegistration;
	});

	const renderCell = (
		item: Computer,
		header: { id: string; label: string; field: keyof Computer | string },
	) => {
		if (header.field === "internalTag") return item.internalTag;

		if (header.field === "brand") return item.brand?.name;

		if (header.field === "model") return item.model;

		if (header.field === "serialNumber") return item.serialNumber;

		if (header.field === "type") return item.type?.name;

		if (header.field === "registrationType") {
			const isPrestamo = item.registrationType === "prestamo";
			const isReasignacion = item.registrationType === "reasignacion";
			return (
				<span
					className={`px-2 py-1 rounded text-xs font-medium ${
						isPrestamo
							? "bg-yellow-100 text-yellow-700"
							: isReasignacion
								? "bg-purple-100 text-purple-700"
								: "bg-blue-100 text-blue-700"
					}`}
				>
					{isPrestamo
						? "Préstamo"
						: isReasignacion
							? "Reasignación"
							: "Entrega"}
				</span>
			);
		}

		if (header.field === "actions") {
			return (
				<div className="flex justify-center gap-2">
					<button
						type="button"
						onClick={() => {
							const confirmed = window.confirm(
								`¿Eliminar el equipo "${item.brand?.name} ${item.model}"?`,
							);
							if (confirmed) deleteEquipoById(item.id!);
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
					<h2 className="text-2xl font-bold mb-4">Equipos registrados</h2>
					<Button variant="green" type="submit" onClick={toNewEquipo}>
						{"Nuevo equipo"}
					</Button>
				</div>

				<div className="flex gap-4 mb-4">
					<input
						type="text"
						placeholder="Filtrar por marca..."
						value={filterBrand}
						onChange={(e) => setFilterBrand(e.target.value)}
						className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg
							focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
					/>
					<input
						type="text"
						placeholder="Filtrar por etiqueta (PC...)"
						value={filterTag}
						onChange={(e) => setFilterTag(e.target.value)}
						className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg
							focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
					/>
					<select
						value={filterRegistration}
						onChange={(e) => setFilterRegistration(e.target.value)}
						className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white
							focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
					>
						<option value="">Todos los registros</option>
						<option value="prestamo">Préstamo</option>
						<option value="entrega">Entrega</option>
						<option value="reasignacion">Reasignación</option>
					</select>
				</div>

				<div className="bg-white p-6 shadow rounded">
					<StateHandler loading={loading} error={error}>
						<Table
							data={filteredEquipos}
							headers={headersTableConfig.headers}
							renderCellContent={renderCell}
						/>
					</StateHandler>
				</div>
			</div>
		</Layout>
	);
};

export default EquipoView;
