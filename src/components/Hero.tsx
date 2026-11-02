import React, { useState, useEffect } from 'react';
import { ArrowRight, Compass, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenBookingModal: (activityKey?: string) => void;
  onNavigate: (pageId: string) => void;
}

const HERO_SLIDES = [
  {
    image: '/images/hero_slide_surf.jpg',
    fallback: '/images/surf.png',
    tag: 'SURF & OCEAN',
    title: 'SURF EXPERIENCES & EXPEDIÇÕES',
    subtitle: 'Aulas privadas, surf guiding exclusivo nos melhores spots e viagens inesquecíveis.',
    pageId: 'surf',
  },
  {
    image: '/images/hero_slide_padel.jpg',
    fallback: '/images/padel.jpg',
    tag: 'LAND & PADEL',
    title: 'PADEL DE ALTO NÍVEL',
    subtitle: 'Aulas técnicas, táticas e torneios express de 2 horas desenhados à medida.',
    pageId: 'padel',
  },
  {
    image: '/images/hero_slide_canyoning.jpg',
    fallback: '/images/geres_cascata.jpg',
    tag: 'GERÊS & ADVENTURE',
    title: 'CANYONING NO GERÊS',
    subtitle: 'Descobre lagoas cristalinas, cascatas selvagens e paisagens intactas com total segurança.',
    pageId: 'canyoning',
  },
  {
    image: '/images/douro.jpg',
    fallback: '/images/santiago_compostela.jpg',
    tag: 'TOURS PRIVADOS',
    title: 'TOURS NORTE & VALE DO DOURO',
    subtitle: 'Roteiros panorâmicos exclusivos, enoturismo e património histórico no norte de Portugal.',
    pageId: 'tours',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onNavigate }) => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#273334]">
      {/* Background Slides */}
      {HERO_SLIDES.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = s.fallback;
            }}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[7000ms] ease-out"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#273334] via-[#273334]/60 to-[#273334]/40" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-24 sm:py-32">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E4CEAD] text-xs font-bold uppercase tracking-widest mb-6">
          <Compass className="w-3.5 h-3.5 text-[#C96F4B]" />
          <span>{slide.tag}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-wider uppercase leading-none mb-4 text-white drop-shadow-md">
          {slide.title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#F7F4EE]/90 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
          {slide.subtitle}
        </p>

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
            onClick={() => onNavigate('experiencias')}
            className="w-full sm:w-auto px-8 py-4 bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm border border-white/30 font-bold text-xs uppercase tracking-wider rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t('Explorar Experiências', 'Explore Experiences', 'Erlebnisse entdecken')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
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
        onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white items-center justify-center backdrop-blur-xs transition cursor-pointer border border-white/20"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white items-center justify-center backdrop-blur-xs transition cursor-pointer border border-white/20"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};
