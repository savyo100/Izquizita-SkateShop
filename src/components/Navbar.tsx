import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCarrinho } from '../hooks/use-carrinho';
import { useAuth } from '../context/AuthContext';
import { Modal } from './modal';
import LoginPage from '@/pages/Login';
import { ThemeToggle } from './ThemeToggle';
import { User, ChevronDown, LogOut, Settings } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const { carrinho } = useCarrinho();
  const { user, papel, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mostrarLoginModal, setMostrarLoginModal] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  // Fecha o modal após login
  useEffect(() => {
    if (user && mostrarLoginModal) {
      setMostrarLoginModal(false);
    }
  }, [user, mostrarLoginModal]);

  // Fecha dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowUserDropdown(false);
      }
    };

    if (showUserDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserDropdown]);

  // Função para obter nome de exibição
  const getDisplayName = () => {
    if (user?.displayName) return user.displayName;
    if (user?.email) return user.email.split('@')[0];
    return 'Admin';
  };

  // Função para obter iniciais do nome
  const getInitials = () => {
    const name = getDisplayName();
    return name.charAt(0).toUpperCase();
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
    { name: 'Carrinho', path: '/carrinho' },
  ];

  return (
    <>
      <nav className="bg-black dark:bg-black bg-white border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-neon-green neon-text">Izquizita</span>
<span className="text-foreground">Skateshop</span>
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
                        : 'text-foreground hover:border-b-2 hover:border-neon-green'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {isCarrinho && itemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-neon-green text-foreground text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
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
                      : 'text-foreground hover:text-neon-green hover:border-b-2 hover:border-neon-green'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* User Avatar/Login (Desktop) */}
              {user ? (
                <div ref={dropdownRef} className="relative ml-4">
                  <button
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center space-x-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-2 rounded-full hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    {/* Avatar */}
                    <div className="w-8 h-8 bg-primary-foreground text-primary rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                      {getInitials()}
                    </div>
                    {/* Nome do usuário */}
                    <span className="hidden sm:block text-sm font-medium max-w-32 truncate">
                      {getDisplayName()}
                    </span>
                    {/* Indicador de admin */}
                    {papel === 'admin' && (
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    )}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showUserDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {showUserDropdown && (
                    <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl z-50 py-2">
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-border">
                        <p className="text-sm font-medium text-card-foreground">{getDisplayName()}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                        {papel === 'admin' && (
                          <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            Administrador
                          </span>
                        )}
                      </div>

                      {/* Menu Items */}
                      <div className="py-1">
                        {papel === 'admin' && (
                          <Link
                            to="/dashboard"
                            className="flex items-center px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors"
                            onClick={() => setShowUserDropdown(false)}
                          >
                            <Settings className="h-4 w-4 mr-2" />
                            Dashboard
                          </Link>
                        )}
                        <button
                          onClick={() => {
                            logout();
                            setShowUserDropdown(false);
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sair
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setMostrarLoginModal(true)}
                  className="ml-4 px-4 py-2 text-sm font-medium text-foreground hover:text-primary border border-border rounded-lg hover:border-primary transition-all duration-300"
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
                  className="text-foreground hover:text-neon-green transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-green rounded"
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
          <div className="md:hidden bg-black dark:bg-black bg-white border-t border-gray-200 dark:border-gray-800">
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
                        : 'text-foreground hover:text-neon-green'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {isCarrinho && itemCount > 0 && (
                      <span className="ml-2 inline-block bg-neon-green text-foreground text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
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
                  className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-neon-green"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}

              {/* User info e logout (Mobile) */}
              {user ? (
                <div className="px-3 py-2 space-y-3">
                  {/* User Avatar e Info */}
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {getInitials()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{getDisplayName()}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                      {papel === 'admin' && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          Admin
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Logout Button */}
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center px-3 py-2 rounded-md bg-destructive/10 text-destructive font-semibold hover:bg-destructive/20 transition-colors"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setMostrarLoginModal(true);
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary border border-border hover:border-primary transition-all"
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
