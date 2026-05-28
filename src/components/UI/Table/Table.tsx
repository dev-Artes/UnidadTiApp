import React from 'react'

interface Header<T> {
  id: string
  label: string
  field: keyof T | string
}

interface TableProps<T> {
  data: T[]
  headers: Header<T>[]
  renderCellContent?: (
    item: T,
    header: Header<T>
  ) => React.ReactNode
}

const Table = <T extends { id: string }>({ data, headers, renderCellContent }: TableProps<T>) => {
    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        {headers.map((header) => (
                        <th key={header.id} className="px-4 py-2 text-center">
                            {header.label}
                        </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-5">

                        {headers.map((header) => (
                            <td key={header.id} className="px-4 py-2 text-center align-middle ">

                            {renderCellContent
                                ? renderCellContent(item, header)
                                : String(item[header.field as keyof T])
                            }

                            </td>
                        ))}

                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Table