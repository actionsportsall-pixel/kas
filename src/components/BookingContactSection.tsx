import React from 'react';
import { ActivityType } from '../types';
import { Mail, Instagram, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FAQSection } from './FAQSection';

interface BookingContactSectionProps {
  preselectedActivity?: ActivityType;
  inquiryNote?: string;
  onOpenBookingModal?: (activityKey?: string) => void;
  showFaq?: boolean;
}

export const BookingContactSection: React.FC<BookingContactSectionProps> = ({
  preselectedActivity,
  onOpenBookingModal,
  showFaq = false,
}) => {
  const { t } = useLanguage();

  return (
    <section id="contactos" className="bg-[#F7F4EE] relative overflow-hidden border-b border-[#73999C]/15">
      {/* Main Contact Section - Clean Centered Layout */}
      <div id="booking-form-anchor" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 space-y-12">
        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Email */}
          <a
            href="mailto:actionsports.all@gmail.com"
            className="p-6 bg-[#E4CEAD]/30 rounded-2xl border border-[#E4CEAD]/60 hover:border-[#73999C]/50 hover:bg-[#E4CEAD]/40 transition-all flex flex-col justify-between group shadow-xs space-y-4"
          >
            <div className="w-12 h-12 bg-[#A8C7C2] text-[#273334] flex items-center justify-center rounded-xl shadow-xs group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] text-[#73999C] uppercase font-bold tracking-wider mb-1">
                {t('Email Oficial', 'Official Email', 'Offizielle E-Mail')}
              </p>
              <p className="text-base font-bold text-[#273334] group-hover:text-[#C96F4B] transition-colors break-all">
                actionsports.all@gmail.com
              </p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/kas.beyond"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-[#E4CEAD]/30 rounded-2xl border border-[#E4CEAD]/60 hover:border-[#73999C]/50 hover:bg-[#E4CEAD]/40 transition-all flex flex-col justify-between group shadow-xs space-y-4"
          >
            <div className="w-12 h-12 bg-[#A8C7C2] text-[#273334] flex items-center justify-center rounded-xl shadow-xs group-hover:scale-105 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] text-[#73999C] uppercase font-bold tracking-wider mb-1">
                Instagram
              </p>
              <p className="text-base font-bold text-[#273334] group-hover:text-[#C96F4B] transition-colors">
                @kas.beyond
              </p>
            </div>
          </a>

          {/* Localização & Base */}
          <div className="p-6 bg-[#E4CEAD]/30 rounded-2xl border border-[#E4CEAD]/60 flex flex-col justify-between shadow-xs space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-[#A8C7C2] text-[#273334] flex items-center justify-center rounded-xl shadow-xs">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] text-[#73999C] uppercase font-bold tracking-wider mb-1">
                {t('Localização & Base', 'Location & Base', 'Standort & Basis')}
              </p>
              <p className="text-base font-bold text-[#273334]">
                {t('Norte de Portugal', 'North of Portugal', 'Nordportugal')}
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section - Only displayed when showFaq is true */}
        {showFaq && <FAQSection />}

      </div>
    </section>
  );
};
