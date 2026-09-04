import { useMemo, useState } from "react"
import { Button, Layout, StateHandler, Table, TableActions } from "../../../components"

import { useCertificate, useCertificatePDF } from "../hooks/"
import { useNavigateTo } from "../../../hooks/useNavigateTo"

import { headersTableConfig } from "../table.config"

import { CertificateEdit, DatailItem } from "../components/"
import { fullDateNumber } from "../../../utils/convertTimestamp"
import type { Certificate, CertificateRecord } from "../../../types/entidades"

const CertificateView = () => {
    
    const { toNewCertificate, toNewReassignment} = useNavigateTo()
    
    const { isTypeMenuOpen, setIsTypeMenuOpen, typeOptions, otherDevices, certificates, handleDetail, typeFilter, setTypeFilter, searchText, handleFilterChange, setSearchText, setCertificates, handleEdit, detailItem, tagPrefixes, editingItem, setDetailItem, error,  activeFilter, loading, setEditingItem, activeSubFilter, setActiveSubFilter } = useCertificate()  
    
    const { generatePDF } = useCertificatePDF()
    const handleGeneratePDF = ( item: Certificate ) => generatePDF( item )

    const [sortField, setSortField] = useState<string>("")
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

    const handleSort = (field: string) => {
        if (sortField === field) {
            setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
    };

    const sortedCertificates = useMemo(() => {
        if (!sortField) return certificates;
        return [...certificates].sort((a, b) => {
            let valA = "";
            let valB = "";
            if (sortField === "certificateNumber") {
                valA = String(a.certificateNumber ?? "");
                valB = String(b.certificateNumber ?? "");
            } else if (sortField === "internalTag") {
                valA = a.computer?.internalTag ?? "";
                valB = b.computer?.internalTag ?? "";
            } else if (sortField === "assignedTo") {
                valA = a.computer?.assignedTo ?? "";
                valB = b.computer?.assignedTo ?? "";
            } else if (sortField === "date") {
                valA = String(a.created_at?.toMillis() ?? 0);
                valB = String(b.created_at?.toMillis() ?? 0);
            } else if (sortField === "type") {
                valA = a.type ?? "";
                valB = b.type ?? "";
            }
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
            return sortDirection === "asc"
                ? valA.localeCompare(valB)
                : valB.localeCompare(valA);
        });
    }, [certificates, sortField, sortDirection]);

    const tabs = ['ALL', ...tagPrefixes.sort(), 'OTROS']
    const tabLabels: Record<string, string> = {
        ALL: 'Todos',
        OTROS: 'Otros',
    }

    const renderCell = ( item: CertificateRecord, header: {
        id: string
        label: string
        field: keyof CertificateRecord | string
        }
    ) => {
        if ( header.field === 'certificateNumber' ) {
            return `${item.certificateNumber}`
        }
        if ( header.field === 'internalTag' ) {
            return `${item.computer?.internalTag ? item.computer?.internalTag : '-'}`
        }
        if ( header.field === 'assignedTo') {
            return `${item.computer?.assignedTo}`
        }
        if (header.field === 'type') {
            const typeMap: Record<string, string> = {
                entrega: 'Entrega',
                reasignacion: 'Reasignación',
                prestamo: 'Préstamo',
                periferico: 'Periféricos',
            }
            return typeMap[item.type ?? ''] ?? 'Entrega'
        }
        if ( header.field === 'date') {
            return `${item.created_at ? fullDateNumber(item.created_at) : ''}`
        }
        if ( header.field === 'actions' ) {
            return(
                <TableActions
                    onEdit={() => handleEdit(item)}
                    onDetail={() => handleDetail(item)}
                    onPDF={ () => handleGeneratePDF(item)}
                />
            )
        }
    }


    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4">
                <div className='flex justify-between items-center'>
                    <h2 className="text-2xl font-bold mb-4">Registros</h2>
                    <div className="flex justify-center space-x-4">
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsTypeMenuOpen(prev => !prev)}
                                className="px-4 py-2 border rounded bg-white min-w-56 text-left"
                            >
                                {
                                    typeOptions.find(t => t.value === typeFilter)?.label ??
                                    'Tipo de entrega'
                                }
                            </button>
                            
                            {isTypeMenuOpen && (
                                <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg">
                                    {typeOptions.map(option => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => {
                                                setTypeFilter(
                                                    option.value as 'all' | 'reasignacion'
                                                )
                                                setIsTypeMenuOpen(false)
                                            }}
                                            className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={typeFilter === option.value}
                                                readOnly
                                            />

                                            <span>{option.label}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <input
                            type="text"
                            placeholder="PCART-XXYY"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="w-full md:w-80 px-3 py-2 border rounded"
                        />
                            <Button variant="green" type="submit" onClick={toNewCertificate}>
                                {'Nueva Acta'}
                            </Button>
                            <Button variant="yellow" type="submit" onClick={toNewReassignment}>
                                {'Reasignación'}
                            </Button>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => handleFilterChange(tab)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition
                                ${activeFilter === tab
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                                }`}
                        >
                            {tabLabels[tab] ?? tab}
                        </button>
                    ))}
                    
                    {activeFilter === 'OTROS' && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {otherDevices.map(type => (
                                <button
                                    key={type.id}
                                    onClick={() =>
                                        setActiveSubFilter(
                                            activeSubFilter === type.name ? null : type.name
                                        )
                                    }
                                    className={`px-3 py-1 rounded-full text-xs border transition
                                        ${activeSubFilter === type.name
                                            ? 'bg-gray-700 text-white border-gray-700'
                                            : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                                    }`}
                                >
                                    {type.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                
                <div className="bg-white p-6 shadow rounded">
                    <StateHandler
                        loading={loading}
                        error={error}
                    >
                        <Table
                            data = { sortedCertificates }
                            headers = { headersTableConfig.headers }
                            renderCellContent = { renderCell }
                            sortField={sortField}
                            sortDirection={sortDirection}
                            onSort={handleSort}
                        />
                        {
                            editingItem && (
                                <CertificateEdit
                                    item={editingItem}
                                    onClose={() => setEditingItem(null)}
                                    onUpdated={(updatedItem) => {
                                        setCertificates((prev) =>
                                            prev.map(c => c.id === updatedItem.id ? { ...c, ...updatedItem } : c)
                                        )
                                    }}
                                />
                            )
                        }
                        {
                            detailItem && (
                                <DatailItem
                                    item={ detailItem }
                                    onClose={() => setDetailItem( null )}
                                />
                            )
                        }
                    </StateHandler>
                </div>
            </div>
        </Layout>
    );
}

export default CertificateView