import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) => {
	if (totalPages <= 1) return null;

	type PageItem =
		| { type: "page"; value: number }
		| { type: "ellipsis"; id: string };

	const getPageNumbers = (): PageItem[] => {
		const pages: PageItem[] = [];
		const maxVisible = 5;

		if (totalPages <= maxVisible) {
			for (let i = 1; i <= totalPages; i++)
				pages.push({ type: "page", value: i });
		} else {
			pages.push({ type: "page", value: 1 });

			if (currentPage > 3) pages.push({ type: "ellipsis", id: "start" });

			const start = Math.max(2, currentPage - 1);
			const end = Math.min(totalPages - 1, currentPage + 1);

			for (let i = start; i <= end; i++) pages.push({ type: "page", value: i });

			if (currentPage < totalPages - 2)
				pages.push({ type: "ellipsis", id: "end" });

			pages.push({ type: "page", value: totalPages });
		}

		return pages;
	};

	return (
		<div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
			<button
				type="button"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg border border-gray-300
          hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
			>
				<ChevronLeft size={16} />
				Anterior
			</button>

			<div className="flex items-center gap-1">
				{getPageNumbers().map((item) =>
					item.type === "ellipsis" ? (
						<span key={item.id} className="px-2 py-1 text-sm text-gray-400">
							...
						</span>
					) : (
						<button
							key={item.value}
							type="button"
							onClick={() => onPageChange(item.value)}
							className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
								currentPage === item.value
									? "bg-blue-600 text-white font-medium"
									: "hover:bg-gray-100 text-gray-700"
							}`}
						>
							{item.value}
						</button>
					),
				)}
			</div>

			<button
				type="button"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg border border-gray-300
          hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
			>
				Siguiente
				<ChevronRight size={16} />
			</button>
		</div>
	);
};

export default Pagination;
