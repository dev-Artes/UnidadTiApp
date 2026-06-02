import { useSoftwareForm } from "../hooks/"
import { Button, Input } from "../../../components"

const SoftwareForm = () => {

    const { loading, setSoftware, software, handleSubmit } = useSoftwareForm()

    return (
        <form onSubmit={handleSubmit}>
            <Input
                id={'software'}
                value={software}
                type={'text'}
                name={'software'}
                placeholder={'Ej.: Google Chrome'}
                handleChange={(e) => setSoftware(e.target.value)} 
            />
            <Button variant='green' type='submit'>
                {loading ? 'Guardando...' : 'Guardar'}
            </Button>
        </form>
    )
}


export default SoftwareForm