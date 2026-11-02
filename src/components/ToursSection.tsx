import React, { useState } from 'react';
import { Clock, CheckCircle2, XCircle, AlertCircle, MapPin, Sparkles, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ToursProps {
  onOpenBookingModal: (tourTitle?: string) => void;
  onOpenBudgetModal: (tourTitle: string) => void;
}

export const ToursSection: React.FC<ToursProps> = ({ onOpenBookingModal, onOpenBudgetModal }) => {
  const { t } = useLanguage();
  const [expandedTour, setExpandedTour] = useState<string | null>('douro');

  const tours = [
    {
      id: 'porto-gaia-matosinhos',
      title: 'PORTO - GAIA - MATOSINHOS',
      subtitle: 'Tour Panorâmico Privado saindo do Porto',
      duration: '4 horas',
      difficulty: 'Fácil',
      image: '/images/douro.jpg',
      badge: 'Meio Dia Exclusivo',
      leadText: 'Descubra os locais mais valiosos da cidade nesta excursão privada de meio dia pelo Porto, Gaia e Matosinhos.',
      description:
        'Descubra o melhor do norte de Portugal num tour privado exclusivo que combina história, cultura, vistas deslumbrantes e o charme da costa. Este tour de meio dia leva você a explorar três cidades emblemáticas – Porto, Vila Nova de Gaia e Matosinhos – de forma confortável e personalizada.',
      highlights: [
        'Porto: Desfrute do centro histórico da cidade, da icônica Torre dos Clérigos, admire os painéis de azulejos da Estação de São Bento e aprecie o vibrante Cais da Ribeira, às margens do Rio Douro. Incluímos paradas em miradouros para fotografias panorâmicas inesquecíveis.',
        'Vila Nova de Gaia: Atravesse a icônica Ponte Luís I para descobrir a cidade vizinha, famosa pelas suas caves de vinho. Relaxe no Jardim do Morro e desfrute de uma das vistas mais impressionantes da região.',
        'Matosinhos: Termine o tour com uma visita à costa atlântica, conhecida pelas suas praias e excelente gastronomia. Aproveite a brisa do mar na Praia de Matosinhos e admire atrações modernas como a Anémona.',
      ],
      included: [
        'Traslado de ida e volta do hotel do cliente',
        'Veículo com ar-condicionado',
        'Água mineral',
        'Visita guiada profissional',
        'Roteiro personalizado de acordo com os interesses do cliente',
      ],
      excluded: [
        'Gorjetas',
        'Entrada nos monumentos',
        'Almoço',
      ],
      notes: [
        'O serviço de busca e retorno é realizado no hotel do cliente. O horário de busca será informado ao cliente no dia anterior ao passeio.',
        'Bebês não devem sentar no colo.',
        'Não é adequado para animais de estimação.',
        'Não há transporte público por perto.',
        'Não acessível para cadeirantes.',
      ],
    },
    {
      id: 'douro',
      title: 'VALE DO DOURO E AMARANTE',
      subtitle: 'Excursão Privada com Paisagens Panorâmicas ou Experiência Enológica',
      duration: '10 horas',
      difficulty: 'Fácil',
      image: '/images/amarante_douro.jpg',
      badge: 'Best-Seller do Douro',
      leadText: 'Viaje em carro particular, prove vinhos de alta qualidade na adega, desfrute de um almoço opcional e relaxe em um pequeno cruzeiro pelo rio Pinhão.',
      description:
        'Descubra a beleza singular do Vale do Douro num tour privado de um dia com partida do Porto, acompanhado por um guia experiente que partilhará histórias sobre a história e a cultura local. Concebido para oferecer experiências adaptadas a diferentes interesses, este tour oferece duas opções para que possa escolher a experiência ideal.',
      highlights: [
        'Opção Paisagens: Perfeita para quem quer concentrar-se nas paisagens e na cultura do Douro e não aprecia vinhos. Ideal para admirar as vinhas nos socalcos, explorar aldeias pitorescas como o Pinhão e o Peso da Régua e desfrutar de vistas deslumbrantes. Inclui também uma visita à vila de Amarante, onde poderá conhecer a igreja histórica, atravessar a ponte sobre o rio Tâmega e provar doces locais.',
        'Opção Vinho e Rio: Acrescenta à opção Paisagens uma visita a uma adega familiar com prova de vinhos e um passeio de barco no Pinhão, permitindo-lhe ver o vale de uma perspetiva única, entre a terra e o rio.',
      ],
      included: [
        'Veículo com ar condicionado',
        'Transporte privado',
        'Embarque e desembarque no hotel do cliente',
        'Visita guiada a 1 adega (opcional)',
        'Cruzeiro de 1 hora no Pinhão (opcional)',
        'Parada para fotos nos melhores miradouros',
        'Água mineral',
        'Guia de viagem especializado',
      ],
      excluded: [
        'Almoço com gorjetas',
      ],
      notes: [
        'O serviço de busca e retorno é feito no hotel ou apartamento do cliente. Forneça-nos o endereço completo.',
        'O guia informará, no dia anterior, o horário exato do encontro.',
        'Não acessível para cadeirantes.',
        'Não é adequado para animais de estimação.',
        'Não há transporte público por perto.',
        'Bebês não devem sentar no colo.',
      ],
    },
    {
      id: 'santiago-braga',
      title: 'SANTIAGO DE COMPOSTELA + BRAGA',
      subtitle: 'Tour Privado saindo do Porto',
      duration: '10 horas e 30 minutos',
      difficulty: 'Fácil',
      image: '/images/santiago_compostela.jpg',
      badge: 'História & Tradição',
      leadText: 'Desfrute deste passeio privado de 1 dia e conheça dois dos mais importantes centros religiosos e culturais da Península Ibérica.',
      description:
        'Começamos o dia com o traslado do seu hotel na cidade do Porto e seguimos para uma experiência inesquecível por dois dos destinos mais emblemáticos da Península Ibérica.',
      highlights: [
        'Santiago de Compostela: Onde se encontra a imponente Catedral, uma verdadeira obra-prima dos estilos românico, gótico e barroco. Segundo a tradição, a catedral guarda o túmulo do Apóstolo Santiago Magno, padroeiro da Espanha, tornando-se um marco indispensável da Galiza. Aproveite o tempo livre para explorar a catedral ao seu próprio ritmo, assistir à Missa do Peregrino (opcional) e admirar o deslumbrante Botafumeiro. Desfrute de um almoço livre no centro histórico de Santiago.',
        'Braga: Uma das cidades mais encantadoras de Portugal. Começamos com uma visita ao Santuário do Bom Jesus do Monte, famoso pela sua monumental escadaria barroca. Continuamos até à Sé de Braga, a catedral mais antiga do país.',
      ],
      included: [
        'Traslado de ida e volta do hotel do cliente',
        'Visita guiada experiente',
        'Veículo executivo com ar-condicionado',
        'Todas as taxas e impostos',
        'Água mineral',
        'Transporte particular confortável',
      ],
      excluded: [
        'Dicas / Gorjetas',
        'Almoço no centro histórico',
      ],
      notes: [
        'Traslado de ida e volta do hotel do cliente incluído.',
        'Bebês não devem sentar no colo.',
        'Cadeiras infantis indisponíveis.',
        'Não é adequado para animais de estimação.',
        'Não há transporte público por perto.',
        'Não acessível para cadeirantes.',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A8C7C2]/20 text-[#273334] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#73999C]" />
          <span>{t('Roteiros Exclusivos', 'Exclusive Itineraries', 'Exklusive Routen')}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#273334] uppercase tracking-wide">
          {t('Tours Privados no Norte de Portugal', 'Private Tours in Northern Portugal', 'Private Touren in Nordportugal')}
        </h2>
        <p className="text-sm sm:text-base text-[#273334]/80 leading-relaxed">
          {t(
            'Viagens panorâmicas personalizadas com transporte privado, motorista/guia experiente e conforto absoluto a partir do seu hotel no Porto.',
            'Personalized scenic journeys with private transport, experienced driver/guide and absolute comfort departing from your hotel in Porto.',
            'Personalisierte Panoramatouren mit privatem Transport, erfahrenem Guide und absolutem Komfort direkt ab Ihrem Hotel in Porto.'
          )}
        </p>
      </div>

      <div className="space-y-12">
        {tours.map((tour) => {
          const isExpanded = expandedTour === tour.id;

          return (
            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#A8C7C2]/30 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image Section */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-[#273334]">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/douro.jpg';
                    }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C96F4B] text-white shadow-md">
                      {tour.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                    <h3 className="text-2xl font-display font-bold uppercase">{tour.title}</h3>
                    <p className="text-xs text-[#E4CEAD] font-semibold">{tour.subtitle}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="hidden lg:block">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#A8C7C2]/20 text-[#73999C]">
                          {tour.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#73999C]">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{tour.duration}</span>
                        </div>
                        <span className="text-xs text-[#273334]/50">•</span>
                        <span className="text-xs font-semibold text-[#273334]/80">{tour.difficulty}</span>
                      </div>
                      <h3 className="text-3xl font-display font-bold uppercase tracking-wide text-[#273334]">
                        {tour.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#C96F4B] uppercase tracking-wider mt-1">
                        {tour.subtitle}
                      </p>
                    </div>

                    {/* Mobile Badges */}
                    <div className="flex lg:hidden items-center gap-3 text-xs font-semibold text-[#73999C]">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{tour.duration}</span>
                      </div>
                      <span className="text-[#273334]/50">•</span>
                      <span className="text-[#273334]/80">{tour.difficulty}</span>
                    </div>

                    <p className="text-sm sm:text-base font-medium text-[#273334] leading-relaxed">
                      {tour.leadText}
                    </p>

                    <p className="text-xs sm:text-sm text-[#273334]/80 leading-relaxed">
                      {tour.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#73999C]">
                        {t('Destaques do Roteiro', 'Tour Highlights', 'Höhepunkte')}
                      </h4>
                      <div className="space-y-2.5">
                        {tour.highlights.map((h, i) => (
                          <div key={i} className="text-xs sm:text-sm text-[#273334]/85 bg-[#F7F4EE] p-3.5 rounded-xl border border-[#A8C7C2]/20 leading-relaxed">
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Toggle Details */}
                    <button
                      onClick={() => setExpandedTour(isExpanded ? null : tour.id)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C96F4B] hover:text-[#B05B3A] transition cursor-pointer"
                    >
                      <span>
                        {isExpanded
                          ? t('Ocultar Inclusões & Informações', 'Hide Details', 'Details ausblenden')
                          : t('Ver O Que Está Incluído & Detalhes', 'View Inclusions & Details', 'Inklusivleistungen ansehen')}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {/* Expanded Section */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-[#A8C7C2]/20 space-y-6 animate-in fade-in duration-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {/* Inclusions */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#273334]">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>{t('O que está incluído?', 'What is included?', 'Inbegriffen')}</span>
                            </div>
                            <ul className="space-y-1.5 text-xs text-[#273334]/85">
                              {tour.included.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Exclusions */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#273334]">
                              <XCircle className="w-4 h-4 text-rose-500" />
                              <span>{t('Exclusões', 'Exclusions', 'Nicht inbegriffen')}</span>
                            </div>
                            <ul className="space-y-1.5 text-xs text-[#273334]/85">
                              {tour.excluded.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Notes */}
                        <div className="bg-[#E4CEAD]/20 p-4 rounded-2xl border border-[#E4CEAD]/40 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#273334]">
                            <AlertCircle className="w-4 h-4 text-[#C96F4B]" />
                            <span>{t('Observe / Informações Importantes', 'Important Notes', 'Wichtige Hinweise')}</span>
                          </div>
                          <ul className="space-y-1 text-xs text-[#273334]/80">
                            {tour.notes.map((note, nIdx) => (
                              <li key={nIdx} className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-[#C96F4B] mt-1.5 shrink-0" />
                                <span>{note}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 mt-6 border-t border-[#A8C7C2]/20 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenBookingModal(tour.title)}
                      className="flex-1 py-3 px-6 bg-[#C96F4B] hover:bg-[#B05B3A] text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{t('Reservar Agora', 'Book Now', 'Jetzt Buchen')}</span>
                    </button>
                    <button
                      onClick={() => onOpenBudgetModal(tour.title)}
                      className="py-3 px-6 bg-[#F7F4EE] hover:bg-white text-[#273334] text-xs font-bold uppercase tracking-wider rounded-2xl border border-[#A8C7C2]/30 shadow-xs transition cursor-pointer"
                    >
                      <span>{t('Pedir Orçamento', 'Request Quote', 'Angebot anfordern')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
