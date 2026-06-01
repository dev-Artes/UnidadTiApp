import { useNavigate } from 'react-router-dom'
import { Button, Layout } from '../components'

const Home = () => {

    const navigateTo = useNavigate()

    const navigateDevices = () => navigateTo('/devices')
    const navigateToBrands = () => navigateTo('/brands')
    const navigateToSoftware = () => navigateTo('/softwares')
    const navigateToReports = () =>  navigateTo('/certificate/create')
    const navigateToReassignment = () => navigateTo('/certificate/reassignment')

    return (
        <Layout>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">¡Bienvenido 🤪!</h2>
                <div className="bg-white p-6 shadow rounded">
                <div className="flex justify-center space-x-4">
                    <Button variant='green' type='submit' onClick={navigateToReports}>
                        {'Nueva acta'}
                    </Button>
                    <Button variant='yellow' type='submit' onClick={navigateToReassignment} >
                        {'Reasignacion de equipos'}
                    </Button>
                    <Button variant='blue' type='submit' onClick={navigateToBrands} >
                        {'Marcas'}
                    </Button>
                    <Button variant='blue' type='submit' onClick={navigateDevices} >
                        {'Dispositivos'}
                    </Button>
                    <Button variant='blue' type='submit' onClick={navigateToSoftware} >
                        {'Software'}
                    </Button>

                </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home