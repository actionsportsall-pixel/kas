import React from 'react';
import { TOURNAMENT_SCHEDULE } from '../data/mockData';
import {
  Trophy,
  Clock,
  Zap,
  Users,
  Target,
  Flame,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TournamentScheduleProps {
  onOpenBookingModal: (activityKey?: string) => void;
}

export const PadelTournamentSchedule: React.FC<TournamentScheduleProps> = ({
  onOpenBookingModal,
}) => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#F8F6F0] relative overflow-hidden border-b border-[#2B2F33]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title & Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3E7DB] border border-[#2B2F33]/15 text-[#6B4F3A] text-[11px] font-bold uppercase tracking-[0.2em]">
            <Clock className="w-3.5 h-3.5" />
            <span>{t('ESTRUTURA OTIMIZADA', 'OPTIMIZED STRUCTURE', 'OPTIMIERTE STRUKTUR')}</span>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl text-[#2B2F33] tracking-wide uppercase">
            {t('TORNEIO DE PADEL —', 'PADEL TOURNAMENT —', 'PADEL-TURNIER —')} <span className="text-[#2B2F33]">{t('CRONOGRAMA DE 2 HORAS', '2-HOUR SCHEDULE', '2-STUNDEN-ABLAUFPLAN')}</span>
          </h2>

          <p className="text-[#2B2F33]/80 text-base sm:text-lg leading-relaxed font-normal">
            {t(
              'Um formato dinâmico, envolvente e sem tempos mortos, desenhado para que todos os participantes joguem, arbitrem e convivam ao longo de duas horas de pura energia.',
              'A dynamic, engaging, non-stop format designed so every participant plays, refs, and socializes across two hours of pure excitement.',
              'Ein dynamisches, fesselndes Format ohne Leerlauf, entwickelt damit alle Teilnehmer über zwei Stunden spielen, schiedsrichtern und zusammen sein können.'
            )}
          </p>
        </div>

        {/* Highlight Banner: Rules & Golden Point Rule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Format Card */}
          <div className="p-6 bg-[#F3E7DB] rounded-sm border border-[#2B2F33]/15 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#A7CFC6] text-[#2B2F33] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-[#2B2F33] uppercase mb-1 tracking-wider">
                {t('FORMATO DO TORNEIO', 'TOURNAMENT FORMAT', 'TURNIERFORMAT')}
              </h3>
              <p className="text-[#2B2F33]/80 text-xs leading-relaxed">
                {t('Cada dupla joga', 'Each pair plays', 'Jedes Doppel spielt')} <strong>{t('três partidas de dez minutos', 'three 10-minute matches', 'drei 10-Minuten-Spiele')}</strong> {t('contra as restantes duplas do seu grupo. Enquanto um grupo joga nos dois campos, o outro grupo descansa e assume a arbitragem.', 'against other pairs in their group. While one group plays, the other rests and referees.', 'gegen die anderen Doppel der Gruppe. Während eine Gruppe spielt, ruht sich die andere aus und übernimmt das Schiedsrichteramt.')}
              </p>
            </div>
          </div>

          {/* Golden Point Rule Card */}
          <div className="p-6 bg-[#F3E7DB] rounded-sm border border-[#2B2F33]/15 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#E07A5F] text-white flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-2xl text-[#2B2F33] uppercase tracking-wider">
                  {t('REGRA DO PONTO DE OURO', 'GOLDEN POINT RULE', 'GOLDEN-POINT-REGEL')}
                </h3>
                <span className="px-2 py-0.5 rounded-sm bg-[#E07A5F] text-white font-bold text-[10px] uppercase tracking-wider">
                  {t('REGRA OFICIAL', 'OFFICIAL RULE', 'OFFIZIELLE REGEL')}
                </span>
              </div>
              <p className="text-[#2B2F33]/80 text-xs leading-relaxed">
                <strong>{t('Não existem vantagens!', 'No advantages!', 'Keine Vorteile!')}</strong> {t('Em caso de igualdade a 40-40, a dupla que ganhar o ponto seguinte vence imediatamente o jogo. Ritmo acelerado e máxima emoção!', 'At 40-40, the pair winning the next point wins the game immediately. Fast pace and high emotion!', 'Bei 40:40 gewinnt das Paar, das den nächsten Punkt erzielt, sofort das Spiel. Hohes Tempo und maximale Spannung!')}
              </p>
            </div>
          </div>
        </div>

        {/* Visual Timeline Chronogram */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-[#2B2F33]/15">
          {TOURNAMENT_SCHEDULE.map((round, idx) => {
            const isFinal = round.title.includes('Finais');
            return (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-start ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Center Circle Pin */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-sm bg-[#2B2F33] text-[#A7CFC6] font-bold text-xs flex items-center justify-center shadow-md z-10">
                  {idx + 1}
                </div>

                {/* Content Box */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 px-0 sm:px-8 w-full">
                  <div
                    className={`p-6 rounded-sm bg-[#F3E7DB] border ${
                      isFinal
                        ? 'border-[#E07A5F] shadow-md'
                        : 'border-[#2B2F33]/15'
                    } hover:border-[#2B2F33]/30 transition-all space-y-3`}
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-[#2B2F33]/10 pb-3">
                      <span className="px-3 py-1 bg-[#A7CFC6] text-[#2B2F33] text-xs font-bold rounded-sm uppercase tracking-wider">
                        {round.time}
                      </span>
                      {isFinal && (
                        <span className="flex items-center gap-1 text-xs font-bold text-[#E07A5F] uppercase tracking-widest">
                          <Trophy className="w-3.5 h-3.5" /> {t('Finais Decisivas', 'Decisive Finals', 'Entscheidendes Finale')}
                        </span>
                      )}
                    </div>

                    <h4 className="font-display text-2xl text-[#2B2F33] uppercase tracking-wider">
                      {round.title}
                    </h4>

                    <p className="text-[#2B2F33]/80 text-xs leading-relaxed">
                      {round.description}
                    </p>

                    {/* Round Matches & Duties */}
                    <div className="space-y-1.5 pt-2">
                      {round.details.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-[#2B2F33]/90">
                          <CheckCircle className="w-3.5 h-3.5 text-[#E07A5F] shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>

                    {/* Active vs Resting Status */}
                    <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-semibold border-t border-[#2B2F33]/10">
                      <div className="text-[#2B2F33] bg-[#F8F6F0] p-2 rounded-sm border border-[#2B2F33]/10">
                        {t('Em Jogo:', 'In Game:', 'Im Spiel:')} {round.activeGroup}
                      </div>
                      <div className="text-[#2B2F33]/70 bg-[#F8F6F0] p-2 rounded-sm border border-[#2B2F33]/10">
                        {t('Descanso:', 'Resting:', 'Pause:')} {round.restingGroup}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button Box */}
        <div className="mt-16 text-center p-8 bg-[#E4CEAD]/25 border border-[#73999C]/25 rounded-2xl shadow-md flex flex-col items-center justify-center space-y-4">
          <h3 className="font-display text-3xl sm:text-4xl text-[#273334] uppercase tracking-wider">
            {t('QUERES ORGANIZAR UM TORNEIO COM ESTA ESTRUTURA PERFEITA?', 'WANT TO ORGANIZE A TOURNAMENT WITH THIS PERFECT STRUCTURE?', 'MÖCHTEN SIE EIN TURNIER MIT DIESER PERFEKTEN STRUKTUR ORGANISIEREN?')}
          </h3>
          <p className="text-[#273334]/80 max-w-xl text-xs sm:text-sm">
            {t('Ideal para empresas, grupos de amigos ou celebrações. A KAS trata de toda a logística, sorteio, arbitragem e materiais.', 'Ideal for companies, groups of friends, or celebrations. KAS takes care of all logistics, draw, refereeing, and equipment.', 'Ideal für Unternehmen, Freundesgruppen oder Feiern. KAS kümmert sich um die gesamte Logistik, Auslosung, Schiedsrichter und Ausrüstung.')}
          </p>

          <button
            onClick={() => onOpenBookingModal('torneio_padel')}
            id="organizar-torneio-btn"
            className="px-8 py-3.5 rounded-2xl bg-[#C96F4B] hover:bg-[#B05B3A] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#C96F4B]/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Trophy className="w-4 h-4" />
            <span>{t('Organizar este torneio', 'Organize this tournament', 'Dieses Turnier organisieren')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

