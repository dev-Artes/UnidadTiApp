import { Layout } from '../components'
import { useNavigateTo } from '../hooks/useNavigateTo'
import { useNavigate } from 'react-router-dom'
import { useDashboard } from './hooks/useDashboard'
import { useAuth } from '../hooks/useAut'
import { FileText, Laptop, Monitor, Tag, Package, Users } from 'lucide-react'
import type { EquipmentStatus } from '../types/entidades'

const StatCard = ({ title, value, color, icon }: { title: string; value: number; color: string; icon: string }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${color}`}>
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
)

const AvailabilityCard = ({
    title,
    value,
    status,
    dotColor,
    onClick,
}: {
    title: string
    value: number
    status: EquipmentStatus
    dotColor: string
    onClick: () => void
}) => (
    <button
        type="button"
        onClick={onClick}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4 cursor-pointer hover:shadow-md hover:border-gray-200 transition-all w-full text-left"
    >
        <div className={`w-3 h-3 rounded-full ${dotColor} flex-shrink-0`} />
        <div className="flex-1">
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </button>
)

const QuickAccessCard = ({
    icon: Icon,
    title,
    description,
    onClick,
}: {
    icon: React.ElementType
    title: string
    description: string
    onClick: () => void
}) => (
    <button
        type="button"
        onClick={onClick}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col items-center gap-3 cursor-pointer hover:shadow-md hover:border-indigo-200 hover:bg-indigo-50/30 transition-all text-center"
    >
        <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
            <Icon size={20} className="text-indigo-600" />
        </div>
        <div>
            <p className="text-sm font-semibold text-gray-700">{title}</p>
            <p className="text-xs text-gray-400 mt-0.5">{description}</p>
        </div>
    </button>
)

const Home = () => {
    const { toNewCertificate } = useNavigateTo()
    const navigate = useNavigate()
    const { data, loading } = useDashboard()
    const { userRole } = useAuth()
    const isAdmin = userRole === 'admin'

    const goToAvailability = (status: EquipmentStatus) => {
        const params = new URLSearchParams({ availability: status })
        if (status === 'disponible' || status === 'prestado') {
            params.set('registration', 'prestamo')
        }
        navigate(`/devices?${params.toString()}`)
    }

    return (
        <Layout>
            <div className="max-w-7xl mx-auto space-y-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">Dashboard</h2>
                    <p className="text-gray-500 text-sm">Resumen general del sistema</p>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 animate-pulse">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gray-200" />
                                    <div className="space-y-2">
                                        <div className="h-3 w-20 bg-gray-200 rounded" />
                                        <div className="h-6 w-12 bg-gray-200 rounded" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                            <StatCard title="Total Equipos" value={data.totalEquipos} color="bg-blue-50 text-blue-600" icon="💻" />
                            <StatCard title="Reasignados" value={data.reasignados} color="bg-purple-50 text-purple-600" icon="🔄" />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Disponibilidad</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <AvailabilityCard
                                    title="Disponibles"
                                    value={data.disponibles}
                                    status="disponible"
                                    dotColor="bg-emerald-500"
                                    onClick={() => goToAvailability('disponible')}
                                />
                                <AvailabilityCard
                                    title="En préstamo"
                                    value={data.prestados}
                                    status="prestado"
                                    dotColor="bg-orange-500"
                                    onClick={() => goToAvailability('prestado')}
                                />
                                <AvailabilityCard
                                    title="No disponibles"
                                    value={data.noDisponibles}
                                    status="no_disponible"
                                    dotColor="bg-red-500"
                                    onClick={() => goToAvailability('no_disponible')}
                                />
                            </div>
                        </div>
                    </>
                )}

                <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Accesos rápidos</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        <QuickAccessCard
                            icon={FileText}
                            title="Nueva acta"
                            description="Crear acta de entrega"
                            onClick={toNewCertificate}
                        />
                        <QuickAccessCard
                            icon={Laptop}
                            title="Equipos"
                            description="Gestionar equipos"
                            onClick={() => navigate('/devices')}
                        />
                        <QuickAccessCard
                            icon={Monitor}
                            title="Periféricos"
                            description="Gestionar dispositivos"
                            onClick={() => navigate('/peripherals')}
                        />
                        <QuickAccessCard
                            icon={Tag}
                            title="Marcas"
                            description="Gestionar marcas"
                            onClick={() => navigate('/brands')}
                        />
                        <QuickAccessCard
                            icon={Package}
                            title="Software"
                            description="Gestionar software"
                            onClick={() => navigate('/softwares')}
                        />
                        {isAdmin && (
                            <QuickAccessCard
                                icon={Users}
                                title="Usuarios"
                                description="Gestionar usuarios"
                                onClick={() => navigate('/users')}
                            />
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
