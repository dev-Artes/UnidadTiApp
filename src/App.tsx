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
	CreateSoftware,
	CreateUser,
	DeviceView,
	EquipoView,
	Home,
	PrestamoView,
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
					path="/peripherals"
					element={
						<ProtectedRoute>
							<DeviceView />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/peripheral/create"
					element={
						<ProtectedRoute>
							<CreateDevice />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/devices"
					element={
						<ProtectedRoute>
							<EquipoView />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/devices/create"
					element={
						<ProtectedRoute>
							<CreateEquipo />
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
			</Routes>
		</Router>
	);
}

export default App;
