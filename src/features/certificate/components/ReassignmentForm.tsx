import { useMemo } from "react"
import { Button, Input } from "../../../components"

import { useCertificateForm } from "../hooks/"

const ALLOWED_DEVICE_NAMES = ["notebook", "pc de escritorio", "pc de escritorio aio"]

const ReassignmentForm = () => {

    const { previewNumber, handleReassignment, loading, availableSoftware, selectedSoftware, handleSoftwareChange, setSelectedComputer, setPreviousUser, newUser, setNewUser, selectedComputer, computers, setObservations, observations } = useCertificateForm()

    const filteredComputers = useMemo(() => {
        const map = new Map<string, typeof computers[0]>()
        for (const c of computers) {
            const typeName = typeof c.type === "string" ? c.type : c.type?.name?.toLowerCase()
            if (!typeName || !ALLOWED_DEVICE_NAMES.includes(typeName)) continue
            const existing = map.get(c.internalTag)
            if (!existing || (c.created_at?.toMillis() ?? 0) > (existing.created_at?.toMillis() ?? 0)) {
                map.set(c.internalTag, c)
            }
        }
        return Array.from(map.values()).sort((a, b) => a.internalTag.localeCompare(b.internalTag))
    }, [computers])

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
                    {filteredComputers.map((computer) => (
                        <option key={computer.internalTag} value={computer.internalTag}>
                            {computer.internalTag}
                        </option>
                    ))}
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
            <label>Software Instalado:</label>
            <div className="rounded p-2 w-full mb-4">
                {availableSoftware.map((software) => (
                    <div key={software.id}>
                        <label>
                            <input
                                type="checkbox"
                                value={software.id}
                                data-name={software.name}
                                checked={selectedSoftware.some(s => s.id === software.id)}
                                onChange={handleSoftwareChange}
                            />
                            {software.name}
                        </label>
                    </div>
                ))}
            </div>
     
            <Button type="submit" variant="green">
                {loading ? 'Guardando...' : 'Guardar'}
            </Button>
        </form>
    )

}


export default ReassignmentForm
