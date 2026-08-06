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
				document.title = `Registros`;
				break;
			case "/certificate/create":
				document.title = `Crear nuevo Registro`;
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
			case "/device-type":
				document.title = `Periféricos Registrados`;
				break;
			case "/device-type/create":
				document.title = `Nuevo Periférico`;
				break;
			case "/loans":
				document.title = `Préstamos Registrados`;
				break;
			case "/loan/create":
				document.title = `Nuevo Préstamo`;
				break;
			case "/equipos":
				document.title = `Equipos Registrados`;
				break;
			case "/equipo/create":
				document.title = `Nuevo Equipo`;
				break;
		}
	}, [location]);
};

export default useRouterTitle;
