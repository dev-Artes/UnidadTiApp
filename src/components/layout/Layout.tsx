// Components
import { Navbar, Footer } from '..'


interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-section-padding bg-gray-100">
        { children }
      </main>
      <Footer />
    </div>
  )
}

export default Layout