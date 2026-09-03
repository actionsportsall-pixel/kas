import React from 'react';
import { ArrowRight, Waves, Trophy, Compass, Sparkles, Mountain } from 'lucide-react';
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
      title: 'SURF',
      subtitle: t('Surf, SUP, Guia de Surf & Sessões ao Pôr do Sol', 'Surf, SUP, Guiding & Sunset Sessions', 'Surf, SUP, Guiding & Sunset Sessions'),
      description: t(
        'Aulas privadas e pequenos grupos, Guia de Surf pelos melhores locais secretos, Stand Up Paddle em águas serenas e Sessões ao Pôr do Sol inesquecíveis.',
        'Private and small group lessons, Surf Guiding across top coast breaks, Stand Up Paddle on serene waters, and unforgettable Sunset Sessions.',
        'Privat- und Kleingruppenunterricht, Surf Guiding zu den besten Spots der Küste, Stand Up Paddle auf ruhigem Gewässer und unvergessliche Sunset Sessions.'
      ),
      icon: Waves,
      tag: t('Oceano & Natureza', 'Ocean & Nature', 'Ozean & Natur'),
      items: [
        t('Experiências de Surf', 'Surf Experiences', 'Surf-Erlebnisse'),
        t('Guia de Surf', 'Surf Guiding', 'Surf-Guiding'),
        t('Locais Secretos', 'Secret Spots', 'Geheime Orte'),
        t('Sessões ao Pôr do Sol', 'Sunset Sessions', 'Sunset Sessions'),
        t('Semanas Intensas de Surf', 'Intense Surf Weeks', 'Intensive Surf-Wochen'),
      ],
      themeBg: 'bg-[#A8C7C2]/25 border-[#A8C7C2]/45',
      themeText: 'text-[#273334]',
      accentColor: 'text-[#73999C]',
      badgeBg: 'bg-[#A8C7C2] text-[#273334]',
      dotColor: 'bg-[#73999C]',
    },
    {
      id: 'land',
      pageId: 'padel',
      title: 'PADEL',
      subtitle: t('Aulas & Torneios', 'Lessons & Tournaments', 'Kurse & Turniere'),
      description: t(
        'Aulas privadas e em grupo com foco na técnica e tática de jogo, além de torneios express dinâmicos de 2 horas desenhados à medida.',
        'Private and group lessons focused on technique and game tactics, plus 2-hour dynamic express tournaments tailored to you.',
        'Privat- und Gruppenunterricht mit Fokus auf Technik und Spieltaktik sowie maßgeschneiderte 2-Stunden-Expressturniere.'
      ),
      icon: Trophy,
      tag: t('Padel & Torneios', 'Padel & Tournaments', 'Padel & Turniere'),
      items: [
        t('Experiências de Padel', 'Padel Experiences', 'Padel-Erlebnisse'),
        t('Aulas Privadas', 'Private Lessons', 'Privatunterricht'),
        t('Aulas de Grupo', 'Group Lessons', 'Gruppenunterricht'),
        t('Torneios Feitos à Medida', 'Custom Tournaments', 'Maßgeschneiderte Turniere'),
      ],
      themeBg: 'bg-[#E4CEAD]/35 border-[#E4CEAD]/60',
      themeText: 'text-[#273334]',
      accentColor: 'text-[#73999C]',
      badgeBg: 'bg-[#E4CEAD] text-[#273334]',
      dotColor: 'bg-[#C96F4B]',
    },
    {
      id: 'canyoning',
      pageId: 'canyoning',
      title: 'CANYONING TOURS',
      subtitle: t('Peneda-Gerês & Cascatas', 'Peneda-Gerês & Waterfalls', 'Peneda-Gerês & Wasserfälle'),
      description: t(
        'O Canyoning é uma experiência de natureza e de aventura que te permite descobrir as maravilhosas paisagens e cascatas perdidas em pleno Parque Nacional da Peneda-Gerês.',
        'Canyoning is a nature and adventure experience that allows you to discover the stunning landscapes and hidden waterfalls in the heart of Peneda-Gerês National Park.',
        'Canyoning ist ein Natur- und Abenteuererlebnis, mit dem Sie die wunderbaren Landschaften und verborgenen Wasserfälle mitten im Nationalpark Peneda-Gerês entdecken können.'
      ),
      icon: Mountain,
      tag: t('Gerês & Aventura', 'Gerês & Adventure', 'Gerês & Abenteuer'),
      items: [
        t('Nível Físico: Baixo / Médio', 'Physical: Low / Medium', 'Fitness: Leicht / Mittel'),
        t('Dificuldade Técnica: Fácil', 'Technical: Easy', 'Schwierigkeit: Einfach'),
        t('Equipamento Topo de Gama', 'Top-tier Equipment', 'Erstklassige Ausrüstung'),
        t('Guias Certificados pela ICA', 'ICA Certified Guides', 'ICA-zertifizierte Guides'),
        t('Fotos & Vídeos Grátis', 'Free Photos & Videos', 'Gratis Fotos & Videos'),
      ],
      themeBg: 'bg-[#73999C]/15 border-[#73999C]/35',
      themeText: 'text-[#273334]',
      accentColor: 'text-[#C96F4B]',
      badgeBg: 'bg-[#73999C] text-white',
      dotColor: 'bg-[#C96F4B]',
    },
    {
      id: 'tours',
      pageId: 'tours',
      title: 'TOURS NORTE',
      subtitle: t('Litoral & Interior', 'Coast & Inland', 'Küste & Inland'),
      description: t(
        'Tours e expedições pelo norte litoral e interior. Do Vale do Douro ao Berço de Guimarães, a monumentalidade de Braga, Ponte de Lima e Viana do Castelo.',
        'Expeditions and tours across northern coast and inland. From the Douro Valley to Guimarães, historic Braga, Ponte de Lima, and Viana do Castelo.',
        'Touren und Expeditionen an der Nordküste und im Landesinneren: Douro-Tal, Burg Guimarães, Braga, Ponte de Lima und Viana do Castelo.'
      ),
      icon: Compass,
      tag: t('Cultura & Natureza', 'Culture & Nature', 'Kultur & Natur'),
      items: [
        t('Cruzeiros & Quintas no Douro', 'Douro Cruises & Wine Estates', 'Douro-Kreuzfahrten & Weingüter'),
        t('Castelo de Guimarães Medieval', 'Medieval Guimarães Castle', 'Mittelalterliche Burg Guimarães'),
        t('Braga Histórica & Santuários', 'Historic Braga & Sanctuaries', 'Historisches Braga & Heiligtümer'),
        t('Ponte de Lima & Viana do Castelo', 'Ponte de Lima & Viana do Castelo', 'Ponte de Lima & Viana do Castelo'),
        t('Roteiros Personalizados com Guia', 'Tailored Guided Itineraries', 'Geführte individuelle Routen'),
      ],
      themeBg: 'bg-[#A8C7C2]/20 border-[#73999C]/35',
      themeText: 'text-[#273334]',
      accentColor: 'text-[#C96F4B]',
      badgeBg: 'bg-[#A8C7C2] text-[#273334]',
      dotColor: 'bg-[#C96F4B]',
    },
    {
      id: 'signature',
      pageId: 'teambuilding',
      title: 'TEAM BUILDING',
      subtitle: t('Retiros Privados, Executivos e Personalizadas', 'Private, Executive Retreats & Bespoke', 'Private, Executive Retreats & Bespoke'),
      description: t(
        'Programas 100% personalizados para clientes exigentes, famílias, quadros executivos e retiros de empresa. Hospitalidade, rigor e exclusividade total.',
        '100% tailor-made programs for discerning clients, families, executive boards, and corporate retreats. Hospitality, rigor, and complete exclusivity.',
        '100 % maßgeschneiderte Programme für anspruchsvolle Kunden, Familien, Führungskräfte und Firmen-Retreats. Gastfreundschaft, Präzision und absolute Exklusivität.'
      ),
      icon: Sparkles,
      tag: t('Atendimento VIP & Empresas', 'VIP & Corporate Services', 'VIP & Firmenbetreuung'),
      items: [
        t('Experiências Privadas', 'Private Experiences', 'Private Erlebnisse'),
        t('Experiências em Família', 'Family Experiences', 'Familienerlebnisse'),
        t('Retiros Executivos', 'Executive Retreats', 'Executive Retreats'),
        t('Team Building Corporativo', 'Team Building Corporate', 'Corporate Team Building'),
        t('Atividades Personalizadas', 'Bespoke Outdoor', 'Maßgeschneiderte Outdoor-Aktivitäten'),
      ],
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
    <section id="experiencias" className="pt-8 sm:pt-12 pb-10 sm:pb-12 bg-[#F7F4EE] text-[#273334]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
          <h2 className="font-display text-4xl sm:text-6xl text-[#273334] tracking-wide uppercase">
            {t('AS NOSSAS', 'OUR', 'UNSERE')} <span className="text-[#C96F4B]">{t('EXPERIÊNCIAS', 'EXPERIENCES', 'ERLEBNISSE')}</span>
          </h2>
          <p className="text-[#273334]/80 text-base sm:text-lg">
            {t('Não seguimos programas pré-definidos. Criamos experiências à medida.', 'We do not follow pre-set programs. We create tailor-made experiences.', 'Wir folgen keinen vorgefertigten Programmen. Wir kreieren maßgeschneiderte Erlebnisse.')}
          </p>
        </div>

        {/* 5 Collections Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => {
            const Icon = col.icon;
            const isSignature = col.id === 'signature';

            return (
              <div
                key={col.id}
                className={`group relative p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 border shadow-xs hover:shadow-md ${col.themeBg}`}
              >
                <div>
                  {col.title && (
                    <h3 className="font-display text-3xl uppercase tracking-wider mb-2">
                      {col.title}
                    </h3>
                  )}

                  <p className="text-xs font-semibold mb-4 uppercase tracking-wider text-[#273334]">
                    {col.subtitle}
                  </p>

                  {col.description && (
                    <p className={`text-xs leading-relaxed mb-6 ${isSignature ? 'text-white/90' : 'text-[#273334]/80'}`}>
                      {col.description}
                    </p>
                  )}

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
                    className={`w-full py-2.5 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs ${
                      isSignature
                        ? 'bg-white text-[#273334] hover:bg-[#F7F4EE] hover:text-[#C96F4B]'
                        : 'bg-[#73999C] hover:bg-[#5D8184] text-white'
                    }`}
                  >
                    <span>{t('Ver Experiência', 'View Experience', 'Erlebnis ansehen')}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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


