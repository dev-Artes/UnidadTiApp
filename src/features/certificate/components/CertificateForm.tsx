import { Button, Input } from "../../../components"

import { useCertificateForm } from "../hooks/"


const CertificateForm = () => {
    const { 
        tagCounters, selectedTagCounter, 
        loading, availableSoftware, selectedSoftware,
        previewNumber, observations, handleSoftwareChange, 
        setObservations, serialNumber, setSerialNumber, model, 
        setModel, brands, setSelectedBrand, selectedBrand, setSelectedDevice,
        tag, devices, handleSubmit, selectedDevice,  user, setUser, handleTagTypeChange,
    } = useCertificateForm()

    return (
        <form onSubmit={ handleSubmit }>
            <label>N° Acta:</label>
            <Input
                id={'certificateNumber'}
                type={'text'}
                disabled={true}
                value={previewNumber?.toString() ?? ""} 
                name={'certificateNumber'}
            />

            <label>Etiqueta:</label>

            <div className="flex flex-col gap-2 mb-4">
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

                <Input
                    id={'tag'}
                    value={tag}
                    name={'tag'}
                    type={'text'}
                    disabled={true} 
                />
            </div>

            <label>Usuario:</label>
            <Input
                id={'user'}
                value={user}
                name={'user'}
                type={'text'}
                required={true}
                placeholder={'Nombre del usuario'}
                handleChange={(e) => setUser(e.target.value)}
            />


            <div className="flex mb-2 space-x-4">
                <div className="flex-1">
                    <label>Tipo:</label>
                    <select
                        value={selectedDevice ? selectedDevice.name : ""}
                        onChange={(e) => {
                            const type = devices.find(t => t.name === e.target.value)
                            setSelectedDevice(type ?? null)
                        }}
                        className="border rounded p-2 w-full mb-4"
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
            
            <Button type="submit" >
                { loading ? 'Generando PDF...' : 'Generar PDF' }
            </Button>


        </form>
    ) 
}

export default CertificateForm