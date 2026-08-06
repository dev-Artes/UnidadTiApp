import { useEffect, useState } from "react";
import { Button, Input } from "../../../components";
import { getBrands } from "../../../services";
import type { Brand } from "../../../types/entidades";
import { useEquipoForm } from "../hooks/";

const DEVICE_TYPES = ["AiO", "Notebook", "MacBook Pro/Air", "PC Escritorio"];

const EquipoForm = () => {
	const {
		loading,
		brand,
		setBrand,
		deviceType,
		setDeviceType,
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

	useEffect(() => {
		const loadBrands = async () => {
			const b = await getBrands();
			setBrands(b);
		};
		loadBrands();
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
				value={deviceType}
				onChange={(e) => setDeviceType(e.target.value)}
			>
				<option value="">Seleccionar tipo</option>
				{DEVICE_TYPES.map((dt) => (
					<option key={dt} value={dt}>
						{dt}
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
