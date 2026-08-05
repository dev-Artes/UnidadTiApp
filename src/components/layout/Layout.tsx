import { Sidebar } from "..";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="flex h-screen overflow-hidden">
			<Sidebar />
			<main className="flex-1 bg-gray-100 overflow-y-auto">
				<div className="p-6">{children}</div>
			</main>
		</div>
	);
};

export default Layout;
