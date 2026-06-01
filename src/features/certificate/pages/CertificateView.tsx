import { useNavigate } from "react-router-dom"
import { Button, Layout, StateHandler, Table, TableActions } from "../../../components"
import type { CertificateRecord } from "../../../types/entidades"
import { useCertificate } from "../hooks/useCertificate"
import { headersTableConfig } from "../table.config"
import CertificateEdit from "../components/CertificateEdit"
import DatailItem from "../components/DetailItem"

const CertificateView = () => {
    const { certificates, handleDetail, setCertificates, handleEdit, detailItem, tagPrefixes, editingItem, setDetailItem, error, setActiveFilter, activeFilter, loading, setEditingItem } = useCertificate()

    const navigateTo = useNavigate()
    const newCertificateRedirect = () => navigateTo('/certificate/create')
    
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
        if ( header.field === 'type') {
            return item.computer?.type?.name  ?? '-'
        }   
        if ( header.field === 'serialNumber') {
            return item.computer?.serialNumber ? item.computer?.serialNumber : '-'
        }
        if ( header.field === 'brand') {
            return item.computer?.brand ? item.computer?.brand.name : '-'
        }  
        if ( header.field === 'assignedTo') {
            return `${item.computer?.assignedTo}`
        }

        // if ( header.field === 'date') {
        //     return `${item.date ? fullDateNumber(item.date) : ''}`
        // }
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
                    <div className="flex items-center">
                        <Button variant="green" type="submit" onClick={newCertificateRedirect}>
                            {'Nueva Acta'}
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