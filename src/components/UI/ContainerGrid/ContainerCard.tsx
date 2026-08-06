interface ContainerCardProps {
	name: string;
	icon?: string;
	active: boolean;
	showStatus?: boolean;
	onClick?: () => void;
	expanded?: boolean;
	children?: React.ReactNode;
}

const ContainerCard = ({
	name,
	icon,
	active,
	showStatus = true,
	onClick,
	expanded,
	children,
}: ContainerCardProps) => {
	return (
		<button
			type="button"
			className={`bg-white border rounded-lg p-4 cursor-pointer transition-all text-left w-full ${
				active ? "border-indigo-300 shadow-md" : "border-gray-200 opacity-60"
			} ${expanded ? "ring-2 ring-indigo-200" : ""}`}
			onClick={onClick}
		>
			<div className="flex items-center gap-3">
				{icon && (
					<img src={icon} alt={name} className="w-8 h-8 object-contain" />
				)}
				<span className="font-medium text-sm text-gray-800">{name}</span>
				{showStatus && (
					<span
						className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
							active
								? "bg-green-100 text-green-700"
								: "bg-gray-100 text-gray-500"
						}`}
					>
						{active ? "Activo" : "Inactivo"}
					</span>
				)}
			</div>
			{expanded && children && (
				<div className="mt-3 pt-3 border-t border-gray-100">{children}</div>
			)}
		</button>
	);
};

export default ContainerCard;
