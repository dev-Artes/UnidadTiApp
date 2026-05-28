import { useState } from "react";

import { Link } from "react-router-dom";
import { MoreVertical, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (menu: string) => {
    setSubmenu(submenu === menu ? null : menu);
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-bold">Unidad Ti</h1>
        </Link>

        <nav>
          <ul className="flex space-x-4 relative">
            <li>
              <Link
                className="p-2 rounded hover:bg-blue-500 align-middle"
                to="/"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                className="p-2 rounded hover:bg-blue-500 align-middle"
                to="/certificates"
              >
                Registros
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded hover:bg-blue-500"
              >
                <MoreVertical className="w-5 h-5" />
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-56 bg-blue-500 text-white rounded-md shadow-lg py-2 z-20">
                  {/* Usuarios */}
                  <div>
                    <button
                      onClick={() => toggleSubmenu("usuarios")}
                      className="flex justify-between items-center w-full px-4 py-2 hover:bg-blue-600"
                    >
                      <span>Usuarios</span>
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform ${
                          submenu === "usuarios" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {submenu === "usuarios" && (
                      <div className="ml-4  rounded-md">
                        <Link
                          to="/user/create"
                          className="block px-4 py-2 hover:bg-blue-600 rounded-md"
                        >
                          Crear
                        </Link>
                        <Link
                          to="/users"
                          className="block px-4 py-2 hover:bg-blue-600 rounded-md"
                        >
                          Registros
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Equipos */}
                  <div>
                    <button
                      onClick={() => toggleSubmenu("equipos")}
                      className="flex justify-between items-center w-full px-4 py-2 hover:bg-blue-600"
                    >
                      <span>Equipos</span>
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform ${
                          submenu === "equipos" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {submenu === "equipos" && (
                      <div className="ml-4 rounded-md">
                        <Link
                          to="/device/create"
                          className="block px-4 py-2 hover:bg-blue-600 rounded-md"
                        >
                          Crear
                        </Link>
                        <Link
                          to="/devices"
                          className="block px-4 py-2 hover:bg-blue-600 rounded-md"
                        >
                          Registros
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Marcas */}
                  <div>
                    <button
                      onClick={() => toggleSubmenu("marcas")}
                      className="flex justify-between items-center w-full px-4 py-2 hover:bg-blue-600"
                    >
                      <span>Marcas</span>
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform ${
                          submenu === "marcas" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {submenu === "marcas" && (
                      <div className="ml-4  rounded-md">
                        <Link
                          to="/brand/create"
                          className="block px-4 py-2 hover:bg-blue-600 rounded-md"
                        >
                          Crear
                        </Link>
                        <Link
                          to="/brands"
                          className="block px-4 py-2 hover:bg-blue-600 rounded-md"
                        >
                          Registros
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Software */}
                  <div>
                    <button
                      onClick={() => toggleSubmenu("softwares")}
                      className="flex justify-between items-center w-full px-4 py-2 hover:bg-blue-600"
                    >
                      <span>Software</span>
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform ${
                          submenu === "softwares" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {submenu === "softwares" && (
                      <div className="ml-4  rounded-md">
                        <Link
                          to="/software/create"
                          className="block px-4 py-2 hover:bg-blue-600 rounded-md"
                        >
                          Crear
                        </Link>
                        <Link
                          to="/softwares"
                          className="block px-4 py-2 hover:bg-blue-600 rounded-md"
                        >
                          Registros
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
