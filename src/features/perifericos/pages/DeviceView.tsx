import { useState } from "react";
import {
	Button,
	ContainerCard,
	ContainerGrid,
	Layout,
	StateHandler,
} from "../../../components";
import { deviceIcons } from "../../../assets/icons/devices";
import { useAuth } from "../../../hooks/useAut";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import { resolveIcon } from "../../../utils/iconResolver";
import { useDevice } from "../hooks/useDevice";

const DeviceView = () => {
	const { toNewDevice } = useNavigateTo();
	const { error, loading, devices, deleteDeviceById, handleToggleActive } =
		useDevice();
	const { userRole } = useAuth();
	const isAdmin = userRole === "admin";

	const visibleDevices = isAdmin ? devices : devices.filter((d) => d.active);

	const [expandedDevice, setExpandedDevice] = useState<string | null>(null);

	return (
		<Layout>
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold mb-4">Periféricos registrados</h2>
					<Button variant="green" type="submit" onClick={toNewDevice}>
						Nuevo periférico
					</Button>
				</div>
				<div className="bg-white p-6 shadow rounded">
					<StateHandler loading={loading} error={error}>
						<ContainerGrid>
							{visibleDevices.map((device) => (
								<ContainerCard
									key={device.id}
									name={device.name}
									icon={resolveIcon(device.name, deviceIcons)}
									active={isAdmin ? (device.active ?? true) : true}
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
					</StateHandler>
				</div>
			</div>
		</Layout>
	);
};

export default DeviceView;
