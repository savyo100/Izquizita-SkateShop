
const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold">
              <span className="text-neon-green">Izquizita</span>
              <span className="text-white">Skateshop</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">
              A melhor loja de skate da cidade
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 Izquizita Skateshop. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Feito com ❤️ para a comunidade skatista
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
