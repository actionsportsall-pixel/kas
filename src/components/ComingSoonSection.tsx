import React, { useState } from 'react';
import { FUTURE_SERVICES } from '../data/mockData';
import { Sparkles, Bike, MapPin, Zap, Compass, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ComingSoonSection: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bike':
        return Bike;
      case 'MapPin':
        return MapPin;
      case 'Zap':
        return Zap;
      default:
        return Compass;
    }
  };

  const handleSubmitNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-24 bg-[#F8F6F0] relative overflow-hidden border-b border-[#2B2F33]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3E7DB] border border-[#2B2F33]/15 text-[#6B4F3A] text-[11px] font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span>{t('NOVAS AVENTURAS EM BREVE', 'NEW ADVENTURES COMING SOON', 'NEUE ABENTEUER DEMNÄCHST')}</span>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl text-[#2B2F33] tracking-wide uppercase">
            COMING <span className="text-[#2B2F33]">SOON</span>
          </h2>

          <p className="text-[#2B2F33]/80 text-base sm:text-lg leading-relaxed font-normal">
            {t(
              'Expandimos constantemente os horizontes da Action Sports. Fica atento às próximas novidades sobre duas rodas!',
              'We are constantly expanding Action Sports horizons. Stay tuned for upcoming two-wheel adventures!',
              'Wir erweitern ständig die Horizonte von Action Sports. Bleiben Sie dran für kommende Abenteuer auf zwei Rädern!'
            )}
          </p>
        </div>

        {/* Future Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FUTURE_SERVICES.map((srv) => {
            const Icon = getIcon(srv.iconName);
            return (
              <div
                key={srv.id}
                className="bg-[#F3E7DB] p-6 rounded-sm border border-[#2B2F33]/15 flex flex-col justify-between shadow-sm hover:border-[#2B2F33]/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#2B2F33]/10 pb-3 mb-4">
                    <span className="text-[10px] font-bold text-[#E07A5F] uppercase tracking-wider bg-[#F8F6F0] px-2 py-0.5 rounded-sm border border-[#2B2F33]/10">
                      {srv.badge}
                    </span>
                    <div className="w-8 h-8 rounded-sm bg-[#A7CFC6] text-[#2B2F33] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl text-[#2B2F33] uppercase tracking-wider mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-[#2B2F33]/70 text-xs leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter Form Box */}
        <div className="max-w-2xl mx-auto p-8 bg-[#F3E7DB] border border-[#2B2F33]/20 rounded-sm shadow-md text-center space-y-6">
          <div className="space-y-2">
            <h3 className="font-display text-3xl text-[#2B2F33] uppercase tracking-wider">
              {t('QUERES SER O PRIMEIRA A SABER DAS NOVIDADES?', 'WANT TO BE THE FIRST TO KNOW?', 'MÖCHTEN SIE ALS ERSTER DAVON ERFAHREN?')}
            </h3>
            <p className="text-[#2B2F33]/80 text-xs">
              {t('Deixa o teu email para receberes acesso prioritário e condições exclusivas de lançamento.', 'Leave your email to get priority access and exclusive launch terms.', 'Hinterlassen Sie Ihre E-Mail-Adresse für bevorzugten Zugang und exklusive Eröffnungsangebote.')}
            </p>
          </div>

          {submitted ? (
            <div className="p-4 bg-[#F8F6F0] border border-[#E07A5F] text-[#2B2F33] flex items-center justify-center gap-3 rounded-sm">
              <CheckCircle2 className="w-5 h-5 text-[#E07A5F] shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider">{t('Obrigado! Irá receber todas as novidades no seu email.', 'Thank you! You will receive updates in your email.', 'Vielen Dank! Sie erhalten alle Neuigkeiten per E-Mail.')}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmitNewsletter} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('Insere o teu endereço de email...', 'Enter your email address...', 'Geben Sie Ihre E-Mail-Adresse ein...')}
                className="flex-1 px-4 py-3 rounded-sm bg-[#F8F6F0] border border-[#2B2F33]/20 text-[#2B2F33] placeholder-[#2B2F33]/50 text-xs focus:outline-none focus:border-[#2B2F33] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-sm bg-[#A7CFC6] hover:bg-[#8DBEB4] text-[#2B2F33] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t('Subscrever', 'Subscribe', 'Abonnieren')}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

