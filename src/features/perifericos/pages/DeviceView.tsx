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
import type { Device } from "../../../types/entidades";
import { useDevice } from "../hooks/useDevice";
import { headersTableConfig } from "../table.config";

const DeviceView = () => {
	const { toNewDevice } = useNavigateTo();
	const { error, loading, devices, deleteDeviceById, handleToggleActive } =
		useDevice();
	const { userRole } = useAuth();
	const isAdmin = userRole === "admin";

	const visibleDevices = isAdmin ? devices : devices.filter((d) => d.active);

	const [viewMode, setViewMode] = useState<"table" | "grid">("grid");
	const [expandedDevice, setExpandedDevice] = useState<string | null>(null);

	const renderCell = (
		item: Device,
		header: { id: string; label: string; field: keyof Device | string },
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
										`¿Está seguro de eliminar el periférico "${item.name}"?`,
									);
									if (confirmed) deleteDeviceById(item.id);
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
					<h2 className="text-2xl font-bold mb-4">Periféricos registrados</h2>
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
						<Button variant="green" type="submit" onClick={toNewDevice}>
							Nuevo periférico
						</Button>
					</div>
				</div>
				<div className="bg-white p-6 shadow rounded">
					<StateHandler loading={loading} error={error}>
						{viewMode === "grid" ? (
							<ContainerGrid>
								{visibleDevices.map((device) => (
									<ContainerCard
										key={device.id}
										name={device.name}
										active={isAdmin ? device.active : true}
										showStatus={isAdmin}
										onClick={() =>
											isAdmin
												? setExpandedDevice(
														expandedDevice === device.id ? null : device.id,
													)
												: undefined
										}
										expanded={expandedDevice === device.id}
									>
										{isAdmin && (
											<div className="flex gap-2">
												<button
													type="button"
													onClick={(e) => {
														e.stopPropagation();
														handleToggleActive(device);
													}}
													className={`text-xs px-2 py-1 rounded ${
														device.active
															? "bg-yellow-100 text-yellow-700"
															: "bg-green-100 text-green-700"
													}`}
												>
													{device.active ? "Desactivar" : "Activar"}
												</button>
												<button
													type="button"
													onClick={(e) => {
														e.stopPropagation();
														const confirmed = window.confirm(
															`¿Está seguro de eliminar el periférico "${device.name}"?`,
														);
														if (confirmed) deleteDeviceById(device.id);
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
								data={visibleDevices}
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

export default DeviceView;
