import React from 'react';
import { Award, Compass, ShieldCheck, Sparkles, Edit3 } from 'lucide-react';
import { SergioCostaBio } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AboutProps {
  bio: SergioCostaBio;
  onOpenEditModal?: () => void;
}

export const AboutSergioCosta: React.FC<AboutProps> = ({ bio, onOpenEditModal }) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Portrait */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#A8C7C2]/30 bg-[#73999C]/10 aspect-[4/5]">
            <img
              src="/images/sergio.jpeg"
              alt="Sérgio Costa"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/surf.png';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#273334]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-widest font-bold text-[#E4CEAD]">
                {t('Fundador & Head Coach', 'Founder & Head Coach', 'Gründer & Head Coach')}
              </span>
              <h3 className="text-2xl font-display font-bold uppercase tracking-wide">
                Sérgio Costa
              </h3>
            </div>
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#C96F4B] text-white p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-3">
            <Award className="w-8 h-8 text-[#E4CEAD]" />
            <div>
              <div className="text-2xl font-display font-bold leading-none">{bio.experienceYears}</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#F7F4EE]/90">
                {t('Anos de Experiência', 'Years Experience', 'Jahre Erfahrung')}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A8C7C2]/20 text-[#273334] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#73999C]" />
              <span>{t('Liderança & Paixão', 'Leadership & Passion', 'Leidenschaft & Führung')}</span>
            </div>
            {onOpenEditModal && (
              <button
                onClick={onOpenEditModal}
                className="inline-flex items-center gap-1.5 text-xs text-[#73999C] hover:text-[#C96F4B] font-semibold transition cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{t('Editar Perfil', 'Edit Profile', 'Profil bearbeiten')}</span>
              </button>
            )}
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#273334] uppercase tracking-wide">
            {bio.title || 'Sérgio Costa'}
          </h2>

          <p className="text-base sm:text-lg text-[#273334]/90 font-medium leading-relaxed">
            {bio.intro}
          </p>

          <p className="text-sm sm:text-base text-[#273334]/80 leading-relaxed">
            {bio.mainText}
          </p>

          {/* Quote Block */}
          {bio.quote && (
            <div className="p-5 rounded-2xl bg-[#E4CEAD]/20 border-l-4 border-[#C96F4B] italic text-[#273334]/90 text-sm">
              &ldquo;{bio.quote}&rdquo;
            </div>
          )}

          {/* Certifications and Modalities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-[#A8C7C2]/30 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#73999C]">
                <ShieldCheck className="w-4 h-4 text-[#C96F4B]" />
                <span>{t('Certificações', 'Certifications', 'Zertifizierungen')}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#273334]/85">
                {bio.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#73999C]" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#A8C7C2]/30 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#73999C]">
                <Sparkles className="w-4 h-4 text-[#C96F4B]" />
                <span>{t('Modalidades & Paixões', 'Modalities & Passions', 'Sportarten')}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#273334]/85">
                {bio.modalities.map((mod, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C96F4B]" />
                    <span>{mod}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
