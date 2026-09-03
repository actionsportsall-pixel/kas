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
          <h2 className="font-display text-5xl sm:text-6xl text-[#2B2F33] tracking-wide uppercase">
            COMING <span className="text-[#2B2F33]">SOON</span>
          </h2>

          <p className="text-[#2B2F33]/80 text-base sm:text-lg leading-relaxed font-normal">
            {t(
              'Expandimos constantemente os horizontes da Action Sports. Fica atento às próximas novidades outdoor, tours e expedições!',
              'We are constantly expanding Action Sports horizons. Stay tuned for upcoming outdoor adventures, tours and expeditions!',
              'Wir erweitern ständig die Horizonte von Action Sports. Bleiben Sie dran für kommende Outdoor-Abenteuer, Touren und Expeditionen!'
            )}
          </p>
        </div>

        {/* Future Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {FUTURE_SERVICES.map((srv) => {
            const Icon = getIcon(srv.iconName);
            return (
              <div
                key={srv.id}
                className="bg-[#E4CEAD]/25 p-6 rounded-2xl border border-[#73999C]/25 flex flex-col justify-between shadow-sm hover:border-[#73999C]/50 transition-all"
              >
                <div>
                  {(srv.badge || srv.iconName) && (
                    <div className="flex items-center justify-between border-b border-[#73999C]/15 pb-3 mb-4">
                      {srv.badge ? (
                        <span className="text-[10px] font-bold text-[#C96F4B] uppercase tracking-wider bg-[#F7F4EE] px-2.5 py-1 rounded-xl border border-[#73999C]/20">
                          {srv.badge}
                        </span>
                      ) : (
                        <span />
                      )}
                      {srv.iconName && (
                        <div className="w-8 h-8 rounded-xl bg-[#A8C7C2] text-[#273334] flex items-center justify-center shadow-xs">
                          <Icon className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  )}

                  <h3 className="font-display text-2xl text-[#273334] uppercase tracking-wider mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-[#273334]/70 text-xs leading-relaxed">
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

