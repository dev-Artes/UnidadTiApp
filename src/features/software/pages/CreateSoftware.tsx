import { useNavigate } from "react-router-dom"

import { Button, Layout } from "../../../components"

import SoftwareForm from "../components/SoftawreForm"


const CreateSoftware = () => {
    const navigateTo = useNavigate()
    const softwareRedirect = () => navigateTo('/softwares')

    return (
        <Layout>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <h2 className="text-2xl font-bold mb-4">Nuevo registro</h2>
                    <Button variant='green' type='submit' onClick={softwareRedirect}>
                        {'Softwares'}
                    </Button>
                </div>
                <div className="max-w-md mx-auto bg-white p-6 shadow rounded-md">
                    <SoftwareForm />
                </div>
            </div>
        </Layout>
    )
}


export default CreateSoftware