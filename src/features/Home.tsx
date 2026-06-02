import { Button, Layout } from '../components'
import { useNavigateTo } from '../hooks/useNavigateTo'

const Home = () => {

    const { toAllDevices, toAllBransds, toAllSoftware, toNewCertificate, toNewReassignment } = useNavigateTo()

    return (
        <Layout>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">¡Bienvenido 🤪!</h2>
                <div className="bg-white p-6 shadow rounded">
                <div className="flex justify-center space-x-4">
                    <Button variant='green' type='submit' onClick={toNewCertificate}>
                        {'Nueva acta'}
                    </Button>
                    <Button variant='yellow' type='submit' onClick={toNewReassignment} >
                        {'Reasignacion de equipos'}
                    </Button>
                    <Button variant='blue' type='submit' onClick={toAllBransds} >
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