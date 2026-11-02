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
            className="w-full h-full object-cover object-center contrast-[1.08] brightness-[1.03] saturate-[1.08] filter drop-shadow-sm transition-all duration-700"
            style={{
              imageRendering: 'auto',
            }}
          />
          {/* Crisp, non-muddy overlays: delicate top vignette + bottom section blend, preserving full photo brilliance */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#273334] via-[#273334]/20 to-black/25 pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/30 pointer-events-none" />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-24 sm:py-32">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E4CEAD] text-xs font-bold uppercase tracking-widest mb-6">
          <IconComponent className="w-3.5 h-3.5 text-[#C96F4B]" />
          <span>{slide.tag}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-wider uppercase leading-none mb-4 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          {slide.title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#F7F4EE] max-w-2xl mx-auto font-medium mb-6 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
          {slide.subtitle}
        </p>

        {/* Destination Badges if available (e.g. for Viagens de Surf) */}
        {slide.destinations && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-in fade-in duration-300">
            <span className="text-[11px] uppercase tracking-wider text-[#E4CEAD] font-bold mr-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C96F4B]" />
              {t('Destinos:', 'Destinations:', 'Reiseziele:')}
            </span>
            {slide.destinations.map((dest) => (
              <span
                key={dest}
                className="px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-wide shadow-xs hover:bg-[#C96F4B]/40 transition-colors"
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
            className="w-full sm:w-auto px-8 py-4 bg-[#C96F4B] hover:bg-[#B05B3A] text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-[#C96F4B]/30 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>{t('Reservar Agora', 'Book Now', 'Jetzt Buchen')}</span>
          </button>

          <button
            onClick={() => onNavigate(slide.pageId)}
            className="w-full sm:w-auto px-8 py-4 bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm border border-white/30 font-bold text-xs uppercase tracking-wider rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>
              {slide.id === 'surf-trips'
                ? t('Ver Viagens de Surf', 'Explore Surf Trips', 'Surfreisen ansehen')
                : t('Explorar Experiências', 'Explore Experiences', 'Erlebnisse entdecken')}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === currentSlide ? 'w-8 bg-[#C96F4B]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white items-center justify-center backdrop-blur-xs transition cursor-pointer border border-white/20"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white items-center justify-center backdrop-blur-xs transition cursor-pointer border border-white/20"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};
