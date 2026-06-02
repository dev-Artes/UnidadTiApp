import BrandForm from "../components/BrandForm"
import { Button, Layout } from "../../../components"

import { useNavigateTo } from "../../../hooks/useNavigateTo"


const CreateBrand = () => {
    const { toNewBrand } = useNavigateTo()
    return (
        <Layout>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text 2xl font-bold mb-4">Registrar nueva marca</h2>
                    <Button variant='green' type='submit' onClick={toNewBrand}>
                        {'Marcas'}
                    </Button>
                </div>
                <div className="max-w-md mx-auto bg-white p-6 shadow rounded-md">
                    <BrandForm />
                </div>
            </div>
        </Layout>
    )
}

export default CreateBrand