import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Calendar, 
  RefreshCw, 
  ShieldCheck, 
  Sparkles, 
  Search,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface FAQItem {
  id: string;
  category: 'reservas' | 'cancelamentos' | 'equipamento' | 'geral';
  questionPt: string;
  questionEn: string;
  questionDe: string;
  answerPt: string;
  answerEn: string;
  answerDe: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'reservas',
    questionPt: 'Como funciona o processo de reserva de uma experiência KAS?',
    questionEn: 'How does the booking process for a KAS experience work?',
    questionDe: 'Wie läuft der Buchungsprozess für ein KAS-Erlebnis ab?',
    answerPt: 'Pode solicitar a sua reserva diretamente através do nosso formulário online, por email ou mensagem. Após a receção do seu pedido, a nossa equipa entra em contacto para confirmar disponibilidade de marés, definir o local ideal e personalizar todos os detalhes da sessão de acordo com o seu nível.',
    answerEn: 'You can request your booking directly via our online form, email, or direct message. Upon receiving your request, our team will reach out to confirm tide availability, select the ideal spot, and customize every session detail to your skill level.',
    answerDe: 'Sie können Ihre Buchung direkt über unser Online-Formular, per E-Mail oder Nachricht anfragen. Nach Erhalt Ihrer Anfrage kontaktiert unser Team Sie zur Bestätigung der Gezeiten, Auswahl des optimalen Spots und individuellen Anpassung.',
  },
  {
    id: 'faq-2',
    category: 'reservas',
    questionPt: 'Com quanta antecedência devo efetuar a minha reserva?',
    questionEn: 'How far in advance should I make my booking?',
    questionDe: 'Wie weit im Voraus sollte ich buchen?',
    answerPt: 'Recomendamos a reserva com pelo menos 48 a 72 horas de antecedência para experiências individuais e 1 a 2 semanas para Boot Camps, grupos ou retiros corporativos. No entanto, faremos sempre o possível para acomodar pedidos de última hora conforme a nossa disponibilidade e condições de mar.',
    answerEn: 'We recommend booking at least 48 to 72 hours in advance for individual sessions and 1 to 2 weeks for Boot Camps, groups, or corporate retreats. However, we always strive to accommodate last-minute requests based on availability and ocean conditions.',
    answerDe: 'Wir empfehlen eine Buchung mindestens 48 bis 72 Stunden im Voraus für Einzelsitzungen und 1 bis 2 Wochen für Bootcamps, Gruppen oder Firmen-Retreats. Kurzfristige Anfragen prüfen wir gern je nach Verfügbarkeit.',
  },
  {
    id: 'faq-3',
    category: 'cancelamentos',
    questionPt: 'O que acontece se as condições do mar ou do tempo não forem favoráveis?',
    questionEn: 'What happens if ocean or weather conditions are unfavorable?',
    questionDe: 'Was passiert, wenn Meer- oder Wetterbedingungen ungünstig sind?',
    answerPt: 'A segurança e a qualidade da sua experiência são a nossa prioridade absoluta. Se as condições marítimas ou meteorológicas não permitirem uma sessão segura e memorável, a atividade será reagendada sem qualquer custo adicional para uma nova data da sua conveniência.',
    answerEn: 'Safety and experience quality are our utmost priorities. If sea or weather conditions do not allow for a safe and memorable session, the activity will be rescheduled at no additional charge to a date of your convenience.',
    answerDe: 'Sicherheit und Erlebnisqualität stehen bei uns an erster Stelle. Sollten die Bedingungen keine sichere Session ermöglichen, wird die Aktivität kostenfrei auf einen für Sie passenden Termin verschoben.',
  },
  {
    id: 'faq-5',
    category: 'equipamento',
    questionPt: 'O equipamento desportivo está incluído nas experiências?',
    questionEn: 'Is sports equipment included in all experiences?',
    questionDe: 'Ist die Sportausrüstung in allen Erlebnissen enthalten?',
    answerPt: 'Sim, todas as nossas experiências incluem material técnico premium topo de gama: fatos isotérmicos de alta performance, pranchas de surf adequadas ao seu nível físico e técnico, pranchas de SUP com pagaias leves ou raquetes e bolas profissionais de Padel.',
    answerEn: 'Yes, all our experiences include top-tier technical equipment: high-performance wetsuits, surfboards matched to your physique and skill level, SUP boards with lightweight paddles, or professional padel rackets and balls.',
    answerDe: 'Ja, alle unsere Erlebnisse beinhalten erstklassige Ausrüstung: Neoprenanzüge, optimal abgestimmte Surfboards, SUP-Boards mit Leichtgewicht-Paddeln sowie professionelle Padel-Schläger und Bälle.',
  },
  {
    id: 'faq-6',
    category: 'equipamento',
    questionPt: 'Posso levar o meu próprio material de surf ou padel?',
    questionEn: 'Can I bring my own surf or padel equipment?',
    questionDe: 'Kann ich meine eigene Surf- oder Padel-Ausrüstung mitbringen?',
    answerPt: 'Com certeza. Se preferir evoluir com o seu próprio material, os nossos treinadores farão uma avaliação técnica do equipamento e fornecerão orientações personalizadas para otimizar a sua performance com a sua prancha ou raquete.',
    answerEn: 'Absolutely. If you prefer to progress with your own gear, our coaches will assess your equipment and provide tailored guidance to optimize your performance with your board or racket.',
    answerDe: 'Selbstverständlich. Wenn Sie mit Ihrer eigenen Ausrüstung trainieren möchten, prüfen unsere Trainer diese gern und geben Ihnen maßgeschneiderte Tipps zur Leistungsoptimierung.',
  },
  {
    id: 'faq-7',
    category: 'geral',
    questionPt: 'As experiências incluem seguro de acidentes pessoais?',
    questionEn: 'Do experiences include personal accident insurance?',
    questionDe: 'Beinhalten die Erlebnisse eine Unfallversicherung?',
    answerPt: 'Sim. Todas as atividades realizadas pela KAS contam com cobertura de seguro de acidentes pessoais e responsabilidade civil de acordo com a legislação em vigor para operadores de animação turística e desporto.',
    answerEn: 'Yes. All activities conducted by KAS include comprehensive personal accident and third-party liability insurance in full compliance with current sports and tourism regulations.',
    answerDe: 'Ja. Alle von KAS durchgeführten Aktivitäten sind gemäß den geltenden gesetzlichen Bestimmungen für Sport- und Tourismusanbieter voll unfall- und haftpflichtversichert.',
  },
  {
    id: 'faq-8',
    category: 'geral',
    questionPt: 'Preciso de ter experiência prévia para participar?',
    questionEn: 'Do I need prior experience to participate?',
    questionDe: 'Benötige ich Vorkenntnisse für die Teilnahme?',
    answerPt: 'Não. Temos metodologias dedicadas tanto para quem entra no mar ou num campo de padel pela primeira vez, como para atletas experientes à procura de refino técnico e alta performance. O único requisito para atividades aquáticas é saber nadar.',
    answerEn: 'No. We have dedicated teaching methodologies for complete beginners as well as advanced athletes seeking technical refinement and high performance. The only requirement for ocean activities is basic swimming ability.',
    answerDe: 'Nein. Wir bieten maßgeschneiderte Methoden für Anfänger sowie für erfahrene Sportler auf der Suche nach technischer Verfeinerung. Einzige Voraussetzung für Wasseraktivitäten ist Schwimmfähigkeit.',
  },
];

