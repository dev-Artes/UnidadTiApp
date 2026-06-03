import BrandForm from "../components/BrandForm"
import { Button, Layout } from "../../../components"

import { useNavigateTo } from "../../../hooks/useNavigateTo"


const CreateBrand = () => {
    const { toAllBrands } = useNavigateTo()
    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">Nueva marca</h2>
                    <Button variant='green' type='submit' onClick={toAllBrands}>
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