import jsPDF from 'jspdf'
import autoTable, { type CellHookData } from 'jspdf-autotable' 

import type { Certificate } from '../../../types/entidades'

import { fullDateNumber, fullDateText, dateToYear } from '../../../utils/convertTimestamp'

export const useCertificatePDF = () => {

    const generatePDF = (certificate: Certificate) => {
        const doc = new jsPDF()

        const createdAt = certificate.created_at
        const year = dateToYear(createdAt)
        const textDate = fullDateText(createdAt)
        const { computer, software, certificateNumber, observations } = certificate

        const resolveValue = (value: unknown): string => {
            if (value === null || value === undefined) return '-'
            if (typeof value === 'string') return value
            if (typeof value === 'number') return value.toString()
            if (typeof value === 'object' && value !== null && 'name' in value) {
                return (value as { name: string }).name
            }
            return '-'
        }
        const softwareNames = Array.isArray(software)
            ? software.map(s => s.name) 
            : []

        const observationText = observations || '-'

        doc.setFontSize(12)
        doc.setFont('helvetica', 'bold')
        doc.text(`Acta N°${certificateNumber}-${year}`, 160, 15, { align: 'left' })

        const logo = new Image()
        logo.src = '/logo_uch.png'

        logo.onload = () => {
            doc.addImage(logo, 'PNG', 15, 5, 30, 25)

            doc.setFontSize(16)
            doc.text(
                'ACTA DE ENTREGA EQUIPAMIENTO COMPUTACIONAL',
                105, 40,
                { align: 'center' }
            )

            doc.setFontSize(12)
            doc.setFont('helvetica', 'normal')
            doc.text(
                `Con fecha ${textDate}, mediante la presente acta se oficializa entrega de equipamiento computacional a cargo del usuario/a individualizado posteriormente para su uso institucional.`,
                15, 50,
                { maxWidth: 190 }
            )

            const observationLines = doc.splitTextToSize(observationText, 140)
            const observationHeight = observationLines.length * 5

            const tableData = [
                ['Para:', computer.assignedTo || '-', 'Etiqueta:', computer.internalTag || '-'],
                ['Tipo:', resolveValue(computer.type), 'Marca:', resolveValue(computer.brand)],
                ['Modelo:', computer.model || '-', 'N° Serie:', computer.serialNumber || '-'],
                [
                    'Observación',
                    {
                        content: observationText,
                        colSpan: 3,
                        rowSpan: Math.ceil(observationHeight / 10)
                    }
                ]
            ]
            
            let finalY = 60
            autoTable(doc, {
                startY: 60,
                head: [],
                body: tableData,
                theme: 'grid',
                styles: {
                    fontSize: 12,
                    lineColor: 1,
                    textColor: 0,
                    cellPadding: 2,
                },
                columnStyles: {
                    0: { fontStyle: 'bold', cellWidth: 30 },
                    2: { fontStyle: 'bold', cellWidth: 30 },
                },
                didDrawCell: (data: CellHookData) => {
                    if (data.cell.raw === observationText) {
                        doc.setFontSize(12)
                        doc.setFont('helvetica', 'normal')
                        doc.text(observationText, data.cell.x + 2, data.cell.y + 10, { maxWidth: 140 })
                    }
                },
            })

            finalY = (doc as any).lastAutoTable.finalY + 10

            // SOFTWARE
            if (softwareNames.length > 0) {
                doc.setFontSize(12)
                doc.setFont('helvetica', 'bold')
                doc.text('Software Instalado:', 15, finalY)
                doc.setFont('helvetica', 'normal')

                const softwarePerRow = 4
                const tabWidth = 45

                softwareNames.forEach((name, index) => {
                    const row = Math.floor(index / softwarePerRow)
                    const col = index % softwarePerRow
                    doc.text(`- ${name}`, 15 + col * tabWidth, finalY + 10 + row * 8)
                })

                const totalRows = Math.ceil(softwareNames.length / softwarePerRow)
                finalY += 15 + totalRows * 8
            }

            const timbre = new Image()
            timbre.src = '/timbreTi.png'

            timbre.onload = () => {
                doc.addImage(timbre, 'PNG', 22, finalY + 20, 30, 30)

                doc.line(15, finalY + 55, 58, finalY + 55)
                doc.line(110, finalY + 55, 175, finalY + 55)

                doc.setFontSize(12)
                doc.setFont('helvetica', 'bold')
                doc.text('Entrega: Unidad TI', 15, finalY + 60)
                doc.text(`Recibe Conforme: ${computer.assignedTo}`, 110, finalY + 60)

                doc.line(15, finalY + 120, 200, finalY + 120)

                doc.setFontSize(10)
                doc.setFont('helvetica', 'normal')
                doc.text(
                    'Unidad Ti – Facultad de Artes - Universidad de Chile',
                    37, finalY + 125
                )

                const sanitizeFileName = (text: string) =>
                    text.replace(/[\/\\:*?"<>|]/g, '').trim()

                const fileName = sanitizeFileName(
                    `${certificateNumber}-${year}-${fullDateNumber(createdAt)}-${computer.assignedTo}`
                )

                doc.save(fileName)
            }

            timbre.onerror = () => console.error('Error al cargar el timbre')
        }

        logo.onerror = () => console.error('Error al cargar el logo')
    }

    return { generatePDF }
}