import { Button, Input } from "../../../components"
import { useCertificateForm } from "../hooks/useCertificateForm"

const ReassignmentForm = () => {

    const { previewNumber, handleReassignment, loading, setSelectedComputer, setPreviousUser, newUser, setNewUser, selectedComputer, computers, setObservations, observations } = useCertificateForm()

    const previousUsers = [
        ...(selectedComputer?.reassignments?.map(r => r.previousUser) ?? []),
        selectedComputer?.assignedTo ?? ''
    ].filter(Boolean).join(' → ')

    return (
        <form onSubmit={handleReassignment}>
            <label>N° Acta:</label>
            <Input
                id={'certificateNumber'}
                type={'text'}
                disabled={true}
                value={previewNumber?.toString() ?? ""}
                name={'certificateNumber'}
            />

            <div className="flex-1">
                <label>Equipo:</label>
                <select
                    className="border rounded p-2 w-full mb-4"
                    value={selectedComputer ? selectedComputer.internalTag : "-"}
                    onChange={ (e) => {
                        const computer = computers.find( b => b.internalTag === e.target.value )
                        setSelectedComputer( computer ?? null)
                    }}
                >
                    <option value="">Etiqueta</option>
                    {computers
                        .filter(computer => computer.internalTag?.startsWith('PC'))
                        .sort((a, b) => a.internalTag.localeCompare(b.internalTag))  // 👈 orden alfabético bonus
                        .map((computer, index) => (
                            <option key={index} value={computer.internalTag}>
                                {computer.internalTag}
                            </option>
                        ))
                    }
                </select>
            </div>
            <label>Nuevo Usuario:</label>
            <Input
                id={'new-user'}
                value={newUser}
                name={'new-user'}
                type={'text'}
                required={true}
                placeholder={'Nuevo del usuario'}
                handleChange={(e) => setNewUser(e.target.value)}
            />

            <label>Observación:</label>
            <textarea 
                value={observations}
                placeholder="Observaciones"
                className="border rounded p-2 w-full mb-4"
                onChange={(e) => setObservations(e.target.value)} 
            />

            <label>Usuario previo:</label>
            <Input
                id={'prev-user'}
                value={previousUsers}
                name={'prev-user'}
                type={'text'}
                disabled={true}
                placeholder={'Usuario previo'}
                handleChange={(e) => setPreviousUser(e.target.value)}
            />
     
            <Button type="submit" variant="green">
                {loading ? 'Guardando...' : 'Guardar'}
            </Button>
        </form>
    )

}


export default ReassignmentForm