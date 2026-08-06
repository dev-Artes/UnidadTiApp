import { Button, Layout } from "../../../components";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import PrestamoForm from "../components/PrestamoForm";

const CreatePrestamo = () => {
	const { toAllLoans } = useNavigateTo();
	return (
		<Layout>
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold mb-4">Nuevo préstamo</h2>
					<Button variant="green" type="submit" onClick={toAllLoans}>
						{"Préstamos"}
					</Button>
				</div>
				<div className="max-w-md mx-auto bg-white p-6 shadow rounded-md">
					<PrestamoForm />
				</div>
			</div>
		</Layout>
	);
};

export default CreatePrestamo;
