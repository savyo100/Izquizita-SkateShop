
const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-grunge-orange mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-black font-grunge">
              <span className="text-white">[</span>
              <span className="grunge-text">izquizita</span>
              <span className="text-white">]</span>
            </div>
            <p className="text-gray-400 text-sm mt-2 font-grunge uppercase tracking-wider">
              Authentic streetwear vibes
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm font-grunge">
              © 2024 izquizita. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1 font-grunge uppercase tracking-wider">
              Made with ◾ for the street culture
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
