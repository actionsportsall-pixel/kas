import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#E4CEAD]/25 relative overflow-hidden border-b border-[#73999C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="font-display text-5xl sm:text-6xl text-[#273334] tracking-wide uppercase">
            {t('AVALIAÇÕES &', 'REVIEWS &', 'BEWERTUNGEN &')} <span className="text-[#C96F4B]">{t('TESTEMUNHOS', 'TESTIMONIALS', 'ERFAHRUNGSBERICHTE')}</span>
          </h2>

          <p className="text-[#273334]/80 text-base sm:text-lg leading-relaxed font-normal">
            {t(
              'A satisfação, evolução e segurança dos nossos clientes são a melhor prova da qualidade da KAS Outdoor Experiences.',
              'The satisfaction, progression, and safety of our clients are the finest proof of KAS Outdoor Experiences quality.',
              'Die Zufriedenheit, Fortschritte und Sicherheit unserer Kunden sind der beste Beweis für die Qualität von KAS Outdoor Experiences.'
            )}
          </p>

          {/* Google Reviews Badge */}
          <div className="pt-2">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2 bg-[#F7F4EE] border border-[#73999C]/25 text-[#273334] text-xs font-bold shadow-xs rounded-xl uppercase tracking-wider hover:border-[#73999C] transition-colors"
            >
              <div className="flex items-center text-[#C96F4B] gap-1">
                <Star className="w-3.5 h-3.5 fill-[#C96F4B]" />
                <Star className="w-3.5 h-3.5 fill-[#C96F4B]" />
                <Star className="w-3.5 h-3.5 fill-[#C96F4B]" />
                <Star className="w-3.5 h-3.5 fill-[#C96F4B]" />
                <Star className="w-3.5 h-3.5 fill-[#C96F4B]" />
              </div>
              <span>{t('Classificação', 'Rating', 'Bewertung')} <strong>4.9/5.0</strong> {t('no Google Reviews', 'on Google Reviews', 'bei Google Reviews')}</span>
              <span className="text-[#C96F4B] text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* Testimonial Cards Grid - Sand Beige Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-[#F7F4EE] p-6 rounded-2xl border border-[#E4CEAD]/70 flex flex-col justify-between space-y-4 shadow-xs hover:border-[#73999C]/40 transition-all hover:translate-y-[-2px]"
            >
              <div className="space-y-3">
                {/* Stars & Activity */}
                <div className="flex items-center justify-between border-b border-[#73999C]/15 pb-3">
                  <div className="flex items-center gap-1 text-[#C96F4B]">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C96F4B]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#73999C] uppercase tracking-wider">
                    {test.date}
                  </span>
                </div>

                <span className="inline-block px-2.5 py-1 bg-[#A8C7C2]/40 text-[#273334] text-[10px] font-bold uppercase tracking-wider rounded-lg">
                  {test.activity}
                </span>

                <p className="text-[#273334]/85 text-xs leading-relaxed italic">
                  "{test.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-3 border-t border-[#73999C]/15 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#A8C7C2] text-[#273334] font-bold flex items-center justify-center text-xs font-display shadow-xs">
                  {test.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#273334] flex items-center gap-1 uppercase tracking-wider">
                    <span>{test.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C96F4B] inline" />
                  </h4>
                  <p className="text-[10px] text-[#273334]/60 uppercase tracking-wider font-semibold">{t('Cliente Verificado', 'Verified Client', 'Verifizierter Kunde')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


