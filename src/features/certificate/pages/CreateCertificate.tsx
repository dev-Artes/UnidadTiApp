import { Button, Layout } from "../../../components"
import { CertificateForm } from "../components/"
import { useNavigateTo } from "../../../hooks/useNavigateTo"

const CreateCertificate = () => {
    
    const { toAllCertificates } = useNavigateTo()
    
    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">Generar nueva acta</h2>

                    <Button variant='green' type='submit' onClick={toAllCertificates}>
                        {'Registros'}
                    </Button>
                </div>
                <div className="max-w-md mx-auto bg-white p-6 shadow rounded-md">
                    <CertificateForm />
                </div>
            </div>
        </Layout>
    )
}

export default CreateCertificate