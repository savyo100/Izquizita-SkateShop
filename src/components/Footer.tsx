// Importa o ícone de seta para cima da biblioteca lucide-react
import { ChevronUp } from 'lucide-react';

// Componente de rodapé
const Footer = () => {
  // Função para rolar suavemente a página até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // posição 0 = topo da página
      behavior: 'smooth' // rolagem suave
    });
  };

  return (
    <footer className="bg-card border-t border-border mt-auto relative">
      {/* Container centralizado e com espaçamento responsivo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Layout flex: coluna no mobile, linha no desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo e slogan */}
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold">
              <span className="text-primary">Izquizita</span>
              <span className="text-foreground">Skateshop</span>
            </div>
            <p className="text-muted-foreground text-sm mt-1">
              A melhor loja de skate da cidade
            </p>
          </div>
          
          {/* Direitos autorais e mensagem extra */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © 2025 Izquizita Skateshop. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground/70 text-xs mt-1">
              Feito com ❤️ para a comunidade skatista
            </p>
          </div>
        </div>
      </div>
      
      {/* Botão para voltar ao topo */}
      <button
        onClick={scrollToTop} // chama a função de rolagem suave
        className="absolute -top-6 right-6 group hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full"
        aria-label="Voltar ao topo"
      >
        {/* Círculo principal com gradiente */}
        <div className="relative bg-gradient-to-t from-primary to-primary/80 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300">

          {/* Barra superior decorativa */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-foreground rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Ícone da seta */}
          <ChevronUp className="h-6 w-6 text-primary-foreground group-hover:text-white transition-colors" />
          
          {/* Barra inferior decorativa */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1.5 bg-foreground rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Barra vertical central */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-8 bg-foreground/30 group-hover:bg-foreground/50 transition-colors"></div>
        </div>
        
        {/* Tooltip ao passar o mouse */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Voltar ao topo
        </div>
      </button>
    </footer>
  );
};

export default Footer;
