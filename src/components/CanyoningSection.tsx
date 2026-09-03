import React, { useState } from 'react';
import { 
  Compass, 
  CheckCircle2, 
  XCircle, 
  Send, 
  Calendar, 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  Camera, 
  Award, 
  Shirt, 
  Waves, 
  Sun, 
  Droplets, 
  Utensils, 
  Bus,
  Gauge,
  Activity
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CANYONING_IMAGE, CANYONING_CASCATA_IMAGE, CANYONING_RIO_IMAGE } from '../data/mockData';

interface CanyoningProps {
  onOpenBookingModal: (activityKey?: string) => void;
  onOpenBudgetModal?: (serviceName: string) => void;
}

export const CanyoningSection: React.FC<CanyoningProps> = ({
  onOpenBookingModal,
  onOpenBudgetModal,
}) => {
  const { t } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<'both' | 'cascata' | 'rio'>('both');

  const includedItems = [
    {
      title: t('Nível Físico: Baixo / Médio', 'Physical Level: Low / Medium', 'Körperliches Niveau: Leicht / Mittel'),
      desc: t('Acessível a quem gosta de natureza e aventura ativa.', 'Accessible to anyone who enjoys active nature and adventure.', 'Zugänglich für alle, die Natur und Aktivabenteuer schätzen.'),
      icon: Activity,
    },
    {
      title: t('Dificuldade Técnica: Fácil', 'Technical Difficulty: Easy', 'Technische Schwierigkeit: Einfach'),
      desc: t('Sem necessidade de experiência prévia em descida de rios.', 'No previous river descent experience required.', 'Keine Vorkenntnisse im Canyoning erforderlich.'),
      icon: Gauge,
    },
    {
      title: t('Instalações de Referência', 'Top-tier Facilities', 'Erstklassige Einrichtungen'),
      desc: t('Balneários e base de apoio confortável e equipada.', 'Changing rooms and comfortable, fully equipped base.', 'Umkleiden und komfortable, voll ausgestattete Basis.'),
      icon: Award,
    },
    {
      title: t('Equipamento Topo de Gama Específico', 'High-end Canyoning Equipment', 'Erstklassige Canyoning-Ausrüstung'),
      desc: t('Fatos isotérmicos de neoprene de alta densidade, capacetes homologados e arnês técnico.', 'High-density neoprene wetsuits, certified helmets, and technical harness.', 'Hochwertige Neoprenanzüge, geprüfte Helme und technischer Gurt.'),
      icon: ShieldCheck,
    },
    {
      title: t('Guias Especializados & Certificados ICA', 'ICA Certified Expert Guides', 'ICA-zertifizierte Fachguides'),
      desc: t('Guias locais certificados pela Academia Internacional de Canyoning.', 'Local guides certified by the International Canyoning Academy.', 'Lokale Guides, zertifiziert von der International Canyoning Academy.'),
      icon: Compass,
    },
    {
      title: t('Fotos e Vídeos Grátis', 'Free Photos & Videos Included', 'Kostenlose Fotos & Videos inklusive'),
      desc: t('Reportagem multimédia de alta resolução para recordar todos os momentos.', 'High-resolution multimedia coverage to remember every highlight.', 'Hochauflösende Fotos und Videos zur Erinnerung.'),
      icon: Camera,
    },
    {
      title: t('Seguros Incluídos', 'Full Insurance Included', 'Vollkaskoversicherung inklusive'),
      desc: t('Seguro de acidentes pessoais e responsabilidade civil de acordo com a lei.', 'Personal accident and civil liability insurance per legal standards.', 'Unfall- und Haftpflichtversicherung nach gesetzlichem Standard.'),
      icon: ShieldCheck,
    },
  ];

  const notIncludedItems = [
    {
      title: t('Serviço de Transfer', 'Transfer Service', 'Transferservice'),
      desc: t('Disponível sob pedido ou ponto de encontro direto no Gerês.', 'Available upon request or direct meeting point in Gerês.', 'Auf Anfrage verfügbar oder direkter Treffpunkt im Gerês.'),
      icon: Bus,
    },
    {
      title: t('Fato / Calções de Banho', 'Swimwear / Swim Shorts', 'Badebekleidung / Badeshorts'),
      desc: t('Para vestir confortavelmente por baixo do fato de neoprene.', 'To wear comfortably under the neoprene suit.', 'Zum bequemen Tragen unter dem Neoprenanzug.'),
      icon: Shirt,
    },
    {
      title: t('Toalha de Praia / Banho', 'Beach / Bath Towel', 'Strand- / Badetuch'),
      desc: t('Para se secar no final da atividade nos balneários.', 'For drying off at the facilities after the activity.', 'Zum Abtrocknen in den Umkleiden nach der Tour.'),
      icon: Waves,
    },
    {
      title: t('Protetor Solar', 'Sunscreen', 'Sonnencreme'),
      desc: t('Recomendado para as caminhadas de aproximação ao rio.', 'Recommended for sunny river approaches and hikes.', 'Empfohlen für den Zustieg bei sonnigem Wetter.'),
      icon: Sun,
    },
    {
      title: t('Garrafa de Água', 'Water Bottle', 'Wasserflasche'),
      desc: t('Para manter uma boa hidratação ao longo da aventura.', 'To maintain great hydration throughout the adventure.', 'Für optimale Flüssigkeitszufuhr während der Tour.'),
      icon: Droplets,
    },
    {
      title: t('Snack / Almoço', 'Snack / Lunch', 'Snack / Mittagessen'),
      desc: t('Leve uma barra energética, fruta ou refeição ligeira.', 'Bring energy bars, fruit, or a light post-tour snack.', 'Bringen Sie Energieriegel, Obst oder einen leichten Snack mit.'),
      icon: Utensils,
    },
  ];

  return (
    <section id="canyoning-tours" className="py-12 sm:py-16 bg-[#F7F4EE] text-[#273334]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Presentation Banner */}
        <div className="bg-[#E4CEAD]/25 border border-[#73999C]/25 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#73999C]/15 border border-[#73999C]/30 text-[#73999C] text-xs font-bold uppercase tracking-widest">
                <MapPin className="w-3.5 h-3.5 text-[#C96F4B]" />
                <span>{t('Parque Nacional da Peneda-Gerês', 'Peneda-Gerês National Park', 'Nationalpark Peneda-Gerês')}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-wider text-[#273334] leading-tight">
                CANYONING TOURS
              </h2>

              <p className="text-base sm:text-lg text-[#273334]/90 leading-relaxed font-medium">
                {t(
                  'O Canyoning é uma experiência de natureza e de aventura que te permite descobrir as maravilhosas paisagens e cascatas perdidas em pleno Parque Nacional da Peneda-Gerês.',
                  'Canyoning is a nature and adventure experience that allows you to discover the stunning landscapes and hidden waterfalls in the heart of Peneda-Gerês National Park.',
                  'Canyoning ist ein Natur- und Abenteuererlebnis, mit dem Sie die wunderbaren Landschaften und verborgenen Wasserfälle mitten im Nationalpark Peneda-Gerês entdecken können.'
                )}
              </p>

              {/* Badges / Quick specs */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-[#73999C]/30 text-xs font-bold text-[#273334]">
                  <Activity className="w-3.5 h-3.5 text-[#C96F4B]" />
                  {t('Nível Físico: Baixo / Médio', 'Physical: Low / Medium', 'Fitness: Leicht / Mittel')}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-[#73999C]/30 text-xs font-bold text-[#273334]">
                  <Gauge className="w-3.5 h-3.5 text-[#73999C]" />
                  {t('Dificuldade Técnica: Fácil', 'Technical: Easy', 'Schwierigkeit: Einfach')}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#C96F4B]/10 border border-[#C96F4B]/30 text-xs font-bold text-[#C96F4B]">
                  <Camera className="w-3.5 h-3.5" />
                  {t('Fotos & Vídeos Grátis', 'Free Photos & Videos', 'Gratis Fotos & Videos')}
                </span>
              </div>

              {/* Action buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenBookingModal('canyoning_geres')}
                  className="px-6 py-3 rounded-2xl bg-[#C96F4B] hover:bg-[#B05B3A] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#C96F4B]/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t('Reservar Canyoning Tour', 'Book Canyoning Tour', 'Canyoning-Tour buchen')}</span>
                </button>

                {onOpenBudgetModal && (
                  <button
                    onClick={() => onOpenBudgetModal('Canyoning Tours Gerês')}
                    className="px-5 py-3 rounded-2xl bg-white hover:bg-[#F7F4EE] text-[#273334] border border-[#73999C]/30 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#73999C]" />
                    <span>{t('Solicitar Informações / Grupo', 'Inquire / Group Booking', 'Gruppe anfragen')}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Visual Showcase with Gerês Waterfalls & River */}
            <div className="lg:col-span-5 space-y-3">
              <div className="rounded-2xl overflow-hidden border border-[#73999C]/30 shadow-md relative group bg-black">
                <img
                  src={
                    selectedPhoto === 'both' 
                      ? CANYONING_IMAGE 
                      : selectedPhoto === 'cascata' 
                      ? CANYONING_CASCATA_IMAGE 
                      : CANYONING_RIO_IMAGE
                  }
                  alt="Canyoning no Gerês - Cascatas e Rio"
                  className="w-full aspect-square object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#273334]/85 via-[#273334]/15 to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#A8C7C2]">
                    <Sparkles className="w-3.5 h-3.5 text-[#C96F4B]" />
                    <span>Parque Nacional da Peneda-Gerês</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wider font-bold mt-0.5">
                    Cascatas & Rio do Gerês
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    {t('Águas cristalinas, lagoas naturais e descidas em segurança.', 'Crystal-clear waters, natural pools, and safe descents.', 'Kristallklares Wasser, Naturpools und sichere Abstiege.')}
                  </p>
                </div>
              </div>

              {/* Photo Selector Switcher */}
              <div className="flex items-center justify-center gap-2 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setSelectedPhoto('both')}
                  className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    selectedPhoto === 'both' 
                      ? 'bg-[#273334] text-white border-[#273334]' 
                      : 'bg-white text-[#273334] border-[#73999C]/30 hover:bg-[#F7F4EE]'
                  }`}
                >
                  {t('Cascata + Rio', 'Waterfall + River', 'Wasserfall + Fluss')}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto('cascata')}
                  className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    selectedPhoto === 'cascata' 
                      ? 'bg-[#273334] text-white border-[#273334]' 
                      : 'bg-white text-[#273334] border-[#73999C]/30 hover:bg-[#F7F4EE]'
                  }`}
                >
                  {t('Cascata do Gerês', 'Gerês Waterfall', 'Gerês Wasserfall')}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto('rio')}
                  className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    selectedPhoto === 'rio' 
                      ? 'bg-[#273334] text-white border-[#273334]' 
                      : 'bg-white text-[#273334] border-[#73999C]/30 hover:bg-[#F7F4EE]'
                  }`}
                >
                  {t('Rio Gerês', 'Gerês River', 'Gerês Fluss')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Incluído VS Para Levar / Não Incluído */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Incluído */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#73999C]/25 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#73999C]/15 flex items-center justify-center text-[#73999C]">
                  <CheckCircle2 className="w-6 h-6 text-[#73999C]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#73999C]">
                    {t('Tudo o que está incluído', 'All included details', 'Alles inklusive')}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-[#273334]">
                    {t('INCLUÍDO', 'INCLUDED', 'INKLUSIVE')}
                  </h3>
                </div>
              </div>

              <div className="divide-y divide-[#73999C]/15 pt-2">
                {includedItems.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-xl bg-[#73999C]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#73999C]">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#273334]">{item.title}</h4>
                        <p className="text-xs text-[#273334]/75 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7F4EE] border border-[#73999C]/20 flex items-center gap-3 text-xs text-[#273334]/80">
              <Award className="w-5 h-5 text-[#C96F4B] shrink-0" />
              <span>{t('Guias credenciados e seguros em conformidade integral com as normas do ICNF no Parque Nacional.', 'Certified guides and insurance fully compliant with National Park regulations.', 'Zertifizierte Guides und Versicherungen gemäß den Vorschriften des Nationalparks.')}</span>
            </div>
          </div>

          {/* Column 2: Para Levar / Não Incluído */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#73999C]/25 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#C96F4B]/15 flex items-center justify-center text-[#C96F4B]">
                  <XCircle className="w-6 h-6 text-[#C96F4B]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C96F4B]">
                    {t('O que deve trazer consigo', 'What you need to bring', 'Was Sie mitbringen sollten')}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-[#273334]">
                    {t('PARA LEVAR / NÃO INCLUÍDO', 'TO BRING / NOT INCLUDED', 'MITZUBRINGEN / NICHT INKLUSIVE')}
                  </h3>
                </div>
              </div>

              <div className="divide-y divide-[#73999C]/15 pt-2">
                {notIncludedItems.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-xl bg-[#C96F4B]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#C96F4B]">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#273334]">{item.title}</h4>
                        <p className="text-xs text-[#273334]/75 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7F4EE] border border-[#73999C]/20 flex items-center gap-3 text-xs text-[#273334]/80">
              <Bus className="w-5 h-5 text-[#73999C] shrink-0" />
              <span>{t('Possibilidade de transporte privativo a partir do Porto, Braga ou Viana do Castelo sob consulta.', 'Private transfer from Porto, Braga, or Viana do Castelo available upon inquiry.', 'Privater Transfer ab Porto, Braga oder Viana do Castelo auf Anfrage möglich.')}</span>
            </div>
          </div>
        </div>

        {/* Dual Photo Gallery of Gerês Waterfalls and River */}
        <div className="space-y-4">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-[#273334]">
              {t('O CENÁRIO MÁGICO DO GERÊS', 'THE MAGICAL SCENERY OF GERÊS', 'DIE MAGISCHE KULISSE DES GERÊS')}
            </h3>
            <p className="text-xs sm:text-sm text-[#273334]/75">
              {t('Cascatas secretas e rios cristalinos rodeados por vegetação intocada.', 'Secret waterfalls and pristine rivers embraced by ancient mountain vegetation.', 'Verborgene Wasserfälle und kristallklare Flüsse inmitten unberührter Natur.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cascata */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#73999C]/25 shadow-xs group">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={CANYONING_CASCATA_IMAGE}
                  alt="Cascatas do Gerês"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#273334]/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                  <Waves className="w-3 h-3 text-[#73999C]" />
                  <span>{t('Cascatas do Gerês', 'Gerês Waterfalls', 'Gerês Wasserfälle')}</span>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-display text-lg uppercase tracking-wider text-[#273334]">
                  {t('Cascatas Naturais & Lagoas', 'Natural Waterfalls & Pools', 'Naturwasserfälle & Lagunen')}
                </h4>
                <p className="text-xs text-[#273334]/75">
                  {t('Descidas com rappel, pequenos saltos e escorregas de água esculpidos pela rocha.', 'Rappels, gentle jumps, and natural waterslides carved into granite rock.', 'Abseilstellen, sanfte Sprünge und natürliche Felsenrutschen.')}
                </p>
              </div>
            </div>

            {/* Rio */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#73999C]/25 shadow-xs group">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={CANYONING_RIO_IMAGE}
                  alt="Rio do Gerês"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#273334]/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#C96F4B]" />
                  <span>{t('Rio Gerês', 'Gerês River', 'Rio Gerês')}</span>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-display text-lg uppercase tracking-wider text-[#273334]">
                  {t('Águas Cristalinas & Trilhos', 'Crystal Clear Waters & Trails', 'Kristallklares Wasser & Pfade')}
                </h4>
                <p className="text-xs text-[#273334]/75">
                  {t('Percurso refrescante em comunhão total com a floresta e a pureza do rio.', 'Refreshing journey in total harmony with the temperate rainforest and pure mountain stream.', 'Erfrischende Route im Einklang mit dem Gebirgswald und reinem Gebirgsfluss.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
