import { useState } from "react"
import type { CertificateRecord } from "../../../types/entidades"

interface CertificateDetailProps {
    item: CertificateRecord
    onClose: () => void
}

const DatailItem = ({ item, onClose }: CertificateDetailProps) => {
    const [showAllSoftware, setShowAllSoftware] = useState(false)
    const maxSoftware = 6

    const getSoftwareList = () => {
        if (!item.software) return []
        if (showAllSoftware || item.software.length <= maxSoftware) return item.software
        return item.software.slice(0, maxSoftware)
    }

    const typeMap: Record<string, { label: string; color: string }> = {
        entrega: { label: 'Entrega', color: 'bg-sky-100 text-sky-800 border-sky-200' },
        reasignacion: { label: 'Reasignación', color: 'bg-violet-100 text-violet-800 border-violet-200' },
        prestamo: { label: 'Préstamo', color: 'bg-amber-100 text-amber-800 border-amber-200' },
        periferico: { label: 'Periféricos', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    }
    const typeInfo = typeMap[item.type ?? ''] ?? typeMap.entrega
    const typeLabel = typeInfo.label
    const typeColor = typeInfo.color

    return (
        <>
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
                onClick={onClose}
            />

            <div className="fixed inset-y-0 right-0 w-full max-w-lg bg-white shadow-2xl z-50 flex flex-col animate-slide-in">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Detalle del acta
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">
                                Acta N° {item.certificateNumber}
                            </h3>
                            <p className="text-sm text-gray-500">{item.computer?.internalTag}</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${typeColor}`}>
                            {typeLabel}
                        </span>
                        {item.created_by?.name && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                {item.created_by.name}
                            </span>
                        )}
                    </div>

                    <div className="space-y-1">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Equipo
                        </h4>
                        <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Marca</span>
                                <span className="text-sm font-medium text-gray-900">{item.computer?.brand?.name}</span>
                            </div>
                            <div className="border-t border-gray-200" />
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Modelo</span>
                                <span className="text-sm font-medium text-gray-900">{item.computer?.model}</span>
                            </div>
                            <div className="border-t border-gray-200" />
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">N° Serie</span>
                                <span className="text-sm font-medium text-gray-900">{item.computer?.serialNumber}</span>
                            </div>
                            <div className="border-t border-gray-200" />
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Tipo</span>
                                <span className="text-sm font-medium text-gray-900">{item.computer?.type?.name}</span>
                            </div>
                            <div className="border-t border-gray-200" />
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Asignado a</span>
                                <span className="text-sm font-medium text-gray-900">{item.computer?.assignedTo || "—"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Observaciones
                        </h4>
                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-sm text-gray-700">{item.observations || "Sin observaciones"}</p>
                        </div>
                    </div>

                    {item.software && item.software.length > 0 && (
                        <div className="space-y-1">
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                Software ({item.software.length})
                            </h4>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="flex flex-wrap gap-2">
                                    {getSoftwareList().map((soft, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-700"
                                        >
                                            {soft.name}
                                        </span>
                                    ))}
                                </div>
                                {item.software.length > maxSoftware && (
                                    <button
                                        type="button"
                                        onClick={() => setShowAllSoftware(!showAllSoftware)}
                                        className="mt-3 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition"
                                    >
                                        {showAllSoftware
                                            ? "Mostrar menos"
                                            : `Ver todos (${item.software.length})`}
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default DatailItem
