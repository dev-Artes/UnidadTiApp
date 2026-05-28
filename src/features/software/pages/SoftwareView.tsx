import { useNavigate } from "react-router-dom"

import { useSoftware } from "../hooks/useSoftware"

import { Button, Layout, StateHandler, Table, TableActions } from "../../../components"

import { headersTableConfig } from "../table.config"
import type { Software } from "../../../types/entidades"



const SoftwareView = () => {
    const navigateTo = useNavigate()
    const newSoftwareRedirect = () => navigateTo('/software/create')

    const { error, loading, softwareList, handleDelete, handleToggleActive } = useSoftware()

    const renderCell = ( item: Software, header: {
        id: string
        label: string
        field: keyof Software | string
    }) => {
        if ( header.field === 'name' ) {
            return item.name
        }
        if ( header.field === 'actions' ) { 
            return (
                <TableActions
                    onDelete={() => handleDelete(item.id)}
                    onActive={() => handleToggleActive(item)} 
                    isActive={item.active}    
                />
            )
        }
    }

    return (
        <Layout>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">Equipos registrados</h2>
                    <Button variant="green" type="submit" onClick={newSoftwareRedirect}>
                        {'Nuevo registro'}
                    </Button>
                </div>
                <div className="bg-white p-6 shadow rounded">
                    <StateHandler
                        loading={loading}
                        error={error}
                    >
                        <Table
                            data={ softwareList }
                            headers={ headersTableConfig.headers }
                            renderCellContent={ renderCell }
                        />
                    </StateHandler>
                </div>
            </div>
        </Layout>
    )

}


export default SoftwareView