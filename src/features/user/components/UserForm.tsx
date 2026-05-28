// Components
import { Button, Input } from '../../../components'

import { useUserForm } from '../hooks/useUserForm'

const UserForm = () => {
  const { handleSubmit, name, email, setName, loading, setEmail, } = useUserForm()
    
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

      <Button variant='green' type='submit'>
        {loading ? 'Guardando...' : 'Guardar'}
      </Button>
    </form>
  )
}

export default UserForm