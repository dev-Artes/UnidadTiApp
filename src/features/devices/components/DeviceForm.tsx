import { Button, Input } from "../../../components"

import { useDeviceForm } from "../hooks/useDeviceForm"


const DeviceForm = () => {

    const { loading, setDevice, handleSubmit, device } = useDeviceForm()

    return (
        <form onSubmit={ handleSubmit }>
            <Input
                id={'brand'} 
                value={device}
                type={'text'}
                name={'brand'}            
                placeholder={'Ej.: Notebook'}
                handleChange={(e) => setDevice(e.target.value)} 
            />
            <Button variant='green' type='submit'>
                {loading ? 'Guardando...' : 'Guardar'}
            </Button>
        </form>
    )

}

export default DeviceForm