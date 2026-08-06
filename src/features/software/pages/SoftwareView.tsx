import { useState } from "react";
import {
	Button,
	ContainerCard,
	ContainerGrid,
	Layout,
	StateHandler,
} from "../../../components";
import { useAuth } from "../../../hooks/useAut";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import { useSoftware } from "../hooks/";

const SoftwareView = () => {
	const { toNewSoftware } = useNavigateTo();
	const { error, loading, softwareList, handleToggleActive, handleDelete } =
		useSoftware();
	const { userRole } = useAuth();
	const isAdmin = userRole === "admin";

	const visibleSoftware = isAdmin
		? softwareList
		: softwareList.filter((s) => s.active);

	const [expandedSoftware, setExpandedSoftware] = useState<string | null>(null);

	return (
		<Layout>
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold mb-4">Softwares registrados</h2>
					<Button variant="green" type="submit" onClick={toNewSoftware}>
						Nuevo software
					</Button>
				</div>
				<div className="bg-white p-6 shadow rounded">
					<StateHandler loading={loading} error={error}>
						<ContainerGrid>
							{visibleSoftware.map((sw) => (
								<ContainerCard
									key={sw.id}
									name={sw.name}
									active={isAdmin ? sw.active : true}
									showStatus={isAdmin}
									onClick={() =>
										isAdmin
											? setExpandedSoftware(
													expandedSoftware === sw.id ? null : sw.id,
												)
											: undefined
									}
									expanded={expandedSoftware === sw.id}
								>
									{isAdmin && (
										<div className="flex gap-2">
											<button
												type="button"
												onClick={(e) => {
													e.stopPropagation();
													handleToggleActive(sw);
												}}
												className={`text-xs px-2 py-1 rounded ${
													sw.active
														? "bg-yellow-100 text-yellow-700"
														: "bg-green-100 text-green-700"
												}`}
											>
												{sw.active ? "Desactivar" : "Activar"}
											</button>
											<button
												type="button"
												onClick={(e) => {
													e.stopPropagation();
													const confirmed = window.confirm(
														`¿Está seguro de eliminar "${sw.name}"?`,
													);
													if (confirmed) handleDelete(sw.id);
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

export default SoftwareView;
