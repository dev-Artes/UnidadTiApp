import { Button, Layout, Table, StateHandler, TableActions } from "../../../components"

import { useBrand } from "../hooks/"
import { useNavigateTo } from "../../../hooks/useNavigateTo"

import type { Brand } from "../../../types/entidades"

import { headersTableConfig } from "../table.config"

const BrandView = () => {

    const { error, loading, brands, deleteBrandById } = useBrand()

    const { toNewBrand } = useNavigateTo()


    const renderCell = ( item: Brand, header: {
        id: string
        label: string
        field: keyof Brand | string
        }
    ) => {
        if ( header.field === 'name' ) {
            return item.name
        }
        if ( header.field === 'actions' ) {
            return(
                <TableActions
                    onDelete={() => {
                        const confirmed = window.confirm(`¿Está seguro de eliminar la marca "${item.name}"?`)
                        if (confirmed) deleteBrandById(item.id)
                    }}
                />
            )

        }

    }
    
    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">Marcas registradas</h2>

                    <Button variant="green" type="submit" onClick={toNewBrand}>
                        {'Nueva marca'}
                    </Button>
                </div>
                <div className="bg-white p-6 shadow rounded">
                    <StateHandler
                        loading={loading}
                        error={error}
                    >
                        <Table
                            data={ brands }
                            headers={ headersTableConfig.headers }
                            renderCellContent={ renderCell }
                        />
                    </StateHandler>
                </div>
            </div>
        </Layout>
    )
}

export default BrandView