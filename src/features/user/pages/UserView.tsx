import type { User, Role } from '../../../types/entidades'

import { Button, Layout, Table, StateHandler } from '../../../components/'

import { useUser } from '../hooks/'
import { useNavigateTo } from '../../../hooks/useNavigateTo'
import { useAuth } from '../../../hooks/useAut'

import { userTableConfig } from '../table.config'

const UserViews = () =>  {
    const { toNewUser } = useNavigateTo()
    const { userRole } = useAuth()

    const { error, users, loading, changeUserRole, toggleActive } = useUser()

    const isAdmin = userRole === 'admin'

    const renderCell = ( item: User, header: {
        id: string
        label: string
        field: keyof User | string
        }
    ) => {
        if (header.field === 'role') {
            if (isAdmin) {
                return (
                    <select
                        value={item.role}
                        onChange={(e) => changeUserRole(item.id, e.target.value as Role)}
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                    >
                        <option value="analista">Analista</option>
                        <option value="jefe_ti">Jefe Ti</option>
                        <option value="admin">Admin</option>
                    </select>
                )
            }
            return <span>{item.role === 'jefe_ti' ? 'Jefe Ti' : item.role.charAt(0).toUpperCase() + item.role.slice(1)}</span>
        }

        if (header.field === 'active') {
            if (isAdmin) {
                return (
                    <button
                        onClick={() => toggleActive(item.id, !item.active)}
                        className={`relative inline-flex items-center w-11 h-6 rounded-full transition-colors duration-200
                            ${item.active ? 'bg-green-500' : 'bg-gray-300'}`}
                    >
                        <span
                            className={`inline-block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200
                                ${item.active ? 'translate-x-6' : 'translate-x-1'}`}
                        />
                    </button>
                )
            }
            return (
                <span className={`px-2 py-1 rounded text-xs font-medium ${item.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.active ? 'Activo' : 'Inactivo'}
                </span>
            )
        }

        return String(item[header.field as keyof User])
    }

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4">
                <div className='flex justify-between items-center'>
                    <h2 className="text-2xl font-bold mb-4">Usuarios registrados</h2>
                    {isAdmin && (
                        <Button variant='green' type='submit' onClick={toNewUser}>
                            {'Nuevo Usuario'}
                        </Button>
                    )}
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

