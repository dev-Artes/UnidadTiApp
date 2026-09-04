import {
	ChevronDown,
	ChevronLeft,
	FileText,
	HandCoins,
	Home,
	Laptop,
	LogOut,
	Menu,
	Monitor,
	Package,
	Tag,
	Users,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAut";

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
	const location = useLocation();
	const { user, userRole, logout } = useAuth();

	const isAdmin = userRole === "admin";

	const toggleSubmenu = (menu: string) => {
		if (collapsed) return;
		setOpenSubmenu(openSubmenu === menu ? null : menu);
	};

	const isActive = (path: string) => location.pathname === path;
	const isSubmenuActive = (paths: string[]) =>
		paths.some((p) => location.pathname === p);

	const handleLogout = async () => {
		await logout();
	};

	const menuItems = [
		{
			label: "Inicio",
			icon: <Home size={20} />,
			path: "/",
		},
		{
			label: "Actas de entrega",
			icon: <FileText size={20} />,
			submenu: [
				{ label: "Crear", path: "/certificate/create" },
				{ label: "Registros", path: "/certificates" },
			],
		},
		{
			label: "Usuarios",
			icon: <Users size={20} />,
			adminOnly: true,
			submenu: [
				{ label: "Crear", path: "/user/create" },
				{ label: "Registros", path: "/users" },
			],
		},
		{
			label: "Periféricos",
			icon: <Monitor size={20} />,
			submenu: [
				{ label: "Crear", path: "/peripheral/create" },
				{ label: "Registros", path: "/peripherals" },
			],
		},
		{
			label: "Equipos",
			icon: <Laptop size={20} />,
			submenu: [
				{ label: "Crear", path: "/devices/create" },
				{ label: "Registros", path: "/devices" },
			],
		},
		{
			label: "Marcas",
			icon: <Tag size={20} />,
			submenu: [
				{ label: "Crear", path: "/brand/create" },
				{ label: "Registros", path: "/brands" },
			],
		},
		{
			label: "Software",
			icon: <Package size={20} />,
			submenu: [
				{ label: "Crear", path: "/software/create" },
				{ label: "Registros", path: "/softwares" },
			],
		},
		{
			label: "Préstamos",
			icon: <HandCoins size={20} />,
			submenu: [
				{ label: "Registros", path: "/loans" },
			],
		},
	];

	return (
		<aside
			className={`h-screen bg-slate-900 text-white flex flex-col transition-all duration-300 ease-in-out ${
				collapsed ? "w-16" : "w-60"
			}`}
		>
			{/* Header */}
			<div className="flex items-center justify-between px-4 h-16 border-b border-slate-700/50">
				{!collapsed && (
					<span className="text-lg font-bold tracking-tight">🖥️ Unidad Ti</span>
				)}
				<button
					onClick={() => {
						setCollapsed(!collapsed);
						setOpenSubmenu(null);
					}}
					className="p-1.5 rounded-lg hover:bg-slate-700/50 transition-colors"
					title={collapsed ? "Expandir" : "Colapsar"}
				>
					{collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
				</button>
			</div>

			{/* Navigation */}
			<nav className="flex-1 overflow-y-auto py-3 px-2 space-y-1">
				{menuItems.map((item) => {
					if (item.adminOnly && !isAdmin) return null;

					if (item.submenu) {
						const isOpen = openSubmenu === item.label;
						const active = isSubmenuActive(item.submenu.map((s) => s.path));

						return (
							<div key={item.label}>
								<button
									onClick={() => toggleSubmenu(item.label)}
									className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
										active
											? "bg-blue-600/20 text-blue-400"
											: "hover:bg-slate-700/50 text-slate-300 hover:text-white"
									}`}
									title={collapsed ? item.label : undefined}
								>
									<span className="flex-shrink-0">{item.icon}</span>
									{!collapsed && (
										<>
											<span className="flex-1 text-left text-sm">
												{item.label}
											</span>
											<ChevronDown
												size={16}
												className={`transition-transform duration-200 ${
													isOpen ? "rotate-180" : ""
												}`}
											/>
										</>
									)}
								</button>

								{/* Submenu - expanded mode */}
								{!collapsed && isOpen && (
									<div className="ml-4 mt-1 space-y-0.5">
										{item.submenu.map((sub) => (
											<Link
												key={sub.path}
												to={sub.path}
												className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
													isActive(sub.path)
														? "bg-blue-600/20 text-blue-400 font-medium"
														: "text-slate-400 hover:bg-slate-700/50 hover:text-white"
												}`}
											>
												{sub.label}
											</Link>
										))}
									</div>
								)}
							</div>
						);
					}

					return (
						<Link
							key={item.path}
							to={item.path!}
							className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
								isActive(item.path!)
									? "bg-blue-600/20 text-blue-400 font-medium"
									: "hover:bg-slate-700/50 text-slate-300 hover:text-white"
							}`}
							title={collapsed ? item.label : undefined}
						>
							<span className="flex-shrink-0">{item.icon}</span>
							{!collapsed && <span className="text-sm">{item.label}</span>}
						</Link>
					);
				})}
			</nav>

			{/* User info + Logout */}
			<div className="border-t border-slate-700/50 p-3 space-y-2">
				{!collapsed && (
					<div className="px-3 py-2 text-xs text-slate-400 truncate">
						{user?.email}
					</div>
				)}
				<button
					onClick={handleLogout}
					className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-red-400 hover:bg-red-500/10 hover:text-red-300 ${
						collapsed ? "justify-center" : ""
					}`}
					title="Cerrar sesión"
				>
					<LogOut size={20} />
					{!collapsed && <span className="text-sm">Cerrar sesión</span>}
				</button>
			</div>
		</aside>
	);
};

export default Sidebar;
