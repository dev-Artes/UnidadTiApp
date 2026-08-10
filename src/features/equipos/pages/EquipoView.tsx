import { useEffect, useMemo, useState } from "react";
import {
	Button,
	ContainerCard,
	ContainerGrid,
	Layout,
	Pagination,
	StateHandler,
	Table,
} from "../../../components";
import { brandIcons } from "../../../assets/icons/brands";
import { useAuth } from "../../../hooks/useAut";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import { resolveIcon } from "../../../utils/iconResolver";
import type { Computer, EquipmentStatus } from "../../../types/entidades";
import { getAllAvailability, setAvailability } from "../../../services";
import EquipoDetail from "../components/EquipoDetail";
import { useEquipo } from "../hooks/";
import { headersTableConfig } from "../table.config";

const TAG_OPTIONS = [
	{ value: "PCART", label: "PCART", color: "bg-sky-100 text-sky-700 ring-sky-300" },
	{ value: "PC-LE", label: "PC-LE", color: "bg-emerald-100 text-emerald-700 ring-emerald-300" },
	{ value: "PCISUCH", label: "PCISUCH", color: "bg-amber-100 text-amber-700 ring-amber-300" },
	{ value: "PCMACF", label: "PCMACF", color: "bg-violet-100 text-violet-700 ring-violet-300" },
	{ value: "PCMACQ", label: "PCMACQ", color: "bg-fuchsia-100 text-fuchsia-700 ring-fuchsia-300" },
	{ value: "PCMAPA", label: "PCMAPA", color: "bg-rose-100 text-rose-700 ring-rose-300" },
	{ value: "PCTNCH", label: "PCTNCH", color: "bg-orange-100 text-orange-700 ring-orange-300" },
];

const getTagPrefix = (internalTag: string): string => {
	if (internalTag.startsWith("PC-LE")) return "PC-LE";
	const dashIndex = internalTag.indexOf("-");
	return dashIndex > 0 ? internalTag.substring(0, dashIndex) : internalTag;
};

const ITEMS_PER_PAGE = 12;

