import { Button, Layout } from "../../../components"
import DeviceForm from "../components/DeviceForm"
import { useNavigateTo } from "../../../hooks/useNavigateTo"

const CreateDevice = () =>{
    const { toAllDevices } = useNavigateTo()
    return (
        <Layout>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <h2 className="text-2xl font-bold mb-4">Nuevo equipo</h2>
                    <Button variant='green' type='submit' onClick={toAllDevices}>
                        {'Equipos'}
                    </Button>
                </div>
                <div className="max-w-md mx-auto bg-white p-6 shadow rounded-md">
                    <DeviceForm />
                </div>
            </div>
        </Layout>
    )
}

export default CreateDevice