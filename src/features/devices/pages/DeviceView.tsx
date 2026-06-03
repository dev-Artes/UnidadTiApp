import type { Device } from "../../../types/entidades"

import { useDevice } from "../hooks/useDevice"
import { useNavigateTo } from "../../../hooks/useNavigateTo"

import { Button, Layout, StateHandler, Table, TableActions } from "../../../components"
import { headersTableConfig } from "../table.config"


const DeviceView = () => {

    const { toNewDevice } = useNavigateTo()
    const { error, loading, devices, deleteDeviceById } = useDevice()

    const renderCell = ( item: Device, header: {
        id: string
        label: string
        field: keyof Device | string
    }) => {
        if ( header.field === 'name' ) {
            return item.name
        }
        if ( header.field === 'actions' ) { 
            return (
                <TableActions
                    onDelete={() => {
                        const confirmed = window.confirm(`¿Está seguro de eliminar la marca "${item.name}"?`)
                        if (confirmed) deleteDeviceById(item.id)
                    }}
                />
            )
        }
    }

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">Dispositivos registrados</h2>
                    <Button variant="green" type="submit" onClick={toNewDevice}>
                        {'Nuevo dispositivo'}
                    </Button>
                </div>
                <div className="bg-white p-6 shadow rounded">
                    <StateHandler
                        loading={loading}
                        error={error}
                    >
                        <Table
                            data={ devices }
                            headers={ headersTableConfig.headers }
                            renderCellContent={ renderCell }
                        />
                    </StateHandler>
                </div>
            </div>
        </Layout>
    )
}


export default DeviceView