import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useRouterTitle = () => {
	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case "/":
				document.title = `Inicio`;
				break;
			case "/users":
				document.title = `Usuarios Registrados`;
				break;
			case "/user/create":
				document.title = `Crear nuevo Usuario`;
				break;
			case "/certificates":
				document.title = `Actas de entrega`;
				break;
			case "/certificate/create":
				document.title = `Crear nueva acta`;
				break;
			case "/brands":
				document.title = `Marcas Registradas`;
				break;
			case "/brand/create":
				document.title = `Crear nueva Marca`;
				break;
			case "/brand/edit/:id":
				document.title = `Editar`;
				break;
			case "/peripherals":
				document.title = `Periféricos Registrados`;
				break;
			case "/peripheral/create":
				document.title = `Nuevo Periférico`;
				break;
			case "/devices":
				document.title = `Equipos Registrados`;
				break;
			case "/devices/create":
				document.title = `Nuevo Equipo`;
				break;
			case "/loans":
				document.title = `Préstamos Registrados`;
				break;
			case "/loan/create":
				document.title = `Nuevo Préstamo`;
				break;
		}
	}, [location]);
};

export default useRouterTitle;
