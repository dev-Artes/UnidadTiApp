// Components
import { Button, Input } from '../../../components'
import type { Role } from '../../../types/entidades'

import { useUserForm } from '../hooks/'

const UserForm = () => {
  const { handleSubmit, name, email, role, setName, setEmail, setRole, loading } = useUserForm()
    
  return (
    <form onSubmit = { handleSubmit }>
      <label>Nombre:</label>
      <Input 
        id = { 'name' }
        type = { 'text' }
        name = { 'name' }
        value = { name }
        placeholder = { 'Nombre' }
        handleChange = { (e) => setName(e.target.value) }
        required = { true }        
      />
      
      <label>Correo electronico</label>
      <Input
        id = { 'email' }
        type = { 'email' }
        name = { 'email' }
        value = { email }
        placeholder = { 'Correo electronico' }
        handleChange = {(e) => setEmail(e.target.value)}
        required = { true }
      />

      <label>Rol</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as Role)}
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
      >
        <option value="analista">Analista</option>
        <option value="jefe_ti">Jefe Ti</option>
        <option value="admin">Admin</option>
      </select>

      <Button variant='green' type='submit'>
        {loading ? 'Guardando...' : 'Guardar'}
      </Button>
    </form>
  )
}

export default UserForm
