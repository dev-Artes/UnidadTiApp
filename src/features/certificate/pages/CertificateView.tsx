import { Button, Layout, StateHandler, Table, TableActions } from "../../../components"

import { useCertificate } from "../hooks/"
import { useNavigateTo } from "../../../hooks/useNavigateTo"

import { headersTableConfig } from "../table.config"

import { CertificateEdit, DatailItem } from "../components/"
import { fullDateNumber } from "../../../utils/convertTimestamp"
import type { CertificateRecord } from "../../../types/entidades"

const CertificateView = () => {
    
    const { toNewCertificate, toNewReassignment} = useNavigateTo()
    
    const { devices, certificates, handleDetail, setCertificates, handleEdit, detailItem, tagPrefixes, editingItem, setDetailItem, error, setActiveFilter, activeFilter, loading, setEditingItem, activeSubFilter, setActiveSubFilter } = useCertificate()  
    
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
            return item.type === 'reasignacion' ? 'Reasignación' : 'Entrega'
        }
        if ( header.field === 'date') {
            return `${item.created_at ? fullDateNumber(item.created_at) : ''}`
        }
        if ( header.field === 'actions' ) {
            return(
                <TableActions
                    onEdit={() => handleEdit(item)}
                    onDetail={() => handleDetail(item)}
                />
            )
        }
    }


    return (
        <Layout>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <h2 className="text-2xl font-bold mb-4">Registros</h2>
                    <div className="flex justify-center space-x-4">
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
                            onClick={() => setActiveFilter(tab)}
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
                            {devices.map(type => (
                                <button
                                    key={type.id}
                                    onClick={() => setActiveSubFilter(
                                        activeSubFilter === type.name ? null : type.name
                                    )}
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
                            data = { certificates }
                            headers = { headersTableConfig.headers }
                            renderCellContent = { renderCell }
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