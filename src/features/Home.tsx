import { Button, Layout } from '../components'
import { useNavigateTo } from '../hooks/useNavigateTo'
// import { migrateCertificate } from '../services'
// import { migrateComputer } from '../services/computer-service'
// import { dataPCART, } from '../utils/DataToMigrate'

const Home = () => {

    const { toAllDevices, toAllBrands, toAllSoftware, toNewCertificate, toNewReassignment } = useNavigateTo()

    
    // const pushData = async  () => {
    //     for ( const certificate of dataPCART ) {
    //         await migrateComputer(certificate.computer)
    //         await migrateCertificate(certificate)
    //     }
    // }

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
                    <Button variant='blue' type='submit' onClick={toAllBrands} >
                        {'Marcas'}
                    </Button>
                    <Button variant='blue' type='submit' onClick={toAllDevices} >
                        {'Dispositivos'}
                    </Button>
                    <Button variant='blue' type='submit' onClick={toAllSoftware} >
                        {'Software'}
                    </Button>
                    {/* <Button variant='red' type='submit' onClick={pushData} >
                        {'PUSH'}
                    </Button> */}

                </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home