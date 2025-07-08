
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative grunge-bg py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 font-grunge">
            <span className="text-white">[</span>
            <span className="grunge-text distort-text glitch-effect">izquizita</span>
            <span className="text-white">]</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-grunge uppercase tracking-wider leading-relaxed">
            AUTHENTIC STREETWEAR CULTURE ◾ RAW SKATE VIBES ◾ 
            UNDERGROUND BRANDS ◾ NO FAKE SHIT ◾ REAL STREET CULTURE
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/produtos"
              className="bg-grunge-orange text-black px-8 py-4 font-black font-grunge text-lg hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-grunge-orange uppercase tracking-widest"
            >
              [SHOP NOW]
            </Link>
            
            <Link
              to="/sobre"
              className="border-2 border-grunge-orange text-grunge-orange px-8 py-4 font-black font-grunge text-lg hover:bg-grunge-orange hover:text-black transition-all duration-300 uppercase tracking-widest"
            >
              [OUR STORY]
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16 font-grunge uppercase tracking-wider">
            Why <span className="text-grunge-orange">[izquizita]</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 streetwear-card hover:bg-dark-700 transition-all duration-300 relative">
              <div className="text-5xl mb-6 text-grunge-orange">◾</div>
              <h3 className="text-xl font-black text-white mb-4 font-grunge uppercase tracking-wider">[AUTHENTIC GEAR]</h3>
              <p className="text-gray-400 font-grunge text-sm uppercase tracking-wide leading-relaxed">
                NO BULLSHIT BRANDS /// REAL STREET CULTURE /// TESTED BY LOCALS
              </p>
            </div>
            
            <div className="text-center p-8 streetwear-card hover:bg-dark-700 transition-all duration-300 relative">
              <div className="text-5xl mb-6 text-grunge-orange">◾</div>
              <h3 className="text-xl font-black text-white mb-4 font-grunge uppercase tracking-wider">[FAST DELIVERY]</h3>
              <p className="text-gray-400 font-grunge text-sm uppercase tracking-wide leading-relaxed">
                QUICK SHIPPING /// SAFE PACKAGING /// STRAIGHT TO YOUR DOOR
              </p>
            </div>
            
            <div className="text-center p-8 streetwear-card hover:bg-dark-700 transition-all duration-300 relative">
              <div className="text-5xl mb-6 text-grunge-orange">◾</div>
              <h3 className="text-xl font-black text-white mb-4 font-grunge uppercase tracking-wider">[STREET KNOWLEDGE]</h3>
              <p className="text-gray-400 font-grunge text-sm uppercase tracking-wide leading-relaxed">
                REAL SKATERS /// UNDERGROUND WISDOM /// AUTHENTIC ADVICE
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
