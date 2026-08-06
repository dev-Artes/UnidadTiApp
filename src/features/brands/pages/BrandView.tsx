import { useState } from "react";
import {
	Button,
	ContainerCard,
	ContainerGrid,
	Layout,
	StateHandler,
	Table,
	TableActions,
} from "../../../components";
import { useAuth } from "../../../hooks/useAut";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import type { Brand } from "../../../types/entidades";
import { useBrand } from "../hooks/";
import { headersTableConfig } from "../table.config";

const BrandView = () => {
	const { error, loading, brands, deleteBrandById, handleToggleActive } =
		useBrand();
	const { toNewBrand } = useNavigateTo();
	const { userRole } = useAuth();
	const isAdmin = userRole === "admin";

	const visibleBrands = isAdmin ? brands : brands.filter((b) => b.active);

	const [viewMode, setViewMode] = useState<"table" | "grid">("grid");
	const [expandedBrand, setExpandedBrand] = useState<string | null>(null);

	const renderCell = (
		item: Brand,
		header: { id: string; label: string; field: keyof Brand | string },
	) => {
		if (header.field === "name") return item.name;
		if (header.field === "actions") {
			return (
				<TableActions
					onActive={isAdmin ? () => handleToggleActive(item) : undefined}
					isActive={isAdmin ? item.active : undefined}
					onDelete={
						isAdmin
							? () => {
									const confirmed = window.confirm(
										`¿Está seguro de eliminar la marca "${item.name}"?`,
									);
									if (confirmed) deleteBrandById(item.id);
								}
							: undefined
					}
				/>
			);
		}
	};

	return (
		<Layout>
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold mb-4">Marcas registradas</h2>
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
						<Button variant="green" type="submit" onClick={toNewBrand}>
							Nueva marca
						</Button>
					</div>
				</div>

				<div className="bg-white p-6 shadow rounded">
					<StateHandler loading={loading} error={error}>
						{viewMode === "grid" ? (
							<ContainerGrid>
								{visibleBrands.map((brand) => (
									<ContainerCard
										key={brand.id}
										name={brand.name}
										icon={brand.icon}
										active={isAdmin ? brand.active : true}
										showStatus={isAdmin}
										onClick={() =>
											isAdmin
												? setExpandedBrand(
														expandedBrand === brand.id ? null : brand.id,
													)
												: undefined
										}
										expanded={expandedBrand === brand.id}
									>
										{isAdmin && (
											<div className="flex gap-2">
												<button
													type="button"
													onClick={(e) => {
														e.stopPropagation();
														handleToggleActive(brand);
													}}
													className={`text-xs px-2 py-1 rounded ${
														brand.active
															? "bg-yellow-100 text-yellow-700"
															: "bg-green-100 text-green-700"
													}`}
												>
													{brand.active ? "Desactivar" : "Activar"}
												</button>
												<button
													type="button"
													onClick={(e) => {
														e.stopPropagation();
														const confirmed = window.confirm(
															`¿Está seguro de eliminar la marca "${brand.name}"?`,
														);
														if (confirmed) deleteBrandById(brand.id);
													}}
													className="text-xs px-2 py-1 rounded bg-red-100 text-red-700"
												>
													Eliminar
												</button>
											</div>
										)}
									</ContainerCard>
								))}
							</ContainerGrid>
						) : (
							<Table
								data={visibleBrands}
								headers={headersTableConfig.headers}
								renderCellContent={renderCell}
							/>
						)}
					</StateHandler>
				</div>
			</div>
		</Layout>
	);
};

export default BrandView;
