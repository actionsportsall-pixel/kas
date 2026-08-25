import React from 'react';
import { ShieldCheck, Compass, Sparkles, HeartHandshake, Eye, Target } from 'lucide-react';
import { SERGIO_PORTRAIT, KAS_MANIFESTO, KAS_METHOD } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export const IntroSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="apresentacao" className="py-16 sm:py-24 bg-[#F7F4EE] relative overflow-hidden border-b border-[#73999C]/15">
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
            <div className="p-6 rounded-2xl bg-[#73999C] text-white shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#A8C7C2]">
                <Target className="w-5 h-5 text-[#A8C7C2]" />
                <span className="font-display text-xl uppercase tracking-wider text-white">{t('A NOSSA MISSÃO', 'OUR MISSION', 'UNSERE MISSION')}</span>
              </div>
              <p className="text-xs text-white/95 leading-relaxed font-normal">
                {t(
                  'Inspirar pessoas através do desporto, da aventura e da natureza, proporcionando experiências memoráveis com elevados padrões de qualidade, segurança e hospitalidade.',
                  'Inspiring people through sport, adventure, and nature, delivering memorable experiences with the highest standards of quality, safety, and hospitality.',
                  'Menschen durch Sport, Abenteuer und Natur zu inspirieren und unvergessliche Erlebnisse mit höchsten Standards an Qualität, Sicherheit und Gastfreundschaft zu bieten.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#E4CEAD]/40 text-[#273334] border border-[#E4CEAD]/60 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#C96F4B]">
                <Eye className="w-5 h-5 text-[#C96F4B]" />
                <span className="font-display text-xl uppercase tracking-wider text-[#273334]">{t('A NOSSA VISÃO', 'OUR VISION', 'UNSERE VISION')}</span>
              </div>
              <p className="text-xs text-[#273334]/90 leading-relaxed font-normal">
                {t(
                  'Ser uma referência na criação de experiências premium de desportos de ação, estabelecendo parcerias com hotéis, resorts, destinos turísticos e marcas de excelência.',
                  'To be a benchmark in creating premium action sports experiences, partnering with leading hotels, resorts, tourist destinations, and prestige brands.',
                  'Ein Maßstab bei der Gestaltung erstklassiger Actionsport-Erlebnisse zu sein und Partnerschaften mit führenden Hotels, Resorts und Premium-Marken einzugehen.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#A8C7C2]/30 text-[#273334] border border-[#A8C7C2]/50 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#73999C]">
                <HeartHandshake className="w-5 h-5 text-[#73999C]" />
                <span className="font-display text-xl uppercase tracking-wider text-[#273334]">{t('A NOSSA PROMESSA', 'OUR PROMISE', 'UNSER VERSPRECHEN')}</span>
              </div>
              <p className="text-xs text-[#273334]/90 leading-relaxed font-normal">
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

      {/* Main Manifesto Container — BEYOND SPORT */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 border-t border-[#73999C]/15 text-center space-y-6">
        <h2 className="font-display text-4xl sm:text-6xl text-[#273334] tracking-wide uppercase leading-tight">
          BEYOND SPORT. <br />
          <span className="text-[#C96F4B]">BEYOND EXPECTATIONS.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#273334]/90 leading-relaxed font-normal max-w-3xl mx-auto">
          {lang === 'de' ? KAS_MANIFESTO.introDe : (lang === 'en' ? KAS_MANIFESTO.introEn || KAS_MANIFESTO.intro : KAS_MANIFESTO.intro)}
        </p>
      </div>
    </section>
  );
};


