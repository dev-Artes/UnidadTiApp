interface ContainerGridProps {
	children: React.ReactNode;
	columns?: number;
}

const ContainerGrid = ({ children, columns = 4 }: ContainerGridProps) => {
	const gridCols =
		columns === 2
			? "grid-cols-1 sm:grid-cols-2"
			: columns === 3
				? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
				: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

	return <div className={`grid ${gridCols} gap-4`}>{children}</div>;
};

export default ContainerGrid;
