import React from 'react';
import { SergioCostaBio } from '../types';
import { Award, HeartHandshake, CheckCircle2, ShieldCheck, Heart, Leaf, Sparkles, UserCheck } from 'lucide-react';
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
    <section id="sobre" className="py-24 bg-[#F7F4EE] relative overflow-hidden border-b border-[#73999C]/15 space-y-20 text-[#273334]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-[#273334]/80 text-base sm:text-lg">
            {t('A excelência não é um objetivo. É um compromisso em cada detalhe.', 'Excellence is not a goal. It is a commitment in every detail.', 'Exzellenz ist kein Ziel. Es ist eine Verpflichtung in jedem Detail.')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Summary Column - Modalities & Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Modalidades List */}
            <div className="bg-[#E4CEAD]/30 p-6 rounded-2xl border border-[#E4CEAD]/60 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#73999C]">
                {t('DOMÍNIOS KAS', 'KAS DOMAINS', 'KAS DISZIPLINEN')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {bio.modalities.map((mod, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#F7F4EE] text-[#273334] text-xs font-bold border border-[#73999C]/20 rounded-lg uppercase tracking-wider"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificações */}
            <div className="p-6 bg-[#E4CEAD]/30 rounded-2xl border border-[#E4CEAD]/60 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-[#73999C] font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#73999C]" />
                <span>{t('Certificações', 'Certifications')}</span>
              </div>
              <div className="space-y-2">
                {bio.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#273334]/90 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F4B] shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio Text & Details Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-3xl sm:text-4xl text-[#273334] tracking-wide uppercase">
                {t(bio.title, 'Leadership, Experience & Passion for Movement')}
              </h3>

              <p className="text-xs sm:text-sm text-[#273334]/85 leading-relaxed">
                {t(bio.mainText, 'With over 15 years dedicated to ocean and racquet sports, Sérgio Costa crafts experiences that turn contact with nature into memorable moments. His approach focuses on attention to detail, active listening, and a constant quest for technical and human excellence.')}
              </p>
            </div>

            {/* Personal Quote */}
            <blockquote className="p-6 rounded-2xl bg-[#A8C7C2]/20 border-l-4 border-[#C96F4B] text-[#273334]/90 text-xs italic leading-relaxed shadow-xs">
              "{t(bio.quote, '"At KAS we believe true luxury lies in quality time, the authenticity of experiences, and the dedicated attention given to each person."')}"
            </blockquote>
          </div>
        </div>

        {/* KAS Values Grid Section */}
        <div className="pt-12 border-t border-[#73999C]/15">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-[11px] font-bold text-[#C96F4B] uppercase tracking-[0.2em]">{t('Identidade de Marca', 'Brand Identity')}</span>
            <h3 className="font-display text-3xl sm:text-4xl text-[#273334] uppercase tracking-wider">{t('OS NOSSOS VALORES', 'OUR VALUES')}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {KAS_VALUES.map((val, idx) => (
              <div key={idx} className="p-6 bg-[#E4CEAD]/30 rounded-2xl border border-[#E4CEAD]/60 shadow-xs space-y-2">
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


