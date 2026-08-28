import React from 'react';
import { ShieldCheck, Compass, Sparkles } from 'lucide-react';
import { SERGIO_PORTRAIT, KAS_MANIFESTO, KAS_METHOD } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export const IntroSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="apresentacao" className="pt-2 sm:pt-4 pb-16 sm:pb-24 bg-[#F7F4EE] relative overflow-hidden border-b border-[#73999C]/15">
      {/* Decorative Separator above Metodologia Exclusiva */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#73999C]/30 to-[#C96F4B]/50" />
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E4CEAD]/30 border border-[#73999C]/20 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C96F4B]" />
            <Compass className="w-4 h-4 text-[#73999C]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#73999C]" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#73999C]/30 to-[#C96F4B]/50" />
        </div>
      </div>

      {/* O Método KAS Section — Right after As Nossas Coleções */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 sm:mb-20">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[11px] font-bold text-[#C96F4B] uppercase tracking-[0.2em]">{t('Metodologia Exclusiva', 'Exclusive Methodology', 'Exklusive Methodik')}</span>
            <h3 className="font-display text-3xl sm:text-5xl text-[#273334] uppercase tracking-wider">{t('O MÉTODO KAS', 'THE KAS METHOD', 'DIE KAS-METHODE')}</h3>
            <p className="text-xs sm:text-sm text-[#273334]/80 font-medium">
              {t(
                'Não seguimos programas pré-definidos. Criamos experiências rigorosamente à medida em 4 etapas.',
                'We do not follow pre-set programs. We craft tailor-made experiences across 4 distinct stages.',
                'Wir folgen keinen vorgegebenen Programmen. Wir kreieren maßgeschneiderte Erlebnisse in 4 Schritten.'
              )}
            </p>
          </div>

          {/* 4 Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KAS_METHOD.map((m) => (
              <div key={m.step} className="p-6 rounded-2xl bg-[#A8C7C2]/20 border border-[#A8C7C2]/35 shadow-xs space-y-3 relative hover:border-[#73999C] transition-colors">
                <span className="font-display text-4xl text-[#73999C] font-bold">{m.step}</span>
                <h4 className="font-display text-2xl text-[#273334] uppercase">
                  {lang === 'de' ? m.titleDe : (lang === 'en' ? m.titleEn || m.title : m.title)}
                </h4>
                <p className="text-xs text-[#273334]/80 leading-relaxed font-normal">
                  {lang === 'de' ? m.descriptionDe : (lang === 'en' ? m.descriptionEn || m.description : m.description)}
                </p>
              </div>
            ))}
          </div>

          {/* Brand Pillars Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-[#73999C] text-white shadow-sm flex items-center">
              <p className="text-sm text-white/95 leading-relaxed font-normal">
                {t(
                  'Inspirar pessoas através do desporto, da aventura e da natureza, proporcionando experiências memoráveis com elevados padrões de qualidade, segurança e hospitalidade.',
                  'Inspiring people through sport, adventure, and nature, delivering memorable experiences with the highest standards of quality, safety, and hospitality.',
                  'Menschen durch Sport, Abenteuer und Natur zu inspirieren und unvergessliche Erlebnisse mit höchsten Standards an Qualität, Sicherheit und Gastfreundschaft zu bieten.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#E4CEAD]/40 text-[#273334] border border-[#E4CEAD]/60 shadow-sm flex items-center">
              <p className="text-sm text-[#273334]/90 leading-relaxed font-normal">
                {t(
                  'Ser uma referência na criação de experiências premium de desportos de ação, estabelecendo parcerias com hotéis, resorts, destinos turísticos e marcas de excelência.',
                  'To be a benchmark in creating premium action sports experiences, partnering with leading hotels, resorts, tourist destinations, and prestige brands.',
                  'Ein Maßstab bei der Gestaltung erstklassiger Actionsport-Erlebnisse zu sein und Partnerschaften mit führenden Hotels, Resorts und Premium-Marken einzugehen.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#A8C7C2]/30 text-[#273334] border border-[#A8C7C2]/50 shadow-sm flex items-center">
              <p className="text-sm text-[#273334]/90 leading-relaxed font-normal">
                {t(
                  'Cada programa é exclusivo. Cada detalhe importa. Porque o verdadeiro luxo está na forma como fazemos sentir cada pessoa.',
                  'Every program is exclusive. Every detail matters. Because true luxury lies in how we make each person feel.',
                  'Jedes Programm ist exklusiv. Jedes Detail zählt. Denn wahrer Luxus liegt darin, wie wir jeden Menschen behandeln.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Separator above Beyond Sport */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#73999C]/30 to-[#C96F4B]/50" />
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E4CEAD]/30 border border-[#73999C]/20 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C96F4B]" />
            <Sparkles className="w-4 h-4 text-[#C96F4B]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#73999C]" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#73999C]/30 to-[#C96F4B]/50" />
        </div>
      </div>

      {/* Main Manifesto Container — BEYOND SPORT */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <h2 className="font-display text-4xl sm:text-6xl text-[#273334] tracking-wide uppercase leading-tight">
          BEYOND SPORT <br />
          <span className="text-[#C96F4B]">BEYOND EXPECTATIONS</span>
        </h2>

        <p className="text-base sm:text-lg text-[#273334]/90 leading-relaxed font-normal max-w-3xl mx-auto">
          {lang === 'de' ? KAS_MANIFESTO.introDe : (lang === 'en' ? KAS_MANIFESTO.introEn || KAS_MANIFESTO.intro : KAS_MANIFESTO.intro)}
        </p>
      </div>
    </section>
  );
};


