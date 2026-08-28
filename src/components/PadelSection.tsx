import React from 'react';
import { PADEL_SERVICES } from '../data/mockData';
import { Trophy, CheckCircle2, MessageSquare, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const padelActionImg = '/images/padel-1.JPG';

interface PadelSectionProps {
  onOpenBookingModal: (activityKey?: string) => void;
  onOpenBudgetModal: (serviceName: string) => void;
}

export const PadelSection: React.FC<PadelSectionProps> = ({
  onOpenBookingModal,
  onOpenBudgetModal,
}) => {
  const { t } = useLanguage();

  return (
    <section id="padel" className="py-24 relative overflow-hidden border-b border-[#2B2F33]/10">
      {/* Real Padel Court Background across the entire section behind the 2 cards */}
      <div className="absolute inset-0 z-0">
        <img
          src={padelActionImg}
          alt="Padel Court Background"
          className="w-full h-full object-cover object-center filter saturate-110 contrast-105"
        />
        {/* Soft elegant overlay to make the text cards pop with high contrast */}
        <div className="absolute inset-0 bg-[#273334]/60 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Padel Services 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {PADEL_SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden bg-[#F3E7DB]/95 backdrop-blur-md p-6 sm:p-8 rounded-sm border border-[#2B2F33]/25 flex flex-col justify-between shadow-2xl hover:border-[#E07A5F]/50 hover:bg-[#F3E7DB] hover:shadow-2xl transition-all group duration-300"
            >
              <div className="space-y-4 relative z-10">
                <h3 className="font-display text-2xl lg:text-3xl text-[#2B2F33] uppercase tracking-wider min-h-[56px] flex items-center">
                  {service.title}
                </h3>

                <p className="text-[#2B2F33]/85 text-xs leading-relaxed min-h-[64px]">
                  {service.description}
                </p>

                {service.highlights && (
                  <div className="pt-3 border-t border-[#2B2F33]/10 space-y-2">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#2B2F33]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#73999C] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-5 mt-4 border-t border-[#2B2F33]/10 relative z-10">
                <button
                  onClick={() => onOpenBookingModal(service.activityKey)}
                  className="w-full py-2.5 rounded-sm bg-[#A7CFC6] hover:bg-[#8DBEB4] text-[#2B2F33] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t('Reservar esta experiência', 'Book this experience')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Quick Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-[#F3E7DB]/95 backdrop-blur-xs border border-[#2B2F33]/15 rounded-sm shadow-xs max-w-4xl mx-auto">
          <button
            onClick={() => onOpenBudgetModal('Pedir orçamento geral de Padel')}
            className="px-5 py-2.5 rounded-sm bg-[#2B2F33] text-white hover:bg-[#202326] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-[#A7CFC6]" />
            <span>{t('Pedir orçamento', 'Request Quote', 'Angebot anfordern')}</span>
          </button>

          <button
            onClick={() => onOpenBookingModal('torneio_padel')}
            className="px-5 py-2.5 rounded-sm bg-[#E07A5F] hover:bg-[#C96147] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
          >
            <Trophy className="w-4 h-4" />
            <span>{t('Organizar torneio', 'Organize Tournament', 'Turnier organisieren')}</span>
          </button>

          <button
            onClick={() => onOpenBookingModal('aula_padel')}
            className="px-5 py-2.5 rounded-sm bg-[#A7CFC6] hover:bg-[#8DBEB4] text-[#2B2F33] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
          >
            <Calendar className="w-4 h-4" />
            <span>{t('Marcar aula', 'Book Lesson', 'Stunde buchen')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};


