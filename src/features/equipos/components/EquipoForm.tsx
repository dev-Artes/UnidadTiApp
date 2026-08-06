import { useEffect, useState } from "react";
import { Button, Input } from "../../../components";
import { getBrands, getDevices } from "../../../services";
import type { Brand, Device } from "../../../types/entidades";
import { useEquipoForm } from "../hooks/";

const EquipoForm = () => {
	const {
		loading,
		brand,
		setBrand,
		device,
		setDevice,
		model,
		setModel,
		serialNumber,
		setSerialNumber,
		internalTag,
		setInternalTag,
		registrationType,
		setRegistrationType,
		handleSubmit,
	} = useEquipoForm();

	const [brands, setBrands] = useState<Brand[]>([]);
	const [devices, setDevices] = useState<Device[]>([]);

	const ALLOWED_DEVICE_NAMES = ["pc de escritorio", "pc de escritorio aio", "notebook"];

	useEffect(() => {
		const loadData = async () => {
			const [b, d] = await Promise.all([getBrands(), getDevices()]);
			setBrands(b);
			setDevices(d.filter((dev) => ALLOWED_DEVICE_NAMES.includes(dev.name.toLowerCase())));
		};
		loadData();
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<label>Etiqueta:</label>
			<Input
				id="internalTag"
				value={internalTag}
				name="internalTag"
				type="text"
				required
				placeholder="Ej: PCART-001"
				handleChange={(e) => setInternalTag(e.target.value)}
			/>

			<label>Marca:</label>
			<select
				className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white mb-4
					focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
				value={brand?.id ?? ""}
				onChange={(e) => {
					const found = brands.find((b) => b.id === e.target.value);
					setBrand(found ?? null);
				}}
			>
				<option value="">Seleccionar marca</option>
				{brands.map((b) => (
					<option key={b.id} value={b.id}>
						{b.name}
					</option>
				))}
			</select>

			<label>Tipo de periférico:</label>
			<select
				className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white mb-4
					focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
				value={device?.id ?? ""}
				onChange={(e) => {
					const found = devices.find((d) => d.id === e.target.value);
					setDevice(found ?? null);
				}}
			>
				<option value="">Seleccionar tipo</option>
				{devices.map((d) => (
					<option key={d.id} value={d.id}>
						{d.name}
					</option>
				))}
			</select>

			<label>Modelo:</label>
			<Input
				id="model"
				value={model}
				name="model"
				type="text"
				required
				placeholder="Ej: ProBook 450"
				handleChange={(e) => setModel(e.target.value)}
			/>

			<label>N° Serie:</label>
			<Input
				id="serialNumber"
				value={serialNumber}
				name="serialNumber"
				type="text"
				required
				placeholder="Número de serie"
				handleChange={(e) => setSerialNumber(e.target.value)}
			/>

			<label>Tipo de registro:</label>
			<select
				className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white mb-4
					focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
				value={registrationType}
				onChange={(e) =>
					setRegistrationType(
						e.target.value as "prestamo" | "entrega" | "reasignacion",
					)
				}
			>
				<option value="prestamo">Préstamo</option>
				<option value="entrega">Entrega</option>
				<option value="reasignacion">Reasignación</option>
			</select>

			<Button variant="green" type="submit">
				{loading ? "Guardando..." : "Guardar"}
			</Button>
		</form>
	);
};

export default EquipoForm;
