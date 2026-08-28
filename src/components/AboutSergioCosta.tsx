import React from 'react';
import { SergioCostaBio } from '../types';
import { Award, CheckCircle2, ShieldCheck, Sparkles, Compass } from 'lucide-react';
import { SERGIO_PORTRAIT, KAS_VALUES } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

interface AboutSergioCostaProps {
  bio: SergioCostaBio;
  onOpenEditModal?: () => void;
}

export const AboutSergioCosta: React.FC<AboutSergioCostaProps> = ({
  bio,
  onOpenEditModal,
}) => {
  const { lang, t } = useLanguage();

  return (
    <section id="sobre" className="py-20 sm:py-24 bg-[#F7F4EE] relative overflow-hidden border-b border-[#73999C]/15 text-[#273334]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Intro Statement */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-[#273334]/80 text-base sm:text-lg font-medium">
            {t(
              'A excelência não é um objetivo. É um compromisso em cada detalhe.',
              'Excellence is not a goal. It is a commitment in every detail.',
              'Exzellenz ist kein Ziel. Es ist eine Verpflichtung in jedem Detail.'
            )}
          </p>
        </div>

        {/* Main Leadership & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Sergio Costa Visual Portrait & Badges */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Photo Card */}
            <div className="group relative rounded-3xl overflow-hidden bg-[#273334] border border-[#73999C]/30 shadow-xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={SERGIO_PORTRAIT}
                  alt="Sérgio Costa - Fundador & Head Coach KAS"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to direct path if needed
                    (e.target as HTMLImageElement).src = '/images/sergio.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#273334]/90 via-[#273334]/20 to-transparent" />
                
                {/* Floating Experience Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#C96F4B] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                  15+ Anos
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-1">
                  <h4 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">
                    Sérgio Costa
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F7F4EE]/90 font-medium tracking-wide">
                    {t('Fundador & Head Coach KAS', 'Founder & Head Coach KAS', 'Gründer & Head Coach KAS')}
                  </p>
                </div>
              </div>
            </div>

            {/* Domínios KAS */}
            <div className="bg-[#E4CEAD]/30 p-6 rounded-2xl border border-[#E4CEAD]/60 space-y-3 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#73999C]">
                {t('DOMÍNIOS KAS', 'KAS DOMAINS', 'KAS DISZIPLINEN')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {bio.modalities.map((mod, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#F7F4EE] text-[#273334] text-xs font-bold border border-[#73999C]/20 rounded-xl uppercase tracking-wider shadow-2xs hover:bg-[#73999C] hover:text-white transition-colors"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificações */}
            <div className="p-6 bg-[#E4CEAD]/30 rounded-2xl border border-[#E4CEAD]/60 space-y-3.5 shadow-xs">
              <div className="flex items-center gap-2 text-[#73999C] font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#73999C]" />
                <span>{t('Certificações & Habilitações', 'Certifications & Credentials', 'Zertifizierungen')}</span>
              </div>
              <div className="space-y-2.5">
                {bio.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#273334]/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F4B] shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative, Highlights & Signature Quote */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#73999C]/15 border border-[#73999C]/30 text-[#73999C] text-[11px] font-bold uppercase tracking-[0.2em] rounded-full">
                <Compass className="w-3.5 h-3.5 text-[#C96F4B]" />
                <span>{t('Visão & Liderança', 'Vision & Leadership', 'Vision & Führung')}</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#273334] tracking-wide uppercase leading-tight">
                {t(bio.title, 'Leadership, Experience & Passion for Movement', 'Führung, Erfahrung & Leidenschaft für Bewegung')}
              </h3>

              <p className="text-sm sm:text-base text-[#273334]/85 leading-relaxed font-normal">
                {t(
                  bio.mainText,
                  'With over 15 years dedicated to ocean and racquet sports, Sérgio Costa crafts experiences that turn contact with nature into memorable moments. His approach focuses on attention to detail, active listening, and a constant quest for technical and human excellence.',
                  'Mit über 15 Jahren Erfahrung im Wasser- und Racketsport gestaltet Sérgio Costa Erlebnisse, die den Kontakt mit der Natur zu unvergesslichen Momenten machen.'
                )}
              </p>
            </div>

            {/* Key Metrics / Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#A8C7C2]/20 border border-[#73999C]/20 shadow-2xs space-y-1">
                <span className="font-display text-3xl text-[#C96F4B] font-bold">15+</span>
                <p className="text-[11px] uppercase font-bold text-[#73999C] tracking-wider">{t('Anos de Terreno', 'Years Experience')}</p>
                <p className="text-xs text-[#273334]/80">{t('No mar e nos campos', 'Ocean & court expertise')}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#A8C7C2]/20 border border-[#73999C]/20 shadow-2xs space-y-1">
                <span className="font-display text-3xl text-[#73999C] font-bold">100%</span>
                <p className="text-[11px] uppercase font-bold text-[#73999C] tracking-wider">{t('À Medida', 'Tailor-Made')}</p>
                <p className="text-xs text-[#273334]/80">{t('Acompanhamento direto', 'Direct personal coaching')}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#A8C7C2]/20 border border-[#73999C]/20 shadow-2xs space-y-1">
                <span className="font-display text-3xl text-[#273334] font-bold">FPS/FPP</span>
                <p className="text-[11px] uppercase font-bold text-[#73999C] tracking-wider">{t('Credenciado', 'Certified Coach')}</p>
                <p className="text-xs text-[#273334]/80">{t('Federações Oficiais', 'Official federations')}</p>
              </div>
            </div>

            {/* Signature Personal Quote */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#E4CEAD]/40 border border-[#73999C]/25 shadow-xs space-y-4">
              <span className="text-4xl sm:text-5xl text-[#C96F4B] font-serif leading-none select-none">“</span>
              <p className="text-sm sm:text-base text-[#273334] italic font-medium leading-relaxed -mt-4">
                {t(
                  bio.quote.replace(/"/g, ''),
                  'At KAS we believe true luxury lies in quality time, the authenticity of experiences, and the dedicated attention given to each person.',
                  'Bei KAS glauben wir, dass wahrer Luxus in wertvoller Zeit, authentischen Erlebnissen und persönlicher Betreuung liegt.'
                )}
              </p>
              <div className="pt-2 border-t border-[#73999C]/20 flex items-center justify-between text-xs text-[#73999C] font-bold uppercase tracking-wider">
                <span>Sérgio Costa</span>
                <span className="text-[#C96F4B]">KAS Portugal</span>
              </div>
            </div>

          </div>
        </div>

        {/* KAS Values Grid Section */}
        <div className="pt-12 border-t border-[#73999C]/15">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-[11px] font-bold text-[#C96F4B] uppercase tracking-[0.2em]">{t('Identidade de Marca', 'Brand Identity', 'Markenidentität')}</span>
            <h3 className="font-display text-3xl sm:text-4xl text-[#273334] uppercase tracking-wider">{t('OS NOSSOS VALORES', 'OUR VALUES', 'UNSERE WERTE')}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {KAS_VALUES.map((val, idx) => (
              <div key={idx} className="p-6 bg-[#E4CEAD]/30 rounded-2xl border border-[#E4CEAD]/60 shadow-xs space-y-2 hover:border-[#73999C] transition-colors">
                <h4 className="font-display text-2xl text-[#273334] uppercase">
                  <span>{val.title}</span>
                </h4>
                <p className="text-xs text-[#273334]/80 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};



