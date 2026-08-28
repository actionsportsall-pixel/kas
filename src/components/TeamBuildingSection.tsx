import React from 'react';
import { CheckCircle2, Send, PartyPopper } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TeamBuildingProps {
  onOpenBookingModal: (activityKey?: string) => void;
}

export const TeamBuildingSection: React.FC<TeamBuildingProps> = ({
  onOpenBookingModal,
}) => {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t('Atividades Personalizadas', 'Tailored Activities', 'Maßgeschneiderte Aktivitäten'),
      desc: t('Ajustadas ao número de pessoas, objetivos e horários.', 'Adjusted to participant count, goals, and schedules.', 'Angepasst an Teilnehmerzahl, Ziele und Zeitpläne.')
    },
    {
      title: t('Organização Completa', 'End-to-End Organization', 'Kompette Organisation'),
      desc: t('Do acolhimento aos materiais, seguros e catering opcional.', 'From welcome reception to gear, insurance, and optional catering.', 'Vom Empfang über Ausrüstung und Versicherung bis hin zu optionalem Catering.')
    },
    {
      title: t('Para Diferentes Níveis', 'For All Skill Levels', 'Für alle Leistungsstufen'),
      desc: t('Iniciação segura para quem nunca praticou e desafio para os experientes.', 'Safe introduction for beginners and exciting challenges for experts.', 'Sicherer Einstieg für Anfänger und spannende Herausforderungen für Fortgeschrittene.')
    },
    {
      title: t('Espírito de Equipa', 'Team Spirit', 'Teamgeist'),
      desc: t('Fortalecimento de laços, comunicação e motivação coletiva.', 'Strengthening bonds, communication, and collective motivation.', 'Stärkung des Zusammenhalts, der Kommunikation und der kollektiven Motivation.')
    },
    {
      title: t('Diversão & Competição Saudável', 'Fun & Healthy Competition', 'Spaß & Gesunder Wettbewerb'),
      desc: t('Momentos inesquecíveis longe do ambiente de escritório.', 'Unforgettable moments far away from office routine.', 'Unvergessliche Momente weit weg vom Büroalltag.')
    },
  ];

  return (
    <section id="teambuilding" className="py-24 bg-[#F8F6F0] relative overflow-hidden border-b border-[#2B2F33]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Benefits Checklist */}
              <div className="space-y-2 pt-2">
                {benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#E4CEAD]/20 border border-[#73999C]/20 rounded-2xl shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F4B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#273334] uppercase tracking-wider">{b.title}</h4>
                      <p className="text-xs text-[#273334]/70">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenBookingModal('team_building')}
                id="pedir-proposta-btn"
                className="px-8 py-3.5 rounded-2xl bg-[#C96F4B] hover:bg-[#B05B3A] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#C96F4B]/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t('Pedir proposta personalizada', 'Request Custom Proposal', 'Maßgeschneidertes Angebot anfordern')}</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase Card Column */}
          <div className="lg:col-span-5">
            <div className="bg-[#E4CEAD]/20 border border-[#73999C]/25 p-6 space-y-6 rounded-2xl h-full flex flex-col justify-between shadow-sm">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team Building Action Sports"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#273334]/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 px-3.5 py-1.5 bg-[#273334]/90 backdrop-blur-md rounded-xl text-xs font-bold text-[#A8C7C2] border border-white/10 uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                  <PartyPopper className="w-3.5 h-3.5 text-[#C96F4B]" />
                  <span>{t('Celebrar & Conectar', 'Celebrate & Connect', 'Feiern & Verbinden')}</span>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-4 bg-[#F7F4EE] rounded-2xl border border-[#73999C]/20">
                  <p className="font-display text-3xl text-[#273334]">+ 10</p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[#73999C]">{t('Participantes', 'Participants')}</p>
                </div>
                <div className="p-4 bg-[#F7F4EE] rounded-2xl border border-[#73999C]/20">
                  <p className="font-display text-3xl text-[#273334]">SURF & PADEL</p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[#73999C]">{t('Modalidades', 'Sports')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

