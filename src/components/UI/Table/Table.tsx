import { useState } from "react";
import Pagination from "../Pagination/Pagination";

interface Header<T> {
	id: string;
	label: string;
	field: keyof T | string;
}

interface TableProps<T> {
	data: T[];
	headers: Header<T>[];
	renderCellContent?: (item: T, header: Header<T>) => React.ReactNode;
	itemsPerPage?: number;
}

const Table = <T extends { id: string }>({
	data,
	headers,
	renderCellContent,
	itemsPerPage = 10,
}: TableProps<T>) => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(data.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentData = data.slice(startIndex, startIndex + itemsPerPage);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden">
			<div className="overflow-auto max-h-[calc(100vh-12rem)]">
				<table className="table-auto w-full border-collapse">
					<thead className="bg-gray-100 sticky top-0">
						<tr>
							{headers.map((header) => (
								<th key={header.id} className="px-4 py-2 text-center">
									{header.label}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{currentData.map((item) => (
							<tr
								key={item.id}
								className="border-b border-gray-200 hover:bg-gray-50"
							>
								{headers.map((header) => (
									<td
										key={header.id}
										className="px-4 py-2 text-center align-middle"
									>
										{renderCellContent
											? renderCellContent(item, header)
											: String(item[header.field as keyof T])}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export default Table;
