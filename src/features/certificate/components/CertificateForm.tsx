import { useMemo, useState } from "react"
import { Button, Input } from "../../../components"
import { useCertificateForm } from "../hooks/"
import type { CertificateType, TagCounter } from "../../../types/entidades"

const PC_DEVICE_NAMES = ["notebook", "pc de escritorio", "pc de escritorio aio"]

const CertificateForm = () => {
    const {
        tagCounters, selectedTagCounter,
        loading, availableSoftware, selectedSoftware,
        previewNumber, observations, handleSoftwareChange,
        setObservations, serialNumber, setSerialNumber, model,
        setModel, brands, setSelectedBrand, selectedBrand, setSelectedDevice,
        tag, devices, handleSubmit, handleReassignment, handlePrestamo, handlePeriferico,
        selectedDevice, assignedTo, setAssignedTo, handleTagTypeChange,
        computers, selectedComputer, setSelectedComputer,
        newUser, setNewUser, previousUser,
    } = useCertificateForm()

    const [certificateType, setCertificateType] = useState<CertificateType>("entrega")
    const [showNewComputerForm, setShowNewComputerForm] = useState(false)

    const pcDevices = useMemo(() => {
        return devices.filter(d => PC_DEVICE_NAMES.includes(d.name.toLowerCase()))
    }, [devices])

    const perifericoDevices = useMemo(() => {
        return devices.filter(d => !PC_DEVICE_NAMES.includes(d.name.toLowerCase()))
    }, [devices])

    const entregaTagCounters = useMemo(() => {
        return tagCounters.filter(t => t.id !== "NO-APLICA")
    }, [tagCounters])

    const perifericoTagCounter = useMemo(() => {
        return tagCounters.find(t => t.id === "NO-APLICA") ?? null
    }, [tagCounters])

    const filteredComputers = useMemo(() => {
        const map = new Map<string, typeof computers[0]>()
        for (const c of computers) {
            const typeName = typeof c.type === "string" ? c.type : c.type?.name?.toLowerCase()
            if (!typeName || !PC_DEVICE_NAMES.includes(typeName)) continue
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

    const handleTypeRadioChange = (type: CertificateType) => {
        setCertificateType(type)
        setShowNewComputerForm(false)
        setSelectedComputer(null)
        setSelectedDevice(null)
        setSelectedBrand(null)
        setModel("")
        setSerialNumber("")
        if (type === "periferico" && perifericoTagCounter) {
            handleTagTypeChange(perifericoTagCounter)
        }
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (certificateType === "entrega") {
            handleSubmit(e)
        } else if (certificateType === "reasignacion") {
            handleReassignment(e)
        } else if (certificateType === "prestamo") {
            handlePrestamo(e)
        } else if (certificateType === "periferico") {
            handlePeriferico(e)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Tipo de acta:</label>
            <div className="flex gap-3 mb-4 flex-wrap">
                {(["entrega", "periferico", "reasignacion", "prestamo"] as CertificateType[]).map((type) => (
                    <label
                        key={type}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition ${
                            certificateType === type
                                ? "bg-indigo-100 border-indigo-500 text-indigo-700"
                                : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
                        }`}
                    >
                        <input
                            type="radio"
                            name="certificateType"
                            value={type}
                            checked={certificateType === type}
                            onChange={() => handleTypeRadioChange(type)}
                            className="sr-only"
                        />
                        {type === "entrega" && "Entrega"}
                        {type === "periferico" && "Periféricos"}
                        {type === "reasignacion" && "Reasignación"}
                        {type === "prestamo" && "Préstamo"}
                    </label>
                ))}
            </div>

            <label>N° Acta:</label>
            <Input
                id={'certificateNumber'}
                type={'text'}
                disabled={true}
                value={previewNumber?.toString() ?? ""}
                name={'certificateNumber'}
            />

            {certificateType === "entrega" && (
                <>
                    <label>Etiqueta:</label>
                    <div className="flex flex-col gap-2 mb-4">
                        <select
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white
                                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            value={selectedTagCounter?.id || ""}
                            onChange={(e) => {
                                const counter = entregaTagCounters.find(t => t.id === e.target.value)
                                if (counter) handleTagTypeChange(counter)
                            }}
                        >
                            <option value="">Seleccionar etiqueta</option>
                            {entregaTagCounters.map(counter => (
                                <option key={counter.id} value={counter.id}>
                                    {counter.prefix || counter.id}
                                </option>
                            ))}
                        </select>
                        <Input id={'tag'} value={tag} name={'tag'} type={'text'} disabled={true} />
                    </div>

                    <label>Usuario:</label>
                    <Input
                        id={'user'}
                        value={assignedTo}
                        name={'user'}
                        type={'text'}
                        required={true}
                        placeholder={'Nombre del usuario'}
                        handleChange={(e) => setAssignedTo(e.target.value)}
                    />

                    <div className="flex mb-2 space-x-4">
                        <div className="flex-1">
                            <label>Tipo:</label>
                            <select
                                value={selectedDevice ? selectedDevice.name : ""}
                                onChange={(e) => {
                                    const type = pcDevices.find(t => t.name === e.target.value)
                                    setSelectedDevice(type ?? null)
                                }}
                                className="border rounded p-2 w-full mb-4"
                            >
                                <option value="">Selecciona tipo</option>
                                {pcDevices.map((type, index) => (
                                    <option key={index} value={type.name}>{type.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-1">
                            <label>Marca:</label>
                            <select
                                value={selectedBrand ? selectedBrand.name : ""}
                                onChange={(e) => {
                                    const brand = brands.find(b => b.name === e.target.value)
                                    setSelectedBrand(brand ?? null)
                                }}
                                className="border rounded p-2 w-full mb-4"
                            >
                                <option value="">Selecciona marca</option>
                                {brands.map((brand, index) => (
                                    <option key={index} value={brand.name}>{brand.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex mb-2 space-x-4">
                        <div className="flex-1">
                            <label>Modelo:</label>
                            <Input
                                id={'model'}
                                name={'model'}
                                type={'text'}
                                value={model}
                                placeholder={'Modelo del equipo'}
                                handleChange={(e) => setModel(e.target.value)}
                            />
                        </div>
                        <div className="flex-1">
                            <label>N° Serie:</label>
                            <Input
                                id={'serialNumber'}
                                name={'serialNumber'}
                                type={'text'}
                                value={serialNumber}
                                placeholder={'Número de serie'}
                                handleChange={(e) => setSerialNumber(e.target.value)}
                            />
                        </div>
                    </div>
                </>
            )}

            {certificateType === "periferico" && (
                <>
                    <label>Etiqueta:</label>
                    <div className="flex flex-col gap-2 mb-4">
                        <Input
                            id={'tag-periferico'}
                            value={"-"}
                            name={'tag'}
                            type={'text'}
                            disabled={true}
                        />
                        <p className="text-xs text-gray-400">La etiqueta para periféricos es siempre "-"</p>
                    </div>

                    <label>Usuario:</label>
                    <Input
                        id={'user'}
                        value={assignedTo}
                        name={'user'}
                        type={'text'}
                        required={true}
                        placeholder={'Nombre del usuario'}
                        handleChange={(e) => setAssignedTo(e.target.value)}
                    />

                    <div className="flex mb-2 space-x-4">
                        <div className="flex-1">
                            <label>Tipo:</label>
                            <select
                                value={selectedDevice ? selectedDevice.name : ""}
                                onChange={(e) => {
                                    const type = perifericoDevices.find(t => t.name === e.target.value)
                                    setSelectedDevice(type ?? null)
                                }}
                                className="border rounded p-2 w-full mb-4"
                            >
                                <option value="">Selecciona tipo</option>
                                {perifericoDevices.map((type, index) => (
                                    <option key={index} value={type.name}>{type.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-1">
                            <label>Marca:</label>
                            <select
                                value={selectedBrand ? selectedBrand.name : ""}
                                onChange={(e) => {
                                    const brand = brands.find(b => b.name === e.target.value)
                                    setSelectedBrand(brand ?? null)
                                }}
                                className="border rounded p-2 w-full mb-4"
                            >
                                <option value="">Selecciona marca</option>
                                {brands.map((brand, index) => (
                                    <option key={index} value={brand.name}>{brand.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex mb-2 space-x-4">
                        <div className="flex-1">
                            <label>Modelo:</label>
                            <Input
                                id={'model'}
                                name={'model'}
                                type={'text'}
                                value={model}
                                placeholder={'Modelo del equipo'}
                                handleChange={(e) => setModel(e.target.value)}
                            />
                        </div>
                        <div className="flex-1">
                            <label>N° Serie:</label>
                            <Input
                                id={'serialNumber'}
                                name={'serialNumber'}
                                type={'text'}
                                value={serialNumber}
                                placeholder={'Número de serie'}
                                handleChange={(e) => setSerialNumber(e.target.value)}
                            />
                        </div>
                    </div>
                </>
            )}

            {certificateType === "reasignacion" && (
                <>
                    <div className="flex items-end gap-2 mb-4">
                        <div className="flex-1">
                            <label>Equipo:</label>
                            <select
                                className="border rounded p-2 w-full"
                                value={selectedComputer ? selectedComputer.internalTag : ""}
                                onChange={(e) => {
                                    const computer = computers.find(c => c.internalTag === e.target.value)
                                    setSelectedComputer(computer ?? null)
                                }}
                            >
                                <option value="">Seleccionar equipo</option>
                                {filteredComputers.map((computer) => (
                                    <option key={computer.internalTag} value={computer.internalTag}>
                                        {computer.internalTag}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowNewComputerForm(!showNewComputerForm)}
                            className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm font-medium"
                            title="Crear nuevo equipo"
                        >
                            +
                        </button>
                    </div>

                    {showNewComputerForm && (
                        <div className="bg-gray-50 rounded-lg p-4 mb-4 space-y-3 border border-gray-200">
                            <p className="text-xs font-semibold text-gray-500 uppercase">Nuevo equipo</p>
                            <label>Etiqueta:</label>
                            <div className="flex flex-col gap-2">
                                <select
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white
                                            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    value={selectedTagCounter?.id || ""}
                                    onChange={(e) => {
                                        const counter = tagCounters.find(t => t.id === e.target.value)
                                        if (counter) handleTagTypeChange(counter)
                                    }}
                                >
                                    <option value="">Seleccionar etiqueta</option>
                                    {tagCounters.map(counter => (
                                        <option key={counter.id} value={counter.id}>
                                            {counter.prefix || counter.id}
                                        </option>
                                    ))}
                                </select>
                                <Input id={'tag'} value={tag} name={'tag'} type={'text'} disabled={true} />
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label>Tipo:</label>
                                    <select
                                        value={selectedDevice ? selectedDevice.name : ""}
                                        onChange={(e) => {
                                            const type = devices.find(t => t.name === e.target.value)
                                            setSelectedDevice(type ?? null)
                                        }}
                                        className="border rounded p-2 w-full"
                                    >
                                        <option value="">Selecciona tipo</option>
                                        {devices.map((type, index) => (
                                            <option key={index} value={type.name}>{type.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <label>Marca:</label>
                                    <select
                                        value={selectedBrand ? selectedBrand.name : ""}
                                        onChange={(e) => {
                                            const brand = brands.find(b => b.name === e.target.value)
                                            setSelectedBrand(brand ?? null)
                                        }}
                                        className="border rounded p-2 w-full"
                                    >
                                        <option value="">Selecciona marca</option>
                                        {brands.map((brand, index) => (
                                            <option key={index} value={brand.name}>{brand.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label>Modelo:</label>
                                    <Input
                                        id={'model-new'}
                                        name={'model'}
                                        type={'text'}
                                        value={model}
                                        placeholder={'Modelo'}
                                        handleChange={(e) => setModel(e.target.value)}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label>N° Serie:</label>
                                    <Input
                                        id={'serialNumber-new'}
                                        name={'serialNumber'}
                                        type={'text'}
                                        value={serialNumber}
                                        placeholder={'N° de serie'}
                                        handleChange={(e) => setSerialNumber(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <label>Nuevo Usuario:</label>
                    <Input
                        id={'new-user'}
                        value={newUser}
                        name={'new-user'}
                        type={'text'}
                        required={true}
                        placeholder={'Nombre del nuevo usuario'}
                        handleChange={(e) => setNewUser(e.target.value)}
                    />

                    <label>Usuario previo:</label>
                    <Input
                        id={'prev-user'}
                        value={previousUsers}
                        name={'prev-user'}
                        type={'text'}
                        disabled={true}
                        placeholder={'Usuario previo'}
                    />
                </>
            )}

            {certificateType === "prestamo" && (
                <>
                    <div className="flex items-end gap-2 mb-4">
                        <div className="flex-1">
                            <label>Equipo:</label>
                            <select
                                className="border rounded p-2 w-full"
                                value={selectedComputer ? selectedComputer.internalTag : ""}
                                onChange={(e) => {
                                    const computer = computers.find(c => c.internalTag === e.target.value)
                                    setSelectedComputer(computer ?? null)
                                }}
                            >
                                <option value="">Seleccionar equipo</option>
                                {filteredComputers.map((computer) => (
                                    <option key={computer.internalTag} value={computer.internalTag}>
                                        {computer.internalTag}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowNewComputerForm(!showNewComputerForm)}
                            className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm font-medium"
                            title="Crear nuevo equipo"
                        >
                            +
                        </button>
                    </div>

                    {showNewComputerForm && (
                        <div className="bg-gray-50 rounded-lg p-4 mb-4 space-y-3 border border-gray-200">
                            <p className="text-xs font-semibold text-gray-500 uppercase">Nuevo equipo</p>
                            <label>Etiqueta:</label>
                            <div className="flex flex-col gap-2">
                                <select
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white
                                            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                    value={selectedTagCounter?.id || ""}
                                    onChange={(e) => {
                                        const counter = tagCounters.find(t => t.id === e.target.value)
                                        if (counter) handleTagTypeChange(counter)
                                    }}
                                >
                                    <option value="">Seleccionar etiqueta</option>
                                    {tagCounters.map(counter => (
                                        <option key={counter.id} value={counter.id}>
                                            {counter.prefix || counter.id}
                                        </option>
                                    ))}
                                </select>
                                <Input id={'tag'} value={tag} name={'tag'} type={'text'} disabled={true} />
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label>Tipo:</label>
                                    <select
                                        value={selectedDevice ? selectedDevice.name : ""}
                                        onChange={(e) => {
                                            const type = devices.find(t => t.name === e.target.value)
                                            setSelectedDevice(type ?? null)
                                        }}
                                        className="border rounded p-2 w-full"
                                    >
                                        <option value="">Selecciona tipo</option>
                                        {devices.map((type, index) => (
                                            <option key={index} value={type.name}>{type.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <label>Marca:</label>
                                    <select
                                        value={selectedBrand ? selectedBrand.name : ""}
                                        onChange={(e) => {
                                            const brand = brands.find(b => b.name === e.target.value)
                                            setSelectedBrand(brand ?? null)
                                        }}
                                        className="border rounded p-2 w-full"
                                    >
                                        <option value="">Selecciona marca</option>
                                        {brands.map((brand, index) => (
                                            <option key={index} value={brand.name}>{brand.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label>Modelo:</label>
                                    <Input
                                        id={'model-new'}
                                        name={'model'}
                                        type={'text'}
                                        value={model}
                                        placeholder={'Modelo'}
                                        handleChange={(e) => setModel(e.target.value)}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label>N° Serie:</label>
                                    <Input
                                        id={'serialNumber-new'}
                                        name={'serialNumber'}
                                        type={'text'}
                                        value={serialNumber}
                                        placeholder={'N° de serie'}
                                        handleChange={(e) => setSerialNumber(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <label>Usuario:</label>
                    <Input
                        id={'user'}
                        value={assignedTo}
                        name={'user'}
                        type={'text'}
                        required={true}
                        placeholder={'Nombre del usuario'}
                        handleChange={(e) => setAssignedTo(e.target.value)}
                    />
                </>
            )}

            <label>Observación:</label>
            <textarea
                value={observations}
                placeholder="Observaciones"
                className="border rounded p-2 w-full mb-4"
                onChange={(e) => setObservations(e.target.value)}
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

            <Button type="submit">
                {loading ? 'Generando PDF...' : 'Generar PDF'}
            </Button>
        </form>
    )
}

export default CertificateForm
