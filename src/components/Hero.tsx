import React, { useState, useEffect } from 'react';
import { ArrowRight, Compass, Calendar, ChevronLeft, ChevronRight, MapPin, Palmtree } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenBookingModal: (activityKey?: string) => void;
  onNavigate: (pageId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onNavigate }) => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 'surf-trips',
      image: '/images/surf_viagem.jpg',
      fallback: '/images/surf_viagem_action_1787915664456.jpg',
      tag: t('EXPEDIÇÕES DE SURF · DESTINOS DE SONHO', 'SURF EXPEDITIONS · DREAM DESTINATIONS', 'SURF-EXPEDITIONEN · TRAUMZIELE'),
      title: t('VIAGENS DE SURF', 'SURF TRIPS & EXPEDITIONS', 'SURFREISEN & EXPEDITIONEN'),
      subtitle: t(
        'Água quente, sol e boas ondas. Expedições de surf inesquecíveis organizadas com todo o conforto, acompanhamento e orientação para todos os níveis.',
        'Warm water, sunshine, and great waves. Unforgettable surf expeditions organized with absolute comfort, expert coaching and guidance for all skill levels.',
        'Warmes Wasser, Sonne und perfekte Wellen. Unvergessliche Surf-Expeditionen mit höchstem Komfort, Betreuung und Guiding für alle Erfahrungsstufen.'
      ),
      destinations: ['Maldivas', 'Açores', 'Indonésia', 'Sri Lanka'],
      pageId: 'surf',
      icon: Palmtree,
    },
    {
      id: 'surf-experiences',
      image: '/images/surf_action_spray_1787585994752.jpg',
      fallback: '/images/hero_slide_surf.jpg',
      tag: t('SURF & OCEANO', 'SURF & OCEAN', 'SURF & OZEAN'),
      title: t('SURF & SPOTS SECRETOS', 'SURF & SECRET SPOTS', 'SURF & SECRET SPOTS'),
      subtitle: t(
        'Aulas privadas e pequenos grupos, guia exclusivo nos melhores spots da costa portuguesa e sessões ao pôr do sol.',
        'Private and small group lessons, exclusive surf guiding across the coast\'s finest breaks, and sunset sessions.',
        'Privat- und Kleingruppenunterricht, exklusives Surf-Guiding an den besten Spots der Küste und Sunset Sessions.'
      ),
      pageId: 'surf',
      icon: Compass,
    },
    {
      id: 'padel',
      image: '/images/padel_action_court_1786008982529.jpg',
      fallback: '/images/hero_slide_padel.jpg',
      tag: t('PADEL & TORNEIOS', 'LAND & PADEL', 'LAND & PADEL'),
      title: t('PADEL DE ALTO NÍVEL', 'HIGH-LEVEL PADEL', 'HOCHWERTIGES PADEL'),
      subtitle: t(
        'Aulas técnicas, táticas e torneios express de 2 horas desenhados à medida.',
        'Technical and tactical coaching plus tailored 2-hour dynamic express tournaments.',
        'Technisches und taktisches Training sowie maßgeschneiderte dynamische 2-Stunden-Expressturniere.'
      ),
      pageId: 'padel',
      icon: Compass,
    },
    {
      id: 'canyoning',
      image: '/images/geres_cascata.jpg',
      fallback: '/images/hero_slide_canyoning.jpg',
      tag: t('GERÊS & AVENTURA', 'GERÊS & ADVENTURE', 'GERÊS & ABENTEUER'),
      title: t('CANYONING NO GERÊS', 'CANYONING IN GERÊS', 'CANYONING IM GERÊS'),
      subtitle: t(
        'Descobre lagoas cristalinas, cascatas selvagens e paisagens intactas com total segurança.',
        'Discover crystalline lagoons, wild waterfalls, and untouched landscapes in complete safety.',
        'Entdecken Sie kristallklare Lagunen, wilde Wasserfälle und unberührte Landschaften in absoluter Sicherheit.'
      ),
      pageId: 'canyoning',
      icon: Compass,
    },
    {
      id: 'tours',
      image: '/images/amarante_douro.jpg',
      fallback: '/images/douro.jpg',
      tag: t('TOURS PRIVADOS', 'PRIVATE TOURS', 'PRIVATE TOUREN'),
      title: t('TOURS NORTE & VALE DO DOURO', 'NORTH TOURS & DOURO VALLEY', 'NORD-TOUREN & DOURO-TAL'),
      subtitle: t(
        'Porto, Gaia, Matosinhos, Douro Vinhateiro, Santiago de Compostela e Braga em roteiros personalizados.',
        'Porto, Gaia, Matosinhos, Douro Valley, Santiago de Compostela, and Braga on custom private itineraries.',
        'Porto, Gaia, Matosinhos, Douro-Tal, Santiago de Compostela und Braga auf individuellen Touren.'
      ),
      pageId: 'tours',
      icon: Compass,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const slide = heroSlides[currentSlide];
  const IconComponent = slide.icon || Compass;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#1E2728]">
      {/* Background Slides with high nitidez, crisp contrast, and crystal clear visibility */}
      {heroSlides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            loading={index === 0 ? 'eager' : 'lazy'}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = s.fallback;
            }}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Main Content without opacity boxes */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#273334] border border-[#E4CEAD]/40 text-[#E4CEAD] text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
            <IconComponent className="w-3.5 h-3.5 text-[#C96F4B]" />
            <span>{slide.tag}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-wider uppercase leading-none mb-4 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            {slide.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#F7F4EE] max-w-2xl mx-auto font-medium mb-6 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            {slide.subtitle}
          </p>

          {/* Destination Badges if available (e.g. for Viagens de Surf) */}
          {slide.destinations && (
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-in fade-in duration-300">
              <span className="text-[11px] uppercase tracking-wider text-[#E4CEAD] font-bold mr-1 flex items-center gap-1 drop-shadow-md">
                <MapPin className="w-3.5 h-3.5 text-[#C96F4B]" />
                {t('Destinos:', 'Destinations:', 'Reiseziele:')}
              </span>
              {slide.destinations.map((dest) => (
                <span
                  key={dest}
                  className="px-3.5 py-1 rounded-full bg-[#273334] border border-white/20 text-white text-xs font-semibold tracking-wide shadow-lg hover:bg-[#C96F4B] transition-colors"
                >
                  {dest}
                </span>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBookingModal()}
              className="w-full sm:w-auto px-8 py-4 bg-[#C96F4B] hover:bg-[#B05B3A] text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('Reservar Agora', 'Book Now', 'Jetzt Buchen')}</span>
            </button>

            <button
              onClick={() => onNavigate(slide.pageId)}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#F7F4EE] text-[#273334] font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>
                {slide.id === 'surf-trips'
                  ? t('Ver Viagens de Surf', 'Explore Surf Trips', 'Surfreisen ansehen')
                  : t('Explorar Experiências', 'Explore Experiences', 'Erlebnisse entdecken')}
              </span>
              <ArrowRight className="w-4 h-4 text-[#C96F4B]" />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all cursor-pointer shadow-md ${
                i === currentSlide ? 'w-8 bg-[#C96F4B]' : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#273334] hover:bg-[#C96F4B] text-white items-center justify-center transition cursor-pointer border border-white/20 shadow-xl"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#273334] hover:bg-[#C96F4B] text-white items-center justify-center transition cursor-pointer border border-white/20 shadow-xl"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};
