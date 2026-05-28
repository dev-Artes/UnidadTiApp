import { useNavigate } from 'react-router-dom'

// components
import { Button, Layout, Table, StateHandler, TableActions } from '../../../components/'

import { useUser } from '../hooks/useUser'
import { userTableConfig } from '../table.config'
import type { User } from '../../../types/entidades'

const UserViews = () =>  {
    const navigateTo = useNavigate()

    const { error, users, loading, deleteUserById } = useUser()

    const newUserRedirect = () => {
        navigateTo('/user/create')
    }

    const renderCell = ( item: User, header: {
        id: string
        label: string
        field: keyof User | string
        }
    ) => {
        
        if (header.field === 'actions') {
            return (
                <TableActions
                    onDelete={() => deleteUserById(item.id)}
                />
            )
        }

        return String(item[header.field as keyof User])
    }

    
    
    return (
        <Layout>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <h2 className="text-2xl font-bold mb-4">Usuarios registrados</h2>
                    <Button variant='green' type='submit' onClick={newUserRedirect}>
                        {'Nuevo Usuario'}
                    </Button>
                </div>
                <div className="bg-white p-6 shadow rounded">
                    <StateHandler
                      loading={loading}
                      error={error}
                    >
                        <Table 
                            data={ users }
                            headers={ userTableConfig.headers }
                            renderCellContent={ renderCell }
                        />
                    </StateHandler>
                </div>
            </div>
        </Layout>
    )
}

export default UserViews

