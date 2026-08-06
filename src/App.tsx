import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import RoleProtectedRoute from "./components/auth/RoleProtectedRoute";

import LoginLuxury from "./components/UI/Table/Login";
import {
	BrandView,
	CertificateView,
	CreateBrand,
	CreateCertificate,
	CreateDevice,
	CreateEquipo,
	CreatePrestamo,
	CreateSoftware,
	CreateUser,
	DeviceView,
	EquipoView,
	Home,
	PrestamoView,
	ReassignmentCertificate,
	SoftwareView,
	UserView,
} from "./features";
import useRouterTitle from "./hooks/useRouterTitle";

function App() {
	const RouterTitle = () => {
		useRouterTitle();
		return null;
	};

	return (
		<Router>
			<RouterTitle />
			<Routes>
				<Route path="/login" element={<LoginLuxury />} />

				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/certificate/create"
					element={
						<ProtectedRoute>
							<CreateCertificate />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/certificate/reassignment"
					element={
						<ProtectedRoute>
							<ReassignmentCertificate />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/certificates"
					element={
						<ProtectedRoute>
							<CertificateView />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/users"
					element={
						<ProtectedRoute>
							<RoleProtectedRoute allowedRoles={["admin"]}>
								<UserView />
							</RoleProtectedRoute>
						</ProtectedRoute>
					}
				/>
				<Route
					path="/user/create"
					element={
						<ProtectedRoute>
							<RoleProtectedRoute allowedRoles={["admin"]}>
								<CreateUser />
							</RoleProtectedRoute>
						</ProtectedRoute>
					}
				/>

				<Route
					path="/brands"
					element={
						<ProtectedRoute>
							<BrandView />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/brand/create"
					element={
						<ProtectedRoute>
							<CreateBrand />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/devices"
					element={
						<ProtectedRoute>
							<DeviceView />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/device/create"
					element={
						<ProtectedRoute>
							<CreateDevice />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/softwares"
					element={
						<ProtectedRoute>
							<SoftwareView />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/software/create"
					element={
						<ProtectedRoute>
							<CreateSoftware />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/loans"
					element={
						<ProtectedRoute>
							<PrestamoView />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/loan/create"
					element={
						<ProtectedRoute>
							<CreatePrestamo />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/equipos"
					element={
						<ProtectedRoute>
							<EquipoView />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/equipo/create"
					element={
						<ProtectedRoute>
							<CreateEquipo />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
