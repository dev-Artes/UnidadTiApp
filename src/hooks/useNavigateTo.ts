import { useNavigate } from "react-router-dom";

export const useNavigateTo = () => {
	const navigateTo = useNavigate();

	const toAllCertificates = () => navigateTo("/certificates");
	const toNewCertificate = () => navigateTo("/certificate/create");

	const toAllBrands = () => navigateTo("/brands");
	const toNewBrand = () => navigateTo("/brand/create");

	const toAllDevices = () => navigateTo("/peripherals");
	const toNewDevice = () => navigateTo("/peripheral/create");

	const toAllSoftware = () => navigateTo("/softwares");
	const toNewSoftware = () => navigateTo("/software/create");

	const toAllUsers = () => navigateTo("/users");
	const toNewUser = () => navigateTo("/user/create");

	const toNewReassignment = () => navigateTo("/certificate/reassignment");

	const toAllLoans = () => navigateTo("/loans");
	const toNewLoan = () => navigateTo("/loan/create");

	const toAllEquipos = () => navigateTo("/devices");
	const toNewEquipo = () => navigateTo("/devices/create");

	return {
		toNewReassignment,

		toNewUser,
		toAllUsers,
		toNewBrand,
		toAllBrands,
		toNewDevice,
		toAllDevices,
		toNewSoftware,
		toAllSoftware,
		toNewCertificate,
		toAllCertificates,
		toNewLoan,
		toAllLoans,
		toNewEquipo,
		toAllEquipos,
	};
};
