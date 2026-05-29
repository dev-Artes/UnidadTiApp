import { Timestamp } from "firebase/firestore"
import type { Certificate } from "../types/entidades"

const devices = {
    audio:{
        "id": "2teLrrZMcj5KuT2324PN",
        "name": "Audio", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    conector:{
        "id": "7ysFtsJJh8jdSrWUj3R1",
        "name": "Conector", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    tecladoMouse:{
        "id": "9ErTJt7pEHKuEKU5jUo5",
        "name": "Pack Teclado & Mouse", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    otro:{
        "id": "AH6nWXCdfShSJiclSz9e",
        "name": "Otro", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    adaptador:{
        "id": "CP4FDTpbVMFgpIBoMTf8",
        "name": "Adaptador", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    monitor:{
        "id": "I0kjijVPwg1niOmOkWys",
        "name": "Monitor", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    notebook:{
        "id": "IxGrZ1DVk2c8uW8Gu2gX",
        "name": "Notebook", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    aio:{
        "id": "Jx51tvUtSEWcmvxTDKwX",
        "name": "PC de Escritorio AIO", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    router:{
        "id": "LjNRgrOiFw4iZK1eyW9p",
        "name": "Router", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    coolingpad:{
        "id": "NyECokVnm8GnTuMQEEuP",
        "name": "Cooling-Pad", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    pcescritorio:{
        "id": "OduyH9UWpo37YQzlcdpe",
        "name": "PC de Escritorio", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    telefono:{
        "id": "OlCJZS4q6Bu0Fu9gyKcB",
        "name": "Telefono", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    teclado:{
        "id": "PLR1JvPswRcxkAlTaY2e",
        "name": "Teclado", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    proyector:{
        "id": "Pm7mGbcEe4VdjIdWGV2G",
        "name": "Proyector", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    tablet:{
        "id": "WQhxhq0vstQ6FKjXwLDN",
        "name": "Tablet", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    ups:{
        "id": "aofLWT8TTn4ShDdOPkTw",
        "name": "UPS", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    mouse:{
        "id": "d526u4vGxGs1VprecO17",
        "name": "Mouse", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    adpcorriente:{
        "id": "ixitO8tvYBS0n5OI2tD7",
        "name": "Adaptador de corriente", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    cable:{
        "id": "mW76H1R67CEA5rUFRDKv",
        "name": "Cable", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    impresora:{
        "id": "nY2V6MQowtZULGUR9tqU",
        "name": "Impresora", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    telefonoip:{
        "id": "oxCJreEb6y3ucoVhnJUG",
        "name": "Teléfono IP", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    cargadornotebook:{
        "id": "trQCfriR8k2v8b8SekXx",
        "name": "Cargador de Notebook", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    }
}

const brands = {
    generico: {
        "id": "0EW2CcEJeJ6KW3NvCEmr",
        "name": "Genérico", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    lg: {
        "id": "9QENKievFKQVqrHMnh8g",
        "name": "LG", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    samsung: {
        "id": "GeJxD177aJ3KfbMEWS4T",
        "name": "Samsung", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    lenovo: {
        "id": "HJrhsRDzVqkZMsEAlpHi",
        "name": "Lenovo", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    asus:{
        "id": "IUfWkjx2KJc0UEhlMFJn",
        "name": "Asus", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    tplink:{
        "id": "IubT5LmxKibKlU2aSAHo",
        "name": "TP-Link", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    reptilex:{
        "id": "OeobRnBgaz9zk7DKyxjk",
        "name": "Reptilex", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    hp:{
        "id": "Pjwp5NjlQXPsHqLhzaaT",
        "name": "Hp", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    cisco:{
        "id": "Pvtq803ZHrErLJgxiP62",
        "name": "Cisco", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    viewsonic:{
        "id": "SgVKiw6FNbM5PMQa8MNU",
        "name": "ViewSonic", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    genius:{
        "id": "Suos1KXnTh2Z4htzv9FX",
        "name": "Genius", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    philco:{
        "id": "VsbBJURxvwtPFqD9FlH4",
        "name": "Philco", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    epson:{
        "id": "ZFNBuaxwiuMM6DXQQ7L7",
        "name": "Epson", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    midea:{
        "id": "b3c4dWMq0oXvi7D00bSS",
        "name": "Midea", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    logitech:{
        "id": "daiAjvlTrmcrpwYK7ejI",
        "name": "Logitech", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    dell:{
        "id": "dy6akgYsCUfKkSfGMBrQ",
        "name": "Dell", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    brother:{
        "id": "ekV2k8DoXLTsJQ1lhfH4",
        "name": "Brother", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    apple:{
        "id": "iJggoxce0SYgITeRAtOA",
        "name": "Apple", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    canon:{
        "id": "wL6FV5L3yvjNKlmMMOoO",
        "name": "Canon", created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    }
}

const softwareList = {
    izarc: {
        "id": "0tkhQBsz8VEipMcxOq35",
        "name": "IZArc",
        "active": false,
        "created_at": new Timestamp( 1779978442,821000000),
        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        }
    },
    office365:{
        "id": "B4AL6YtAD6i3UCLa4qu4",
        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        },
        "created_at": new Timestamp( 1779978442,821000000),
        "name": "Microsof Office 365",
        "active": false
    },
    oracle: {
        "id": "CCqCZBbPyPNm4pAyz0X6",
        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        },
        "created_at": new Timestamp( 1779978442,821000000),
        "name": "Oracle 10",
        "active": true
    },
    chrome:{
        "id": "GB3mPp63QJUOZh4Uhmcq",
        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        },
        "created_at": new Timestamp( 1779978442,821000000),

        "name": "Google Chrome",
        "active": true
    },
    office21: {
        "id": "KMuz9Mbg94ySr7uIrNHh",
        "name": "Microsof Office 2021",
        "active": true,
        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        },
        "created_at": new Timestamp( 1779978442,821000000),

    },
    sisper:{
        "id": "KNpTyESCEGGeqGHw1JWK",
        "name": "Auge Sisper",
        "active": true,
        "created_at": new Timestamp( 1779978442,821000000),
        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        }
    },
    anydesk:{
        "id": "M9MKRZXnkFjqbT27gdq6",
        "name": "AnyDesk",
        "active": true,
        "created_at": new Timestamp( 1779978442,821000000),
        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        }
    },
    rustdesk:{
        "id": "QZQGTAjUSKewAcA6Co8o",
        "created_at": new Timestamp( 1779978442,821000000),
        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        },
        "name": "RustDesk",
        "active": true
    },
    forticlient:{
        "id": "XEmbJILOqhqtqgOOOhyj",
        "name": "FortiClient",
        "active": true,
        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        },
        "created_at": new Timestamp( 1779978442,821000000)
    },
    ocs:{
        "id": "XNAKkZQEnWIyIjnsATC0",
        "created_at": new Timestamp( 1779978442,821000000),

        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        },
        "name": "OCS Inventory",
        "active": true
    },
    guia:{
        "id": "ZiFUh7Os7ukFmfTwnciO",
        "created_at": new Timestamp( 1779978442,821000000),

        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        },
        "name": "Guía Matricula",
        "active": true
    },
    vlc:{
        "id": "ci2oQst4Iv5h5FJp5U5K",
        "name": "VLC",
        "active": true,
        "created_at": new Timestamp( 1779978442,821000000),
        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        }
    },
    augefinanza:{
        "id": "fm2rRzw2Pd6LX31DDOd7",
        "name": "Auge Finanzas",
        "active": true,
        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        },
        "created_at": new Timestamp( 1779978442,821000000),

    },
    auhonorarios:{
        "id": "lHwd7fzp8PzX0tseBSCF",
        "name": "Auge Honorarios",
        "active": true,
        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        },
        "created_at": new Timestamp( 1779978442,821000000),

    },
    adobe:{
        "id": "mcUUiwuCpKh750YIBfsf",
        "name": "Adobe Acrobat",
        "active": true,
        "created_at": new Timestamp( 1779978442,821000000),

        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        }
    },
    actualizaciones:{
        "id": "pmeW6MKkycU2z8mwZhnO",
        "name": "Acualizaciones de Windows",
        "active": true,
        "created_at": new Timestamp( 1779978442,821000000),
        "created_by": {
            "name": "Mario Labbé",
            "uid": "Vfog3tRIC4QWPfHSRAGR"
        }
    }
}

export const dataToPush: Certificate[] = [
    {
        "id": "0CSL2n0uhhommGEmtNkD",
        "certificateNumber": 97,
        "observations": "Se hace entrega de monitor nuevo al usuario como cargo para el uso de sus labores diarias.",
        computer: {
            id: "qgoLbKkc2iPzuPx2z2x1",
            brand: brands.samsung,
            "model": "S27C310",
            "serialNumber": "5NJJH9JXA00345F",
            "internalTag": "",
            type: devices.monitor,
            "assignedTo": "Mauricio Toro",
            created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
        },
        software: [],
        created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    },
    {
        "id": "0Dh19fnQTKhTQp6VTV8d",
        "certificateNumber": 193,
        "observations": "Pack de teclado y mouse nuevo.",
        computer: {
            id: "34A4myAKfiZsZmbXOn2R",
            brand: brands.philco,
            "model": "K4500",
            "serialNumber": "29PLCK4500",        
            "internalTag": "N/A",
            type: devices.tecladoMouse,
            "assignedTo": "Tamara Toledo",
            created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
        },
        "software": [],
        created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1776978063,373000000)
    }, 
    {
        "id": "18mV7kQAIoL4Nh7a6Uzm",
        "certificateNumber": 146,
        "observations": "Se hace entrega de Notebook al usuario identificado en el documento.",
        computer: {
            id: "JHlLg7b6nvSmgVMAIiw0",
            brand: brands.lenovo,
            "model": "20YN",
            "serialNumber": "PF389KT5",
            "internalTag": "PCART-0273",
            type: devices.notebook,
            "assignedTo": "Daniel Purän",
            created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1767965068,0)
        },
        software: [softwareList.vlc, softwareList.izarc, softwareList.rustdesk, softwareList.anydesk, softwareList.forticlient, softwareList.ocs, softwareList.adobe, softwareList.chrome, softwareList.office21, softwareList.actualizaciones, softwareList.oracle],
        created_by: { name: "Mario Labbé", uid: "Vfog3tRIC4QWPfHSRAGR" }, created_at: new Timestamp( 1767965068,0)
    }, 
    {
        "id": "1EvaiixrxsBUWcrtgFI5",

    }
]

//     {
//         "year": 2025,
//         "serialNumber": "",
//         "assignedTo": "Mauricio Toro",
//         "internalTag": "Adaptador HDMI a VGA",
//         "brand": {
//             "id": "0EW2CcEJeJ6KW3NvCEmr",
//             "name": "Genérico"
//         },
//         "observations": "Adaptador HDMI a VGA",
//         "type": {
//             "name": "Adaptador",
//             "id": "CP4FDTpbVMFgpIBoMTf8"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1764941176,
//             "nanoseconds": 267000000
//         },
//         "certificateNumber": 134,
//         "model": "",
//         "software": []
//     },
//     {
//         "id": "1PTJmetlKvzi2wAM2es5",
//         "internalTag": "PCART-0299",
//         "observations": "Equipo forma parte como una donación hacia el ISUCH para actualizar plataforma operativa del usuario (windows 11)",
//         "brand": {
//             "name": "Genérico",
//             "id": "0EW2CcEJeJ6KW3NvCEmr"
//         },
//         "serialNumber": "NN",
//         "assignedTo": "Dante Donoso",
//         "year": 2025,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Guía Matricula",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 102,
//         "model": "GENERICO",
//         "type": {
//             "id": "OduyH9UWpo37YQzlcdpe",
//             "name": "PC de Escritorio"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1761763599,
//             "nanoseconds": 418000000
//         }
//     },
//     {
//         "id": "2hk39mf06fuSYli6O3DE",
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775048147,
//             "nanoseconds": 294000000
//         },
//         "software": [
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 171,
//         "model": "HP255 G10",
//         "year": 2026,
//         "internalTag": "PCART-0391",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "observations": "Equipo configurado con programas institucionales \nse incluye cargador de equipo ",
//         "serialNumber": "1H84243M09",
//         "assignedTo": "Isidora Palma "
//     },
//     {
//         "id": "3ZOlctOFCC8PIdmUy6SE",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1765394962,
//             "nanoseconds": 306000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "model": "ASUS EXPERTBOOK B3404CMA",
//         "certificateNumber": 135,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Guía Matricula",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "year": 2025,
//         "assignedTo": "Juan Pablo Espinoza",
//         "serialNumber": "S8NXCV14K026349",
//         "brand": {
//             "id": "IUfWkjx2KJc0UEhlMFJn",
//             "name": "Asus"
//         },
//         "observations": "Notebook nuevo con su respectivo cargador eléctrico.",
//         "internalTag": "PCART-0434"
//     },
//     {
//         "id": "43ZpgeMLiQ9rTIgk95WH",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1746808040,
//             "nanoseconds": 97000000
//         },
//         "type": {
//             "name": "Monitor",
//             "id": "I0kjijVPwg1niOmOkWys"
//         },
//         "model": "S24C3IOEAL",
//         "certificateNumber": 39,
//         "software": [],
//         "year": 2025,
//         "assignedTo": "Constanza Bustamante",
//         "serialNumber": "5NJ8H9JX502259",
//         "observations": "",
//         "brand": {
//             "name": "Samsung",
//             "id": "GeJxD177aJ3KfbMEWS4T"
//         },
//         "internalTag": "-"
//     },
//     {
//         "id": "4YVMv6CYN7PF7jX9HSdy",
//         "year": 2025,
//         "internalTag": "PC-LE255",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "observations": "Notebook Teoría de las Artes para uso general sin usuario definido.",
//         "serialNumber": "5CD4111YP5",
//         "assignedTo": "Isabel Jara",
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1742483968,
//             "nanoseconds": 611000000
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 21,
//         "model": "ProBook 445 G10"
//     },
//     {
//         "id": "4yXKTFz3oIa3UN87CVD1",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1752079200,
//             "nanoseconds": 509000000
//         },
//         "type": {
//             "id": "AH6nWXCdfShSJiclSz9e",
//             "name": "Otro"
//         },
//         "model": "CA1100E",
//         "certificateNumber": 72,
//         "software": [],
//         "year": 2025,
//         "assignedTo": "Patricia Muñoz",
//         "serialNumber": "A12422C00349",
//         "observations": "MARCA: KENSINGTON\nACCESORIO ESTADO: NUEVO\nGigabit admiten el rendimiento 10/100/1000 BASE-T.",
//         "brand": {
//             "name": "Genérico",
//             "id": "0EW2CcEJeJ6KW3NvCEmr"
//         },
//         "internalTag": "-"
//     },
//     {
//         "id": "55saFjPTgmx7PWtHcEQG",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "Guía Matricula",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Acualizaciones de Windows",
//             "Microsof Office 2021",
//             "OCS Inventory"
//         ],
//         "model": "Thinkcentre Neo 50a 24 Gen4",
//         "certificateNumber": 115,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1763471313,
//             "nanoseconds": 844000000
//         },
//         "type": {
//             "name": "PC de Escritorio AIO",
//             "id": "Jx51tvUtSEWcmvxTDKwX"
//         },
//         "observations": "",
//         "brand": {
//             "name": "Lenovo",
//             "id": "HJrhsRDzVqkZMsEAlpHi"
//         },
//         "internalTag": "PC-LE262",
//         "assignedTo": "Monica Bate",
//         "serialNumber": "MP2Z8RTM",
//         "year": 2025
//     },
//     {
//         "id": "5RjvTCUJSqXRkU01uuLO",
//         "type": {
//             "name": "Pack Teclado & Mouse",
//             "id": "9ErTJt7pEHKuEKU5jUo5"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1749481169,
//             "nanoseconds": 596000000
//         },
//         "certificateNumber": 55,
//         "model": "29PPR6354K",
//         "software": [],
//         "year": 2025,
//         "serialNumber": "29PPR6354K240503223",
//         "assignedTo": "Luciano Rojas",
//         "internalTag": "",
//         "observations": "",
//         "brand": {
//             "id": "VsbBJURxvwtPFqD9FlH4",
//             "name": "Philco"
//         }
//     },
//     {
//         "id": "5UJwvX4BhQp5ZsajD0gM",
//         "year": 2025,
//         "assignedTo": "Patricia Berrios",
//         "serialNumber": "N/A",
//         "brand": {
//             "name": "Philco",
//             "id": "VsbBJURxvwtPFqD9FlH4"
//         },
//         "observations": "",
//         "internalTag": "Pack Teclado Mouse",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1764173302,
//             "nanoseconds": 2000000
//         },
//         "type": {
//             "id": "9ErTJt7pEHKuEKU5jUo5",
//             "name": "Pack Teclado & Mouse"
//         },
//         "model": "N/A",
//         "certificateNumber": 127,
//         "software": []
//     },
//     {
//         "id": "5sVFPWXli3l6FlBvsp1C",
//         "assignedTo": "Guillermo Santander",
//         "serialNumber": "GCXD8C2",
//         "observations": "",
//         "brand": {
//             "name": "Dell",
//             "id": "dy6akgYsCUfKkSfGMBrQ"
//         },
//         "internalTag": "PC-LE054",
//         "year": 2025,
//         "model": "Vostro 3250",
//         "certificateNumber": 74,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Acualizaciones de Windows",
//             "Microsof Office 2021",
//             "OCS Inventory"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1752760392,
//             "nanoseconds": 265000000
//         },
//         "type": {
//             "id": "OduyH9UWpo37YQzlcdpe",
//             "name": "PC de escritorio"
//         }
//     },
//     {
//         "id": "5yi8B9ksl2gVyasAF4nv",
//         "certificateNumber": 176,
//         "model": "X1605Z",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "OCS Inventory",
//             "Google Chrome",
//             "Acualizaciones de Windows",
//             "Microsof Office 2021"
//         ],
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775492394,
//             "nanoseconds": 362000000
//         },
//         "serialNumber": "SCN0CV03A31749B",
//         "assignedTo": "Rolando Cori",
//         "internalTag": "PCART-0445",
//         "observations": "Se entrega Notebook con su respectivo cargador.",
//         "brand": {
//             "name": "Asus",
//             "id": "IUfWkjx2KJc0UEhlMFJn"
//         },
//         "year": 2026
//     },
//     {
//         "id": "5zKTgfohM7UwBasQyp0v",
//         "year": 2025,
//         "assignedTo": "Miguel Martínez",
//         "serialNumber": "697737-162",
//         "observations": "",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "internalTag": "",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1743783003,
//             "nanoseconds": 976000000
//         },
//         "type": {
//             "name": "Teclado",
//             "id": "PLR1JvPswRcxkAlTaY2e"
//         },
//         "model": "PR1101U",
//         "certificateNumber": 29,
//         "software": []
//     },
//     {
//         "id": "7ccS83AIucsPcwYgjUKC",
//         "certificateNumber": 25,
//         "model": "ThinBook 14 G6 ABP",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1743770288,
//             "nanoseconds": 122000000
//         },
//         "serialNumber": "PW0AA3M0",
//         "assignedTo": "Fernando Gonzalez",
//         "internalTag": "PCART-0410",
//         "brand": {
//             "name": "Lenovo",
//             "id": "HJrhsRDzVqkZMsEAlpHi"
//         },
//         "observations": "Equipo será utilizado para impartir clases en la facultad de Artes de compañía en la carrera teoría de las artes.",
//         "year": 2025
//     },
//     {
//         "id": "8Masi08o8ro5jzbqZwqa",
//         "year": 2026,
//         "serialNumber": "5CD403178T",
//         "assignedTo": "Erika Valdés",
//         "internalTag": "PCART-0386",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "observations": "Notebook HP estandarizado con cargador y cuenta de usuario Activo ",
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1773774539,
//             "nanoseconds": 936000000
//         },
//         "certificateNumber": 159,
//         "model": "HP Probook 445 G10",
//         "software": [
//             "VLC",
//             "AnyDesk",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "FortiClient",
//             "Auge Honorarios",
//             "Acualizaciones de Windows",
//             "RustDesk"
//         ]
//     },
//     {
//         "id": "9L3BsBHWrrhPUCYGiNmS",
//         "year": 2025,
//         "serialNumber": "PW0AA3NY",
//         "assignedTo": "Fernando Gonzalez",
//         "internalTag": "PCART-0411",
//         "brand": {
//             "id": "HJrhsRDzVqkZMsEAlpHi",
//             "name": "Lenovo"
//         },
//         "observations": "Equipo será utilizado para impartir clases en la facultad de Artes de compañía en la carrera teoría de las artes.",
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1743770447,
//             "nanoseconds": 971000000
//         },
//         "certificateNumber": 26,
//         "model": "ThinBook 14 G6 ABP",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ]
//     },
//     {
//         "id": "9LUzgEabyGLzKR6WwXCO",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1764169223,
//             "nanoseconds": 461000000
//         },
//         "type": {
//             "name": "Cooling-Pad",
//             "id": "NyECokVnm8GnTuMQEEuP"
//         },
//         "model": "N/A",
//         "certificateNumber": 126,
//         "software": [],
//         "year": 2025,
//         "assignedTo": "Patricia Berrios",
//         "serialNumber": "N/A",
//         "brand": {
//             "name": "Philco",
//             "id": "VsbBJURxvwtPFqD9FlH4"
//         },
//         "observations": "Se entrega alzador y mouse.",
//         "internalTag": "Alzador y Mouse"
//     },
//     {
//         "id": "9UrcKAGaKxH5SPVY31d3",
//         "brand": {
//             "id": "HJrhsRDzVqkZMsEAlpHi",
//             "name": "Lenovo"
//         },
//         "observations": "Tablet nueva, incluye funda con teclado, lápiz y cargador",
//         "internalTag": "-",
//         "assignedTo": "Luciano Rojas",
//         "serialNumber": "HA29MS19",
//         "year": 2026,
//         "software": [],
//         "model": "K11",
//         "certificateNumber": 207,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1779220489,
//             "nanoseconds": 477000000
//         },
//         "type": {
//             "name": "Tablet",
//             "id": "WQhxhq0vstQ6FKjXwLDN"
//         }
//     },
//     {
//         "id": "9abb0XdQrQAHoYsxgGol",
//         "serialNumber": "N/A",
//         "assignedTo": "Fabiana Martínez",
//         "internalTag": "N/A",
//         "brand": {
//             "name": "Genérico",
//             "id": "0EW2CcEJeJ6KW3NvCEmr"
//         },
//         "observations": "Adaptador de corriente norma EEUU hacia norma de Chile",
//         "year": 2025,
//         "certificateNumber": 106,
//         "model": "Trimerx",
//         "software": [],
//         "type": {
//             "name": "Adaptador de corriente",
//             "nameEquipmentType": "Adaptador de corriente.",
//             "id": "ixitO8tvYBS0n5OI2tD7"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1762458823,
//             "nanoseconds": 597000000
//         }
//     },
//     {
//         "id": "9vWUnkm1Y4WXSDL5sWah",
//         "year": 2026,
//         "brand": {
//             "name": "Asus",
//             "id": "IUfWkjx2KJc0UEhlMFJn"
//         },
//         "observations": "Se hace entrega de equipo computacional ",
//         "internalTag": "PCART-0447",
//         "assignedTo": "Lucia Espinoza",
//         "serialNumber": "T7PTCJ00M756296",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1778075314,
//             "nanoseconds": 712000000
//         },
//         "type": {
//             "name": "PC de Escritorio AIO",
//             "id": "Jx51tvUtSEWcmvxTDKwX"
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "model": "ASUS EXPERTCENTER P440VA_P440VA",
//         "certificateNumber": 195
//     },
//     {
//         "id": "9wj5szCP5Xti9FHvUATX",
//         "serialNumber": "5CD403178T",
//         "assignedTo": "Ayleen Correa",
//         "internalTag": "PCART-0386",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "observations": "Se realiza entrega en calidad de préstamo temporal para resolver requerimiento  TICKETSTC-1429",
//         "year": 2026,
//         "certificateNumber": 186,
//         "model": "HP ProBook 445 ",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1776182201,
//             "nanoseconds": 892000000
//         }
//     },
//     {
//         "id": "AGYX6EssviUp6q7OtXIr",
//         "internalTag": "PCART-0391",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "observations": "Se realiza entrega de equipo portátil a la usuaria como cargo personal. ",
//         "serialNumber": "1H84243M09",
//         "assignedTo": "Ignacia Briceño",
//         "year": 2025,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Guía Matricula",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 96,
//         "model": "HP 255 G10 ",
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1758805362,
//             "nanoseconds": 656000000
//         }
//     },
//     {
//         "id": "Ag6zBTygurI5uaMPPkQX",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1763392916,
//             "nanoseconds": 601000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "model": "EXPERTBOOK B3404CMA",
//         "certificateNumber": 114,
//         "year": 2025,
//         "observations": "",
//         "brand": {
//             "id": "IUfWkjx2KJc0UEhlMFJn",
//             "name": "Asus"
//         },
//         "internalTag": "PCART-0425",
//         "assignedTo": "Francisco Gonzalez Stuardo",
//         "serialNumber": "SBNXCV10990747C"
//     },
//     {
//         "id": "AhgnHNaMYy56d5emZUCR",
//         "model": "MacBook Pro M4",
//         "certificateNumber": 90,
//         "software": [
//             "Microsof Office 365",
//             "Adobe Acrobat"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1757020286,
//             "nanoseconds": 115000000
//         },
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "assignedTo": "Luis Montes Rojas",
//         "serialNumber": "MR6F4R7L7W",
//         "observations": "",
//         "brand": {
//             "name": "Apple",
//             "id": "iJggoxce0SYgITeRAtOA"
//         },
//         "internalTag": "PCART-0431",
//         "year": 2025
//     },
//     {
//         "id": "AxydnT6on9LYVH0B5YQq",
//         "year": 2025,
//         "internalTag": "PCART-0418",
//         "observations": "",
//         "brand": {
//             "name": "Asus",
//             "id": "IUfWkjx2KJc0UEhlMFJn"
//         },
//         "serialNumber": "SCNXCV15X137526",
//         "assignedTo": "Luciano Rojas",
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1750351103,
//             "nanoseconds": 380000000
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 61,
//         "model": "EXPERTBOOK P1403CVA"
//     },
//     {
//         "id": "BIGzQzDplOkA9E4VrzP6",
//         "certificateNumber": 71,
//         "model": "PROBOOK 445 G8",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1751552996,
//             "nanoseconds": 258000000
//         },
//         "serialNumber": "5CD1514YZH",
//         "assignedTo": "Viviana Rondón",
//         "internalTag": "PCART-0319",
//         "observations": "",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "year": 2025
//     },
//     {
//         "id": "BTlODi1cU3paOGPfzkKa",
//         "internalTag": "Teclado",
//         "brand": {
//             "name": "Philco",
//             "id": "VsbBJURxvwtPFqD9FlH4"
//         },
//         "observations": "",
//         "serialNumber": "2975254500294",
//         "assignedTo": "Catalina Konig",
//         "year": 2025,
//         "software": [],
//         "certificateNumber": 122,
//         "model": "K4500",
//         "type": {
//             "name": "Pack Teclado & Mouse",
//             "id": "9ErTJt7pEHKuEKU5jUo5"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1763752726,
//             "nanoseconds": 800000000
//         }
//     },
//     {
//         "id": "BYu1bWoV7y6Stsabmi1m",
//         "certificateNumber": 204,
//         "model": "V14 G4 IRU",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "OCS Inventory",
//             "Guía Matricula",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1779195682,
//             "nanoseconds": 496000000
//         },
//         "serialNumber": "PF5PRVB0",
//         "assignedTo": "Paula Llaulén",
//         "internalTag": "PC-LE276",
//         "observations": "Notebook nuevo, estandarizado con sistemas institucionales (Windows, Office, SISPER Honorarios, Guía Matrícula, etc).",
//         "brand": {
//             "id": "HJrhsRDzVqkZMsEAlpHi",
//             "name": "Lenovo"
//         },
//         "year": 2026
//     },
//     {
//         "id": "Bb9yZc1UrspknV68Q9UX",
//         "software": [],
//         "certificateNumber": 183,
//         "model": "N/A",
//         "type": {
//             "name": "Adaptador",
//             "id": "CP4FDTpbVMFgpIBoMTf8"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775835121,
//             "nanoseconds": 299000000
//         },
//         "internalTag": "Adaptador HDMI a VGA",
//         "observations": "",
//         "brand": {
//             "id": "0EW2CcEJeJ6KW3NvCEmr",
//             "name": "Genérico"
//         },
//         "serialNumber": "N/A",
//         "assignedTo": "Isidora Palma",
//         "year": 2026
//     },
//     {
//         "id": "BrZYBzF4767sg5voqL7K",
//         "model": " Archer AX3000",
//         "certificateNumber": 138,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1766427948,
//             "nanoseconds": 68000000
//         },
//         "type": {
//             "id": "LjNRgrOiFw4iZK1eyW9p",
//             "name": "Router"
//         },
//         "assignedTo": "José Miguel Candela Pavez",
//         "serialNumber": "22570JV000191",
//         "brand": {
//             "name": "TP-Link",
//             "id": "IubT5LmxKibKlU2aSAHo"
//         },
//         "observations": "Se hace entrega de router inalámbrico para la sala de profesores de danza ",
//         "internalTag": "NN",
//         "year": 2025
//     },
//     {
//         "id": "BtAg3SRtbNZSNWOcgSFX",
//         "assignedTo": "Margarita Filumil",
//         "serialNumber": "TR1D111001550",
//         "observations": "Router D-Link, modelo DIR-X1870.",
//         "brand": null,
//         "internalTag": "",
//         "year": 2025,
//         "model": "DIR-X1870",
//         "certificateNumber": 77,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1753803147,
//             "nanoseconds": 265000000
//         },
//         "type": {
//             "name": "Router",
//             "id": "LjNRgrOiFw4iZK1eyW9p"
//         }
//     },
//     {
//         "id": "CNZd8AsYAd4cjd9UGblq",
//         "year": 2026,
//         "brand": {
//             "name": "LG",
//             "id": "9QENKievFKQVqrHMnh8g"
//         },
//         "observations": "Se hace entrega de monitor LG, ademas de un teclado ,mouse, cable de red y cable de poder ",
//         "internalTag": "NN",
//         "assignedTo": "Luis Peña",
//         "serialNumber": "703NTTQF22369",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1779119128,
//             "nanoseconds": 446000000
//         },
//         "type": {
//             "name": "Monitor",
//             "id": "I0kjijVPwg1niOmOkWys"
//         },
//         "software": [],
//         "model": "20MP48A-P",
//         "certificateNumber": 203
//     },
//     {
//         "id": "Cja75EkRBttifobIbibc",
//         "assignedTo": "Luis Peña",
//         "serialNumber": "F56K9Y1",
//         "observations": "Se hace entrega de equipamiento computacional",
//         "brand": {
//             "id": "dy6akgYsCUfKkSfGMBrQ",
//             "name": "Dell"
//         },
//         "internalTag": "PCISUSH-019",
//         "year": 2026,
//         "model": "OptiPlex 7010",
//         "certificateNumber": 202,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1779118886,
//             "nanoseconds": 576000000
//         },
//         "type": {
//             "name": "PC de Escritorio",
//             "id": "OduyH9UWpo37YQzlcdpe"
//         }
//     },
//     {
//         "id": "Cr1Sr6ebBfXtIoTAp6Pt",
//         "assignedTo": "Matías Diaz",
//         "serialNumber": "WDUUV0B4L8JMY",
//         "observations": "Se entrega cargador",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "internalTag": "-",
//         "year": 2025,
//         "model": "HSTNN-LA40",
//         "certificateNumber": 101,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1759767909,
//             "nanoseconds": 463000000
//         },
//         "type": {
//             "id": "trQCfriR8k2v8b8SekXx",
//             "name": "Cargador de Notebook"
//         }
//     },
//     {
//         "id": "CtDQmDKRC9u8hBDr9Mbp",
//         "assignedTo": "Isis Diaz",
//         "serialNumber": "PW0GTS75",
//         "observations": "Se hace entrega de equipamiento computacional a la usuaria identificada en ele documento.",
//         "brand": {
//             "name": "Lenovo",
//             "id": "HJrhsRDzVqkZMsEAlpHi"
//         },
//         "internalTag": "PCART-0438",
//         "year": 2026,
//         "model": "21SG",
//         "certificateNumber": 148,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1769015303,
//             "nanoseconds": 761000000
//         },
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         }
//     },
//     {
//         "id": "DewV2HXgkOWNoJcfQqEv",
//         "assignedTo": "Paula Altamirano",
//         "serialNumber": "5CD1514XK3",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "observations": "",
//         "internalTag": "PCART-0321",
//         "year": 2025,
//         "model": "PROBOOK 445 G8",
//         "certificateNumber": 81,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1754499493,
//             "nanoseconds": 31000000
//         },
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         }
//     },
//     {
//         "id": "EXWEId3S0ydBWG1LrYlF",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 44,
//         "model": "IdealPad Slim5 5 14IRH10",
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1747164419,
//             "nanoseconds": 717000000
//         },
//         "internalTag": "PCART-0414",
//         "observations": "Equipo entregado a la Psicóloga DEA ",
//         "brand": {
//             "name": "Lenovo",
//             "id": "HJrhsRDzVqkZMsEAlpHi"
//         },
//         "serialNumber": "YX0E1H9C",
//         "assignedTo": "Constanza Bustamante",
//         "year": 2025
//     },
//     {
//         "id": "FGxfpHaLokSCI2IRMitx",
//         "year": 2025,
//         "serialNumber": "BIPK67070",
//         "assignedTo": "Francisco Miranda",
//         "internalTag": "PCART-0421",
//         "observations": "Pc se entrega con los programas requeridos e inventariado.",
//         "brand": {
//             "name": "Generico",
//             "id": "0EW2CcEJeJ6KW3NvCEmr"
//         },
//         "type": {
//             "id": "OduyH9UWpo37YQzlcdpe",
//             "name": "PC de Escritorio"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1754339307,
//             "nanoseconds": 311000000
//         },
//         "certificateNumber": 80,
//         "model": "Generico",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ]
//     },
//     {
//         "id": "FOqmVdi74k1WKvypfWBa",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775047793,
//             "nanoseconds": 437000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "model": "Asus expertbook",
//         "certificateNumber": 170,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Acualizaciones de Windows",
//             "Microsof Office 2021"
//         ],
//         "year": 2026,
//         "assignedTo": "María Ignacia Amigo",
//         "serialNumber": "S8NXCV14K029344",
//         "brand": {
//             "name": "Asus",
//             "id": "IUfWkjx2KJc0UEhlMFJn"
//         },
//         "observations": "Equipo nuevo con programas institucionales \nequipo actualizado se incluye cargador original ",
//         "internalTag": "PCART-0443"
//     },
//     {
//         "id": "FQUCoryrxNGZcenppzFS",
//         "assignedTo": "Camila Briceño",
//         "serialNumber": "S8NXCV14K030347",
//         "brand": {
//             "name": "Asus",
//             "id": "IUfWkjx2KJc0UEhlMFJn"
//         },
//         "observations": "Se entrega notebook con su respectivo cargador.",
//         "internalTag": "PCART-0432",
//         "year": 2025,
//         "model": "ExpertBook",
//         "certificateNumber": 98,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "Auge Sisper",
//             "FortiClient",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows",
//             "Auge Honorarios"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1758891338,
//             "nanoseconds": 761000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         }
//     },
//     {
//         "id": "FgJA9Md1JZ1R9yfV6Rm9",
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1743683672,
//             "nanoseconds": 646000000
//         },
//         "certificateNumber": 23,
//         "model": "Inspiron 3505",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "year": 2025,
//         "serialNumber": "GQ596C3",
//         "assignedTo": "Miguel Martinez",
//         "internalTag": "PCART-0268",
//         "brand": {
//             "id": "dy6akgYsCUfKkSfGMBrQ",
//             "name": "Dell"
//         },
//         "observations": "Equipo reasignado, le falta la tecla de \"flecha hacia arriba\"."
//     },
//     {
//         "id": "Fxupo0xKacdLGpowu7gR",
//         "software": [
//             "IZArc",
//             "VLC",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Google Chrome",
//             "Adobe Acrobat",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "model": "Pro Book 445 G8",
//         "certificateNumber": 184,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775850035,
//             "nanoseconds": 719000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "observations": "Se entrega notebook con su respectivo cargador.",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "internalTag": "PCART-0283",
//         "assignedTo": "Javiera Soto",
//         "serialNumber": "5CD202BXQK",
//         "year": 2026
//     },
//     {
//         "id": "G1wgZzfsLSV1jSEC34Q2",
//         "model": "Archer AX53",
//         "certificateNumber": 172,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775064835,
//             "nanoseconds": 227000000
//         },
//         "type": {
//             "id": "LjNRgrOiFw4iZK1eyW9p",
//             "name": "Router"
//         },
//         "assignedTo": "Karen Sanchez",
//         "serialNumber": "2256707013328",
//         "observations": "Se realiza entrega de router a la unidad de Pregrado",
//         "brand": {
//             "name": "TP-Link",
//             "id": "IubT5LmxKibKlU2aSAHo"
//         },
//         "internalTag": "NN",
//         "year": 2026
//     },
//     {
//         "id": "G7j2qIghdusHjLezF3VO",
//         "year": 2026,
//         "observations": "Teclado nuevo ",
//         "brand": {
//             "id": "VsbBJURxvwtPFqD9FlH4",
//             "name": "Philco"
//         },
//         "internalTag": "N/A",
//         "assignedTo": "Andrea Peñaloza",
//         "serialNumber": "N/A",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1773924118,
//             "nanoseconds": 5000000
//         },
//         "type": {
//             "name": "Teclado",
//             "id": "PLR1JvPswRcxkAlTaY2e"
//         },
//         "software": [],
//         "model": "K4500",
//         "certificateNumber": 162
//     },
//     {
//         "id": "Gj1jOy6lB1zm4rlhFzuA",
//         "internalTag": "Router TP-Link Fonoaudiologo",
//         "brand": {
//             "id": "IubT5LmxKibKlU2aSAHo",
//             "name": "TP-Link"
//         },
//         "observations": "Ex router Oficina Ti, para uso institucional.",
//         "serialNumber": "2249125004903",
//         "assignedTo": "Rolando Cori",
//         "year": 2026,
//         "software": [],
//         "certificateNumber": 173,
//         "model": "Archer AX53",
//         "type": {
//             "name": "Router",
//             "id": "LjNRgrOiFw4iZK1eyW9p"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775065609,
//             "nanoseconds": 565000000
//         }
//     },
//     {
//         "id": "H2DGWyBIAwr5OA1TBAtl",
//         "software": [
//             "VLC",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 113,
//         "model": "ExpertBook B3404CM",
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1763392360,
//             "nanoseconds": 214000000
//         },
//         "internalTag": "PCART-0428",
//         "brand": {
//             "id": "IUfWkjx2KJc0UEhlMFJn",
//             "name": "Asus"
//         },
//         "observations": "",
//         "serialNumber": "SBNXCV109924478 ",
//         "assignedTo": "Mario Labbé",
//         "year": 2025
//     },
//     {
//         "id": "H4vn0dZGiwej3FwgmCzh",
//         "assignedTo": " Matias Díaz ",
//         "serialNumber": "ALD0513G80B",
//         "observations": "Adaptador de corriente para telefonía IP  ",
//         "brand": {
//             "id": "Pvtq803ZHrErLJgxiP62",
//             "name": "Cisco"
//         },
//         "internalTag": "N/A",
//         "year": 2026,
//         "model": "AA25480L",
//         "certificateNumber": 158,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1773773933,
//             "nanoseconds": 778000000
//         },
//         "type": {
//             "id": "ixitO8tvYBS0n5OI2tD7",
//             "nameEquipmentType": "Adaptador de corriente.",
//             "name": "Adaptador de corriente"
//         }
//     },
//     {
//         "id": "IVBeUmj6Xz9dWzLgZ562",
//         "internalTag": "",
//         "observations": "Equipo para la conexión wifi del área comunicaciones. ",
//         "brand": {
//             "name": "TP-Link",
//             "id": "IubT5LmxKibKlU2aSAHo"
//         },
//         "serialNumber": "1750502637",
//         "assignedTo": "Paulina Mellado",
//         "year": 2025,
//         "software": [],
//         "certificateNumber": 35,
//         "model": "AX300",
//         "type": {
//             "id": "LjNRgrOiFw4iZK1eyW9p",
//             "name": "Router"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1745353833,
//             "nanoseconds": 713000000
//         }
//     },
//     {
//         "id": "J9GMp5hSkXgloDNIrKUv",
//         "year": 2026,
//         "assignedTo": "Miguel Martinez",
//         "serialNumber": "N/A",
//         "observations": "Pack de teclado mouse nuevo.",
//         "brand": {
//             "id": "VsbBJURxvwtPFqD9FlH4",
//             "name": "Philco"
//         },
//         "internalTag": "N/A",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1773856642,
//             "nanoseconds": 364000000
//         },
//         "type": {
//             "id": "9ErTJt7pEHKuEKU5jUo5",
//             "name": "Pack Teclado & Mouse"
//         },
//         "model": "K4500",
//         "certificateNumber": 161,
//         "software": []
//     },
//     {
//         "id": "JYx3cUTKH71rGOwaqj7A",
//         "internalTag": "N/A",
//         "observations": "Pack de 4 Unidades de Teclado y  Mouses Nuevos  ",
//         "brand": {
//             "name": "Philco",
//             "id": "VsbBJURxvwtPFqD9FlH4"
//         },
//         "serialNumber": "N/A",
//         "assignedTo": "Patricia San Martín ",
//         "year": 2026,
//         "software": [],
//         "certificateNumber": 153,
//         "model": "K4500",
//         "type": {
//             "name": "Pack Teclado & Mouse",
//             "id": "9ErTJt7pEHKuEKU5jUo5"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1773064791,
//             "nanoseconds": 644000000
//         }
//     },
//     {
//         "id": "JhAzVNFRwYHPq4CYaFZM",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1752081106,
//             "nanoseconds": 506000000
//         },
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "software": [
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows",
//             "OCS Inventory",
//             "FortiClient",
//             "Oracle 10",
//             "AnyDesk",
//             "RustDesk",
//             "IZArc",
//             "VLC",
//             "Adobe Acrobat"
//         ],
//         "model": "Vostro 3400",
//         "certificateNumber": 73,
//         "year": 2025,
//         "brand": {
//             "id": "dy6akgYsCUfKkSfGMBrQ",
//             "name": "Dell"
//         },
//         "observations": "Se entrega con su cargador",
//         "internalTag": "PCART-0277",
//         "assignedTo": "Matias Machuca",
//         "serialNumber": "9LSB9L3"
//     },
//     {
//         "id": "JtSBPz3Z9n3mR1rwen7l",
//         "serialNumber": "MMP20GC3D15070700314",
//         "assignedTo": "Mauricio Astorga",
//         "internalTag": "",
//         "observations": "Microondas (Usado)",
//         "brand": {
//             "id": "b3c4dWMq0oXvi7D00bSS",
//             "name": "Midea"
//         },
//         "year": 2025,
//         "certificateNumber": 43,
//         "model": "MMP-20GC3D",
//         "software": [],
//         "type": {
//             "id": "AH6nWXCdfShSJiclSz9e",
//             "name": "Otro"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1747082892,
//             "nanoseconds": 627000000
//         }
//     },
//     {
//         "id": "KD1FNTrtBwWyRacq73kL",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1745349286,
//             "nanoseconds": 440000000
//         },
//         "type": {
//             "name": "Monitor",
//             "id": "I0kjijVPwg1niOmOkWys"
//         },
//         "software": [],
//         "model": "S27D300GA",
//         "certificateNumber": 32,
//         "year": 2025,
//         "observations": "Monitor de reemplazo por garantía de la compra original",
//         "brand": {
//             "name": "Samsung",
//             "id": "GeJxD177aJ3KfbMEWS4T"
//         },
//         "internalTag": "",
//         "assignedTo": "Margarita Filumil",
//         "serialNumber": "0WR0HNAY100519A"
//     },
//     {
//         "id": "KX8XAQ6jYImODu9DtUOI",
//         "software": [],
//         "model": "RX0058",
//         "certificateNumber": 119,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1763748952,
//             "nanoseconds": 928000000
//         },
//         "type": {
//             "id": "NyECokVnm8GnTuMQEEuP",
//             "name": "Cooling-Pad"
//         },
//         "observations": "",
//         "brand": {
//             "id": "0EW2CcEJeJ6KW3NvCEmr",
//             "name": "Genérico"
//         },
//         "internalTag": "Alzador Notebook",
//         "assignedTo": "Catalina Konig",
//         "serialNumber": "4750007700873",
//         "year": 2025
//     },
//     {
//         "id": "KthIdBFkFPUaVhiIGb8H",
//         "serialNumber": "5CD4111YGC",
//         "assignedTo": "Docencia DAV",
//         "internalTag": "PC-LE253",
//         "observations": "Equipo será usado para impartir clases por docentes de la sede",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "year": 2025,
//         "certificateNumber": 19,
//         "model": "ProBook 445 G10",
//         "software": [
//             "VLC",
//             "iZArc",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Microsoft Office 2021"
//         ],
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1742215251,
//             "nanoseconds": 201000000
//         }
//     },
//     {
//         "id": "L50PvO9zUhksvHQ4dyH3",
//         "type": {
//             "name": "Monitor",
//             "id": "I0kjijVPwg1niOmOkWys"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1763749158,
//             "nanoseconds": 370000000
//         },
//         "certificateNumber": 121,
//         "model": "VA 240",
//         "software": [],
//         "year": 2025,
//         "serialNumber": "XNE252920435",
//         "assignedTo": "Luciano Rojas",
//         "internalTag": "Monitor Viewsonic",
//         "observations": "",
//         "brand": {
//             "id": "0EW2CcEJeJ6KW3NvCEmr",
//             "name": "Genérico"
//         }
//     },
//     {
//         "id": "L5oWn7OrHvuFvHRylPeD",
//         "year": 2026,
//         "brand": {
//             "id": "HJrhsRDzVqkZMsEAlpHi",
//             "name": "Lenovo"
//         },
//         "observations": "Tablet nueva, incluye funda con teclado, lápiz y cargador",
//         "internalTag": "-",
//         "assignedTo": "Miguel Martinez",
//         "serialNumber": "HA29MN40",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1779220444,
//             "nanoseconds": 579000000
//         },
//         "type": {
//             "name": "Tablet",
//             "id": "WQhxhq0vstQ6FKjXwLDN"
//         },
//         "software": [],
//         "model": "Tab K11",
//         "certificateNumber": 206
//     },
//     {
//         "id": "L9PQqqzWxC7sFZU6ZupR",
//         "year": 2025,
//         "serialNumber": "F55L9Y1",
//         "assignedTo": "Jose Luengo",
//         "internalTag": "PC-LE261",
//         "brand": {
//             "name": "Dell",
//             "id": "dy6akgYsCUfKkSfGMBrQ"
//         },
//         "observations": "Se hace entrega de equipo computacional en reemplazo de equipo ya obsoleto tecnológicamente",
//         "type": {
//             "name": "PC de Escritorio",
//             "id": "OduyH9UWpo37YQzlcdpe"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1764180856,
//             "nanoseconds": 653000000
//         },
//         "certificateNumber": 128,
//         "model": "OptiPlex 7010",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Acualizaciones de Windows",
//             "Microsof Office 2021",
//             "Google Chrome",
//             "Adobe Acrobat",
//             "OCS Inventory",
//             "FortiClient"
//         ]
//     },
//     {
//         "id": "LYKAK8hu7lA7AFTJHwtV",
//         "serialNumber": "XNE252920429",
//         "assignedTo": "Oscar Diaz",
//         "internalTag": "N/A",
//         "brand": {
//             "id": "SgVKiw6FNbM5PMQa8MNU",
//             "name": "ViewSonic"
//         },
//         "observations": "Monitor Nuevo 24\" VA240-H ",
//         "year": 2025,
//         "certificateNumber": 123,
//         "model": "VS19971",
//         "software": [],
//         "type": {
//             "id": "I0kjijVPwg1niOmOkWys",
//             "name": "Monitor"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1764166408,
//             "nanoseconds": 835000000
//         }
//     },
//     {
//         "id": "LsCvZskt3tbn7Gai3p09",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775666075,
//             "nanoseconds": 312000000
//         },
//         "type": {
//             "id": "oxCJreEb6y3ucoVhnJUG",
//             "name": "Teléfono IP"
//         },
//         "software": [],
//         "model": "CP-7962G",
//         "certificateNumber": 182,
//         "year": 2026,
//         "brand": {
//             "name": "Cisco",
//             "id": "Pvtq803ZHrErLJgxiP62"
//         },
//         "observations": "Teléfono de préstamo desde Servicios Centrales, mientras se despacha equipamiento definitivo.",
//         "internalTag": "N/A",
//         "assignedTo": "Psicología ISUCH",
//         "serialNumber": "FCH143986T"
//     },
//     {
//         "id": "M5lMMD1LnM5WP5eA7lLN",
//         "year": 2025,
//         "assignedTo": "Marcel Becerra",
//         "serialNumber": "PW0FC1DT",
//         "brand": {
//             "id": "HJrhsRDzVqkZMsEAlpHi",
//             "name": "Lenovo"
//         },
//         "observations": "Entrega de equipo portátil a cargo.",
//         "internalTag": "PCART-0420",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1750795166,
//             "nanoseconds": 195000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "model": "\t21KJ",
//         "certificateNumber": 65,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "Auge Sisper",
//             "OCS Inventory",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows",
//             "Oracle 10"
//         ]
//     },
//     {
//         "id": "MJLsJVng06sAuCWtvi0W",
//         "assignedTo": "Danilo Lizana",
//         "serialNumber": "SCD1514XGW",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "observations": "PC para practicante",
//         "internalTag": "PCART-0291",
//         "year": 2026,
//         "model": "ProBook 445 G8",
//         "certificateNumber": 142,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1767704392,
//             "nanoseconds": 965000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         }
//     },
//     {
//         "id": "N5VAwTqrjODaw7q3WI8x",
//         "year": 2026,
//         "observations": "Equipo de préstamo mientras unidad de inventarios adquiere un disco duro ",
//         "brand": {
//             "name": "Dell",
//             "id": "dy6akgYsCUfKkSfGMBrQ"
//         },
//         "internalTag": "PCART-0230",
//         "assignedTo": "Andrea Peñaloza ",
//         "serialNumber": "BBD6LR2",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775047076,
//             "nanoseconds": 894000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "software": [
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "model": "Latitude 3490",
//         "certificateNumber": 169
//     },
//     {
//         "id": "NRT5mWtztCnT0SE4T2Un",
//         "year": 2026,
//         "internalTag": "N/A",
//         "observations": "Equipo nuevo con configuración de red sistema Wi-Fi UCHART",
//         "brand": {
//             "id": "IubT5LmxKibKlU2aSAHo",
//             "name": "TP-Link"
//         },
//         "serialNumber": "2256707013328",
//         "assignedTo": "María Verónica Carrasco",
//         "type": {
//             "id": "LjNRgrOiFw4iZK1eyW9p",
//             "name": "Router"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1769545142,
//             "nanoseconds": 533000000
//         },
//         "software": [],
//         "certificateNumber": 150,
//         "model": "AX53"
//     },
//     {
//         "id": "NZCwRC3CqTxVcBdoWIxQ",
//         "year": 2025,
//         "observations": "Router D-Link, modelo DIR-X1870",
//         "brand": null,
//         "internalTag": "",
//         "assignedTo": "Margarita Filumil",
//         "serialNumber": "TR1D111001550",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1753802956,
//             "nanoseconds": 31000000
//         },
//         "type": {
//             "name": "Router",
//             "id": "LjNRgrOiFw4iZK1eyW9p"
//         },
//         "software": [],
//         "model": "DIR-X1870",
//         "certificateNumber": 75
//     },
//     {
//         "id": "O4F9Bpgqzw1tR7ZMFR9c",
//         "year": 2025,
//         "brand": {
//             "id": "iJggoxce0SYgITeRAtOA",
//             "name": "Apple"
//         },
//         "observations": "",
//         "internalTag": "PCTNCH-014",
//         "assignedTo": "Cristian Keim",
//         "serialNumber": "GX1G9715QJ",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1763739458,
//             "nanoseconds": 106000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "software": [
//             "RustDesk",
//             "AnyDesk",
//             "OCS Inventory",
//             "Google Chrome",
//             "Microsof Office 365"
//         ],
//         "model": "MacBook Pro A3112",
//         "certificateNumber": 117
//     },
//     {
//         "id": "O4xLQm3VDtkT0YqriA8y",
//         "assignedTo": "Mauricio Astorga",
//         "serialNumber": "N/A",
//         "observations": "Teclado Alámbrico Nuevo",
//         "brand": {
//             "name": "Philco",
//             "id": "VsbBJURxvwtPFqD9FlH4"
//         },
//         "internalTag": "N/A",
//         "year": 2025,
//         "model": "K4500",
//         "certificateNumber": 125,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1764166809,
//             "nanoseconds": 466000000
//         },
//         "type": {
//             "id": "PLR1JvPswRcxkAlTaY2e",
//             "name": "Teclado"
//         }
//     },
//     {
//         "id": "ODFYW8Mbp7LXoz8mO8bQ",
//         "model": "V14 G4",
//         "certificateNumber": 200,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1778698512,
//             "nanoseconds": 490000000
//         },
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "assignedTo": "Paula Llaulén",
//         "serialNumber": "PF5PT8NQ",
//         "brand": {
//             "id": "HJrhsRDzVqkZMsEAlpHi",
//             "name": "Lenovo"
//         },
//         "observations": "Se hace entrega con su respectivo cargador.",
//         "internalTag": "PC-LE277",
//         "year": 2026
//     },
//     {
//         "id": "OcQzZTc9h070DKAwzHUx",
//         "software": [],
//         "model": "Generico",
//         "certificateNumber": 143,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1767791062,
//             "nanoseconds": 799000000
//         },
//         "type": {
//             "id": "9ErTJt7pEHKuEKU5jUo5",
//             "name": "Pack Teclado & Mouse"
//         },
//         "observations": "Teclado y mouse para practicante",
//         "brand": {
//             "id": "VsbBJURxvwtPFqD9FlH4",
//             "name": "Philco"
//         },
//         "internalTag": "-",
//         "assignedTo": "Danilo Lizana",
//         "serialNumber": "-",
//         "year": 2026
//     },
//     {
//         "id": "P1KyhHfKXNkNSiEsZZ1j",
//         "type": {
//             "id": "OduyH9UWpo37YQzlcdpe",
//             "name": "PC de escritorio"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1756131238,
//             "nanoseconds": 334000000
//         },
//         "certificateNumber": 85,
//         "model": "Generico",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Acualizaciones de Windows",
//             "Microsof Office 2021"
//         ],
//         "year": 2025,
//         "serialNumber": "7426151676",
//         "assignedTo": "Guido Zamorano",
//         "internalTag": "PCART-0210",
//         "observations": "",
//         "brand": {
//             "name": "Generico",
//             "id": "0EW2CcEJeJ6KW3NvCEmr"
//         }
//     },
//     {
//         "id": "PCrKbMqEOOMGgC1hM2G8",
//         "software": [
//             "VLC",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "model": "ExpertBook B3404CMA",
//         "certificateNumber": 105,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1762375279,
//             "nanoseconds": 374000000
//         },
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "observations": "Equipo nuevo con cargador",
//         "brand": {
//             "name": "Asus",
//             "id": "IUfWkjx2KJc0UEhlMFJn"
//         },
//         "internalTag": "PCART-0433",
//         "assignedTo": "Guido Soto",
//         "serialNumber": "SBNXCV109888479",
//         "year": 2025
//     },
//     {
//         "id": "PKjy5yscCXVKtUBPA81J",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "model": "ThinBook 14 G6 ABP",
//         "certificateNumber": 27,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1743770622,
//             "nanoseconds": 36000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "observations": "Equipo será utilizado para impartir clases en la facultad de Artes de compañía en la carrera teoría de las artes.",
//         "brand": {
//             "id": "HJrhsRDzVqkZMsEAlpHi",
//             "name": "Lenovo"
//         },
//         "internalTag": "PCART-0412",
//         "assignedTo": "Fernando Gonzalez",
//         "serialNumber": "PW0AA3SS",
//         "year": 2025
//     },
//     {
//         "id": "QVikn3v13X82kRHHTaqJ",
//         "software": [],
//         "certificateNumber": 69,
//         "model": "UT-NTC020",
//         "type": {
//             "id": "AH6nWXCdfShSJiclSz9e",
//             "name": "Otro"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1751474700,
//             "nanoseconds": 505000000
//         },
//         "internalTag": "-",
//         "observations": "Cooling-pad para notebook de 12\"-17\"",
//         "brand": {
//             "name": "Genérico",
//             "id": "0EW2CcEJeJ6KW3NvCEmr"
//         },
//         "serialNumber": "2106205502009",
//         "assignedTo": "Carlos Carrillo",
//         "year": 2025
//     },
//     {
//         "id": "QjxJDndgpJpMt8Z4ARDC",
//         "year": 2025,
//         "internalTag": "N/A",
//         "brand": {
//             "name": "Philco",
//             "id": "VsbBJURxvwtPFqD9FlH4"
//         },
//         "observations": "Pack teclado y mouse alámbricos nuevo.",
//         "serialNumber": "N/A",
//         "assignedTo": "Oscar Diaz",
//         "type": {
//             "name": "Pack Teclado & Mouse",
//             "id": "9ErTJt7pEHKuEKU5jUo5"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1764166706,
//             "nanoseconds": 223000000
//         },
//         "software": [],
//         "certificateNumber": 124,
//         "model": "K4500"
//     },
//     {
//         "id": "QllcnMlhy7gWOd77LC7K",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows",
//             "Adobe Acrobat",
//             "OCS Inventory"
//         ],
//         "model": "P1403CVA",
//         "certificateNumber": 59,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1750177653,
//             "nanoseconds": 83000000
//         },
//         "type": {
//             "id": "d526u4vGxGs1VprecO17",
//             "name": "Mouse"
//         },
//         "brand": {
//             "name": "Brother",
//             "id": "ekV2k8DoXLTsJQ1lhfH4"
//         },
//         "observations": "Notebook nuevo, se entrega junto a su respectivo cargador.",
//         "internalTag": "PC-LE259",
//         "assignedTo": "Valeria Bastías",
//         "serialNumber": "SCNXCV15X24152B",
//         "year": 2025
//     },
//     {
//         "id": "QvmIdic3crAeeQasB5sE",
//         "year": 2026,
//         "observations": "Teléfono de préstamo desde Servicios Centrales, mientras se despacha equipamiento definitivo.",
//         "brand": {
//             "name": "Cisco",
//             "id": "Pvtq803ZHrErLJgxiP62"
//         },
//         "internalTag": "N/A",
//         "assignedTo": "Orientación ISUCH",
//         "serialNumber": "FCH143983E2",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775665704,
//             "nanoseconds": 477000000
//         },
//         "type": {
//             "id": "oxCJreEb6y3ucoVhnJUG",
//             "name": "Teléfono IP"
//         },
//         "software": [],
//         "model": "CP-7962G",
//         "certificateNumber": 180
//     },
//     {
//         "id": "Rbxg7B6aJ9TSbrjejWSh",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "model": "ProBook 445 G9",
//         "certificateNumber": 89,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1756761896,
//             "nanoseconds": 844000000
//         },
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "observations": "",
//         "internalTag": "PCART-0354",
//         "assignedTo": "Ayleen Correa",
//         "serialNumber": "5CD3062TP4",
//         "year": 2025
//     },
//     {
//         "id": "RmjukqnPh2Gb7NasNEHg",
//         "year": 2026,
//         "internalTag": "NN",
//         "brand": {
//             "id": "IubT5LmxKibKlU2aSAHo",
//             "name": "TP-Link"
//         },
//         "observations": "Equipo comprado por el departamento de sonido, se configura UCHART.",
//         "serialNumber": "4897098683088",
//         "assignedTo": "Pablo Andrés Gudiño Perez",
//         "type": {
//             "id": "LjNRgrOiFw4iZK1eyW9p",
//             "name": "Router"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1774461816,
//             "nanoseconds": 361000000
//         },
//         "software": [],
//         "certificateNumber": 165,
//         "model": "Archer AX53"
//     },
//     {
//         "id": "RnuLW3JeVhyFNcgcyjbN",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1756759239,
//             "nanoseconds": 548000000
//         },
//         "type": {
//             "name": "Teléfono IP",
//             "id": "oxCJreEb6y3ucoVhnJUG"
//         },
//         "software": [],
//         "model": "Cisco IP Phone 7912",
//         "certificateNumber": 87,
//         "year": 2025,
//         "observations": "",
//         "brand": {
//             "name": "Genérico",
//             "id": "0EW2CcEJeJ6KW3NvCEmr"
//         },
//         "internalTag": "",
//         "assignedTo": "Mayordomia",
//         "serialNumber": "INM09191MYA"
//     },
//     {
//         "id": "SgYODTXVyHMZiqCQT5aM",
//         "assignedTo": "Yessenia Marquez",
//         "serialNumber": "9TY2LM3",
//         "observations": "",
//         "brand": {
//             "id": "dy6akgYsCUfKkSfGMBrQ",
//             "name": "Dell"
//         },
//         "internalTag": "PC-LE256",
//         "year": 2025,
//         "model": "Vostro 3681",
//         "certificateNumber": 31,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "Auge Sisper",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1745335506,
//             "nanoseconds": 63000000
//         },
//         "type": {
//             "name": "PC de Escritorio",
//             "id": "OduyH9UWpo37YQzlcdpe"
//         }
//     },
//     {
//         "id": "T8l7Tutj22yeRUcuGPcZ",
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1743770001,
//             "nanoseconds": 480000000
//         },
//         "certificateNumber": 24,
//         "model": "ThinBook 14 G6 ABP",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "FortiClient",
//             "Google Chrome",
//             "Adobe Acrobat",
//             "OCS Inventory",
//             "Microsof Office 365",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "year": 2025,
//         "serialNumber": "PW0AA3NL",
//         "assignedTo": "Fernando Gonzalez",
//         "internalTag": "PCART-0409",
//         "brand": {
//             "name": "Lenovo",
//             "id": "HJrhsRDzVqkZMsEAlpHi"
//         },
//         "observations": "Equipo será utilizado para impartir clases en la facultad de Artes de compañía en la carrera teoría de las artes,"
//     },
//     {
//         "id": "TYdZKk3j2PZ5A4bCiEht",
//         "model": "CP-7962G",
//         "certificateNumber": 181,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775665907,
//             "nanoseconds": 817000000
//         },
//         "type": {
//             "name": "Teléfono IP",
//             "id": "oxCJreEb6y3ucoVhnJUG"
//         },
//         "assignedTo": "Coordinación Académica ISUCH",
//         "serialNumber": "FCH143981L3",
//         "brand": {
//             "id": "Pvtq803ZHrErLJgxiP62",
//             "name": "Cisco"
//         },
//         "observations": "Teléfono de préstamo desde Servicios Centrales, mientras se despacha equipamiento definitivo.",
//         "internalTag": "N/A",
//         "year": 2026
//     },
//     {
//         "id": "Ta7B74JNv1ffmn6oTSoz",
//         "assignedTo": "Margarita Filumil",
//         "serialNumber": "TR1D111001550",
//         "brand": null,
//         "observations": "Router D-Link, modelo DIR-X1870.",
//         "internalTag": "",
//         "year": 2025,
//         "model": "DIR-X1870",
//         "certificateNumber": 76,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1753803024,
//             "nanoseconds": 132000000
//         },
//         "type": {
//             "id": "LjNRgrOiFw4iZK1eyW9p",
//             "name": "Router"
//         }
//     },
//     {
//         "id": "ToRy9e9BRY1sOeC2wWhU",
//         "internalTag": "PCART-0292",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "observations": "",
//         "serialNumber": "5CD1514XJ6",
//         "assignedTo": "Andrea Peñaloza",
//         "year": 2025,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 107,
//         "model": "Pro Book 445 G9",
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1762519227,
//             "nanoseconds": 897000000
//         }
//     },
//     {
//         "id": "Tzky0NgwSqy3Av3KzPKP",
//         "year": 2026,
//         "observations": "Se hace entrega de equipamiento computacional al usuario indicado en esta acta.",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "internalTag": "PCART-0439",
//         "assignedTo": "Veronica Vargas",
//         "serialNumber": "8CC5071FT7",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1769529103,
//             "nanoseconds": 775000000
//         },
//         "type": {
//             "id": "Jx51tvUtSEWcmvxTDKwX",
//             "name": "PC de Escritorio AIO"
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Guía Matricula",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "model": "\tHP All-in-One Desktop 27-cr0xxx",
//         "certificateNumber": 149
//     },
//     {
//         "id": "UYsTn9V6cx0UY80j333x",
//         "year": 2025,
//         "internalTag": "PCART-0415",
//         "observations": "El computador cuenta con los programas necesarios para su uso correspondiente.",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "serialNumber": "8CN34302XW",
//         "assignedTo": "Luis Corvalán",
//         "type": {
//             "id": "Jx51tvUtSEWcmvxTDKwX",
//             "name": "PC de Escritorio AIO"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1747165947,
//             "nanoseconds": 654000000
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 45,
//         "model": "ProOne 440 G9"
//     },
//     {
//         "id": "Ud318U8XCmYB1MTKSysm",
//         "year": 2025,
//         "serialNumber": "2249125004939",
//         "assignedTo": "Claudia Vergara",
//         "internalTag": "",
//         "observations": "Router nuevo.",
//         "brand": {
//             "name": "TP-Link",
//             "id": "IubT5LmxKibKlU2aSAHo"
//         },
//         "type": {
//             "id": "LjNRgrOiFw4iZK1eyW9p",
//             "name": "Router"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1756240055,
//             "nanoseconds": 897000000
//         },
//         "certificateNumber": 86,
//         "model": "Archer AX53",
//         "software": []
//     },
//     {
//         "id": "UgyELyvVHlnXuWgULQiT",
//         "assignedTo": "Janet González",
//         "serialNumber": "22523P9006117",
//         "observations": "Router Archer AX53 nuevo para sala Multimedia (subterráneo Artes Visuales)",
//         "brand": {
//             "name": "TP-Link",
//             "id": "IubT5LmxKibKlU2aSAHo"
//         },
//         "internalTag": "N/A",
//         "year": 2025,
//         "model": "Archer AX56",
//         "certificateNumber": 137,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1765915150,
//             "nanoseconds": 25000000
//         },
//         "type": {
//             "id": "LjNRgrOiFw4iZK1eyW9p",
//             "name": "Router"
//         }
//     },
//     {
//         "id": "UiphKvLe8uMi7WWmBXoA",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "OCS Inventory",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows",
//             "Adobe Acrobat"
//         ],
//         "certificateNumber": 166,
//         "model": "Pro Book 445 G9",
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1774893897,
//             "nanoseconds": 770000000
//         },
//         "internalTag": "PCART-0372",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "observations": "Se entrega notebook con su cargador correspondiente.",
//         "serialNumber": "5CD3062SYP",
//         "assignedTo": "Rolando Cori",
//         "year": 2026
//     },
//     {
//         "id": "VA8agKn0NB0XdhRKGrlN",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1751469836,
//             "nanoseconds": 81000000
//         },
//         "type": {
//             "name": "PC de Escritorio",
//             "id": "OduyH9UWpo37YQzlcdpe"
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "AnyDesk",
//             "RustDesk",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows",
//             "OCS Inventory",
//             "FortiClient"
//         ],
//         "model": "OptiPlex 7010",
//         "certificateNumber": 68,
//         "year": 2025,
//         "observations": "Se hace entrega de equipamiento computacional en reemplazo del equipo antiguo",
//         "brand": {
//             "id": "dy6akgYsCUfKkSfGMBrQ",
//             "name": "Dell"
//         },
//         "internalTag": "PC-LE261",
//         "assignedTo": "Jose Luengo",
//         "serialNumber": "F55L9Y1"
//     },
//     {
//         "id": "VH8ctXcIEbyv5UpX4M6t",
//         "year": 2026,
//         "serialNumber": "4897098683088",
//         "assignedTo": "Pablo Andrés Gudiño Pérez",
//         "internalTag": "NN",
//         "observations": "Equipo comprado por el departamento de sonido, se configura red UCHART",
//         "brand": {
//             "id": "IubT5LmxKibKlU2aSAHo",
//             "name": "TP-Link"
//         },
//         "type": {
//             "name": "Router",
//             "id": "LjNRgrOiFw4iZK1eyW9p"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1774290616,
//             "nanoseconds": 698000000
//         },
//         "certificateNumber": 164,
//         "model": "Archer AX53",
//         "software": []
//     },
//     {
//         "id": "VWQm3fJTbt7ZP7TZN2kt",
//         "certificateNumber": 16,
//         "model": "ProBook 445 G10",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Acualizaciones de Windows",
//             "Microsof Office 2021"
//         ],
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1749758658,
//             "nanoseconds": 948000000
//         },
//         "serialNumber": "5CD4111YBY",
//         "assignedTo": "Docencia DAV",
//         "internalTag": "PC-LE251",
//         "observations": "Equipo será usado para impartir clases por docentes de la sede",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "year": 2025
//     },
//     {
//         "id": "WHYVm5xapHRAjMTArPqg",
//         "model": "UT-NTC020",
//         "certificateNumber": 70,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1751474937,
//             "nanoseconds": 390000000
//         },
//         "type": {
//             "name": "Otro",
//             "id": "AH6nWXCdfShSJiclSz9e"
//         },
//         "assignedTo": "Katalina Urra",
//         "serialNumber": "2106205502009",
//         "brand": {
//             "id": "0EW2CcEJeJ6KW3NvCEmr",
//             "name": "Genérico"
//         },
//         "observations": "Cooling Pad para Notebook de 12\" a 17\"",
//         "internalTag": "-",
//         "year": 2025
//     },
//     {
//         "id": "WNc4S4dYbu2mEeN2RQP8",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1773070906,
//             "nanoseconds": 423000000
//         },
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "model": "HP Laptop 15-fd0xxx",
//         "certificateNumber": 156,
//         "year": 2026,
//         "observations": "Se hace entrega de equipamiento computacional al usuario indicado en el acta.",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "internalTag": "PCART-0440",
//         "assignedTo": "Catalina Reyes",
//         "serialNumber": "1H85140K3M"
//     },
//     {
//         "id": "Ws3AnQsXd2BX6U3DBcM3",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1742998872,
//             "nanoseconds": 442000000
//         },
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "model": "ProBook 445 G9",
//         "certificateNumber": 22,
//         "year": 2025,
//         "observations": "",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "internalTag": "PCART-0354",
//         "assignedTo": "Miguel Martinez",
//         "serialNumber": "5CD3062TP4"
//     },
//     {
//         "id": "XtxftwQELarLyymQGvma",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "model": "ASUS EXPERTBOOK",
//         "certificateNumber": 110,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1762784571,
//             "nanoseconds": 193000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "observations": "Equipo asignado para uso laboral.",
//         "brand": {
//             "id": "IUfWkjx2KJc0UEhlMFJn",
//             "name": "Asus"
//         },
//         "internalTag": "PCART-0430",
//         "assignedTo": "Marcelo Torres",
//         "serialNumber": "SBNXCV109900475",
//         "year": 2025
//     },
//     {
//         "id": "XuSBKK9xE6gwuCMEg9il",
//         "serialNumber": "5CD4111YMT",
//         "assignedTo": "Docencia DAV",
//         "internalTag": "PC-LE254",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "observations": "Equipo será usado para impartir clases por docentes de la sede",
//         "year": 2025,
//         "certificateNumber": 20,
//         "model": "ProBook 445 G10",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "OCS Inventory",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows",
//             "Adobe Acrobat",
//             "Google Chrome"
//         ],
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1742324878,
//             "nanoseconds": 691000000
//         }
//     },
//     {
//         "id": "Xxi6s4iM8aVU5bGok09C",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1747236616,
//             "nanoseconds": 655000000
//         },
//         "type": {
//             "id": "OduyH9UWpo37YQzlcdpe",
//             "name": "PC de Escritorio"
//         },
//         "software": [
//             "VLC",
//             "RusDesk",
//             "IZArc",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "model": "ProOne 440 AiO",
//         "certificateNumber": 48,
//         "year": 2025,
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "observations": "",
//         "internalTag": "PCART-0416",
//         "assignedTo": "Mabel Urrutia",
//         "serialNumber": "8CN34302W8"
//     },
//     {
//         "id": "Y3nkGcbjrqn7FlnkV82C",
//         "assignedTo": "Carlos Carrillo",
//         "serialNumber": "N/A",
//         "brand": {
//             "id": "Pvtq803ZHrErLJgxiP62",
//             "name": "Cisco"
//         },
//         "observations": "Ex Teléfono IP de Raúl Román, se reconfigura nombre de anexo 80801 a \"Adquisiciones y Proyectos\".",
//         "internalTag": "N/A",
//         "year": 2026,
//         "model": "CP-7940G",
//         "certificateNumber": 194,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1777483853,
//             "nanoseconds": 173000000
//         },
//         "type": {
//             "name": "Teléfono IP",
//             "id": "oxCJreEb6y3ucoVhnJUG"
//         }
//     },
//     {
//         "id": "YSeYW8ONchtLO3ojPskN",
//         "year": 2025,
//         "serialNumber": "8CN34302M2",
//         "assignedTo": "Soledad Maturana",
//         "internalTag": "PC-LE260",
//         "observations": "Pc se entrega con sus respectivos accesorios.",
//         "brand": {
//             "id": "IUfWkjx2KJc0UEhlMFJn",
//             "name": "Asus"
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1750341214,
//             "nanoseconds": 334000000
//         },
//         "certificateNumber": 60,
//         "model": "Pro One 440",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ]
//     },
//     {
//         "id": "YUHAcKMj8dI4oRzkm5J3",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1766433634,
//             "nanoseconds": 175000000
//         },
//         "type": {
//             "id": "OduyH9UWpo37YQzlcdpe",
//             "name": "PC de Escritorio"
//         },
//         "model": "OptiPlex 7010",
//         "certificateNumber": 139,
//         "software": [
//             "VLC",
//             "Acualizaciones de Windows",
//             "Microsof Office 2021",
//             "Google Chrome",
//             "Adobe Acrobat",
//             "IZArc"
//         ],
//         "year": 2025,
//         "assignedTo": "José Miguel Candela",
//         "serialNumber": "",
//         "brand": {
//             "name": "Dell",
//             "id": "dy6akgYsCUfKkSfGMBrQ"
//         },
//         "observations": "Se hace entrega de tres equipos computacionales para escritorio para la sala de profesores de Danza",
//         "internalTag": "PCART-0435/PCART-0436/PCART-0437"
//     },
//     {
//         "id": "YVt0DMFkNucxhEjOxMBn",
//         "year": 2025,
//         "serialNumber": "5CD3062TP4",
//         "assignedTo": "Fernanda Nawrath",
//         "internalTag": "PCART-0354",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "observations": "",
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1747324709,
//             "nanoseconds": 388000000
//         },
//         "certificateNumber": 49,
//         "model": "ProBook 445 G9",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Acualizaciones de Windows",
//             "Microsof Office 2021"
//         ]
//     },
//     {
//         "id": "ZorbAQbis7qSnkU6cI4b",
//         "year": 2026,
//         "brand": {
//             "id": "IUfWkjx2KJc0UEhlMFJn",
//             "name": "Asus"
//         },
//         "observations": "Se entrega notebook con su respectivo cargador.",
//         "internalTag": "PC-LE275",
//         "assignedTo": "Tamara Toledo",
//         "serialNumber": "S8NXCV14K036345",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775575947,
//             "nanoseconds": 356000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows",
//             "OCS Inventory",
//             "FortiClient"
//         ],
//         "model": "ExpertBook",
//         "certificateNumber": 177
//     },
//     {
//         "id": "ZvsQIOJVXuvqUpZZacFf",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1766587339,
//             "nanoseconds": 580000000
//         },
//         "type": {
//             "name": "Otro",
//             "id": "AH6nWXCdfShSJiclSz9e"
//         },
//         "model": "TL-SF1008D",
//         "certificateNumber": 140,
//         "software": [],
//         "year": 2025,
//         "assignedTo": "Jose Candela",
//         "serialNumber": "10683116789",
//         "brand": {
//             "id": "IubT5LmxKibKlU2aSAHo",
//             "name": "TP-Link"
//         },
//         "observations": "Se hace entrega de switch de 8 puertos para ser usado en sala de profesores de Danza",
//         "internalTag": "NN"
//     },
//     {
//         "id": "_counter",
//         "certificateNumber": 209
//     },
//     {
//         "id": "a1FtVz3Fl4jSOg6RcFWk",
//         "model": "K4500",
//         "certificateNumber": 163,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1773927577,
//             "nanoseconds": 371000000
//         },
//         "type": {
//             "id": "PLR1JvPswRcxkAlTaY2e",
//             "name": "Teclado"
//         },
//         "assignedTo": "Pamela Alfaro",
//         "serialNumber": "N/A",
//         "observations": "TECLADO NUEVO ",
//         "brand": {
//             "id": "VsbBJURxvwtPFqD9FlH4",
//             "name": "Philco"
//         },
//         "internalTag": "N/A",
//         "year": 2026
//     },
//     {
//         "id": "aSkukQNz2SUBfBzKaq4V",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "model": "ProBook 445 G10",
//         "certificateNumber": 83,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1755020881,
//             "nanoseconds": 558000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "observations": "Se entrega con sus accesorios.",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "internalTag": "PCART-0379",
//         "assignedTo": "Matías Díaz",
//         "serialNumber": "5CD33527B4",
//         "year": 2025
//     },
//     {
//         "id": "aWAc1ZvEDj40K391kPTj",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1750696606,
//             "nanoseconds": 680000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "model": "P1403CVA",
//         "certificateNumber": 63,
//         "year": 2025,
//         "brand": {
//             "id": "IUfWkjx2KJc0UEhlMFJn",
//             "name": "Asus"
//         },
//         "observations": "",
//         "internalTag": "PCART-0417",
//         "assignedTo": "Catalina König",
//         "serialNumber": "SCNXCV15X36852A"
//     },
//     {
//         "id": "b2mwTHDIVl4dY86vOYdN",
//         "software": [],
//         "certificateNumber": 66,
//         "model": "S27C310EAL",
//         "type": {
//             "name": "Monitor",
//             "id": "I0kjijVPwg1niOmOkWys"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1750967137,
//             "nanoseconds": 222000000
//         },
//         "internalTag": "",
//         "observations": "",
//         "brand": {
//             "id": "GeJxD177aJ3KfbMEWS4T",
//             "name": "Samsung"
//         },
//         "serialNumber": "5NJJH9JXA00760",
//         "assignedTo": "Miguel Martinez",
//         "year": 2025
//     },
//     {
//         "id": "bEY4qGDKumrvLDvb92mE",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1765983303,
//             "nanoseconds": 519000000
//         },
//         "type": {
//             "name": "Cooling-Pad",
//             "id": "NyECokVnm8GnTuMQEEuP"
//         },
//         "software": [],
//         "model": "RX0058",
//         "certificateNumber": 139,
//         "year": 2025,
//         "observations": "",
//         "brand": {
//             "name": "Reptilex",
//             "id": "OeobRnBgaz9zk7DKyxjk"
//         },
//         "internalTag": "N/A",
//         "assignedTo": "Juan Pablo Espinoza",
//         "serialNumber": "N/A"
//     },
//     {
//         "id": "c1ZbApiFIo4Q7HAtsyYg",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1764941061,
//             "nanoseconds": 15000000
//         },
//         "type": {
//             "id": "I0kjijVPwg1niOmOkWys",
//             "name": "Monitor"
//         },
//         "software": [],
//         "model": "E1942CA",
//         "certificateNumber": 133,
//         "year": 2025,
//         "brand": {
//             "name": "LG",
//             "id": "9QENKievFKQVqrHMnh8g"
//         },
//         "observations": "Se entrega monitor con sus respectivos cables.",
//         "internalTag": "Monitor LG",
//         "assignedTo": "Mauricio Toro",
//         "serialNumber": "202NDTC95985"
//     },
//     {
//         "id": "c5j3FbsdrD0K1MzFYlk2",
//         "software": [],
//         "model": "HDMI",
//         "certificateNumber": 100,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1759237754,
//             "nanoseconds": 818000000
//         },
//         "type": {
//             "name": "Otro",
//             "id": 7
//         },
//         "brand": {
//             "id": "0EW2CcEJeJ6KW3NvCEmr",
//             "name": "Genérico"
//         },
//         "observations": "Cable HDMI nuevo",
//         "internalTag": "-",
//         "assignedTo": "Consuelo Ortega",
//         "serialNumber": "N/A",
//         "year": 2025
//     },
//     {
//         "id": "c6vf031lqBuLPUfd5ocw",
//         "assignedTo": "Matías Diaz",
//         "serialNumber": "2249125004905",
//         "observations": "Equipo nuevo parte del proyecto Wifi UCHART.",
//         "brand": {
//             "name": "TP-Link",
//             "id": "IubT5LmxKibKlU2aSAHo"
//         },
//         "internalTag": "",
//         "year": 2025,
//         "model": "Archer AX53",
//         "certificateNumber": 91,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1757508380,
//             "nanoseconds": 358000000
//         },
//         "type": {
//             "id": "LjNRgrOiFw4iZK1eyW9p",
//             "name": "Router"
//         }
//     },
//     {
//         "id": "cAGnXys6W0CIQXipPacE",
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1747234294,
//             "nanoseconds": 127000000
//         },
//         "certificateNumber": 47,
//         "model": "V14 G3",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "year": 2025,
//         "serialNumber": "PF51DYD0",
//         "assignedTo": "Katalina Urra",
//         "internalTag": "PCART-0401",
//         "observations": "",
//         "brand": {
//             "name": "Lenovo",
//             "id": "HJrhsRDzVqkZMsEAlpHi"
//         }
//     },
//     {
//         "id": "cCynCzHigiUV7vdrJsHS",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1749480764,
//             "nanoseconds": 522000000
//         },
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "FortiClient",
//             "Oracle 10",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "model": "Thinkpad E580",
//         "certificateNumber": 54,
//         "year": 2025,
//         "brand": {
//             "name": "Lenovo",
//             "id": "HJrhsRDzVqkZMsEAlpHi"
//         },
//         "observations": "Notebook se entrega con su cargador correspondiente",
//         "internalTag": "PCART-0246",
//         "assignedTo": "Milena Viertel",
//         "serialNumber": "PF1HR1SQ"
//     },
//     {
//         "id": "cHQ50tTyuDNhFlvGufHI",
//         "year": 2026,
//         "internalTag": "-",
//         "brand": {
//             "id": "HJrhsRDzVqkZMsEAlpHi",
//             "name": "Lenovo"
//         },
//         "observations": "Se hace entrega de Tablet Lenovo IMEI 867560071695022 a la unidad de operaciones e infraestructura",
//         "serialNumber": "HA2711S9",
//         "assignedTo": "Miguel Martinez",
//         "type": {
//             "name": "Tablet",
//             "id": "WQhxhq0vstQ6FKjXwLDN"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1779308339,
//             "nanoseconds": 613000000
//         },
//         "software": [],
//         "certificateNumber": 208,
//         "model": "Tab k11"
//     },
//     {
//         "id": "ckZUyiUkL0PDfVlaZsc9",
//         "year": 2026,
//         "serialNumber": "5NJJH9JXA00347",
//         "assignedTo": "Jose Luengo",
//         "internalTag": "Monitor",
//         "observations": "Se entrega con sus respectivos cables.",
//         "brand": {
//             "name": "Samsung",
//             "id": "GeJxD177aJ3KfbMEWS4T"
//         },
//         "type": {
//             "name": "Monitor",
//             "id": "I0kjijVPwg1niOmOkWys"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1767895426,
//             "nanoseconds": 395000000
//         },
//         "certificateNumber": 144,
//         "model": "S27C310EAL",
//         "software": []
//     },
//     {
//         "id": "cpRFuz27gY2ITFT9zYsi",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1762886253,
//             "nanoseconds": 966000000
//         },
//         "type": {
//             "id": "LjNRgrOiFw4iZK1eyW9p",
//             "name": "Router"
//         },
//         "model": "Archer AX53",
//         "certificateNumber": 112,
//         "software": [],
//         "year": 2025,
//         "assignedTo": "Yessenia Márquez",
//         "serialNumber": "225415F005691",
//         "brand": {
//             "id": "IubT5LmxKibKlU2aSAHo",
//             "name": "TP-Link"
//         },
//         "observations": "Equipo nuevo junto a cargador eléctrico.",
//         "internalTag": "N/A"
//     },
//     {
//         "id": "d3VJuVPtH0OZDLlPmjN8",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "model": "ExpertBook B3405CCA",
//         "certificateNumber": 167,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1774974506,
//             "nanoseconds": 692000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "brand": {
//             "id": "IUfWkjx2KJc0UEhlMFJn",
//             "name": "Asus"
//         },
//         "observations": "Se hace entrega de equipamiento computacional a Paula Llaulen la cual dispondrá su uso",
//         "internalTag": "PC-LE273",
//         "assignedTo": "MAV",
//         "serialNumber": "TBNXLP02445486",
//         "year": 2026
//     },
//     {
//         "id": "d9NlZ1lRefAYaiXHIRQU",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1767623786,
//             "nanoseconds": 850000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "model": "Pro Book 445 G9",
//         "certificateNumber": 141,
//         "software": [
//             "VLC",
//             "IZArc",
//             "AnyDesk",
//             "RustDesk",
//             "OCS Inventory",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows",
//             "Adobe Acrobat"
//         ],
//         "year": 2026,
//         "assignedTo": "Victor Lopez",
//         "serialNumber": "5CD1514XGW",
//         "observations": "Notebook Prestamo.",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "internalTag": "PCART-0291"
//     },
//     {
//         "id": "dLursTQiDQfux8tsUIuy",
//         "software": [],
//         "model": "km-8101",
//         "certificateNumber": 201,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1778766880,
//             "nanoseconds": 568000000
//         },
//         "type": {
//             "name": "Teclado",
//             "id": "PLR1JvPswRcxkAlTaY2e"
//         },
//         "brand": {
//             "name": "Genius",
//             "id": "Suos1KXnTh2Z4htzv9FX"
//         },
//         "observations": "Se trasladan 05 teclados inalámbricos a sede las encinas",
//         "internalTag": "NN",
//         "assignedTo": "Guido Soto",
//         "serialNumber": "NN",
//         "year": 2026
//     },
//     {
//         "id": "dTCl3JGwul85qJG9zbC1",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "observations": "Se hace entrega de cargador de notebook en reemplazo del original por problemas de funcionamiento.",
//         "internalTag": "NN",
//         "assignedTo": "Roxana Pauzoca",
//         "serialNumber": "L25296-001",
//         "year": 2026,
//         "software": [],
//         "model": "TPN",
//         "certificateNumber": 178,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775587921,
//             "nanoseconds": 688000000
//         },
//         "type": {
//             "name": "Cargador de Notebook",
//             "id": "trQCfriR8k2v8b8SekXx"
//         }
//     },
//     {
//         "id": "dWopTgLVZJHt6Wy3s5ur",
//         "year": 2025,
//         "internalTag": "PCART-0341",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "observations": "",
//         "serialNumber": "5CD3109N02",
//         "assignedTo": "Monica Zamora",
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1762783697,
//             "nanoseconds": 178000000
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows",
//             "Adobe Acrobat"
//         ],
//         "certificateNumber": 109,
//         "model": "Pro Book 445 G9"
//     },
//     {
//         "id": "drFPZ1KejVaBq8wqvTCx",
//         "year": 2025,
//         "serialNumber": "5NJ8H9JX502379",
//         "assignedTo": "Camilo Fuster",
//         "internalTag": "-",
//         "brand": {
//             "id": "GeJxD177aJ3KfbMEWS4T",
//             "name": "Samsung"
//         },
//         "observations": "",
//         "type": {
//             "name": "Monitor",
//             "id": "I0kjijVPwg1niOmOkWys"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1746808320,
//             "nanoseconds": 154000000
//         },
//         "certificateNumber": 40,
//         "model": "S24C3IOEAL",
//         "software": []
//     },
//     {
//         "id": "ds9mHvZlxmw9ARfp0mcv",
//         "internalTag": "PCART-0269/PC-LE270",
//         "observations": "GN1F9Y1/GMQC9Y1",
//         "brand": {
//             "name": "Dell",
//             "id": "dy6akgYsCUfKkSfGMBrQ"
//         },
//         "serialNumber": "",
//         "assignedTo": "Lucia Espinoza",
//         "year": 2025,
//         "software": [
//             "VLC",
//             "IZArc",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows",
//             "Google Chrome"
//         ],
//         "certificateNumber": 118,
//         "model": "OptiPlex 7010",
//         "type": {
//             "name": "PC de Escritorio",
//             "id": "OduyH9UWpo37YQzlcdpe"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1763748465,
//             "nanoseconds": 772000000
//         }
//     },
//     {
//         "id": "eBFlDGVurZoXBbTmZHme",
//         "assignedTo": "Javiera Soto",
//         "serialNumber": "N/A",
//         "observations": "",
//         "brand": {
//             "id": "0EW2CcEJeJ6KW3NvCEmr",
//             "name": "Genérico"
//         },
//         "internalTag": "Adaptador HDMI a VGA",
//         "year": 2026,
//         "model": "N/A",
//         "certificateNumber": 190,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1776697489,
//             "nanoseconds": 563000000
//         },
//         "type": {
//             "name": "Adaptador",
//             "id": "CP4FDTpbVMFgpIBoMTf8"
//         }
//     },
//     {
//         "id": "eLUjT3xA7JCBmqQo4cgF",
//         "model": "21KJ",
//         "certificateNumber": 154,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1773069162,
//             "nanoseconds": 827000000
//         },
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "assignedTo": "Claudia Vergara",
//         "serialNumber": "PW0FC1GH",
//         "observations": "Se hace entrega de equipamiento computacional a la usuaria indicada en el acta.",
//         "brand": {
//             "id": "HJrhsRDzVqkZMsEAlpHi",
//             "name": "Lenovo"
//         },
//         "internalTag": "PCART-0442",
//         "year": 2026
//     },
//     {
//         "id": "eTwfNeNlqnRLRvipVX1m",
//         "model": "CP-7962G",
//         "certificateNumber": 197,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1778517163,
//             "nanoseconds": 819000000
//         },
//         "type": {
//             "id": "OlCJZS4q6Bu0Fu9gyKcB",
//             "name": "Telefono"
//         },
//         "assignedTo": "Mauricio Astorga",
//         "serialNumber": "FCH1438A5DA",
//         "observations": "Equipo de préstamo VTi\nAnexo: 81327",
//         "brand": {
//             "id": "Pvtq803ZHrErLJgxiP62",
//             "name": "Cisco"
//         },
//         "internalTag": "-",
//         "year": 2026
//     },
//     {
//         "id": "f1OlNZZUFyF5vKtUAFEk",
//         "brand": {
//             "name": "Philco",
//             "id": "VsbBJURxvwtPFqD9FlH4"
//         },
//         "observations": "Se hace entrega de mouse Philco Generico",
//         "internalTag": "NN",
//         "assignedTo": "Andrea Penaloza",
//         "serialNumber": "NN",
//         "year": 2026,
//         "software": [],
//         "model": "NN",
//         "certificateNumber": 175,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775143650,
//             "nanoseconds": 210000000
//         },
//         "type": {
//             "name": "Mouse",
//             "id": "d526u4vGxGs1VprecO17"
//         }
//     },
//     {
//         "id": "gNriFkTytNGk0q1HsJXB",
//         "year": 2025,
//         "internalTag": "N/A",
//         "brand": {
//             "id": "IubT5LmxKibKlU2aSAHo",
//             "name": "TP-Link"
//         },
//         "observations": "Router nuevo instalado en oficina contigua a Claudia Alonso (Lorena Herrera)",
//         "serialNumber": "225415F005694",
//         "assignedTo": "Claudia Alonso",
//         "type": {
//             "id": "LjNRgrOiFw4iZK1eyW9p",
//             "name": "Router"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1764254298,
//             "nanoseconds": 956000000
//         },
//         "software": [],
//         "certificateNumber": 129,
//         "model": "Archer AX53"
//     },
//     {
//         "id": "gU87UR48Mrs887i1sHXl",
//         "type": {
//             "id": "OduyH9UWpo37YQzlcdpe",
//             "name": "PC de Escritorio"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1765477196,
//             "nanoseconds": 556000000
//         },
//         "certificateNumber": 136,
//         "model": "Optiflex 7010",
//         "software": [
//             "Microsof Office 2021",
//             "Acualizaciones de Windows",
//             "Google Chrome",
//             "Adobe Acrobat",
//             "OCS Inventory",
//             "RustDesk",
//             "IZArc"
//         ],
//         "year": 2025,
//         "serialNumber": "F5JL9Y1",
//         "assignedTo": "Lucia Espinoza",
//         "internalTag": "PC-LE272",
//         "brand": {
//             "id": "dy6akgYsCUfKkSfGMBrQ",
//             "name": "Dell"
//         },
//         "observations": "Se hace entrega de equipo computacional "
//     },
//     {
//         "id": "gncAKFNL3n6jEhuj7CP3",
//         "assignedTo": "Fernanda Nawrath",
//         "serialNumber": "697737-162",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "observations": "",
//         "internalTag": "-",
//         "year": 2025,
//         "model": "PR1101U",
//         "certificateNumber": 51,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1747330235,
//             "nanoseconds": 676000000
//         },
//         "type": {
//             "name": "Teclado",
//             "id": "PLR1JvPswRcxkAlTaY2e"
//         }
//     },
//     {
//         "id": "gshvbyrUPRzdChPs5o5f",
//         "assignedTo": "Patricia Berrios",
//         "serialNumber": "PF51CZ2P",
//         "observations": "Se entrega el equipo al usuario individualizado en el documento, el cual será utilizado en la Unidad de Finanzas.",
//         "brand": {
//             "name": "Lenovo",
//             "id": "HJrhsRDzVqkZMsEAlpHi"
//         },
//         "internalTag": "PCART-0406",
//         "year": 2025,
//         "model": "V14 G3",
//         "certificateNumber": 14,
//         "software": [
//             "VLC",
//             "IZArc",
//             "AnyDesk",
//             "RusDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1741032337,
//             "nanoseconds": 401000000
//         },
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         }
//     },
//     {
//         "id": "hozu4YXd22ZOJe4r9Ffk",
//         "year": 2025,
//         "brand": {
//             "name": "Samsung",
//             "id": "GeJxD177aJ3KfbMEWS4T"
//         },
//         "observations": "",
//         "internalTag": "Monitor",
//         "assignedTo": "Catalina Konig",
//         "serialNumber": "5NJJH9JXA00347",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1763749066,
//             "nanoseconds": 836000000
//         },
//         "type": {
//             "id": "I0kjijVPwg1niOmOkWys",
//             "name": "Monitor"
//         },
//         "software": [],
//         "model": "S27C310EAL",
//         "certificateNumber": 120
//     },
//     {
//         "id": "kiDiHGARy5ViBN2MwMYH",
//         "year": 2025,
//         "observations": "Equipo para la conexión Wifi del área de comunicaciones",
//         "brand": {
//             "id": "IubT5LmxKibKlU2aSAHo",
//             "name": "TP-Link"
//         },
//         "internalTag": "",
//         "assignedTo": "Paulina Mellado",
//         "serialNumber": "2249125004914",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1745355548,
//             "nanoseconds": 488000000
//         },
//         "type": {
//             "id": "LjNRgrOiFw4iZK1eyW9p",
//             "name": "Router"
//         },
//         "software": [],
//         "model": "Archer AX53",
//         "certificateNumber": 37
//     },
//     {
//         "id": "kjsg6tXVS0OErLweQOf6",
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1762175437,
//             "nanoseconds": 12000000
//         },
//         "software": [],
//         "certificateNumber": 104,
//         "model": "\t20YN",
//         "year": 2025,
//         "internalTag": "PCART-0273",
//         "brand": {
//             "id": "HJrhsRDzVqkZMsEAlpHi",
//             "name": "Lenovo"
//         },
//         "observations": "Se reasigna equipo computacional institucional el cual será  usado por el usuario en el acta descrito",
//         "serialNumber": "PF389KT5",
//         "assignedTo": "óscar Diaz"
//     },
//     {
//         "id": "lcF5Mp4P2mneMmbiPi0e",
//         "year": 2025,
//         "assignedTo": "Mauricio Toro",
//         "serialNumber": "T2NXCV03D75307B",
//         "observations": "",
//         "brand": {
//             "id": "IUfWkjx2KJc0UEhlMFJn",
//             "name": "Asus"
//         },
//         "internalTag": "PCART-0429",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1757595492,
//             "nanoseconds": 510000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "model": "EXPERTBOOK B3404CMA",
//         "certificateNumber": 92,
//         "software": [
//             "VLC",
//             "IZArc",
//             "AnyDesk",
//             "RustDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ]
//     },
//     {
//         "id": "lcGF8P6Bhil8f1mwpbFc",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1758567091,
//             "nanoseconds": 636000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "model": "EXPERTBOOK B3404CMA",
//         "certificateNumber": 93,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Guía Matricula",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "year": 2025,
//         "assignedTo": "Camila Reyes",
//         "serialNumber": "S8NXCV14K03934B",
//         "observations": "",
//         "brand": {
//             "name": "Asus",
//             "id": "IUfWkjx2KJc0UEhlMFJn"
//         },
//         "internalTag": "PCART-0431"
//     },
//     {
//         "id": "lhQXc0eISEswkzQqTpUW",
//         "type": {
//             "name": "Teclado",
//             "id": "PLR1JvPswRcxkAlTaY2e"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1768226353,
//             "nanoseconds": 466000000
//         },
//         "certificateNumber": 147,
//         "model": "SK-8115",
//         "software": [],
//         "year": 2026,
//         "serialNumber": "CNODJ4157161695T06F7",
//         "assignedTo": "Daniel Purän",
//         "internalTag": "NN",
//         "brand": {
//             "name": "Dell",
//             "id": "dy6akgYsCUfKkSfGMBrQ"
//         },
//         "observations": "Se hace entrega de Teclado y mouse a usuario detallado en el acta."
//     },
//     {
//         "id": "lopNwmcCt8hbkbwzOjFs",
//         "internalTag": "PCART-0378",
//         "observations": "",
//         "brand": {
//             "id": "HJrhsRDzVqkZMsEAlpHi",
//             "name": "Lenovo"
//         },
//         "serialNumber": "MP2AC2N4",
//         "assignedTo": "José Neira",
//         "year": 2025,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 95,
//         "model": "ThinkCentre Neo 50A 24 Gen3",
//         "type": {
//             "id": "Jx51tvUtSEWcmvxTDKwX",
//             "name": "PC de Escritorio AIO"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1758727784,
//             "nanoseconds": 983000000
//         }
//     },
//     {
//         "id": "mlMXQqf6dsWUWBn8Fa94",
//         "year": 2026,
//         "brand": {
//             "name": "LG",
//             "id": "9QENKievFKQVqrHMnh8g"
//         },
//         "observations": "Se hace entrega de monitor a porteria Las Encinas",
//         "internalTag": "NN",
//         "assignedTo": "Jose Luengo",
//         "serialNumber": "306NDFV2Z475",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1776804977,
//             "nanoseconds": 635000000
//         },
//         "type": {
//             "name": "Monitor",
//             "id": "I0kjijVPwg1niOmOkWys"
//         },
//         "software": [],
//         "model": "Flatron 20N33SS",
//         "certificateNumber": 192
//     },
//     {
//         "id": "mr00bOwI5DaKwkxftMHr",
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1776349754,
//             "nanoseconds": 27000000
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "OCS Inventory",
//             "Guía Matricula",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Acualizaciones de Windows",
//             "Microsof Office 365"
//         ],
//         "certificateNumber": 188,
//         "model": "Pro Book 445 G9",
//         "year": 2026,
//         "internalTag": "PCART-0372",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "observations": "Equipo de préstamo, se entrega con su respectivo cargador.",
//         "serialNumber": "5CD3062SYP",
//         "assignedTo": "Rocio Guiñez"
//     },
//     {
//         "id": "n1yMcG05G0oL1mZCyZv6",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 168,
//         "model": "ExpertBook B3405CCA",
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1774975264,
//             "nanoseconds": 45000000
//         },
//         "internalTag": "PC-LE274",
//         "observations": "Se hace entrega de equipamiento computacional a Paula Llaulen la cual dispondrá su uso",
//         "brand": {
//             "name": "Asus",
//             "id": "IUfWkjx2KJc0UEhlMFJn"
//         },
//         "serialNumber": "TBNXLP02R43248A",
//         "assignedTo": "MAV",
//         "year": 2026
//     },
//     {
//         "id": "nLXE6TUWCgLAthccSvLX",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1743794225,
//             "nanoseconds": 798000000
//         },
//         "type": {
//             "id": "OduyH9UWpo37YQzlcdpe",
//             "name": "PC de Escritorio"
//         },
//         "model": "Escritorio",
//         "certificateNumber": 30,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "year": 2025,
//         "assignedTo": "Isis Diaz Lopez",
//         "serialNumber": "H81MHV3",
//         "brand": {
//             "name": "Generico",
//             "id": "0EW2CcEJeJ6KW3NvCEmr"
//         },
//         "observations": "",
//         "internalTag": "PCART-0029"
//     },
//     {
//         "id": "nR6SMMYM6JG6gnz4gKEo",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1756761711,
//             "nanoseconds": 254000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "model": "Vostro 14 3400",
//         "certificateNumber": 88,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "year": 2025,
//         "assignedTo": "Dominique Marinkovic",
//         "serialNumber": "9LSB9L3",
//         "brand": {
//             "name": "Dell",
//             "id": "dy6akgYsCUfKkSfGMBrQ"
//         },
//         "observations": "",
//         "internalTag": "PCART-0277"
//     },
//     {
//         "id": "nSdQ3U2qXL3YNCbM7q2c",
//         "year": 2026,
//         "internalTag": "NN",
//         "brand": {
//             "name": "Genius",
//             "id": "Suos1KXnTh2Z4htzv9FX"
//         },
//         "observations": "Se hace entrega de teclados y mouse inalámbricos.",
//         "serialNumber": "35196216300509",
//         "assignedTo": "Juan Pablo Espinoza",
//         "type": {
//             "id": "PLR1JvPswRcxkAlTaY2e",
//             "name": "Teclado"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1779220179,
//             "nanoseconds": 779000000
//         },
//         "software": [],
//         "certificateNumber": 205,
//         "model": "KM-8101"
//     },
//     {
//         "id": "nbmCgEJUOAW3YPxkg4V8",
//         "year": 2025,
//         "internalTag": "PCART-0426",
//         "brand": {
//             "id": "IUfWkjx2KJc0UEhlMFJn",
//             "name": "Asus"
//         },
//         "observations": "",
//         "serialNumber": "T2NXCV03D760077",
//         "assignedTo": "Cesar Mella",
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1762783279,
//             "nanoseconds": 837000000
//         },
//         "software": [
//             "IZArc",
//             "VLC",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Microsof Office 365",
//             "Acualizaciones de Windows",
//             "Google Chrome",
//             "Adobe Acrobat",
//             "OCS Inventory"
//         ],
//         "certificateNumber": 108,
//         "model": "ExpertBook B3404CM"
//     },
//     {
//         "id": "nzPKQFgwiuntaYgA1EIE",
//         "year": 2025,
//         "internalTag": "-",
//         "brand": {
//             "name": "Samsung",
//             "id": "GeJxD177aJ3KfbMEWS4T"
//         },
//         "observations": "Monitor Mayordomía",
//         "serialNumber": "5NJJH9JXA00080T",
//         "assignedTo": "Mario Adaros - Miguel Lara",
//         "type": {
//             "id": "I0kjijVPwg1niOmOkWys",
//             "name": "Monitor"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1750689304,
//             "nanoseconds": 678000000
//         },
//         "software": [],
//         "certificateNumber": 62,
//         "model": "S27C310EALX25"
//     },
//     {
//         "id": "oBhVAClN3WvnGZjseSXV",
//         "year": 2026,
//         "internalTag": "Ram",
//         "observations": "Ram DDR4 para Notebook 8GB",
//         "brand": {
//             "id": "0EW2CcEJeJ6KW3NvCEmr",
//             "name": "Genérico"
//         },
//         "serialNumber": "N/A",
//         "assignedTo": "Camilo Fuster",
//         "type": {
//             "id": "AH6nWXCdfShSJiclSz9e",
//             "name": "Otro"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1773675504,
//             "nanoseconds": 619000000
//         },
//         "software": [],
//         "certificateNumber": 157,
//         "model": "N/A"
//     },
//     {
//         "id": "oQ1bKCs9JgegavYAjkE4",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1773778972,
//             "nanoseconds": 468000000
//         },
//         "type": {
//             "name": "Monitor",
//             "id": "I0kjijVPwg1niOmOkWys"
//         },
//         "software": [],
//         "model": "VS19971",
//         "certificateNumber": 160,
//         "year": 2026,
//         "observations": "Monitor nuevo sellado ",
//         "brand": {
//             "id": "SgVKiw6FNbM5PMQa8MNU",
//             "name": "ViewSonic"
//         },
//         "internalTag": "N/A",
//         "assignedTo": "Erika Valdés",
//         "serialNumber": "XNE252920436"
//     },
//     {
//         "id": "oRmyz3BerkDiE84j9AeS",
//         "year": 2025,
//         "observations": "Se hace entrega con su respectivo cargador.",
//         "brand": {
//             "id": "HJrhsRDzVqkZMsEAlpHi",
//             "name": "Lenovo"
//         },
//         "internalTag": "PCART-0401",
//         "assignedTo": "Oscar Díaz",
//         "serialNumber": "PF51DYD0",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1764792472,
//             "nanoseconds": 486000000
//         },
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "model": "V14 G3",
//         "certificateNumber": 132
//     },
//     {
//         "id": "ozD5cnflFaJthi1GpLBD",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "FortiClient",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows",
//             "Google Chrome",
//             "Adobe Acrobat",
//             "OCS Inventory"
//         ],
//         "model": "AIO A3402WBA",
//         "certificateNumber": 58,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1749586761,
//             "nanoseconds": 572000000
//         },
//         "type": {
//             "name": "PC de Escritorio AIO",
//             "id": "Jx51tvUtSEWcmvxTDKwX"
//         },
//         "observations": "",
//         "brand": {
//             "id": "IUfWkjx2KJc0UEhlMFJn",
//             "name": "Asus"
//         },
//         "internalTag": "PC-LE258",
//         "assignedTo": "Marcela Garcia",
//         "serialNumber": "RCPTCJ005731507",
//         "year": 2025
//     },
//     {
//         "id": "pCVibVb80tUj9pjnkLmw",
//         "year": 2025,
//         "serialNumber": "29PPR6354K240503221",
//         "assignedTo": "Consuelo Ortega",
//         "internalTag": "",
//         "brand": {
//             "name": "Philco",
//             "id": 12
//         },
//         "observations": "Pack Teclado + Mouse nuevo.",
//         "type": {
//             "name": "Pack Teclado y Mouse",
//             "id": 11
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1759172515,
//             "nanoseconds": 548000000
//         },
//         "certificateNumber": 99,
//         "model": "29PPR6354K",
//         "software": []
//     },
//     {
//         "id": "pHPq8iawAoBtqFYAQRdb",
//         "model": "15-eh0011la",
//         "certificateNumber": 15,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "OCS Inventory",
//             "Guía Matricula",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1741182769,
//             "nanoseconds": 455000000
//         },
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "assignedTo": "Oscar Nuñez",
//         "serialNumber": "5CD127KWQ1",
//         "observations": "Se entrega el equipo al usuario individualizado en el documento, el cual será utilizado en Decanato",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "internalTag": "PCART-0270",
//         "year": 2025
//     },
//     {
//         "id": "pNyvenSYUXA4VZAOpe8z",
//         "year": 2026,
//         "internalTag": "NN",
//         "brand": {
//             "id": "VsbBJURxvwtPFqD9FlH4",
//             "name": "Philco"
//         },
//         "observations": "Se Hace entrega de mouse generico Philco",
//         "serialNumber": "NN",
//         "assignedTo": "Maria Ignacia Amigo",
//         "type": {
//             "name": "Mouse",
//             "id": "d526u4vGxGs1VprecO17"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775143561,
//             "nanoseconds": 682000000
//         },
//         "software": [],
//         "certificateNumber": 174,
//         "model": "NN"
//     },
//     {
//         "id": "pnxlYk15cInzk3yHk2K4",
//         "internalTag": "PCART-0241",
//         "brand": {
//             "name": "Lenovo",
//             "id": "HJrhsRDzVqkZMsEAlpHi"
//         },
//         "observations": "",
//         "serialNumber": "MP2DLYZN",
//         "assignedTo": "Miguel Martinez",
//         "year": 2025,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "OCS Inventory",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 50,
//         "model": "Thinkcentre Neo 50a 24 Gen3",
//         "type": {
//             "id": "Jx51tvUtSEWcmvxTDKwX",
//             "name": "PC de Escritorio AIO"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1747329733,
//             "nanoseconds": 95000000
//         }
//     },
//     {
//         "id": "qOIEGIsCzSQv1yY8u2CG",
//         "year": 2026,
//         "serialNumber": "5CD3062SYP",
//         "assignedTo": "Ayleen Correa",
//         "internalTag": "PCART-0372",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "observations": "Se entrega con cargador",
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1779889100,
//             "nanoseconds": 389000000
//         },
//         "certificateNumber": 209,
//         "model": "ProBook G9",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "Auge Finanzas",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ]
//     },
//     {
//         "id": "qSVCwrmumimXcw1zCZTD",
//         "serialNumber": "5CD4111YPY",
//         "assignedTo": "Docencia DAV",
//         "internalTag": "PC-LE252",
//         "observations": "Equipo será usado para impartir clases por docentes de la serie.",
//         "brand": {
//             "name": "Hp",
//             "id": "Pjwp5NjlQXPsHqLhzaaT"
//         },
//         "year": 2025,
//         "certificateNumber": 17,
//         "model": "ProBook 445 G10",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1742215259,
//             "nanoseconds": 25000000
//         }
//     },
//     {
//         "id": "quQwV5mpO2gDVYuj33IP",
//         "brand": {
//             "id": "dy6akgYsCUfKkSfGMBrQ",
//             "name": "Dell"
//         },
//         "observations": "Se hace entrega de equipo portátil (notebook) para ser usado en ámbito laboral, tiene un detalle en el audio debido a la tarjeta de sonido que dejo de funcionar.",
//         "internalTag": "PCART-0285",
//         "assignedTo": "Karen Parodi",
//         "serialNumber": "FRGB9L3",
//         "year": 2025,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "model": "Vostro 3400",
//         "certificateNumber": 111,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1762884538,
//             "nanoseconds": 723000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         }
//     },
//     {
//         "id": "r7AcKPOudJ8NZUh6Zzh7",
//         "year": 2026,
//         "internalTag": "PCART-0449",
//         "observations": "Se hace entrega de equipamiento computacional",
//         "brand": {
//             "name": "Asus",
//             "id": "IUfWkjx2KJc0UEhlMFJn"
//         },
//         "serialNumber": "W1NXLP00309401C",
//         "assignedTo": "Rocio Guiñez",
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1778690897,
//             "nanoseconds": 857000000
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Auge Finanzas",
//             "FortiClient",
//             "OCS Inventory",
//             "Guía Matricula",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 199,
//         "model": "ASUS EXPERTBOOK B3405CCA"
//     },
//     {
//         "id": "rK6baPdsSw5kQYDXNtOK",
//         "assignedTo": "Matías Machuca",
//         "serialNumber": "5CD33527B4",
//         "observations": "Se entrega equipo con perfil de usuario creado junto a su respectivo cargador eléctrico",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "internalTag": "PCART-0379",
//         "year": 2025,
//         "model": "HP PROBOOK 445 G10",
//         "certificateNumber": 82,
//         "software": [
//             "VLC",
//             "RustDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "FortiClient",
//             "Auge Sisper",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Auge Honorarios",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1755004392,
//             "nanoseconds": 230000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         }
//     },
//     {
//         "id": "rahliLMSvPAlAFKgw0zj",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1745852119,
//             "nanoseconds": 737000000
//         },
//         "type": {
//             "id": "I0kjijVPwg1niOmOkWys",
//             "name": "Monitor"
//         },
//         "model": "FLATRON W1943C",
//         "certificateNumber": 38,
//         "software": [],
//         "year": 2025,
//         "assignedTo": "Miguel Martinez",
//         "serialNumber": "002NDQA7H516",
//         "observations": "Se facilita monitor en calidad de préstamo hasta que llegue el equipo que esta en proceso de compra.",
//         "brand": {
//             "name": "LG",
//             "id": "9QENKievFKQVqrHMnh8g"
//         },
//         "internalTag": ""
//     },
//     {
//         "id": "rd2rpaqtLPNnNBhlQF1N",
//         "model": "OptiPlex 7010",
//         "certificateNumber": 191,
//         "software": [
//             "VLC",
//             "IZArc",
//             "AnyDesk",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1776804806,
//             "nanoseconds": 178000000
//         },
//         "type": {
//             "name": "PC de Escritorio",
//             "id": "OduyH9UWpo37YQzlcdpe"
//         },
//         "assignedTo": "Jose Luengo",
//         "serialNumber": "F55L9Y1",
//         "brand": {
//             "id": "dy6akgYsCUfKkSfGMBrQ",
//             "name": "Dell"
//         },
//         "observations": "Se hace entrega de equipo computacional o computador de escritorio para portería Las encinas",
//         "internalTag": "PC-LE261",
//         "year": 2026
//     },
//     {
//         "id": "sLpdegRn2qhtgIp4glsH",
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1773070596,
//             "nanoseconds": 614000000
//         },
//         "certificateNumber": 155,
//         "model": "HP Laptop 15-fd0xxx",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "Acualizaciones de Windows",
//             "Microsof Office 2021",
//             "Google Chrome",
//             "Adobe Acrobat",
//             "FortiClient",
//             "OCS Inventory"
//         ],
//         "year": 2026,
//         "serialNumber": "1H85151L9H",
//         "assignedTo": "Equidad Inclusion",
//         "internalTag": "PCART-0441",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "observations": "Se hace entrega al usuario según ticket STC-1282 para ser usado por la unidad."
//     },
//     {
//         "id": "sMfl7RYLyDB47zMXEU9m",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1746809524,
//             "nanoseconds": 588000000
//         },
//         "type": {
//             "id": "9ErTJt7pEHKuEKU5jUo5",
//             "name": "Pack Teclado & Mouse"
//         },
//         "software": [],
//         "model": "MA203W",
//         "certificateNumber": 41,
//         "year": 2025,
//         "observations": "",
//         "brand": {
//             "name": "Lenovo",
//             "id": "HJrhsRDzVqkZMsEAlpHi"
//         },
//         "internalTag": "-",
//         "assignedTo": "Camila Villanueva",
//         "serialNumber": "KH001KNQ"
//     },
//     {
//         "id": "sRrvN7ZTftLrYWaE1iwy",
//         "type": {
//             "id": "LjNRgrOiFw4iZK1eyW9p",
//             "name": "Router"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1764614355,
//             "nanoseconds": 392000000
//         },
//         "certificateNumber": 130,
//         "model": "Archer AX53",
//         "software": [],
//         "year": 2025,
//         "serialNumber": "2256707012527",
//         "assignedTo": "Felipe Castro",
//         "internalTag": "Router TP-Link ",
//         "observations": "Se entrega router con sus respectivos cables.",
//         "brand": {
//             "name": "TP-Link",
//             "id": "IubT5LmxKibKlU2aSAHo"
//         }
//     },
//     {
//         "id": "tbBAQCc2Bt4jy0rqpj0P",
//         "year": 2026,
//         "internalTag": "N/A",
//         "observations": "Alzador para notebook nuevo.",
//         "brand": {
//             "name": "Reptilex",
//             "id": "OeobRnBgaz9zk7DKyxjk"
//         },
//         "serialNumber": "N/A",
//         "assignedTo": "Miguel Martínez",
//         "type": {
//             "name": "Cooling-Pad",
//             "id": "NyECokVnm8GnTuMQEEuP"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1772117907,
//             "nanoseconds": 871000000
//         },
//         "software": [],
//         "certificateNumber": 152,
//         "model": "RX0058"
//     },
//     {
//         "id": "tmgigT7EShxpYdeXySCJ",
//         "year": 2026,
//         "internalTag": "Pack Teclado Mouse",
//         "brand": {
//             "name": "Philco",
//             "id": "VsbBJURxvwtPFqD9FlH4"
//         },
//         "observations": "",
//         "serialNumber": "N/A",
//         "assignedTo": "Matías Diaz",
//         "type": {
//             "id": "9ErTJt7pEHKuEKU5jUo5",
//             "name": "Pack Teclado & Mouse"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1769694489,
//             "nanoseconds": 53000000
//         },
//         "software": [],
//         "certificateNumber": 151,
//         "model": "N/A"
//     },
//     {
//         "id": "tuXHhIFUr17LYuCseHsY",
//         "year": 2025,
//         "serialNumber": "",
//         "assignedTo": "Lucia Espinoza",
//         "internalTag": "PC-LE263/PC-LE264/PC-LE265/PC-LE266/PC-LE267/PC-LE268",
//         "observations": "GN0H9Y1/GMNB9Y1/F5DK9Y1/F5GK9Y1/F51K9Y1/GMZH9Y1",
//         "brand": {
//             "id": "dy6akgYsCUfKkSfGMBrQ",
//             "name": "Dell"
//         },
//         "type": {
//             "name": "PC de Escritorio",
//             "id": "OduyH9UWpo37YQzlcdpe"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1763473231,
//             "nanoseconds": 983000000
//         },
//         "certificateNumber": 116,
//         "model": "OptiPlex 7010",
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "Oracle 10",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ]
//     },
//     {
//         "id": "tvXRSnpoUzYmGW2sv7DV",
//         "observations": "Se entrega con su respectivo cargador.",
//         "brand": {
//             "id": "Pjwp5NjlQXPsHqLhzaaT",
//             "name": "Hp"
//         },
//         "internalTag": "PCART-0336",
//         "assignedTo": "Eduardo Gutiérrez",
//         "serialNumber": "5CD2370R29",
//         "year": 2025,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365",
//             "Acualizaciones de Windows"
//         ],
//         "model": "Pro Book 445 G8",
//         "certificateNumber": 94,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1758727593,
//             "nanoseconds": 137000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         }
//     },
//     {
//         "id": "u6Qmzaaq0Qtor8ucuQL3",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1776259523,
//             "nanoseconds": 497000000
//         },
//         "type": {
//             "id": "oxCJreEb6y3ucoVhnJUG",
//             "name": "Teléfono IP"
//         },
//         "software": [],
//         "model": "CP-7962G",
//         "certificateNumber": 187,
//         "year": 2026,
//         "observations": "Se hace entrega de equipamiento telefónico en calidad de préstamo temporal.",
//         "brand": {
//             "id": "Pvtq803ZHrErLJgxiP62",
//             "name": "Cisco"
//         },
//         "internalTag": "NN",
//         "assignedTo": "Tania Ibañez",
//         "serialNumber": "FCH1438A4JK"
//     },
//     {
//         "id": "udGUUjVrRljxqwodFMaK",
//         "year": 2025,
//         "brand": {
//             "name": "Genérico",
//             "id": "0EW2CcEJeJ6KW3NvCEmr"
//         },
//         "observations": "Base enfriadora notebook",
//         "internalTag": "",
//         "assignedTo": "Luciano Rojas",
//         "serialNumber": "N/A",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1751466206,
//             "nanoseconds": 607000000
//         },
//         "type": {
//             "id": "NyECokVnm8GnTuMQEEuP",
//             "name": "Cooling-Pad"
//         },
//         "software": [],
//         "model": "UT-NTC020",
//         "certificateNumber": 67
//     },
//     {
//         "id": "vIG7QfmRokS3Lx6RQRSQ",
//         "year": 2025,
//         "internalTag": "PCART-0413",
//         "observations": "Equipo será utilizado para impartir clases en la facultad de Artes de compañía en la carrera teoría de las artes.",
//         "brand": {
//             "id": "HJrhsRDzVqkZMsEAlpHi",
//             "name": "Lenovo"
//         },
//         "serialNumber": "PW0AA3RW",
//         "assignedTo": "Fernando Gonzalez",
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1743770748,
//             "nanoseconds": 335000000
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 28,
//         "model": "ThinBook 14 G6 ABP"
//     },
//     {
//         "id": "vpTUIaqtfhKc89wmvxad",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1764687419,
//             "nanoseconds": 389000000
//         },
//         "type": {
//             "name": "PC de Escritorio",
//             "id": "OduyH9UWpo37YQzlcdpe"
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "model": "Optiflex 7010",
//         "certificateNumber": 131,
//         "year": 2025,
//         "observations": "GN1F9Y1 / GMQC9Y1 / GN0G9Y1 ",
//         "brand": {
//             "id": "dy6akgYsCUfKkSfGMBrQ",
//             "name": "Dell"
//         },
//         "internalTag": "PC-LE269/PC-LE270/PC-LE271",
//         "assignedTo": "Lucia Espinoza",
//         "serialNumber": ""
//     },
//     {
//         "id": "vx41ZNabkaiutL9jrfmd",
//         "observations": "",
//         "brand": {
//             "id": "Pvtq803ZHrErLJgxiP62",
//             "name": "Cisco"
//         },
//         "internalTag": "Anexo telefonico",
//         "assignedTo": "Jose Luengo",
//         "serialNumber": "FCH163790XB",
//         "year": 2026,
//         "software": [],
//         "model": "CP-3905",
//         "certificateNumber": 185,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1776174003,
//             "nanoseconds": 512000000
//         },
//         "type": {
//             "id": "oxCJreEb6y3ucoVhnJUG",
//             "name": "Teléfono IP"
//         }
//     },
//     {
//         "id": "xsm6RgGJygtcBNwvtFI2",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1778075546,
//             "nanoseconds": 540000000
//         },
//         "type": {
//             "name": "PC de Escritorio AIO",
//             "id": "Jx51tvUtSEWcmvxTDKwX"
//         },
//         "model": "ASUSTeK COMPUTER INC.",
//         "certificateNumber": 196,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "year": 2026,
//         "assignedTo": "Lucia Espinoza",
//         "serialNumber": "T7PTCJ00M828299",
//         "observations": "Se hace entrega de equipamiento computacional",
//         "brand": {
//             "name": "Asus",
//             "id": "IUfWkjx2KJc0UEhlMFJn"
//         },
//         "internalTag": "PCART-0446"
//     },
//     {
//         "id": "xvEdi3EVzdOqoobpHeXn",
//         "year": 2025,
//         "assignedTo": "Alexandra Contreras",
//         "serialNumber": "KH001KNT",
//         "observations": "",
//         "brand": {
//             "id": "HJrhsRDzVqkZMsEAlpHi",
//             "name": "Lenovo"
//         },
//         "internalTag": "-",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1746809724,
//             "nanoseconds": 358000000
//         },
//         "type": {
//             "id": "9ErTJt7pEHKuEKU5jUo5",
//             "name": "Pack Teclado & Mouse"
//         },
//         "model": "MA203W",
//         "certificateNumber": 42,
//         "software": []
//     },
//     {
//         "id": "yL47U8vrZ5SMbxzBQf4S",
//         "year": 2026,
//         "internalTag": "PCART-0450",
//         "brand": {
//             "id": "IUfWkjx2KJc0UEhlMFJn",
//             "name": "Asus"
//         },
//         "observations": "Se entrega notebook con su respectivo cargador.",
//         "serialNumber": "TANXCV086255438",
//         "assignedTo": "Cristian Godoy",
//         "type": {
//             "id": "IxGrZ1DVk2c8uW8Gu2gX",
//             "name": "Notebook"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1778690149,
//             "nanoseconds": 578000000
//         },
//         "software": [
//             "VLC",
//             "IZArc",
//             "RustDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "certificateNumber": 198,
//         "model": "ExpertBook PM1403CDA"
//     },
//     {
//         "id": "yP0CwzAlEmzQfRsKSywn",
//         "internalTag": "N/A",
//         "brand": {
//             "name": "Cisco",
//             "id": "Pvtq803ZHrErLJgxiP62"
//         },
//         "observations": "Teléfono de préstamo desde Servicios Centrales, mientras se despacha equipamiento definitivo.",
//         "serialNumber": "FCH143981L3",
//         "assignedTo": "Coordinación Académica ISUCH",
//         "year": 2026,
//         "software": [],
//         "certificateNumber": 179,
//         "model": "CP-7962G",
//         "type": {
//             "name": "Teléfono IP",
//             "id": "oxCJreEb6y3ucoVhnJUG"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1775665589,
//             "nanoseconds": 577000000
//         }
//     },
//     {
//         "id": "yXtBQiADQnsU9mQ9FemX",
//         "assignedTo": "Elizabeth Ortiz",
//         "serialNumber": "BBD6LR2",
//         "observations": "Equipo cedido en calidad de préstamo a la usuaria mientras regulariza la garantía del Laptop original.",
//         "brand": {
//             "name": "Dell",
//             "id": "dy6akgYsCUfKkSfGMBrQ"
//         },
//         "internalTag": "PCART-0230",
//         "year": 2025,
//         "model": "Latitude 3490",
//         "certificateNumber": 52,
//         "software": [
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "Oracle 10",
//             "Guía Matricula",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 365"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1748290079,
//             "nanoseconds": 328000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         }
//     },
//     {
//         "id": "yiVR4AHFoCt5MB5gSVy6",
//         "year": 2025,
//         "internalTag": "",
//         "observations": "Router parte del proyecto UCHART.",
//         "brand": {
//             "name": "TP-Link",
//             "id": "IubT5LmxKibKlU2aSAHo"
//         },
//         "serialNumber": "2249125004932",
//         "assignedTo": "Carlos Carrillo",
//         "type": {
//             "id": "LjNRgrOiFw4iZK1eyW9p",
//             "name": "Router"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1749497228,
//             "nanoseconds": 245000000
//         },
//         "software": [],
//         "certificateNumber": 57,
//         "model": "AX3000"
//     },
//     {
//         "id": "yyjpgC8h1mtUajD34cAL",
//         "assignedTo": "Nancy Cubillos",
//         "serialNumber": "S9N0CX117900395",
//         "brand": {
//             "name": "Asus",
//             "id": "IUfWkjx2KJc0UEhlMFJn"
//         },
//         "observations": "",
//         "internalTag": "PC-LE257",
//         "year": 2025,
//         "model": "VivoBook X1404ZA-NK225W",
//         "certificateNumber": 53,
//         "software": [
//             "Microsof Office 2021",
//             "Google Chrome",
//             "Adobe Acrobat",
//             "Acualizaciones de Windows",
//             "VLC",
//             "IZArc",
//             "RusDesk",
//             "AnyDesk",
//             "FortiClient",
//             "OCS Inventory"
//         ],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1749152994,
//             "nanoseconds": 907000000
//         },
//         "type": {
//             "name": "Notebook",
//             "id": "IxGrZ1DVk2c8uW8Gu2gX"
//         }
//     },
//     {
//         "id": "zF8J5USi098OFAjQngRn",
//         "assignedTo": "Camila Villanueva",
//         "serialNumber": "N/A",
//         "observations": "",
//         "brand": {
//             "name": "Genérico",
//             "id": "0EW2CcEJeJ6KW3NvCEmr"
//         },
//         "internalTag": "",
//         "year": 2025,
//         "model": "N/A",
//         "certificateNumber": 84,
//         "software": [],
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1755526808,
//             "nanoseconds": 232000000
//         },
//         "type": {
//             "name": "Adaptador de corriente",
//             "id": "ixitO8tvYBS0n5OI2tD7"
//         }
//     },
//     {
//         "id": "zG07idVpdsjdcksgJCsi",
//         "software": [],
//         "model": "DIR-X1870",
//         "certificateNumber": 79,
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1753803339,
//             "nanoseconds": 768000000
//         },
//         "type": {
//             "name": "Router",
//             "id": "LjNRgrOiFw4iZK1eyW9p"
//         },
//         "brand": {
//             "name": "Genérico",
//             "id": "0EW2CcEJeJ6KW3NvCEmr"
//         },
//         "observations": "Router D-Link, modelo DIR-X1870",
//         "internalTag": "",
//         "assignedTo": "Margarita Filumil",
//         "serialNumber": "TR1D111001550",
//         "year": 2025
//     },
//     {
//         "id": "zoZTVnrueU4xQoYngJ8M",
//         "year": 2026,
//         "internalTag": "N/A",
//         "brand": {
//             "name": "Philco",
//             "id": "VsbBJURxvwtPFqD9FlH4"
//         },
//         "observations": "",
//         "serialNumber": "N/A",
//         "assignedTo": "Miguel Martinez",
//         "type": {
//             "name": "Pack Teclado & Mouse",
//             "id": "9ErTJt7pEHKuEKU5jUo5"
//         },
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1776694684,
//             "nanoseconds": 317000000
//         },
//         "software": [],
//         "certificateNumber": 189,
//         "model": "N/A"
//     },
//     {
//         "id": "ztSkphh5MgykJxIeYcVu",
//         "date": {
//             "type": "firestore/timestamp/1.0",
//             "seconds": 1767904866,
//             "nanoseconds": 84000000
//         },
//         "type": {
//             "name": "PC de Escritorio",
//             "id": "OduyH9UWpo37YQzlcdpe"
//         },
//         "software": [
//             "IZArc",
//             "VLC",
//             "RustDesk",
//             "AnyDesk",
//             "OCS Inventory",
//             "Adobe Acrobat",
//             "Google Chrome",
//             "Microsof Office 2021",
//             "Acualizaciones de Windows"
//         ],
//         "model": "0032CB",
//         "certificateNumber": 145,
//         "year": 2026,
//         "observations": "",
//         "brand": {
//             "name": "Lenovo",
//             "id": "HJrhsRDzVqkZMsEAlpHi"
//         },
//         "internalTag": "PC-LE0214",
//         "assignedTo": "Jose Luengo",
//         "serialNumber": "YL00G687"
//     }
// ]