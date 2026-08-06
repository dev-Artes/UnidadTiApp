import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAut";
import { deleteBrand, getBrands, updateBrand } from "../../../services";
import type { Brand } from "../../../types/entidades";

export const useBrand = () => {
	const { user } = useAuth();
	const [brands, setBrands] = useState<Brand[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	const updatedBy = {
		uid: user?.uid ?? "",
		name: user?.displayName ?? "",
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getBrands();
				const dataSorted = data.sort((a, b) => a.name.localeCompare(b.name));
				setBrands(dataSorted);
			} catch (_error) {
				setError("Error loading brands");
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	const deleteBrandById = async (id: string) => {
		await deleteBrand(id);
		setBrands((prev) => prev.filter((b) => b.id !== id));
	};

	const handleToggleActive = async (brand: Brand) => {
		await updateBrand(brand.id, {
			active: !brand.active,
			updated_by: updatedBy,
		});
		setBrands((prev) =>
			prev.map((b) =>
				b.id === brand.id
					? { ...b, active: !b.active, updated_by: updatedBy }
					: b,
			),
		);
	};

	return {
		brands,
		error,
		loading,
		deleteBrandById,
		handleToggleActive,
	};
};