const EquipoView = () => {
	const { error, loading, equipos } = useEquipo();
	const { toNewEquipo } = useNavigateTo();
	const { user } = useAuth();

	const [viewMode, setViewMode] = useState<"table" | "grid">("grid");
	const [detailEquipo, setDetailEquipo] = useState<Computer | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [availabilityMap, setAvailabilityMap] = useState<Map<string, EquipmentStatus>>(new Map());
	const [filterAvailability, setFilterAvailability] = useState("");

	const [filterBrand, setFilterBrand] = useState("");
	const [filterTag, setFilterTag] = useState("");
	const [filterRegistration, setFilterRegistration] = useState("");
	const [filterSearch, setFilterSearch] = useState("");

	const [sortField, setSortField] = useState<string>("");
	const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

	useEffect(() => {
		const loadAvailability = async () => {
			const map = await getAllAvailability();
			setAvailabilityMap(map);
		};
		loadAvailability();
	}, []);

	useEffect(() => {
		setCurrentPage(1);
	}, [filterBrand, filterTag, filterRegistration, filterAvailability, filterSearch]);

	const uniqueBrands = useMemo(() => {
		const brands = new Set<string>();
		for (const e of equipos) {
			if (e.brand?.name) brands.add(e.brand.name);
		}
		return Array.from(brands).sort();
	}, [equipos]);

	const filteredEquipos = equipos.filter((e) => {
		const matchSearch =
			!filterSearch ||
			e.internalTag.toLowerCase().includes(filterSearch.toLowerCase());
		const matchBrand = !filterBrand || e.brand?.name === filterBrand;
		const matchTag =
			!filterTag || getTagPrefix(e.internalTag) === filterTag;
		const matchRegistration =
			!filterRegistration || e.registrationType === filterRegistration;
		const equipoStatus = availabilityMap.get(e.internalTag) ?? "disponible";
		const matchAvailability =
			!filterAvailability || equipoStatus === filterAvailability;
		return matchSearch && matchBrand && matchTag && matchRegistration && matchAvailability;
	});

	const handleSort = (field: string) => {
		if (sortField === field) {
			setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
		} else {
			setSortField(field);
			setSortDirection("asc");
		}
	};

	const sortedEquipos = useMemo(() => {
		if (!sortField) return filteredEquipos;
		return [...filteredEquipos].sort((a, b) => {
			const valA = String(a[sortField as keyof Computer] ?? "").toLowerCase();
			const valB = String(b[sortField as keyof Computer] ?? "").toLowerCase();
			return sortDirection === "asc"
				? valA.localeCompare(valB)
				: valB.localeCompare(valA);
		});
	}, [filteredEquipos, sortField, sortDirection]);

	const totalPages = Math.ceil(sortedEquipos.length / ITEMS_PER_PAGE);
	const paginatedEquipos = sortedEquipos.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE,
	);

	const renderCell = (
		item: Computer,
		header: { id: string; label: string; field: keyof Computer | string },
	) => {
		if (header.field === "internalTag") return item.internalTag;
		if (header.field === "brand") return item.brand?.name ?? "";
		if (header.field === "model") return item.model;
		if (header.field === "serialNumber") return item.serialNumber;
		if (header.field === "type") return item.type?.name ?? "";
		return "";
	};

	const activeFilterCount =
		(filterSearch ? 1 : 0) + (filterBrand ? 1 : 0) + (filterTag ? 1 : 0) + (filterRegistration ? 1 : 0) + (filterAvailability ? 1 : 0);

	const clearFilters = () => {
		setFilterSearch("");
		setFilterBrand("");
		setFilterTag("");
		setFilterRegistration("");
		setFilterAvailability("");
	};

	const getStatusBadge = (internalTag: string) => {
		const status = availabilityMap.get(internalTag) ?? "disponible";
		const styles: Record<EquipmentStatus, string> = {
			disponible: "bg-green-100 text-green-700",
			prestado: "bg-yellow-100 text-yellow-700",
			no_disponible: "bg-red-100 text-red-700",
		};
		const labels: Record<EquipmentStatus, string> = {
			disponible: "Disponible",
			prestado: "Prestado",
			no_disponible: "No disponible",
		};
		return (
			<span className={`text-xs px-2 py-0.5 rounded-full font-medium ${styles[status]}`}>
				{labels[status]}
			</span>
		);
	};

	const handleToggleAvailability = async (internalTag: string, currentStatus: EquipmentStatus) => {
		if (!user) return;
		const nextStatus: EquipmentStatus =
			currentStatus === "disponible" ? "no_disponible" : "disponible";
		await setAvailability(internalTag, nextStatus, {
			uid: user.uid,
			name: user.displayName ?? "",
		});
		setAvailabilityMap((prev) => new Map(prev).set(internalTag, nextStatus));
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

				<div className="bg-white p-5 shadow rounded mb-4 space-y-4">
					<div className="flex items-center gap-3 flex-wrap">
						<input
							type="text"
							value={filterSearch}
							onChange={(e) => setFilterSearch(e.target.value)}
							placeholder="Buscar por etiqueta..."
							className="px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white
								focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
						/>

						<div className="relative">
							<select
								value={filterBrand}
								onChange={(e) => setFilterBrand(e.target.value)}
								className="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg bg-white
									focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition cursor-pointer"
							>
								<option value="">Todas las marcas</option>
								{uniqueBrands.map((b) => (
									<option key={b} value={b}>{b}</option>
								))}
							</select>
							<div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
								<svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
								</svg>
							</div>
						</div>

						<select
							value={filterRegistration}
							onChange={(e) => setFilterRegistration(e.target.value)}
							className="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg bg-white
								focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition cursor-pointer"
						>
							<option value="">Todos los registros</option>
							<option value="prestamo">Préstamo</option>
							<option value="entrega">Entrega</option>
							<option value="reasignacion">Reasignación</option>
						</select>

						<select
							value={filterAvailability}
							onChange={(e) => setFilterAvailability(e.target.value)}
							className="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-lg bg-white
								focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition cursor-pointer"
						>
							<option value="">Todos los estados</option>
							<option value="disponible">Disponible</option>
							<option value="prestado">Prestado</option>
							<option value="no_disponible">No disponible</option>
						</select>

						{activeFilterCount > 0 && (
							<button
								type="button"
								onClick={clearFilters}
								className="text-xs text-gray-500 hover:text-red-500 transition px-2 py-1 rounded hover:bg-red-50"
							>
								Limpiar filtros ({activeFilterCount})
							</button>
						)}
					</div>

					<div>
						<p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-medium">Etiqueta</p>
						<div className="flex flex-wrap gap-2">
							{TAG_OPTIONS.map((tag) => {
								const isActive = filterTag === tag.value;
								return (
									<button
										key={tag.value}
										type="button"
										onClick={() => setFilterTag(isActive ? "" : tag.value)}
										className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all
											${isActive
												? `${tag.color} border-transparent ring-2 shadow-sm`
												: "bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100"
											}`}
									>
										{tag.label}
									</button>
								);
							})}
						</div>
					</div>
				</div>

				<div className="bg-white p-6 shadow rounded">
				<StateHandler loading={loading} error={error}>
					{viewMode === "grid" ? (
						<>
							<ContainerGrid>
								{paginatedEquipos.map((equipo, idx) => {
									const uniqueKey = equipo.id || `${equipo.internalTag}-${idx}`;
									const equipoStatus = availabilityMap.get(equipo.internalTag) ?? "disponible";
									return (
										<div key={uniqueKey} className="relative">
											<ContainerCard
												name={equipo.internalTag}
												icon={resolveIcon(
													equipo.brand?.name ?? "",
													brandIcons,
												)}
												active={true}
												showStatus={false}
												onClick={() => setDetailEquipo(equipo)}
											/>
											<div className="absolute top-2 right-2">
												<button
													type="button"
													onClick={(e) => {
														e.stopPropagation();
														handleToggleAvailability(equipo.internalTag, equipoStatus);
													}}
													className="cursor-pointer"
													title="Cambiar disponibilidad"
												>
													{getStatusBadge(equipo.internalTag)}
												</button>
											</div>
										</div>
									);
								})}
							</ContainerGrid>
							<Pagination
								currentPage={currentPage}
								totalPages={totalPages}
								onPageChange={setCurrentPage}
							/>
						</>
					) : (
						<Table
							data={sortedEquipos}
							headers={headersTableConfig.headers}
							renderCellContent={renderCell}
							sortField={sortField}
							sortDirection={sortDirection}
							onSort={handleSort}
						/>
					)}
				</StateHandler>
			</div>
			</div>

			{detailEquipo && (
				<EquipoDetail
					item={detailEquipo}
					onClose={() => setDetailEquipo(null)}
					onUpdate={() => window.location.reload()}
					onAvailabilityChange={(tag, status) =>
						setAvailabilityMap((prev) => new Map(prev).set(tag, status))
					}
				/>
			)}
		</Layout>
	);
};

export default EquipoView;
