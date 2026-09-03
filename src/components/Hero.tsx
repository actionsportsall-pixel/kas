import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Waves,
  Trophy,
  Mountain,
  Compass,
  Sparkles,
  Users,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenBookingModal?: (activityKey?: string) => void;
  onNavigate?: (page: string) => void;
}

interface SlideItem {
  id: string;
  image: string;
  pageId: string;
  activityKey: string;
  serviceName: { pt: string; en: string; de: string };
  badgeText: { pt: string; en: string; de: string };
  icon: React.ElementType;
  accentColor: string;
}

const HERO_SLIDES: SlideItem[] = [
  {
    id: 'surf',
    image: '/images/hero_slide_surf.jpg',
    pageId: 'surf',
    activityKey: 'aula_privada_surf',
    serviceName: {
      pt: 'Surf Experiences',
      en: 'Surf Experiences',
      de: 'Surf-Erlebnisse',
    },
    badgeText: {
      pt: 'Surf Experiences • Aulas & Surf Guide',
      en: 'Surf Experiences • Lessons & Surf Guide',
      de: 'Surf-Erlebnisse • Kurse & Surf-Guide',
    },
    icon: Waves,
    accentColor: '#C96F4B',
  },
  {
    id: 'padel',
    image: '/images/hero_slide_padel.jpg',
    pageId: 'padel',
    activityKey: 'aula_padel',
    serviceName: {
      pt: 'Padel Sessions',
      en: 'Padel Sessions',
      de: 'Padel-Sessions',
    },
    badgeText: {
      pt: 'Padel Sessions • Aulas & Torneios Outdoor',
      en: 'Padel Sessions • Outdoor Lessons & Tournaments',
      de: 'Padel-Sessions • Outdoor-Training & Turniere',
    },
    icon: Trophy,
    accentColor: '#73999C',
  },
  {
    id: 'canyoning',
    image: '/images/hero_slide_canyoning.jpg',
    pageId: 'canyoning',
    activityKey: 'canyoning',
    serviceName: {
      pt: 'Canyoning Tours',
      en: 'Canyoning Tours',
      de: 'Canyoning-Touren',
    },
    badgeText: {
      pt: 'Canyoning Tours • Peneda-Gerês & Cascatas',
      en: 'Canyoning Tours • Peneda-Gerês & Waterfalls',
      de: 'Canyoning-Touren • Peneda-Gerês & Wasserfälle',
    },
    icon: Mountain,
    accentColor: '#A8C7C2',
  },
  {
    id: 'tours',
    image: '/images/hero_slide_douro.jpg',
    pageId: 'tours',
    activityKey: 'tours_norte',
    serviceName: {
      pt: 'Tours Norte',
      en: 'North Tours',
      de: 'Nord-Touren',
    },
    badgeText: {
      pt: 'Tours Norte • Douro Vinhateiro & Guimarães',
      en: 'North Tours • Douro Valley & Guimarães',
      de: 'Nord-Touren • Douro-Tal & Guimarães',
    },
    icon: Compass,
    accentColor: '#C96F4B',
  },
  {
    id: 'bootcamp',
    image: '/images/hero_slide_bootcamp.jpg',
    pageId: 'bootcamp',
    activityKey: 'boot_camp',
    serviceName: {
      pt: 'Surf Boot Camps',
      en: 'Surf Boot Camps',
      de: 'Surf Boot Camps',
    },
    badgeText: {
      pt: 'Surf Boot Camps • Imersão & Performance',
      en: 'Surf Boot Camps • Immersion & Performance',
      de: 'Surf Boot Camps • Immersion & Performance',
    },
    icon: Sparkles,
    accentColor: '#73999C',
  },
  {
    id: 'teambuilding',
    image: '/images/hero_slide_teambuilding.jpg',
    pageId: 'teambuilding',
    activityKey: 'team_building',
    serviceName: {
      pt: 'Team Building',
      en: 'Team Building',
      de: 'Teambuilding',
    },
    badgeText: {
      pt: 'Team Building • Retiros de Empresa & Sunsets',
      en: 'Team Building • Corporate Retreats & Sunsets',
      de: 'Teambuilding • Firmen-Retreats & Sunsets',
    },
    icon: Users,
    accentColor: '#E4CEAD',
  },
];

