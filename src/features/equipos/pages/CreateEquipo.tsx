import { Button, Layout } from "../../../components";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import EquipoForm from "../components/EquipoForm";

const CreateEquipo = () => {
	const { toAllEquipos } = useNavigateTo();
	return (
		<Layout>
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold mb-4">Nuevo equipo</h2>
					<Button variant="green" type="submit" onClick={toAllEquipos}>
						{"Equipos"}
					</Button>
				</div>
				<div className="max-w-md mx-auto bg-white p-6 shadow rounded-md">
					<EquipoForm />
				</div>
			</div>
		</Layout>
	);
};

export default CreateEquipo;
