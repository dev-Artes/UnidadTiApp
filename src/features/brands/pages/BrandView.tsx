import { useNavigate } from "react-router-dom"
import { Button, Layout, Table, StateHandler, TableActions } from "../../../components"
import { useBrand } from "../hooks/useBrand"
import { headersTableConfig } from "../table.config"
import type { Brand } from "../../../types/entidades"

const BrandView = () => {

    const { error, loading, brands, deleteBrandById } = useBrand()

    const navigateTo = useNavigate()

    const newBrandRedirect = () => {
        navigateTo('brand/create')
    }

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
                    onDelete={() => deleteBrandById(item.id)}
                />
            )
        }

    }
    
    return (
        <Layout>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">Marcas registradas</h2>
                    <Button variant="green" type="submit" onClick={newBrandRedirect}>
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