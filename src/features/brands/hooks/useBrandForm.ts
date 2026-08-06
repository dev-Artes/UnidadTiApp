import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAut";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import { addBrand } from "../../../services";

export const useBrandForm = () => {
	const { toAllBrands } = useNavigateTo();
	const { user } = useAuth();

	const [brand, setBrand] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!brand.trim()) {
			alert("El nombre de la marca es obligatorio");
			return;
		}

		try {
			setLoading(true);
			await addBrand({
				name: brand,
				created_by: {
					uid: user?.uid ?? "",
					name: user?.displayName ?? "",
				},
				created_at: Timestamp.now(),
			});

			setBrand("");
			toAllBrands();
		} catch (error) {
			console.error(`Error creando marca: ${error}`);
			alert("Hubo un error creando la marca, intente nuevamente");
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		setBrand,
		handleSubmit,
		brand,
	};
};
