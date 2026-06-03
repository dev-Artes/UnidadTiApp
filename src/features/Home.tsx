import { Button, Layout } from '../components'
import { useNavigateTo } from '../hooks/useNavigateTo'


const Home = () => {

    const { toAllDevices, toAllBrands, toAllSoftware, toNewCertificate, toNewReassignment } = useNavigateTo()


    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">¡Bienvenido 🤪!</h2>
                <div className="bg-white p-6 shadow rounded">
                <div className="flex justify-center space-x-4">
                    <Button variant='green' type='submit' onClick={toNewCertificate}>
                        {'Nueva acta'}
                    </Button>
                    <Button variant='yellow' type='submit' onClick={toNewReassignment} >
                        {'Reasignacion de equipos'}
                    </Button>
                    <Button variant='blue' type='submit' onClick={toAllBrands} >
                        {'Marcas'}
                    </Button>
                    <Button variant='blue' type='submit' onClick={toAllDevices} >
                        {'Dispositivos'}
                    </Button>
                    <Button variant='blue' type='submit' onClick={toAllSoftware} >
                        {'Software'}
                    </Button>
                </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home