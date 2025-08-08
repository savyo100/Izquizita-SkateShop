import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const Home = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Bem-vindo à </span>
            <span className="text-neon-pink neon-text">Izquizita Skateshop</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto">
            A melhor loja de skate da cidade! Aqui você encontra os melhores shapes, 
            rodas, trucks e acessórios para elevar seu skate ao próximo nível.
          </p>

          {/* Container relativo para carrossel + botões */}
          <div className="relative max-w-6xl mx-auto px-4">
            <Swiper
              ref={swiperRef}
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              slidesPerView={1}
              spaceBetween={0}
              className="rounded-lg overflow-hidden shadow-2xl"
            >
              <SwiperSlide>
                <img
                  src="/imags/ima1.jpeg"
                  alt="Slide 1"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/imags/ima2.jpg"
                  alt="Slide 2"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/imags/ima3.jpg"
                  alt="Slide 3"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
              </SwiperSlide>
            </Swiper>

            {/* Botões de navegação laterais */}
            <button
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background/95 backdrop-blur-sm text-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-6 w-6 group-hover:text-primary transition-colors" />
            </button>

            <button
              onClick={() => swiperRef.current?.swiper?.slideNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background/95 backdrop-blur-sm text-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              aria-label="Próximo slide"
            >
              <ChevronRight className="h-6 w-6 group-hover:text-primary transition-colors" />
            </button>

            {/* Botões fixos logo abaixo do carrossel, centralizados e com sombra */}
            <div className="absolute left-1/2 bottom-[-60px] transform -translate-x-1/2 flex gap-6 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg z-30 border border-border">
              <Link
                to="/produtos"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Ver Produtos
              </Link>
              <Link
                to="/sobre"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Nossa História
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Por que escolher a <span className="text-neon-green">Izquizita Skateshop</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-dark-800 rounded-lg p-8 border border-gray-700 text-center">
              <div className="text-4xl mb-4">🛹</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Produtos de Qualidade</h3>
              <p className="text-foreground">
                Trabalhamos apenas com as melhores marcas do mercado skatista
              </p>
            </div>

          <div className="bg-dark-800 rounded-lg p-8 border border-gray-700 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Entrega Rápida</h3>
              <p className="text-foreground">
                Receba seus produtos em casa com agilidade e segurança
              </p>
            </div>

          <div className="bg-dark-800 rounded-lg p-8 border border-gray-700 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Suporte Especializado</h3>
              <p className="text-foreground">
                Nossa equipe de skatistas está aqui para te ajudar
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
