import UserForm from "../components/UserForm"
import { Button, Layout } from "../../../components"

import { useNavigateTo } from "../../../hooks/useNavigateTo"

const CreateUser = () => {
    
    const { toAllUsers } = useNavigateTo()
    
    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">Nuevo usuario</h2>
                    <Button variant='green' type='submit' onClick={toAllUsers}>
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