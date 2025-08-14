
const Contato = () => {
  const whatsappNumber = "5586999309346"; 
  const whatsappMessage = "Olá! Vim através do site da Izquizita e gostaria de mais informações.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em <span className="text-neon-green neon-text">Contato</span>
          </h1>
          <p className="text-xl text-black dark:text-gray-400">
            Estamos aqui para ajudar você com tudo relacionado ao skate!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp Card */}
          <div className="bg-dark-800 rounded-lg p-8 border border-gray-700 hover:border-neon-green transition-colors duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">WhatsApp</h3>
              <p className="text-black dark:text-gray-400 mb-6">
                Fale conosco diretamente no WhatsApp para dúvidas rápidas, 
                informações sobre produtos ou suporte personalizado.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 w-full"
              >
                Abrir WhatsApp
              </button>
            </div>
          </div>

          {/* Visit Store Card */}
          <div className="bg-dark-800 rounded-lg p-8 border border-gray-700 hover:border-neon-green transition-colors duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
{/*              <h3 className="text-xl font-bold text-foreground
 mb-3">Visite Nossa Loja</h3> */}
{/*             <p className="text-black dark:text-gray-400 mb-6"> */}
{/*                Venha conhecer nossa loja física! Experimente os produtos, */}
{/*                converse com nossa equipe e faça parte da comunidade Izquizita.*/}
{/*              </p>*/}
{/*              <div className="text-sm text-gray-300 mb-4">*/}
{/*              <p>📍 Avenida Tomaz Rebelo, 123 - Centro</p>*/}
{/*               <p>🕒 Seg-Sex: 9h-18h | Sáb: 9h-12h</p>*/}
{/*                <p>📞 (86) 999309346</p> */}
{/*              </div>*/}
           </div>
          </div>*
        </div>

        {/* Additional Contact Methods */}
        <div className="bg-dark-800 rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-neon-green mb-6 text-center">
            Outras Formas de Contato
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-3">📧</div>
              <h4 className="font-semibold text-foreground mb-2">E-mail</h4>
              <p className="text-black dark:text-gray-400 text-sm">contato@Izquizita.com.br</p>
            </div>
            
            <div className="p-4">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-semibold text-foreground mb-2">Instagram</h4>
              <p className="text-black dark:text-gray-400 text-sm">@Izquizita_oficial</p>
            </div>
            
            <div className="p-4">
              <div className="text-3xl mb-3">📍</div>
              <h4 className="font-semibold text-foreground mb-2">Endereço</h4>
              <p className="text-black dark:text-gray-400 text-sm">Indisponível no momento<br /></p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-dark-800 rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-neon-green mb-6 text-center">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-600 pb-4">
              <h4 className="font-semibold text-foreground mb-2">🕒 Qual o horário de funcionamento?</h4>
              <p className="text-black dark:text-gray-400 text-sm">
                Segunda à sexta: 9h às 18h | Sábado: 9h às 12h | Domingo: Fechado
              </p>
            </div>
            
            <div className="border-b border-gray-600 pb-4">
              <h4 className="font-semibold text-foreground mb-2">🚚 Vocês fazem entrega?</h4>
              <p className="text-black dark:text-gray-400 text-sm">
                Sim! Fazemos entrega na região. Entre em contato para mais informações.
              </p>
            </div>
            
            <div className="border-b border-gray-600 pb-4">
              <h4 className="font-semibold text-foreground mb-2">🔄 Posso trocar/devolver produtos?</h4>
              <p className="text-black dark:text-gray-400 text-sm">
                Sim, aceitamos trocas em até 7 dias com produto em perfeito estado e nota fiscal.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">💳 Quais formas de pagamento vocês aceitam?</h4>
              <p className="text-black dark:text-gray-400 text-sm">
                Aceitamos dinheiro, cartão de débito/crédito, PIX e parcelamos em até 12x sem juros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