const AUTOPLAY_INTERVAL_MS = 6000;

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onNavigate }) => {
  const { t, lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play interval handling
  useEffect(() => {
    if (isPlaying && !isHovered) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, AUTOPLAY_INTERVAL_MS);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, nextSlide]);

  const currentSlide = HERO_SLIDES[currentIndex];
  const CurrentIcon = currentSlide.icon;

  const getLocalized = (obj: { pt: string; en: string; de: string }) => {
    if (lang === 'en') return obj.en;
    if (lang === 'de') return obj.de;
    return obj.pt;
  };

  const handleExploreClick = () => {
    if (onNavigate) {
      onNavigate(currentSlide.pageId);
    } else {
      const el = document.getElementById(currentSlide.pageId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] w-full flex items-end justify-center overflow-hidden bg-[#273334] pt-28 pb-0 select-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="KAS Outdoor Services Slideshow"
    >
      {/* Background Slides Stack with Cross-fade & Subtle Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={getLocalized(slide.serviceName)}
                className={`w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-105 saturate-110 contrast-105' : 'scale-100'
                }`}
                referrerPolicy="no-referrer"
              />
            </div>
          );
        })}

        {/* Ambient Gradients for optimal text legibility while preserving vibrant photo details */}
        <div className="absolute inset-0 z-15 bg-gradient-to-r from-[#273334]/80 via-[#273334]/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#273334]/75 via-transparent to-[#273334]/30 pointer-events-none" />
      </div>

      {/* Slide Navigation Chevrons (Desktop & Tablet) */}
      <button
        type="button"
        id="hero-prev-slide-btn"
        onClick={prevSlide}
        aria-label={t('Slide anterior', 'Previous slide', 'Vorherige Folie')}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-[#273334]/55 hover:bg-[#273334]/90 text-white/90 hover:text-white backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        id="hero-next-slide-btn"
        onClick={nextSlide}
        aria-label={t('Próximo slide', 'Next slide', 'Nächste Folie')}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-[#273334]/55 hover:bg-[#273334]/90 text-white/90 hover:text-white backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 sm:pb-4 w-full">
        <div className="max-w-4xl text-left animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Main Display Heading (CRAFTED AROUND YOU / INSPIRED BY NATURE) */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white leading-[0.88] tracking-wide uppercase drop-shadow-md mb-6 sm:mb-10 lg:mb-14">
            {t('CRAFTED AROUND YOU', 'CRAFTED AROUND YOU', 'RUND UM SIE GESTALTET')}<br />
            <span className="text-[#C96F4B] drop-shadow-xs">
              {t('INSPIRED BY NATURE', 'INSPIRED BY NATURE', 'INSPIRIERT VON DER NATUR')}
            </span>
          </h1>

          {/* Slide Indicators & Numbering */}
          <div className="flex items-center gap-1.5 mb-1">
            <div className="flex items-center gap-1">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={`dot-${slide.id}`}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-0.5 sm:h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-4 bg-[#C96F4B]'
                      : 'w-1 bg-white/40 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
            <span className="text-white/75 text-[8.5px] sm:text-[9.5px] font-mono font-medium tracking-wider">
              0{currentIndex + 1} / 0{totalSlides}
            </span>
          </div>

          {/* Active Service Badge & Controls placed under the slide numbering */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2 sm:mb-3">
            <button
              type="button"
              onClick={handleExploreClick}
              className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 text-[8px] sm:text-[9px] font-medium uppercase tracking-wider transition-all duration-300 shadow-xs hover:scale-[1.01] cursor-pointer"
            >
              <CurrentIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C96F4B]" />
              <span className="font-semibold text-white/95 drop-shadow-xs">
                {getLocalized(currentSlide.badgeText)}
              </span>
              <ArrowRight className="w-2.5 h-2.5 text-white/70" />
            </button>

            {/* Play/Pause control badge */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? t('Pausar slide', 'Pause slideshow', 'Diashow pausieren') : t('Retomar slide', 'Play slideshow', 'Diashow abspielen')}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              className="p-0.5 sm:p-1 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Sleek Coastal Non-White Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-25 pointer-events-none">
        <div className="relative w-full overflow-hidden leading-none">
          {/* Back Wave - Soft Sage / Aqua */}
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="relative block w-full h-5 sm:h-8 text-[#A8C7C2]/60 fill-current"
          >
            <path d="M0,25 C280,55 520,5 780,30 C1040,55 1280,10 1440,28 L1440,60 L0,60 Z"></path>
          </svg>
          {/* Front Wave - Ocean Teal Accent */}
          <svg
            viewBox="0 0 1440 50"
            preserveAspectRatio="none"
            className="relative block w-full h-4 sm:h-7 text-[#73999C] fill-current -mt-3 sm:-mt-5"
          >
            <path d="M0,15 C340,45 700,5 1060,25 C1240,38 1360,12 1440,20 L1440,50 L0,50 Z"></path>
          </svg>
          {/* Fine Terracotta Accent Line at the very bottom edge */}
          <div className="w-full h-[2px] bg-[#C96F4B]/60" />
        </div>
      </div>
    </section>
  );
};




