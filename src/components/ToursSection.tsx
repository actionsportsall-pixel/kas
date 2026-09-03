import React from 'react';
import { MapPin, Compass, CheckCircle2, Send, Calendar, Sparkles, Navigation, Mountain, Landmark } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TOURS_NORTE_IMAGE } from '../data/mockData';

interface ToursProps {
  onOpenBookingModal: (activityKey?: string) => void;
  onOpenBudgetModal?: (serviceName: string) => void;
}

export const ToursSection: React.FC<ToursProps> = ({
  onOpenBookingModal,
  onOpenBudgetModal,
}) => {
  const { t } = useLanguage();

  const destinations = [
    {
      title: t('Rio Douro & Vale Vinhateiro', 'Douro Valley & River Cruises', 'Douro-Tal & Flusskreuzfahrten'),
      location: 'Douro / Pinhão',
      badge: 'UNESCO World Heritage',
      image: '/images/douro.jpg',
      desc: t(
        'Socalcos esculpidos em xisto, quintas vinícolas seculares com provas de vinhos premium e cruzeiros panorâmicos em barco rabelo.',
        'Schist-sculpted terraced hills, centuries-old wine quintas with premium tastings, and scenic cruises on traditional rabelo boats.',
        'Schieferterrassen, jahrhundertealte Weingüter mit exklusiven Verkostungen und malerische Rabelo-Bootsfahrten.'
      ),
      highlights: [
        t('Cruzeiro de barco tradicional', 'Traditional boat cruise', 'Traditionelle Bootsfahrt'),
        t('Visita a Quinta e prova de vinhos', 'Quinta visit & wine tasting', 'Weingutbesuch & Weinverkostung'),
        t('Miradouros panorâmicos', 'Panoramic viewpoints', 'Panoramische Aussichtspunkte'),
      ],
    },
    {
      title: t('Castelo de Guimarães & Centro Histórico', 'Guimarães Castle & Historic Center', 'Burg Guimarães & Historisches Zentrum'),
      location: 'Guimarães',
      badge: t('Berço da Nação', 'Birthplace of Portugal', 'Wiege Portugals'),
      image: '/images/castelo_guimaraes.jpg',
      desc: t(
        'A fortaleza medieval do século X onde nasceu Afonso Henriques, o Paço dos Duques de Bragança e as ruelas góticas medievais.',
        'The 10th-century medieval fortress where the first King was born, the Palace of the Dukes of Braganza, and cobblestone gothic alleys.',
        'Die mittelalterliche Festung aus dem 10. Jahrhundert, der Palast der Herzöge von Bragança und historische Gassen.'
      ),
      highlights: [
        t('Muralhas e Torre de Menagem', 'Defensive walls & Keep', 'Wehrmauern & Bergfried'),
        t('Paço dos Duques de Bragança', 'Dukes of Braganza Palace', 'Palast der Herzöge von Bragança'),
        t('Praça de São Tiago & Largo da Oliveira', 'Historic squares & medieval streets', 'Historische Plätze & Gassen'),
      ],
    },
    {
      title: t('Braga & Santuários Monumentais', 'Historic Braga & Monumental Sanctuaries', 'Historisches Braga & Heiligtümer'),
      location: 'Braga',
      badge: t('Património & Fé', 'Heritage & Architecture', 'Kulturerbe & Architektur'),
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
      desc: t(
        'A cidade milenar dos arcebispos: a majestosa escadaria barroca do Bom Jesus do Monte (UNESCO), o Santuário do Sameiro e a Sé de Braga.',
        'The ancient city of archbishops: the monumental baroque staircase of Bom Jesus do Monte (UNESCO), Sameiro Sanctuary, and the oldest Cathedral.',
        'Die uralte Erzbischofsstadt: die barocke Treppe von Bom Jesus do Monte (UNESCO), das Heiligtum Sameiro und die älteste Kathedrale.'
      ),
      highlights: [
        t('Bom Jesus do Monte & Funicular Hidráulico', 'Bom Jesus do Monte & Water Funicular', 'Bom Jesus do Monte & Wasserseilbahn'),
        t('Sé Catedral de Braga (séc. XI)', 'Braga Cathedral (11th century)', 'Kathedrale von Braga (11. Jh.)'),
        t('Jardim de Santa Bárbara & Centro Histórico', 'Santa Bárbara Garden & City Walk', 'Santa-Bárbara-Garten & Altstadt'),
      ],
    },
    {
      title: t('Ponte de Lima & Viana do Castelo', 'Ponte de Lima & Viana do Castelo Coast', 'Ponte de Lima & Viana do Castelo'),
      location: 'Minho / Alto Minho',
      badge: t('Litoral & Tradição', 'Coast & Tradition', 'Küste & Tradition'),
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80',
      desc: t(
        'A vila mais antiga de Portugal com a sua emblemática ponte medieval sobre o Rio Lima, combinada com a maresia de Viana do Castelo e o Santuário de Santa Luzia.',
        'Portugal’s oldest charted town with its roman-medieval bridge over the Lima River, paired with the sea breeze and Santa Luzia Sanctuary in Viana do Castelo.',
        'Die älteste Stadt Portugals mit der römisch-mittelalterlichen Brücke über den Rio Lima, kombiniert mit der Meeresbrise und Santa Luzia in Viana do Castelo.'
      ),
      highlights: [
        t('Ponte Romana e Medieval de Ponte de Lima', 'Roman & Medieval Bridge', 'Römische & mittelalterliche Brücke'),
        t('Santuário de Santa Luzia e vista sobre a foz', 'Santa Luzia Sanctuary & river mouth view', 'Santuário de Santa Luzia & Flussmündungsblick'),
        t('Gastronomia típica minhota e Vinho Verde', 'Regional gastronomy & Vinho Verde', 'Regionale Gastronomie & Vinho Verde'),
      ],
    },
    {
      title: t('Porto Histórico & Foz do Douro', 'Historic Porto & Douro Riverfront', 'Historisches Porto & Douro-Ufer'),
      location: 'Porto',
      badge: 'Cidade Invicta',
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80',
      desc: t(
        'A emblemática Ribeira, as pontes de ferro que cruzam o Douro, a Torre dos Clérigos, as caves de Vinho do Porto e o encontro do rio com o Atlântico.',
        'The iconic Ribeira district, towering iron bridges, the Clérigos Tower, historic Port wine cellars, and the meeting of river and Atlantic ocean.',
        'Das berühmte Ribeira-Viertel, historische Eisenbrücken, Portweinkeller und die Mündung in den Atlantischen Ozean.'
      ),
      highlights: [
        t('Ribeira, Ponte D. Luís I e Cais de Gaia', 'Ribeira, Dom Luís I Bridge & Gaia Quay', 'Ribeira, Brücke Dom Luís I & Gaia-Kai'),
        t('Caves de Vinho do Porto com degustação', 'Port wine lodges with tasting', 'Portweinkeller mit Verkostung'),
        t('Foz do Douro e passeio marítimo', 'Foz seafront and ocean promenade', 'Foz-Küstenpromenade & Ozeanblick'),
      ],
    },
  ];

  const features = [
    {
      title: t('Roteiros Personalizados à Medida', '100% Tailored Itineraries', '100 % maßgeschneiderte Routen'),
      desc: t('Adaptados aos seus interesses: cultura, natureza, fotografia, gastronomia ou história.', 'Designed around your interests: culture, nature, photography, food, or heritage.', 'Gestaltet nach Ihren Interessen: Kultur, Natur, Fotografie, Kulinarik oder Geschichte.'),
    },
    {
      title: t('Transporte Confortável & Privativo', 'Private & Premium Transport', 'Privater & komfortabler Transport'),
      desc: t('Veículos modernos com ar condicionado, água fresca e condutor experiente.', 'Modern air-conditioned vehicles with complimentary amenities and expert driver.', 'Moderne, klimatisierte Fahrzeuge mit erstklassigem Komfort und erfahrenem Fahrer.'),
    },
    {
      title: t('Guias Locais Especialistas', 'Expert Local Guides', 'Erfahrene lokale Guides'),
      desc: t('Acesso a histórias, segredos e locais genuínos fora dos circuitos turísticos de massas.', 'Access to authentic stories, hidden gems, and local life away from mass tourism.', 'Einblicke in authentische Geschichten, Geheimtipps und lokale Traditionen abseits des Massentourismus.'),
    },
    {
      title: t('Experiências Gastronómicas & Vinho', 'Gastronomy & Wine Tastings', 'Gastronomie & Weinverkostungen'),
      desc: t('Seleção cuidada de restaurantes típicos e quintas com as melhores colheitas de Portugal.', 'Handpicked authentic regional dining and premier wine estates.', 'Sorgfältig ausgewählte regionale Restaurants und Weingüter mit exzellenten Jahrgängen.'),
    },
  ];

  return (
    <section id="tours-norte" className="py-12 sm:py-16 bg-[#F7F4EE] text-[#273334]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Intro Card */}
        <div className="bg-[#E4CEAD]/25 border border-[#73999C]/25 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#73999C]/15 border border-[#73999C]/30 text-[#73999C] text-xs font-bold uppercase tracking-widest">
                <Compass className="w-3.5 h-3.5 text-[#C96F4B]" />
                <span>{t('Norte Litoral & Interior', 'North Coast & Inland', 'Nordküste & Binnenland')}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-wider text-[#273334] leading-tight">
                {t('TOURS NORTE LITORAL & INTERIOR', 'NORTH TOURS COAST & INLAND', 'NORD-TOUREN KÜSTE & INLAND')}
              </h2>

              <p className="text-sm sm:text-base text-[#273334]/80 leading-relaxed">
                {t(
                  'Conectamos a essência do norte português: da energia atlântica e praias de Viana do Castelo às curvas sagradas do Rio Douro, passando pelo Berço de Guimarães, a monumentalidade de Braga e a autenticidade de Ponte de Lima.',
                  'We connect the very essence of northern Portugal: from the Atlantic vigor and beaches of Viana do Castelo to the sacred contours of the Douro River, Guimarães the birthplace, monumental Braga, and charming Ponte de Lima.',
                  'Wir verbinden die Essenz Nordportugals: von der atlantischen Küste Viana do Castelos bis zu den malerischen Schleifen des Douro, der Wiege Guimarães, dem monumentalen Braga und dem charmanten Ponte de Lima.'
                )}
              </p>

              {/* Feature items checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/70 border border-[#73999C]/20 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F4B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#273334] uppercase tracking-wider">{f.title}</h4>
                      <p className="text-[11px] text-[#273334]/75 mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenBookingModal('tours_norte')}
                  className="px-6 py-3 rounded-2xl bg-[#C96F4B] hover:bg-[#B05B3A] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#C96F4B]/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t('Reservar Tour / Solicitar Proposta', 'Book Tour / Request Itinerary', 'Tour buchen / Angebot anfordern')}</span>
                </button>

                {onOpenBudgetModal && (
                  <button
                    onClick={() => onOpenBudgetModal('Tours Norte Litoral & Interior')}
                    className="px-5 py-3 rounded-2xl bg-white hover:bg-[#F7F4EE] text-[#273334] border border-[#73999C]/30 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#73999C]" />
                    <span>{t('Personalizar Roteiro', 'Customize Route', 'Route anpassen')}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Visual highlight showcase */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#73999C]/30 shadow-md relative group">
                <img
                  src={TOURS_NORTE_IMAGE}
                  alt="Tours Norte Douro e Guimarães"
                  className="w-full h-auto aspect-square object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#273334]/85 via-[#273334]/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A8C7C2]">
                    Douro & Castelo de Guimarães
                  </span>
                  <h3 className="font-display text-xl text-white uppercase tracking-wider font-bold">
                    Tours Norte Litoral & Interior
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    {t('Porto, Douro, Braga, Guimarães, Ponte de Lima & Viana do Castelo', 'Porto, Douro, Braga, Guimarães, Ponte de Lima & Viana do Castelo', 'Porto, Douro, Braga, Guimarães, Ponte de Lima & Viana do Castelo')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-display text-2xl sm:text-4xl uppercase tracking-wider text-[#273334]">
              {t('DESTINOS & ITINERÁRIOS EM DESTAQUE', 'FEATURED DESTINATIONS & ROUTES', 'HIGHLIGHT-ZIELE & ROUTEN')}
            </h3>
            <p className="text-xs sm:text-sm text-[#273334]/75">
              {t('Cada experiência é planeada com rigor e paixão, respeitando o seu ritmo e preferências.', 'Each journey is carefully crafted with care and flexibility to match your pace.', 'Jede Reise wird mit Sorgfalt und Flexibilität nach Ihrem Tempo gestaltet.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#73999C]/25 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#273334]/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#C96F4B]" />
                      <span>{dest.location}</span>
                    </div>

                    <div className="absolute top-3 right-3 bg-[#C96F4B] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs">
                      {dest.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <h4 className="font-display text-xl uppercase tracking-wider text-[#273334] group-hover:text-[#C96F4B] transition-colors">
                      {dest.title}
                    </h4>

                    <p className="text-xs text-[#273334]/80 leading-relaxed">
                      {dest.desc}
                    </p>

                    {/* Highlights bullet list */}
                    <div className="space-y-1.5 pt-2 border-t border-[#73999C]/15">
                      {dest.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] font-medium text-[#273334]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#73999C]" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenBookingModal(`tour_${dest.location.toLowerCase().replace(/[^a-z0-9]/g, '_')}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#73999C]/15 hover:bg-[#73999C] text-[#273334] hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t('Solicitar Este Tour', 'Inquire This Tour', 'Diese Tour anfragen')}</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
