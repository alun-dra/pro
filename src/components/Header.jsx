import { FaFacebookF, FaInstagram, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // ← Nuevo ícono de X (Twitter)

export default function Header() {
  return (
    <header className="w-full font-sans">
      {/* Barra superior */}
      <div className="bg-rose-100 text-rose-900 text-sm border-b border-rose-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <span>Envío gratis desde $20.000, a todo Chile</span>
          <div className="flex items-center space-x-4">
            <FaFacebookF className="cursor-pointer hover:text-rose-700" />
            <FaXTwitter className="cursor-pointer hover:text-rose-700" />
            <FaInstagram className="cursor-pointer hover:text-rose-700" />
            <nav className="hidden md:flex space-x-4 ml-4">
              <a href="#" className="hover:underline">Tiendas</a>
              <a href="#" className="hover:underline">Contacto</a>
              <a href="#" className="hover:underline">Cuenta</a>
              <a href="#" className="hover:underline">Blog</a>
              <a href="#" className="hover:underline">Envíos</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Barra principal */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo placeholder */}
          <div className="text-2xl font-bold text-rose-800 tracking-wider">
            Logo
          </div>

          {/* Menú principal */}
          <nav className="hidden md:flex space-x-6 text-rose-900 font-medium">
            <div className="group relative cursor-pointer">
              <span className="hover:underline">Facial</span>
              <div className="absolute hidden group-hover:block bg-white shadow rounded p-2 mt-2 z-10">
                <a href="#" className="block px-2 py-1 hover:bg-rose-100 rounded">Limpiadores</a>
                <a href="#" className="block px-2 py-1 hover:bg-rose-100 rounded">Mascarillas</a>
              </div>
            </div>
            <div className="group relative cursor-pointer">
              <span className="hover:underline">Cuerpo</span>
              <div className="absolute hidden group-hover:block bg-white shadow rounded p-2 mt-2 z-10">
                <a href="#" className="block px-2 py-1 hover:bg-rose-100 rounded">Exfoliantes</a>
                <a href="#" className="block px-2 py-1 hover:bg-rose-100 rounded">Cremas</a>
              </div>
            </div>
            <a href="#" className="hover:underline">Cabello</a>
            <a href="#" className="hover:underline">Sets</a>
            <a href="#" className="hover:underline">Ofertas</a>
          </nav>

          {/* Iconos */}
          <div className="flex items-center space-x-4 text-rose-900">
            <FaSearch className="cursor-pointer hover:text-rose-700" />
            <div className="relative">
              <FaShoppingCart className="cursor-pointer hover:text-rose-700" />
              <span className="absolute -top-2 -right-2 bg-rose-700 text-white text-xs rounded-full px-1">0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
