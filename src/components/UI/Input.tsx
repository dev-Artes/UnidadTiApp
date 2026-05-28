
interface InputProps {
  id: string
  name: string
  type: 'password' | 'email' | 'text'
  placeholder?: string
  value: string
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  disabled?: boolean
  // checked?: boolean

}

const Input = ({ id, name, disabled, type, placeholder, value, handleChange, required }: InputProps) => {
  return ( 
    <input
      className="border rounded p-2 w-full mb-4"
      id = { id }
      type = { type }
      name = { name }
      // checked = { checked }
      placeholder = { placeholder }
      value = { value } 
      onChange = { handleChange }
      required = { required }
      disabled = { disabled }
    />
  )
}

export default Input
