import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCarrinho } from '../hooks/use-carrinho';
import { useAuth } from '../context/AuthContext';
import { Modal } from './modal';
import LoginPage from '@/pages/Login';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();
  const { carrinho } = useCarrinho();
  const { user, papel, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mostrarLoginModal, setMostrarLoginModal] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Fecha o modal após login
  useEffect(() => {
    if (user && mostrarLoginModal) {
      setMostrarLoginModal(false);
    }
  }, [user, mostrarLoginModal]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
    { name: 'Carrinho', path: '/carrinho' },
  ];

  return (
    <>
      <nav className="bg-black dark:bg-black bg-white border-b border-gray-800 dark:border-gray-800 border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-neon-green neon-text">Izquizita</span>
                <span className="text-white dark:text-white text-gray-900">Skateshop</span>
              </div>
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isCarrinho = item.name === 'Carrinho';
                const itemCount = carrinho.length;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-neon-green ${
                      isActive(item.path)
                        ? 'text-neon-green border-b-2 border-neon-green'
                        : 'text-white dark:text-white text-gray-900 hover:border-b-2 hover:border-neon-green'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {isCarrinho && itemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-neon-green text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
                        {itemCount}
                      </span>
                    )}
                  </Link>
                );
              })}

              {/* Dashboard admin */}
              {user && papel === 'admin' && (
                <Link
                  to="/dashboard"
                  className={`px-3 py-2 text-sm font-medium ${
                    isActive('/dashboard')
                      ? 'text-neon-green border-b-2 border-neon-green'
                      : 'text-white dark:text-white text-gray-900 hover:text-neon-green hover:border-b-2 hover:border-neon-green'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Login / Logout (Desktop) */}
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="ml-4 bg-neon-green text-black px-3 py-1 rounded font-semibold hover:bg-white transition-colors"
                >
                  Sair
                </button>
              ) : (
                <button
                  onClick={() => setMostrarLoginModal(true)}
                  className="ml-4 px-3 py-2 text-sm font-medium text-white dark:text-white text-gray-900 hover:text-neon-green"
                >
                  Entrar
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white dark:text-white text-gray-900 hover:text-neon-green transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-green rounded"
                  aria-label="Toggle menu"
                >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black dark:bg-black bg-white border-t border-gray-800 dark:border-gray-800 border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => {
                const isCarrinho = item.name === 'Carrinho';
                const itemCount = carrinho.length;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      isActive(item.path)
                        ? 'text-neon-green'
                        : 'text-white dark:text-white text-gray-900 hover:text-neon-green'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {isCarrinho && itemCount > 0 && (
                      <span className="ml-2 inline-block bg-neon-green text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
                        {itemCount}
                      </span>
                    )}
                  </Link>
                );
              })}

              {/* Dashboard admin (Mobile) */}
              {user && papel === 'admin' && (
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white dark:text-white text-gray-900 hover:text-neon-green"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}

              {/* Login / Logout (Mobile) */}
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-md bg-neon-green text-black font-semibold hover:bg-white transition-colors"
                >
                  Sair
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMostrarLoginModal(true);
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white dark:text-white text-gray-900 hover:text-neon-green"
                >
                  Entrar
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Modal lateral de Login */}
      {mostrarLoginModal && (
        <Modal onClose={() => setMostrarLoginModal(false)}>
          <LoginPage />
        </Modal>
      )}
    </>
  );
};

export default Navbar;
