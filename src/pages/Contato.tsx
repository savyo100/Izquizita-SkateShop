
const Contato = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = "Salve! Vim através do site da izquizita e quero saber mais sobre os produtos.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen py-12 bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-grunge uppercase tracking-wider">
            [<span className="text-grunge-orange distort-text">CONTACT</span>]
          </h1>
          <p className="text-lg text-gray-300 font-grunge uppercase tracking-wide">
            HIT US UP /// WE'RE ALWAYS DOWN TO TALK SKATE
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* WhatsApp Card */}
          <div className="streetwear-card p-10 hover:bg-dark-700 transition-all duration-300 relative">
            <div className="text-center">
              <div className="w-20 h-20 bg-grunge-orange flex items-center justify-center mx-auto mb-6 border-4 border-white">
                <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 font-grunge uppercase tracking-wider">[WHATSAPP]</h3>
              <p className="text-gray-400 mb-8 font-grunge uppercase tracking-wide text-sm leading-relaxed">
                DIRECT LINE TO THE CREW /// QUICK ANSWERS /// REAL TALK ABOUT GEAR
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-grunge-orange text-black px-8 py-4 font-black font-grunge uppercase tracking-widest hover:bg-white transition-all duration-300 w-full border-2 border-grunge-orange"
              >
                [OPEN WHATSAPP]
              </button>
            </div>
          </div>

          {/* Visit Store Card */}
          <div className="streetwear-card p-10 hover:bg-dark-700 transition-all duration-300 relative">
            <div className="text-center">
              <div className="w-20 h-20 bg-grunge-orange flex items-center justify-center mx-auto mb-6 border-4 border-white">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 font-grunge uppercase tracking-wider">[VISIT THE SPOT]</h3>
              <p className="text-gray-400 mb-8 font-grunge uppercase tracking-wide text-sm leading-relaxed">
                COME TO OUR PHYSICAL LOCATION /// TEST THE GEAR /// MEET THE CREW /// FEEL THE VIBE
              </p>
              <div className="text-sm text-gray-300 mb-6 font-grunge uppercase tracking-wide space-y-2">
                <p>◾ RUA DO UNDERGROUND, 666 - CENTRO</p>
                <p>◾ MON-FRI: 10H-19H | SAT: 10H-18H</p>
                <p>◾ PHONE: (11) 99999-9999</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="streetwear-card p-10 mb-16 relative">
          <h2 className="text-3xl font-black text-grunge-orange mb-8 text-center font-grunge uppercase tracking-wider">
            [OTHER WAYS TO REACH US]
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border-2 border-grunge-orange">
              <div className="text-4xl mb-4 text-grunge-orange">◾</div>
              <h4 className="font-black text-white mb-3 font-grunge uppercase tracking-wider">EMAIL</h4>
              <p className="text-gray-400 text-sm font-grunge">contato@izquizita.com.br</p>
            </div>
            
            <div className="p-6 border-2 border-grunge-orange">
              <div className="text-4xl mb-4 text-grunge-orange">◾</div>
              <h4 className="font-black text-white mb-3 font-grunge uppercase tracking-wider">INSTAGRAM</h4>
              <p className="text-gray-400 text-sm font-grunge">@izquizita_underground</p>
            </div>
            
            <div className="p-6 border-2 border-grunge-orange">
              <div className="text-4xl mb-4 text-grunge-orange">◾</div>
              <h4 className="font-black text-white mb-3 font-grunge uppercase tracking-wider">ADDRESS</h4>
              <p className="text-gray-400 text-sm font-grunge">RUA DO UNDERGROUND, 666<br />CENTRO - SÃO PAULO</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="streetwear-card p-10 relative">
          <h2 className="text-3xl font-black text-grunge-orange mb-8 text-center font-grunge uppercase tracking-wider">
            [FREQUENTLY ASKED]
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-grunge-orange pl-6 py-4">
              <h4 className="font-black text-white mb-3 font-grunge uppercase tracking-wider">◾ QUANDO VOCÊS FUNCIONAM?</h4>
              <p className="text-gray-400 text-sm font-grunge uppercase tracking-wide">
                Segunda à sexta: 10h às 19h | Sábado: 10h às 18h | Domingo: Fechado
              </p>
            </div>
            
            <div className="border-l-4 border-grunge-orange pl-6 py-4">
              <h4 className="font-black text-white mb-3 font-grunge uppercase tracking-wider">◾ FAZEM ENTREGA?</h4>
              <p className="text-gray-400 text-sm font-grunge uppercase tracking-wide">
                Sim! Entregamos na região metropolitana. Cola no WhatsApp para mais info.
              </p>
            </div>
            
            <div className="border-l-4 border-grunge-orange pl-6 py-4">
              <h4 className="font-black text-white mb-3 font-grunge uppercase tracking-wider">◾ POSSO TROCAR/DEVOLVER?</h4>
              <p className="text-gray-400 text-sm font-grunge uppercase tracking-wide">
                Sim, até 7 dias com produto perfeito e nota fiscal. Sem pegadinha.
              </p>
            </div>
            
            <div className="border-l-4 border-grunge-orange pl-6 py-4">
              <h4 className="font-black text-white mb-3 font-grunge uppercase tracking-wider">◾ FORMAS DE PAGAMENTO?</h4>
              <p className="text-gray-400 text-sm font-grunge uppercase tracking-wide">
                Dinheiro, cartão, PIX e parcelamos em até 12x sem juros. Facilitamos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
