import { useState } from "react";
import {
	Button,
	ContainerCard,
	ContainerGrid,
	Layout,
	StateHandler,
} from "../../../components";
import { brandIcons } from "../../../assets/icons/brands";
import { useAuth } from "../../../hooks/useAut";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import { resolveIcon } from "../../../utils/iconResolver";
import { useBrand } from "../hooks/";

const BrandView = () => {
	const { error, loading, brands, deleteBrandById, handleToggleActive } =
		useBrand();
	const { toNewBrand } = useNavigateTo();
	const { userRole } = useAuth();
	const isAdmin = userRole === "admin";

	const visibleBrands = isAdmin ? brands : brands.filter((b) => b.active);

	const [expandedBrand, setExpandedBrand] = useState<string | null>(null);

	return (
		<Layout>
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold mb-4">Marcas registradas</h2>
					<Button variant="green" type="submit" onClick={toNewBrand}>
						Nueva marca
					</Button>
				</div>

				<div className="bg-white p-6 shadow rounded">
					<StateHandler loading={loading} error={error}>
						<ContainerGrid>
							{visibleBrands.map((brand) => (
								<ContainerCard
									key={brand.id}
									name={brand.name}
									icon={resolveIcon(brand.name, brandIcons)}
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
					</StateHandler>
				</div>
			</div>
		</Layout>
	);
};

export default BrandView;