export const FAQSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3']);
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'todos', label: t('Todas as Perguntas', 'All Questions', 'Alle Fragen'), icon: HelpCircle },
    { id: 'reservas', label: t('Reservas', 'Bookings', 'Buchungen'), icon: Calendar },
    { id: 'cancelamentos', label: t('Cancelamentos & Clima', 'Cancellations & Weather', 'Stornierung & Wetter'), icon: RefreshCw },
    { id: 'equipamento', label: t('Material & Equipamento', 'Gear & Equipment', 'Ausrüstung'), icon: ShieldCheck },
    { id: 'geral', label: t('Geral & Segurança', 'General & Safety', 'Allgemein & Sicherheit'), icon: Sparkles },
  ];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'todos' || item.category === selectedCategory;

      const question =
        lang === 'de'
          ? item.questionDe
          : lang === 'en'
          ? item.questionEn
          : item.questionPt;
      const answer =
        lang === 'de'
          ? item.answerDe
          : lang === 'en'
          ? item.answerEn
          : item.answerPt;

      const matchesSearch =
        searchQuery.trim() === '' ||
        question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        answer.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, lang]);

  return (
    <div id="faq-section" className="pt-12 border-t border-[#73999C]/20 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#273334] uppercase tracking-wider">
          {t('PERGUNTAS', 'FREQUENT', 'HÄUFIGE')} <span className="text-[#C96F4B]">{t('FREQUENTES', 'QUESTIONS', 'FRAGEN')}</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#273334]/80 leading-relaxed font-normal">
          {t(
            'Encontre respostas rápidas e transparentes sobre as nossas reservas, políticas de cancelamento, equipamento e segurança.',
            'Find quick and transparent answers regarding bookings, cancellation policies, gear, and safety.',
            'Finden Sie schnelle und transparente Antworten zu Buchungen, Stornierungsrichtlinien, Ausrüstung und Sicherheit.'
          )}
        </p>
      </div>

      {/* Category Pills & Search Bar */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#73999C] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t(
              'Pesquisar por reservas, cancelamento, pranchas...',
              'Search by bookings, cancellation, surfboards...',
              'Suche nach Buchungen, Stornierung, Ausrüstung...'
            )}
            className="w-full pl-11 pr-4 py-3 bg-[#F8F6F0] border border-[#73999C]/25 rounded-xl text-xs sm:text-sm text-[#273334] placeholder-[#273334]/40 focus:outline-none focus:border-[#C96F4B] shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#73999C] hover:text-[#C96F4B] font-bold"
            >
              {t('Limpar', 'Clear', 'Löschen')}
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border shadow-xs ${
                  isActive
                    ? 'bg-[#273334] text-white border-[#273334]'
                    : 'bg-[#E4CEAD]/30 text-[#273334] border-[#E4CEAD]/60 hover:bg-[#E4CEAD]/50 hover:border-[#73999C]/40'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#E4CEAD]' : 'text-[#73999C]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-[#E4CEAD]/20 rounded-2xl border border-[#E4CEAD]/50 space-y-2">
            <AlertCircle className="w-6 h-6 text-[#C96F4B] mx-auto" />
            <p className="text-xs sm:text-sm font-bold text-[#273334]">
              {t(
                'Nenhuma pergunta encontrada para os critérios selecionados.',
                'No questions found for the selected criteria.',
                'Keine Fragen für die ausgewählten Kriterien gefunden.'
              )}
            </p>
            <p className="text-xs text-[#273334]/70">
              {t(
                'Entre em contacto direto connosco para esclarecer qualquer dúvida.',
                'Reach out to us directly to clarify any doubts.',
                'Kontaktieren Sie uns direkt für individuelle Fragen.'
              )}
            </p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            const question =
              lang === 'de'
                ? faq.questionDe
                : lang === 'en'
                ? faq.questionEn
                : faq.questionPt;
            const answer =
              lang === 'de'
                ? faq.answerDe
                : lang === 'en'
                ? faq.answerEn
                : faq.answerPt;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#F8F6F0] border-[#73999C]/50 shadow-sm'
                    : 'bg-[#E4CEAD]/25 border-[#E4CEAD]/60 hover:bg-[#E4CEAD]/40'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-[10px] font-bold ${
                        isOpen
                          ? 'bg-[#C96F4B] text-white'
                          : 'bg-[#73999C]/20 text-[#73999C]'
                      }`}
                    >
                      ?
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#273334] tracking-wide leading-snug">
                      {question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#73999C] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#C96F4B]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#273334]/85 leading-relaxed border-t border-[#73999C]/10 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#73999C] shrink-0 mt-0.5" />
                    <div>{answer}</div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Direct support note */}
      <div className="text-center pt-4">
        <p className="text-xs text-[#273334]/70">
          {t(
            'Tem uma pergunta personalizada? Escreva-nos para ',
            'Have a custom question? Write to us at ',
            'Haben Sie eine individuelle Frage? Schreiben Sie uns an '
          )}
          <a
            href="mailto:actionsports.all@gmail.com"
            className="font-bold text-[#C96F4B] hover:underline"
          >
            actionsports.all@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};
