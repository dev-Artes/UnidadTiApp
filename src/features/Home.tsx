import { useNavigate } from 'react-router-dom'
import { Button, Layout } from '../components'
import { migrateCertificate } from '../services'
import { dataPCISUCH, dataPCLE, dataToPush } from '../utils/DataToMigrate'

const Home = () => {

    const navigateTo = useNavigate()

    const navigateToReports = () => {
        navigateTo('/certificates')
    }

    const navigateToReassignment = () => {
        navigateTo('/certificate/reassignment')
    }

    const submitData = async () => {

        for (const certificate of dataPCLE) {
            // await addBrand(certificate.computer.brand)
            // await addDevice(certificate.computer.type)
            // await addComputer(certificate.computer)
            // await migrateCertificate(certificate)
        }
        alert(`${dataToPush.length} certificados migrados`)
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

                    <Button variant='blue' type='submit' onClick={submitData} >
                        {'EnviarData'}
                    </Button>
                </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home