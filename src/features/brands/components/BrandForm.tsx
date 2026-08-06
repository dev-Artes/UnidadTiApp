import { Button, Input } from "../../../components";
import { useBrandForm } from "../hooks/";

const BrandForm = () => {
	const { loading, setBrand, handleSubmit, brand } = useBrandForm();

	return (
		<form onSubmit={handleSubmit}>
			<Input
				id={"brand"}
				value={brand}
				type={"text"}
				name={"brand"}
				placeholder={"Ej: Samsung"}
				handleChange={(e) => setBrand(e.target.value)}
			/>
			<Button variant="green" type="submit">
				{loading ? "Guardando..." : "Guardar"}
			</Button>
		</form>
	);
};

export default BrandForm;
