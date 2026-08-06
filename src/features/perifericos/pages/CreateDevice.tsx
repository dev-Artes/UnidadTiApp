import { Button, Layout } from "../../../components";
import { useNavigateTo } from "../../../hooks/useNavigateTo";
import DeviceForm from "../components/DeviceForm";

const CreateDevice = () => {
	const { toAllDevices } = useNavigateTo();
	return (
		<Layout>
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold mb-4">Nuevo periférico</h2>
					<Button variant="green" type="submit" onClick={toAllDevices}>
						{"Periféricos"}
					</Button>
				</div>
				<div className="max-w-md mx-auto bg-white p-6 shadow rounded-md">
					<DeviceForm />
				</div>
			</div>
		</Layout>
	);
};

export default CreateDevice;
