import { useNavigate } from "react-router-dom"

export const useNavigateTo = () => {
    const navigateTo = useNavigate()

    const toAllCertificates = () => navigateTo('certificates')
    const toNewCertificate = () => navigateTo('certificate/create')

    const toAllBransds = () => navigateTo('brands')
    const toNewBrand = () => navigateTo('brand/create')

    const toAllDevices = () => navigateTo('devices')
    const toNewDevice = () => navigateTo('device/create')

    const toAllSoftware = () => navigateTo('softwares')
    const toNewSoftware = () => navigateTo('software/create')

    const toAllUsers = () => navigateTo('users')
    const toNewUser = () => navigateTo('user/create')
    
    const toNewReassignment = () => navigateTo('certificate/reassignment')

    return {
        toNewReassignment,

        toNewUser, toAllUsers,
        toNewBrand, toAllBransds,
        toNewDevice, toAllDevices,
        toNewSoftware, toAllSoftware,
        toNewCertificate, toAllCertificates,

    }
}