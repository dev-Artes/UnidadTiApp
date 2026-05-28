import { useNavigate } from "react-router-dom"
import { Button, Layout } from "../../../components"
import UserForm from "../components/UserForm"

const CreateUser = () => {
    
    const navigateTo = useNavigate()
    
    const newUserRedirect = () => {
        navigateTo('/users')
    }

    return (
        <Layout>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text 2xl font-bold mb-4">Nuevo Usuario</h2>
                    <Button variant='green' type='submit' onClick={newUserRedirect}>
                        {'Usuarios'}
                    </Button>
                </div>
                <div className="max-w-md mx-auto bg-white p-6 shadow rounded-md">
                    <UserForm />
                </div>
            </div>
        </Layout>
    )
}

export default CreateUser