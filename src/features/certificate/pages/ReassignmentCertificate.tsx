import { useNavigate } from "react-router-dom"
import { Button, Layout } from "../../../components"
import ReassignmentForm from "../components/ReassignmentForm"

const ReassignmentCertificate = () => {

    const navigateTo = useNavigate()
    const newReassignment = () => navigateTo('/certificates')

    return (
        <Layout>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text 2xl font-bold mb-4">Registrar nueva marca</h2>
                    <Button variant='green' type='submit' onClick={newReassignment}>
                        {'Registros'}
                    </Button>
                </div>
                <div className="max-w-md mx-auto bg-white p-6 shadow rounded-md">
                    <ReassignmentForm />
                </div>
            </div>
        </Layout>
    )

}


export default ReassignmentCertificate