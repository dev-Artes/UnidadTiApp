import { useState } from "react";
import {
	Button,
	ContainerCard,
	ContainerGrid,
	Layout,
	StateHandler,
	Table,
} from "../../../components";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import type { Computer } from "../../../types/entidades";
import EquipoDetail from "../components/EquipoDetail";
import { useEquipo } from "../hooks/";
import { headersTableConfig } from "../table.config";

const EquipoView = () => {
	const { error, loading, equipos } = useEquipo();
	const { toNewEquipo } = useNavigateTo();

	const [viewMode, setViewMode] = useState<"table" | "grid">("grid");
	const [detailEquipo, setDetailEquipo] = useState<Computer | null>(null);

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
	};

	return (
		<Layout>
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold mb-4">Equipos registrados</h2>
					<div className="flex gap-2">
						<button
							type="button"
							onClick={() => setViewMode("grid")}
							className={`px-3 py-1 rounded text-sm ${
								viewMode === "grid"
									? "bg-indigo-100 text-indigo-700"
									: "bg-gray-100 text-gray-600"
							}`}
						>
							Cuadrícula
						</button>
						<button
							type="button"
							onClick={() => setViewMode("table")}
							className={`px-3 py-1 rounded text-sm ${
								viewMode === "table"
									? "bg-indigo-100 text-indigo-700"
									: "bg-gray-100 text-gray-600"
							}`}
						>
							Tabla
						</button>
						<Button variant="green" type="submit" onClick={toNewEquipo}>
							Nuevo equipo
						</Button>
					</div>
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
						{viewMode === "grid" ? (
							<ContainerGrid>
								{filteredEquipos.map((equipo, idx) => {
									const uniqueKey = equipo.id || `${equipo.internalTag}-${idx}`;
									return (
										<ContainerCard
											key={uniqueKey}
											name={equipo.internalTag}
											active={true}
											showStatus={false}
											onClick={() => setDetailEquipo(equipo)}
										/>
									);
								})}
							</ContainerGrid>
						) : (
							<Table
								data={filteredEquipos}
								headers={headersTableConfig.headers}
								renderCellContent={renderCell}
							/>
						)}
					</StateHandler>
				</div>
			</div>

			{detailEquipo && (
				<EquipoDetail
					item={detailEquipo}
					onClose={() => setDetailEquipo(null)}
				/>
			)}
		</Layout>
	);
};

export default EquipoView;
