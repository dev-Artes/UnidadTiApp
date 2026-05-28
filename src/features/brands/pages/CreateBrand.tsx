import { useNavigate } from "react-router-dom"
import { Button, Layout } from "../../../components"
import BrandForm from "../components/BrandForm"


const CreateBrand = () => {
    const navigateTo = useNavigate()
    
    const newBrandRedirect = () => {
        navigateTo('/brands')
    }

    return (
        <Layout>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text 2xl font-bold mb-4">Registrar nueva marca</h2>
                    <Button variant='green' type='submit' onClick={newBrandRedirect}>
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