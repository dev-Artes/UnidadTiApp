import { useNavigate } from 'react-router-dom'
import { Button, Layout } from '../components'

const Home = () => {

    const navigateTo = useNavigate()

    const navigateToReports = () => {
        navigateTo('/certificates')
    }

    const navigateToReassignment = () => {
        navigateTo('/certificate/reassignment')
    }

    return (
        <Layout>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">¡Bienvenido 🤪!</h2>
                <div className="bg-white p-6 shadow rounded">
                <div className="flex justify-center space-x-4">
                    <Button variant='green' type='submit' onClick={navigateToReports}>
                        {'Actas de entrega'}
                    </Button>
                    <Button variant='green' type='submit' onClick={navigateToReassignment} >
                        {'Reasignacion de equipos'}
                    </Button>
                </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home