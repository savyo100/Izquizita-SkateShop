
const Sobre = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa <span className="text-neon-green neon-text">História</span>
          </h1>
          <p className="text-xl text-gray-300">
            Conheça a trajetória da SkateCrew e nossa paixão pelo skate
          </p>
        </div>

        {/* Story Content */}
        <div className="space-y-8">
          <div className="bg-dark-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-neon-green mb-4">Como Tudo Começou</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A SkateCrew nasceu em 2018 do sonho de três amigos skatistas que queriam 
              democratizar o acesso aos melhores equipamentos de skate da cidade. 
              Cansados de ter que viajar para encontrar produtos de qualidade, 
              decidimos abrir nossa própria loja.
            </p>
            <p className="text-gray-300 leading-relaxed">
              O que começou como um pequeno espaço de 30m² no centro da cidade, 
              hoje se tornou referência na região, atendendo skatistas iniciantes 
              e profissionais com a mesma dedicação e carinho.
            </p>
          </div>

          <div className="bg-dark-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-neon-green mb-4">Nossa Missão</h2>
            <p className="text-gray-300 leading-relaxed">
              Fornecer equipamentos de alta qualidade e suporte especializado para 
              toda a comunidade skatista, desde iniciantes até profissionais. 
              Acreditamos que o skate é mais que um esporte - é um estilo de vida, 
              uma forma de expressão e uma comunidade unida pela paixão pelas quatro rodas.
            </p>
          </div>

          <div className="bg-dark-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-neon-green mb-4">Nossos Valores</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🛹 Qualidade</h3>
                <p className="text-gray-400 text-sm">
                  Trabalhamos apenas com marcas reconhecidas e testadas pela comunidade skatista.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🤝 Comunidade</h3>
                <p className="text-gray-400 text-sm">
                  Apoiamos eventos locais e incentivamos o crescimento da cena skatista.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">💡 Inovação</h3>
                <p className="text-gray-400 text-sm">
                  Sempre em busca das últimas tendências e tecnologias do mundo do skate.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">❤️ Paixão</h3>
                <p className="text-gray-400 text-sm">
                  Nossa equipe é formada por skatistas que vivem e respiram a cultura skate.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-neon-green mb-4">A Equipe</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nossa equipe é formada por skatistas experientes que conhecem cada 
              produto que vendemos. Todos nós andamos de skate regularmente e 
              testamos pessoalmente os equipamentos antes de colocá-los à venda.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Seja você um iniciante procurando seu primeiro skate ou um veterano 
              em busca de um upgrade, nossa equipe está aqui para te orientar e 
              garantir que você encontre exatamente o que precisa.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-dark-800 to-dark-700 rounded-lg border border-neon-green">
          <h3 className="text-2xl font-bold text-white mb-4">
            Faça Parte da Nossa Comunidade
          </h3>
          <p className="text-gray-300 mb-6">
            Visite nossa loja, conheça nossa equipe e descubra por que somos 
            a referência em skate da região!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-neon-green text-black px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-300">
              Visite Nossa Loja
            </button>
            <button className="border-2 border-neon-green text-neon-green px-8 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-black transition-all duration-300">
              Siga no Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
