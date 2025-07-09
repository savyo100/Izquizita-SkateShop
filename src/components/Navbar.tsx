import { Link, useLocation } from 'react-router-dom';
import { useCarrinho } from '../hooks/use-carrinho';

const Navbar = () => {
  const location = useLocation();
  const { carrinho } = useCarrinho();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
    { name: 'Carrinho', path: '/carrinho' },
  ];

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-neon-green neon-text">Izquizita</span>
              <span className="text-white">Skateshop</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
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
                        : 'text-white hover:border-b-2 hover:border-neon-green'
                    }`}
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
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-neon-green transition-colors duration-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
