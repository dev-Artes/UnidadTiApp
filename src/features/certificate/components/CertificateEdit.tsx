import { useEffect, useState } from 'react'

import { Button, Input, } from '../../../components'

import { updateCertificate } from '../../../services'

import { useCertificateForm } from '../hooks/'
import type { CertificateRecord, SoftwareItem } from '../../../types/entidades'


interface CertificateEditProps {
    item: CertificateRecord
    onClose: () => void
    onUpdated: (updated: CertificateRecord) => void
}


const CertificateEdit = ( { item, onClose, onUpdated }: CertificateEditProps ) => {


    const [ loading, setLoading ] = useState( false )

    const { 
        user, setUser,
        tag, setTag,
        observations, setObservations,
        model, setModel,
        serialNumber, setSerialNumber,
        selectedBrand, setSelectedBrand,
        softwareList, setSoftwareList,
        devices, brands,
        setSelectedDevice, selectedDevice
    } = useCertificateForm()


    useEffect(() => {
        if (item) {
        setUser(item.computer.assignedTo || "")
        setTag(item.computer.internalTag || "")
        setObservations(item.observations || "")
        setModel(item.computer.model || item.computer.model || "")
        setSerialNumber(item.computer.serialNumber || "")
        setSelectedDevice(item.computer.type || null)
        setSelectedBrand(item.computer.brand || null)
        setSoftwareList(item.software || [])
        }
    }, [item])


    const handleSoftwareChange = ( software: SoftwareItem ) => {
        if (softwareList.includes(software)) {
        setSoftwareList(softwareList.filter((s) => s !== software))
        } else {
        setSoftwareList([...softwareList, software])
        }
    }

    const handleUpdate = async (itemId: string) => {
    setLoading(true)
    try {
        const updatedFields = {
            observations,
            software: softwareList,
            computer: {
                ...item.computer,
                internalTag: tag,
                assignedTo: user,
                type: selectedDevice ?? item.computer.type,
                brand: selectedBrand ?? item.computer.brand,
                model,
                serialNumber,
            }
        }

        await updateCertificate(itemId, updatedFields)

        if (onUpdated) {
            const updatedRecord: CertificateRecord = {
                ...item,
                ...updatedFields, 
                id: itemId,
            }
            onUpdated(updatedRecord)
        }

        onClose()
    } catch (error) {
        console.error(`Error al actualizar: ${error}`)
    } finally {
        setLoading(false)
    }
}

    return (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center'>
        <div className='bg-white p-6 rounded-lg shadow-lg relative w-[800px] max-h-[90hv] overflow-y-auto'>
            
            <button className='absolute top-2 right-6 text-gray-500 hover:text-gray-700 font-bold text-xl' onClick={onClose}>
            X
            </button>

            <h2 className='text-lg font-bold mb-6 text-center'>Editar Acta Número: {item.certificateNumber}</h2>

            <div className='grid grid-cols-2 gap-6'>
            <div className='border-r pr-4'>
                <div>
                <label className='text-md font-bold'>Asignado a:</label>
                <Input
                    id={'user'}
                    name={'user'}
                    value={user}
                    type={'text'}
                    required={true}
                    handleChange={(e) => setUser(e.target.value)}
                    placeholder={item.computer.assignedTo}
                />
                </div>

                <div>
                <label className='text-md font-bold'>Etiqueta: </label>
                <Input
                    id={'tag'}
                    name={'tag'}
                    value={tag}
                    type={'text'}
                    disabled={true}
                    handleChange={(e) => setTag(e.target.value)}
                    placeholder={item.computer.internalTag}
                />
                </div>

                <div>
                <label className='text-md font-bold'>Tipo: </label>
                    <select
                    id="type"
                    value={selectedDevice ? selectedDevice.name : ""}
                    className="border rounded p-2 w-full mb-4"
                    onChange={(e) => {
                        const type = devices.find(t => t.name === e.target.value)
                        setSelectedDevice(type ?? null)
                    }}
                    >
                    <option>Selecciona tipo</option>
                    {devices.map((type, index) => (
                        <option key={index} value={type.name}>{type.name}</option>
                    ))}
                    </select>
                
                </div>
                
                <div>
                <label className='text-md font-bold'>Marca: </label>
                <select
                    className="border rounded p-2 w-full mb-4"
                    id="brand"
                    value={selectedBrand ? selectedBrand.name : ""}
                    onChange={(e) => {
                        const brand = brands.find(b => b.name === e.target.value)
                        setSelectedBrand(brand ?? null)
                    }}
                >
                    <option>Selecciona marca</option>
                    {brands.map((brand, index) => (
                        <option key={index} value={brand.name}>{brand.name}</option>
                    ))}
                </select>
                </div>
                
                <div>
                <label className='text-md font-bold'>Modelo: </label>
                <Input
                    id={'model'}
                    name={'model'}
                    value={model}
                    type={'text'}
                    required={true}
                    handleChange={(e) => setModel(e.target.value)}
                    placeholder={item.computer.model || item.computer.model}
                />
                </div>
                
                <div>
                <label className='text-md font-bold'>Número de Serie</label>
                <Input
                    id={'serialNumber'}
                    name={'serialNumber'}
                    value={serialNumber}
                    type={'text'}
                    required={true}
                    handleChange={(e) => setSerialNumber(e.target.value)}
                    placeholder={item.computer.serialNumber}
                />
                </div>
            </div>
            
            <div className='space-y-4'>
                <div>
                <label className='text-md font-bold'>Observaciones: </label>
                <textarea
                    className='border rounded p-2 w-full mb-4 resize-none h-32'
                    value={observations}
                    placeholder={item.observations}
                    onChange={(e) => setObservations(e.target.value)}
                />
                </div>

                <div>
                <label className='text-md font-bold'>Software Instalado:</label>
                <div className="rounded p-2 w-full mb-4">
                    {softwareList.map(( software ) => (
                        <div key={software.id}> 
                            <label>
                                <input
                                    type="checkbox"
                                    value={software.id}                             
                                    checked={softwareList.some(s => s.id === software.id)}
                                    onChange={() => handleSoftwareChange(software)}
                                />
                                {software.name} 
                            </label>
                        </div>
                    ))}
                </div>
                </div>

                

            </div>
            </div>
            
            <div className='flex items-center justify-center'>
            <Button variant="green" type="submit" onClick={() => handleUpdate(item.id)}>
                { loading ? 'Actualizando...' : 'Actualizar' }
            </Button>
            </div>

        </div>
        </div>
    )
}

export default CertificateEdit