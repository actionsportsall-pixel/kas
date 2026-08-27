import React from 'react';
import { FUTURE_SERVICES } from '../data/mockData';
import { Sparkles, Bike, MapPin, Zap, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ComingSoonSection: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bike':
        return Bike;
      case 'MapPin':
        return MapPin;
      case 'Zap':
        return Zap;
      default:
        return Compass;
    }
  };

  return (
    <section className="py-24 bg-[#F8F6F0] relative overflow-hidden border-b border-[#2B2F33]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3E7DB] border border-[#2B2F33]/15 text-[#6B4F3A] text-[11px] font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span>{t('NOVAS AVENTURAS EM BREVE', 'NEW ADVENTURES COMING SOON', 'NEUE ABENTEUER DEMNÄCHST')}</span>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl text-[#2B2F33] tracking-wide uppercase">
            COMING <span className="text-[#2B2F33]">SOON</span>
          </h2>

          <p className="text-[#2B2F33]/80 text-base sm:text-lg leading-relaxed font-normal">
            {t(
              'Expandimos constantemente os horizontes da Action Sports. Fica atento às próximas novidades sobre duas rodas!',
              'We are constantly expanding Action Sports horizons. Stay tuned for upcoming two-wheel adventures!',
              'Wir erweitern ständig die Horizonte von Action Sports. Bleiben Sie dran für kommende Abenteuer auf zwei Rädern!'
            )}
          </p>
        </div>

        {/* Future Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FUTURE_SERVICES.map((srv) => {
            const Icon = getIcon(srv.iconName);
            return (
              <div
                key={srv.id}
                className="bg-[#F3E7DB] p-6 rounded-sm border border-[#2B2F33]/15 flex flex-col justify-between shadow-sm hover:border-[#2B2F33]/30 transition-all"
              >
                <div>
                  {(srv.badge || srv.iconName) && (
                    <div className="flex items-center justify-between border-b border-[#2B2F33]/10 pb-3 mb-4">
                      {srv.badge ? (
                        <span className="text-[10px] font-bold text-[#E07A5F] uppercase tracking-wider bg-[#F8F6F0] px-2 py-0.5 rounded-sm border border-[#2B2F33]/10">
                          {srv.badge}
                        </span>
                      ) : (
                        <span />
                      )}
                      {srv.iconName && (
                        <div className="w-8 h-8 rounded-sm bg-[#A7CFC6] text-[#2B2F33] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  )}

                  <h3 className="font-display text-2xl text-[#2B2F33] uppercase tracking-wider mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-[#2B2F33]/70 text-xs leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

