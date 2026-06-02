import { useState } from "react"

import { Button } from "../../../components"

import type { CertificateRecord } from "../../../types/entidades"

interface CertificateDetailProps {
    item: CertificateRecord
    onClose: () => void
}
const DatailItem = ({ item, onClose }: CertificateDetailProps) => {

    const [ showAllSoftware, setShowAllSoftware ] = useState(false)
    // const { generatePDF } = useReports()

    const maxSoftware = 4

    const getSoftwareList = () => {
        if (!item.software) return []
        if (showAllSoftware || item.software.length <= maxSoftware ) return item.software

        return item.software.slice( 0, maxSoftware )
    }

    // const handleGeneratePDF = ( item ) => generatePDF(item)

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-[800px] max-h-[90vh] overflow-y-auto">
                <Button onClick={onClose} variant="gray" >
                    {'X'}
                </Button>

                <h2 className="text-lg font-bold mb-6 text-center">
                    Acta de entrega N°: {item.certificateNumber}
                </h2>

                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 border-r pr-4">
                        <div>
                            <label className="text-md font-bold">Asignado a: </label>{" "} {item.computer.assignedTo}
                        </div>
                        
                        <div>
                            <label className="text-md font-bold">Etiqueta Interna: </label>{" "} {item.computer.internalTag}
                        </div>

                        <div>
                            <label className="text-md font-bold">Tipo: </label>{" "} { item.computer.type.name }
                        </div>

                        <div>
                            <label className="text-md font-bold">Marca: </label>{" "} { item.computer.brand.name }
                        </div>

                        <div>
                            <label className="text-md font-bold">Modelo: </label>{" "} { item.computer.model }
                        </div>

                        <div>
                            <label className="text-md font-bold">Número de serie: </label>{" "} { item.computer.serialNumber }
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="text-md font-bold">Observaciones: </label>{" "} {item.observations || '-'}
                        </div>
                        
                        <div>
                            <label className="text-md font-bold mb-2 block">
                                Software instalado:
                            </label>

                            <div className="grid grid-cols-4 gap-2">
                                {getSoftwareList().map((soft, i) => (
                                <div key={i} className="p-1">
                                    {soft.name}
                                </div>
                                ))}
                            </div>
                            
                            {item.software && item.software.length > maxSoftware && (
                                <Button variant="blue" onClick={() => setShowAllSoftware(!showAllSoftware)}>
                                    {showAllSoftware ? "Ocultar" : "Mostrar más"}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
                {/* <div className="flex items-center justify-center">
                <Button variant="green"
                    onClick={ () => handleGenerate( item ) }
                >
                    {'Descargar PDF'}
                </Button>
                </div> */}
            </div>
        </div>
    )

}

export default DatailItem