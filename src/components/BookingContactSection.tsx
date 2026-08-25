import React from 'react';
import { ActivityType } from '../types';
import { Mail, Instagram, Calendar, MapPin, MessageCircle, Compass, ShieldCheck, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FAQSection } from './FAQSection';
import { GOOGLE_BOOKING_FORM_URL } from '../data/mockData';

interface BookingContactSectionProps {
  preselectedActivity?: ActivityType;
  inquiryNote?: string;
  onOpenBookingModal?: (activityKey?: string) => void;
}

export const BookingContactSection: React.FC<BookingContactSectionProps> = ({
  preselectedActivity,
  onOpenBookingModal,
}) => {
  const { t } = useLanguage();

  return (
    <section id="contactos" className="bg-[#F7F4EE] relative overflow-hidden border-b border-[#73999C]/15">
      
      {/* FINAL CALL TO ACTION BANNER - SOFT TEAL BACKGROUND (#73999C) */}
      <div className="bg-[#73999C] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#A8C7C2]/30 border border-white/20 text-[#F7F4EE] text-[11px] font-bold uppercase tracking-[0.2em] rounded-full">
            <Compass className="w-3.5 h-3.5 text-[#F7F4EE]" />
            <span>KAS • LUXURY OUTDOOR EXPERIENCES</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-wider leading-tight">
            {t('PRONTO PARA A SUA PRÓXIMA', 'READY FOR YOUR NEXT', 'BEREIT FÜR IHR NÄCHSTES')} <br />
            <span className="text-[#E4CEAD]">{t('EXPERIÊNCIA JUNTO AO MAR?', 'EXPERIENCE BY THE OCEAN?', 'ERLEBNIS AM MEER?')}</span>
          </h2>

          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t(
              'Reserve agora a sua sessão personalizada de Surf, Padel ou um programa corporativo à medida. Entre em contacto direto connosco.',
              'Book your custom Surf, Padel session or corporate retreat now. Get in direct contact with us.',
              'Buchen Sie jetzt Ihre individuelle Surf-, Padel-Session oder Ihr Firmenevent. Treten Sie direkt mit uns in Kontakt.'
            )}
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <a
              href={GOOGLE_BOOKING_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terracotta text-xs px-8 py-4 shadow-md inline-flex items-center gap-2"
            >
              <span>{t('RESERVAR AGORA', 'BOOK NOW', 'JETZT BUCHEN')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Contact Section - Clean Centered Layout */}
      <div id="booking-form-anchor" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 space-y-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E4CEAD]/40 border border-[#73999C]/20 text-[#73999C] text-[11px] font-bold uppercase tracking-[0.2em] rounded-full">
            <Calendar className="w-3.5 h-3.5 text-[#C96F4B]" />
            <span>{t('MARCAÇÕES & INFORMAÇÕES', 'BOOKINGS & INFORMATION', 'BUCHUNGEN & INFORMATIONEN')}</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#273334] tracking-wide uppercase">
            {t('ENTRE EM', 'GET IN', 'TRETEN SIE IN')} <span className="text-[#C96F4B]">{t('CONTACTO', 'TOUCH', 'KONTAKT')}</span>
          </h2>

          <p className="text-[#273334]/80 text-base sm:text-lg leading-relaxed font-normal">
            {t(
              'Escolha a sua próxima experiência e entre em contacto connosco diretamente por email, mensagem ou agende online.',
              'Choose your next experience and reach out to us directly by email, message, or book online.',
              'Wählen Sie Ihr nächstes Erlebnis und kontaktieren Sie uns direkt per E-Mail, Nachricht oder online buchen.'
            )}
          </p>
        </div>

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

        {/* Bottom Booking CTA Card */}
        <div className="bg-[#73999C]/15 border border-[#73999C]/30 rounded-3xl p-8 text-center space-y-5">
          <h3 className="font-display text-2xl sm:text-3xl text-[#273334] uppercase tracking-wide">
            {t('Preferes fazer a reserva online?', 'Prefer to book online?', 'Möchten Sie online buchen?')}
          </h3>
          <p className="text-sm text-[#273334]/80 max-w-xl mx-auto">
            {t(
              'Utiliza o nosso assistente de reservas para escolher a modalidade, o número de participantes e indicar a data preferencial.',
              'Use our booking wizard to select the modality, number of participants, and specify your preferred date.',
              'Nutzen Sie unseren Buchungsassistenten, um Sportart, Teilnehmerzahl und Wunschtermin anzugeben.'
            )}
          </p>
          <div>
            <a
              href={GOOGLE_BOOKING_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terracotta text-xs px-8 py-4 shadow-md inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('ABRIR RESERVA ONLINE (FORMULÁRIO)', 'OPEN ONLINE BOOKING FORM', 'ONLINE-FORMULAR ÖFFNEN')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />

      </div>
    </section>
  );
};
