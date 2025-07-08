
const Sobre = () => {
  return (
    <div className="min-h-screen py-12 bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-grunge uppercase tracking-wider">
            [<span className="text-grunge-orange distort-text">OUR STORY</span>]
          </h1>
          <p className="text-lg text-gray-300 font-grunge uppercase tracking-wide">
            REAL STORIES FROM THE UNDERGROUND
          </p>
        </div>

        {/* Story Content */}
        <div className="space-y-12">
          <div className="streetwear-card p-10 relative">
            <h2 className="text-3xl font-black text-grunge-orange mb-6 font-grunge uppercase tracking-wider">[THE BEGINNING]</h2>
            <p className="text-gray-300 leading-relaxed mb-6 font-grunge">
              izquizita nasceu em 2018 das ruas, não de um escritório. Três skatistas locais, 
              cansados da falta de produtos autênticos na cidade, decidiram criar algo real. 
              Começamos vendendo no próprio spot onde andávamos.
            </p>
            <p className="text-gray-300 leading-relaxed font-grunge">
              O que era uma mesa dobrável no centro virou referência underground. 
              Sem marketing fake, sem patrocínio corporativo - só produtos testados 
              por quem realmente anda de skate.
            </p>
          </div>

          <div className="streetwear-card p-10 relative">
            <h2 className="text-3xl font-black text-grunge-orange mb-6 font-grunge uppercase tracking-wider">[THE MISSION]</h2>
            <p className="text-gray-300 leading-relaxed font-grunge">
              Nossa missão é simples: manter a cultura skatista real. Fornecemos gear 
              autêntico para quem vive de verdade essa vida. Não vendemos sonhos, 
              vendemos equipamentos que funcionam nas ruas, testados por locais.
            </p>
          </div>

          <div className="streetwear-card p-10 relative">
            <h2 className="text-3xl font-black text-grunge-orange mb-6 font-grunge uppercase tracking-wider">[OUR VALUES]</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-grunge-orange pl-6">
                <h3 className="text-lg font-black text-white mb-3 font-grunge uppercase tracking-wider">◾ AUTHENTICITY</h3>
                <p className="text-gray-400 text-sm font-grunge uppercase tracking-wide">
                  Only brands that earn respect on the streets.
                </p>
              </div>
              <div className="border-l-4 border-grunge-orange pl-6">
                <h3 className="text-lg font-black text-white mb-3 font-grunge uppercase tracking-wider">◾ COMMUNITY</h3>
                <p className="text-gray-400 text-sm font-grunge uppercase tracking-wide">
                  Supporting local skaters and underground events.
                </p>
              </div>
              <div className="border-l-4 border-grunge-orange pl-6">
                <h3 className="text-lg font-black text-white mb-3 font-grunge uppercase tracking-wider">◾ QUALITY</h3>
                <p className="text-gray-400 text-sm font-grunge uppercase tracking-wide">
                  Gear that survives the streets and real sessions.
                </p>
              </div>
              <div className="border-l-4 border-grunge-orange pl-6">
                <h3 className="text-lg font-black text-white mb-3 font-grunge uppercase tracking-wider">◾ UNDERGROUND</h3>
                <p className="text-gray-400 text-sm font-grunge uppercase tracking-wide">
                  Staying true to the raw essence of skate culture.
                </p>
              </div>
            </div>
          </div>

          <div className="streetwear-card p-10 relative">
            <h2 className="text-3xl font-black text-grunge-orange mb-6 font-grunge uppercase tracking-wider">[THE CREW]</h2>
            <p className="text-gray-300 leading-relaxed mb-6 font-grunge">
              Nossa equipe não é funcionário, é família. Todos nós vivemos essa cultura 
              24/7. Andamos, quebramos, testamos e aprovamos tudo que vendemos. 
              Cada produto passa pelo crivo de quem realmente entende de street.
            </p>
            <p className="text-gray-300 leading-relaxed font-grunge">
              Seja você iniciante ou veterano, tratamos todos igual. Aqui não tem 
              discriminação - se você curte skate de verdade, você é bem-vindo. 
              Nossa vibe é ensinar, não julgar.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-12 grunge-bg border-2 border-grunge-orange relative">
          <h3 className="text-3xl font-black text-white mb-6 font-grunge uppercase tracking-wider">
            [JOIN THE UNDERGROUND]
          </h3>
          <p className="text-gray-300 mb-8 font-grunge uppercase tracking-wide text-sm leading-relaxed">
            VISIT OUR SPOT /// MEET THE CREW /// BE PART OF REAL STREET CULTURE
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-grunge-orange text-black px-12 py-4 font-black font-grunge uppercase tracking-widest hover:bg-white transition-all duration-300 border-2 border-grunge-orange">
              [VISIT SHOP]
            </button>
            <button className="border-2 border-grunge-orange text-grunge-orange px-12 py-4 font-black font-grunge uppercase tracking-widest hover:bg-grunge-orange hover:text-black transition-all duration-300">
              [FOLLOW IG]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
