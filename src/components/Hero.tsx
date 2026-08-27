import React from 'react';
import { HERO_IMAGE } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenBookingModal?: (activityKey?: string) => void;
  onNavigate?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-[92vh] w-full flex items-end justify-center overflow-hidden bg-[#F7F4EE] pt-28 pb-0">
      {/* Background Image Container with Vivid Natural Coastal Colors */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="KAS Luxury Outdoor Experiences"
          className="w-full h-full object-cover object-center opacity-100 saturate-125 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Very light localized gradient to keep text readable without washing out image colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EE]/45 via-[#F7F4EE]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4EE]/45 via-transparent to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 w-full">
        {/* Text Content */}
        <div className="max-w-4xl space-y-1 text-left">
          {/* Main Display Heading */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#273334] leading-[0.88] tracking-wide uppercase drop-shadow-xs">
            {t('CRAFTED AROUND YOU', 'CRAFTED AROUND YOU', 'RUND UM SIE GESTALTET')}<br />
            <span className="text-[#C96F4B]">{t('INSPIRED BY NATURE', 'INSPIRED BY NATURE', 'INSPIRIERT VON DER NATUR')}</span>
          </h1>
        </div>
      </div>

      {/* Sleek Coastal Non-White Wave Separator (Clean, Pure Organic Shapes without Typography) */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-20 pointer-events-none">
        {/* Layered Organic Wave SVGs */}
        <div className="relative w-full overflow-hidden leading-none">
          {/* Back Wave - Soft Sage / Aqua */}
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="relative block w-full h-5 sm:h-8 text-[#A8C7C2]/60 fill-current">
            <path d="M0,25 C280,55 520,5 780,30 C1040,55 1280,10 1440,28 L1440,60 L0,60 Z"></path>
          </svg>
          {/* Front Wave - Ocean Teal Accent */}
          <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="relative block w-full h-4 sm:h-7 text-[#73999C] fill-current -mt-3 sm:-mt-5">
            <path d="M0,15 C340,45 700,5 1060,25 C1240,38 1360,12 1440,20 L1440,50 L0,50 Z"></path>
          </svg>
          {/* Fine Terracotta Accent Line at the very bottom edge */}
          <div className="w-full h-[2px] bg-[#C96F4B]/60" />
        </div>
      </div>
    </section>
  );
};



