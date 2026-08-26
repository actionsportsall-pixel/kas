import React from 'react';
import { SURF_SERVICES } from '../data/mockData';
import { CheckCircle2, MessageCircle, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const surfActionImg = '/images/surf_action_spray_1787585994752.jpg';

interface SurfSectionProps {
  onOpenBookingModal: (activityKey?: string) => void;
  onOpenInquiry: (serviceTitle: string) => void;
}

export const SurfSection: React.FC<SurfSectionProps> = ({
  onOpenBookingModal,
  onOpenInquiry,
}) => {
  const { lang, t } = useLanguage();

  return (
    <section id="surf" className="py-24 relative overflow-hidden border-b border-[#2B2F33]/10">
      {/* Background Surf Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={surfActionImg}
          alt="Surf Action Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Semi-transparent soft tone overlay to ensure excellent readability of the 6 cards */}
        <div className="absolute inset-0 bg-[#273334]/55 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 6 Surf Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SURF_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#F3E7DB]/95 backdrop-blur-md p-6 rounded-sm border border-[#2B2F33]/20 flex flex-col justify-between shadow-xl hover:bg-[#F3E7DB] hover:border-[#E07A5F]/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <h3 className="font-display text-3xl text-[#2B2F33] uppercase tracking-wider">
                  {service.title}
                </h3>

                <p className="text-[#2B2F33]/80 text-xs leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights Bullet List */}
                {service.highlights && service.highlights.length > 0 && (
                  <div className="pt-3 border-t border-[#2B2F33]/10 space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#2B2F33]/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E07A5F] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-5 grid grid-cols-2 gap-2.5 mt-4 border-t border-[#2B2F33]/10">
                <button
                  onClick={() => onOpenInquiry(service.title)}
                  className="w-full py-2 px-2.5 rounded-sm bg-[#2B2F33] text-white hover:bg-[#202326] font-bold text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#A7CFC6]" />
                  <span>{t('Info', 'Info')}</span>
                </button>

                <button
                  onClick={() => onOpenBookingModal(service.activityKey)}
                  className="w-full py-2 px-2.5 rounded-sm bg-[#E07A5F] hover:bg-[#D0684D] text-white font-bold text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{t('Reservar', 'Book')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


