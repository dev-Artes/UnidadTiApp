//  proteger rutas en funcion a roles

// crear interfaz de usuario con roles
//interface UserProfile {
//    uid: string
//    name: string
//    email: string
//    role: string
//    isActive: boolean
//}

// en el contexto tambien crear una:
// interface AuthContextType {
    // firebaseUser: FirebaseUser | null
    // profile: UserProfile | null
    // loading: boolean
// }

// crear un onAuthStateChanged cuando cambia la sesion
// y puedeo hacer desde cualquier componente un const { profile } = useAuth()

// para los botones con acciones hacer esto:
// {profile?.role === 'admin' && (
    // <button onClick={deleteUser}>
        // Eliminar
    // </button>
// )}
// o hacer un const isAdmin = profile?.role === 'admin' y luego {isAdmin && <DeleteButton />}


// crear un modulo solo para admin para administrar perfiles, crear usuarios, activar usuarios, cambiar roles, etc.
// si el usuario está activo puede iniciar sesión, si no, mostrar un mensaje de "Tu cuenta está inactiva, contacta al administrador"
// si no existe profile en Firestore → crear automáticamente o bloquear acceso