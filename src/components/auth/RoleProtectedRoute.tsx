import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAut";
import { CircularProgress } from "@mui/material";
import type { Role } from "../../types/entidades";

interface RoleProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: Role[];
}

const RoleProtectedRoute = ({ children, allowedRoles }: RoleProtectedRouteProps) => {
  const { user, userRole, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <CircularProgress />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!userRole || !allowedRoles.includes(userRole)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
          <h1 className="text-6xl font-bold text-red-500 mb-4">401</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">No autorizado</h2>
          <p className="text-gray-600 mb-6">
            No tienes permiso para acceder a esta sección.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default RoleProtectedRoute;
