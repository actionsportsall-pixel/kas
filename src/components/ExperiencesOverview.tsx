import React from 'react';
import { ArrowRight, Waves, Trophy, Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface OverviewProps {
  onOpenBookingModal: (activityKey?: string) => void;
  onNavigate?: (page: string) => void;
}

export const ExperiencesOverview: React.FC<OverviewProps> = ({ onOpenBookingModal, onNavigate }) => {
  const { t } = useLanguage();

  const collections = [
    {
      id: 'ocean',
      pageId: 'surf',
      title: 'Ocean Experience',
      subtitle: 'Surf, SUP, Guiding & Sunset Sessions',
      description: t(
        'Aulas privadas e pequenos grupos, Surf Guiding pelos melhores picos da costa, Stand Up Paddle em águas serenas e Sunset Sessions inesquecíveis.',
        'Private and small group lessons, Surf Guiding across top coast breaks, Stand Up Paddle on serene waters, and unforgettable Sunset Sessions.',
        'Privat- und Kleingruppenunterricht, Surf Guiding zu den besten Spots der Küste, Stand Up Paddle auf ruhigem Gewässer und unvergessliche Sunset Sessions.'
      ),
      icon: Waves,
      tag: t('Oceano & Natureza', 'Ocean & Nature', 'Ozean & Natur'),
      items: ['Surf Experiences', 'Surf Guiding', 'Stand Up Paddle', 'Sunset Sessions', 'Surf Boot Camp'],
      themeBg: 'bg-[#A8C7C2]/25 border-[#A8C7C2]/45',
      themeText: 'text-[#273334]',
      accentColor: 'text-[#73999C]',
      badgeBg: 'bg-[#A8C7C2] text-[#273334]',
      dotColor: 'bg-[#73999C]',
    },
    {
      id: 'land',
      pageId: 'padel',
      title: 'Padel Experience',
      subtitle: t('Aulas & Torneios Express', 'Lessons & Express Tournaments', 'Kurse & Express-Turniere'),
      description: t(
        'Aulas de padel e torneios express de 2 horas.',
        'Padel lessons and 2-hour express tournaments.',
        'Padel-Kurse und 2-Stunden-Express-Turniere.'
      ),
      icon: Trophy,
      tag: '',
      items: ['Padel Experiences', t('Torneios Express (2h)', 'Express Tournaments (2h)', 'Express-Turniere (2h)'), t('Aulas Privadas & Grupos', 'Private & Group Lessons', 'Privat- & Gruppenkurse')],
      themeBg: 'bg-[#E4CEAD]/35 border-[#E4CEAD]/60',
      themeText: 'text-[#273334]',
      accentColor: 'text-[#73999C]',
      badgeBg: 'bg-[#E4CEAD] text-[#273334]',
      dotColor: 'bg-[#C96F4B]',
    },
    {
      id: 'signature',
      pageId: 'teambuilding',
      title: 'Signature Experience',
      subtitle: 'Private, Executive Retreats & Bespoke',
      description: t(
        'Programas 100% personalizados para clientes exigentes, famílias, quadros executivos e retiros de empresa. Hospitalidade, rigor e exclusividade total.',
        '100% tailor-made programs for discerning clients, families, executive boards, and corporate retreats. Hospitality, rigor, and complete exclusivity.',
        '100 % maßgeschneiderte Programme für anspruchsvolle Kunden, Familien, Führungskräfte und Firmen-Retreats. Gastfreundschaft, Präzision und absolute Exklusivität.'
      ),
      icon: Sparkles,
      tag: t('Atendimento VIP & Empresas', 'VIP & Corporate Services', 'VIP & Firmenbetreuung'),
      items: ['Private Experiences', 'Family Experiences', 'Executive Retreats', 'Team Building Corporate', 'Bespoke Outdoor'],
      themeBg: 'bg-[#73999C] text-white border-[#73999C]',
      themeText: 'text-white',
      accentColor: 'text-[#A8C7C2]',
      badgeBg: 'bg-[#F7F4EE] text-[#73999C]',
      dotColor: 'bg-[#A8C7C2]',
    },
  ];

  const handleNavigatePage = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <section id="experiencias" className="py-24 bg-[#F7F4EE] text-[#273334] border-b border-[#73999C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E4CEAD]/40 border border-[#73999C]/20 text-[#73999C] text-[11px] font-bold uppercase tracking-[0.2em] rounded-full">
            <span>{t('EXPERIÊNCIAS EXCLUSIVAS KAS', 'EXCLUSIVE KAS EXPERIENCES', 'EXKLUSIVE KAS-ERLEBNISSE')}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-[#273334] tracking-wide uppercase">
            {t('AS NOSSAS', 'OUR', 'UNSERE')} <span className="text-[#C96F4B]">{t('EXPERIÊNCIAS', 'EXPERIENCES', 'ERLEBNISSE')}</span>
          </h2>
          <p className="text-[#273334]/80 text-base sm:text-lg">
            "{t('Não seguimos programas pré-definidos. Criamos experiências à medida.', 'We do not follow pre-set programs. We create tailor-made experiences.', 'Wir folgen keinen vorgefertigten Programmen. Wir kreieren maßgeschneiderte Erlebnisse.')}"
          </p>
        </div>

        {/* 3 Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((col) => {
            const Icon = col.icon;
            const isSignature = col.id === 'signature';

            return (
              <div
                key={col.id}
                className={`group relative p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 border shadow-xs hover:shadow-md ${col.themeBg}`}
              >
                <div>
                  <h3 className="font-display text-3xl uppercase tracking-wider mb-2">
                    {col.title}
                  </h3>

                  <p className={`text-xs font-semibold mb-4 uppercase tracking-wider ${isSignature ? 'text-[#A8C7C2]' : 'text-[#73999C]'}`}>
                    {col.subtitle}
                  </p>

                  <p className={`text-xs leading-relaxed mb-6 ${isSignature ? 'text-white/90' : 'text-[#273334]/80'}`}>
                    {col.description}
                  </p>

                  {/* Bullet items inside collection */}
                  <div className="space-y-2 mb-8">
                    {col.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium">
                        <span className={`w-1.5 h-1.5 rounded-full ${col.dotColor}`} />
                        <span className={isSignature ? 'text-white' : 'text-[#273334]'}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className={`pt-5 border-t flex items-center justify-between ${isSignature ? 'border-white/15' : 'border-[#73999C]/20'}`}>
                  <button
                    onClick={() => handleNavigatePage(col.pageId)}
                    className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                      isSignature ? 'text-[#A8C7C2] hover:text-white' : 'text-[#273334] hover:text-[#C96F4B]'
                    }`}
                  >
                    <span>{t('Ver Experiência', 'View Experience', 'Erlebnis ansehen')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenBookingModal(col.id)}
                    className="btn-terracotta text-[11px] py-2 px-4 shadow-xs"
                  >
                    {t('Personalizar', 'Customize', 'Anpassen')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


