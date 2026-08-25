import React from 'react';
import { BootCampDetail } from '../types';
import {
  Clock,
  Users,
  Video,
  Activity,
  Award,
  Sparkles,
  ShieldAlert,
  Calendar,
  Utensils,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';
import { SURF_BOOTCAMP_IMAGE } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

interface BootCampSectionProps {
  bootCampDetails: BootCampDetail;
  onOpenBookingModal: (activityKey?: string) => void;
  onOpenEditModal?: () => void;
}

export const BootCampSection: React.FC<BootCampSectionProps> = ({
  bootCampDetails,
  onOpenBookingModal,
  onOpenEditModal,
}) => {
  const { t } = useLanguage();

  const specs = [
    {
      label: t('Duração do Programa', 'Program Duration', 'Programmdauer'),
      value: bootCampDetails.duration,
      icon: Clock,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      label: t('Horários & Formato', 'Schedule & Format', 'Ablauf & Format'),
      value: bootCampDetails.schedule,
      icon: Calendar,
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    },
    {
      label: t('N.º de Participantes', 'Number of Participants', 'Teilnehmeranzahl'),
      value: bootCampDetails.maxParticipants,
      icon: Users,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      label: t('Sessões de Surf', 'Surf Sessions', 'Surfeinheiten'),
      value: bootCampDetails.surfSessions,
      icon: Sparkles,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      label: t('Preparação Física', 'Physical Conditioning', 'Körperliche Vorbereitung'),
      value: bootCampDetails.physicalPrep,
      icon: Activity,
      color: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    },
    {
      label: t('Análise Técnica & Vídeo', 'Technical & Video Analysis', 'Technische & Videoanalyse'),
      value: bootCampDetails.technicalAnalysis,
      icon: Video,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      label: t('Atividades Complementares', 'Complementary Activities', 'Zusätzliche Aktivitäten'),
      value: bootCampDetails.extraActivities,
      icon: Award,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      label: t('Material Incluído', 'Included Equipment', 'Inkludierte Ausrüstung'),
      value: bootCampDetails.materialIncluded,
      icon: CheckCircle2,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      label: t('Alimentação / Alojamento', 'Lodging & Meals', 'Unterkunft & Verpflegung'),
      value: bootCampDetails.lodgingMeals,
      icon: Utensils,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    },
  ];

  return (
    <section id="bootcamp" className="py-24 bg-[#F8F6F0] relative overflow-hidden border-b border-[#2B2F33]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Visual Showcase for Boot Camp - Clean side-by-side layout with solid text panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-[#2B2F33]/20 mb-12 shadow-xl bg-[#F3E7DB]">
          {/* Solid Text Panel without image behind it */}
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5">
            <h3 className="font-display text-3xl sm:text-4xl lg:text-4xl text-[#273334] uppercase leading-tight tracking-wide">
              {t('SUPERA OS TEUS LIMITES COM ACOMPANHAMENTO PROFISSIONAL', 'PUSH YOUR LIMITS WITH PROFESSIONAL GUIDANCE', 'ÜBERWINDE DEINE GRENZEN MIT PROFESSIONELLER BETREUUNG')}
            </h3>
            <p className="text-[#273334]/85 text-sm sm:text-base leading-relaxed">
              {t(
                'Aprende técnica de leitura de vaga, melhora o teu pop-up e constrói amizades para a vida numa atmosfera desportiva contagiante.',
                'Master wave reading technical skills, polish your pop-up, and build lifelong friendships in an inspiring sporting atmosphere.',
                'Lerne Wellenlesetechnik, verbessere deinen Pop-up und schließe lebenslange Freundschaften in einer mitreißenden Sportatmosphäre.'
              )}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenBookingModal('boot_camp')}
                className="px-6 py-3.5 rounded-sm bg-[#A8C7C2] hover:bg-[#8eb8b2] text-[#273334] font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t('Quero participar no Boot Camp', 'Join the Boot Camp', 'Am Boot Camp teilnehmen')}</span>
              </button>
            </div>
          </div>

          {/* Full Photograph displayed alongside the text */}
          <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px]">
            <img
              src={SURF_BOOTCAMP_IMAGE}
              alt="Action Sports Surf Boot Camp"
              className="absolute inset-0 w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Structured Program Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#F3E7DB] rounded-sm border border-[#2B2F33]/15 hover:border-[#A7CFC6] transition-all space-y-3 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-[#A7CFC6] text-[#2B2F33] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B4F3A]">
                    {item.label}
                  </h4>
                  <p className="text-[#2B2F33] font-semibold text-xs sm:text-sm leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {onOpenEditModal && (
          <div className="flex justify-center mb-12">
            <button
              onClick={onOpenEditModal}
              className="inline-flex items-center gap-2 text-xs text-[#2B2F33] hover:text-[#E07A5F] bg-[#F3E7DB] hover:bg-[#ebdccb] border border-[#2B2F33]/20 px-5 py-2.5 rounded-sm uppercase tracking-wider font-bold transition-all shadow-xs"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#E07A5F]" />
              <span>{t('Personalizar Boot Camp (Sérgio Costa)', 'Customize Boot Camp (Sérgio Costa)', 'Boot Camp anpassen (Sérgio Costa)')}</span>
            </button>
          </div>
        )}

        {/* Prerequisites Box */}
        <div className="p-8 rounded-sm bg-[#F3E7DB] border border-[#2B2F33]/20 shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-[#2B2F33]/15 pb-4">
            <div className="w-10 h-10 rounded-sm bg-[#E07A5F] text-white flex items-center justify-center">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-3xl text-[#2B2F33] uppercase tracking-wider">
                {t('PRÉ-REQUISITOS', 'PREREQUISITES', 'VORAUSSETZUNGEN')}
              </h3>
              <p className="text-xs text-[#2B2F33]/70 uppercase tracking-wider font-semibold">
                {t('Informações essenciais para garantir o correto aproveitamento do programa', 'Essential information to ensure optimal program performance', 'Wichtige Informationen für eine optimale Programmnutzung')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {bootCampDetails.prerequisites.map((req, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#F8F6F0] p-4 rounded-sm border border-[#2B2F33]/10">
                <CheckCircle2 className="w-4 h-4 text-[#E07A5F] shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-[#2B2F33]">{req}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2B2F33]/15">
            <p className="text-xs text-[#2B2F33]/60 italic">
              {t('* Nota: Todos os detalhes do programa e pré-requisitos podem ser adaptados para grupos fechados sob pedido especial.', '* Note: All program details and prerequisites can be tailored for private groups upon special request.', '* Hinweis: Alle Programmdetails und Voraussetzungen können auf Anfrage für private Gruppen angepasst werden.')}
            </p>

            <button
              onClick={() => onOpenBookingModal('boot_camp')}
              id="participar-bootcamp-btn"
              className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-[#A7CFC6] hover:bg-[#8DBEB4] text-[#2B2F33] font-bold text-xs uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('Garantir Vaga no Boot Camp', 'Reserve Spot in Boot Camp', 'Platz im Boot Camp sichern')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

