import React from 'react';
import { Waves, Mail, Instagram, ExternalLink, ShieldCheck, FileText, Cookie } from 'lucide-react';
import { LegalDocType } from './LegalModal';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate?: (page: string) => void;
  onOpenLegalModal: (type: LegalDocType) => void;
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegalModal,
  onOpenBookingModal,
}) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <footer className="bg-[#273334] text-[#F7F4EE] pt-16 pb-12 relative overflow-hidden border-t border-[#73999C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="flex items-center gap-2.5">
              <div className="flex flex-col leading-none">
                <span className="font-display text-3xl tracking-wider text-white uppercase font-bold">
                  KAS
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#A8C7C2] font-semibold mt-0.5">
                  Beyond Sport. Beyond Expectations.
                </span>
              </div>
            </a>

            <p className="text-xs text-[#F7F4EE]/75 leading-relaxed max-w-sm">
              {t(
                'Criamos experiências premium de desporto, aventura e natureza concebidas para quem procura muito mais do que uma simples atividade. O oceano é a nossa origem. A natureza é o nosso palco.',
                'We design premium outdoor, adventure, and sports experiences tailored for those seeking much more than a routine activity. The ocean is our origin. Nature is our stage.',
                'Wir gestalten erstklassige Outdoor-, Abenteuer- und Sporterlebnisse für Menschen, die mehr als eine einfache Aktivität suchen. Der Ozean ist unser Ursprung. Die Natur ist unsere Bühne.'
              )}
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#C96F4B] text-white hover:text-[#C96F4B] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:actionsports.all@gmail.com"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#A8C7C2] text-white hover:text-[#A8C7C2] flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-[#A8C7C2] uppercase tracking-wider">
              {t('LINKS RÁPIDOS', 'QUICK LINKS', 'SCHNELLE LINKS')}
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="hover:text-[#A8C7C2] transition-colors uppercase tracking-wider text-white/80">
                  {t('Início', 'Home', 'Startseite')}
                </a>
              </li>
              <li>
                <a href="#surf" onClick={(e) => handleNavClick(e, 'surf')} className="hover:text-[#A8C7C2] transition-colors uppercase tracking-wider text-white/80">
                  Surf
                </a>
              </li>
              <li>
                <a href="#padel" onClick={(e) => handleNavClick(e, 'padel')} className="hover:text-[#A8C7C2] transition-colors uppercase tracking-wider text-white/80">
                  Padel
                </a>
              </li>
              <li>
                <a href="#bootcamp" onClick={(e) => handleNavClick(e, 'bootcamp')} className="hover:text-[#A8C7C2] transition-colors uppercase tracking-wider text-white/80">
                  Surf Boot Camp
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')} className="hover:text-[#A8C7C2] transition-colors uppercase tracking-wider text-white/80">
                  {t('A Equipa KAS', 'The KAS Team', 'Das KAS-Team')}
                </a>
              </li>
              <li>
                <a href="#teambuilding" onClick={(e) => handleNavClick(e, 'teambuilding')} className="hover:text-[#A8C7C2] transition-colors uppercase tracking-wider text-white/80">
                  Team Building
                </a>
              </li>
              <li>
                <a href="#contactos" onClick={(e) => handleNavClick(e, 'contactos')} className="hover:text-[#A8C7C2] transition-colors uppercase tracking-wider text-white/80">
                  {t('Contactos & Reservas', 'Contacts & Bookings', 'Kontakt & Buchungen')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-[#A8C7C2] uppercase tracking-wider">
              {t('CONTACTO DIRETO', 'DIRECT CONTACT', 'DIREKTKONTAKT')}
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C96F4B]" />
                <a href="mailto:actionsports.all@gmail.com" className="hover:text-[#A8C7C2] transition-colors text-white/80">
                  actionsports.all@gmail.com
                </a>
              </li>
            </ul>

            <button
              onClick={onOpenBookingModal}
              className="mt-3 btn-terracotta text-xs py-2 px-4 shadow-xs"
            >
              <span>{t('Reservar agora', 'Book now', 'Jetzt buchen')}</span>
            </button>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-[#A8C7C2] uppercase tracking-wider">
              {t('INFORMAÇÃO LEGAL', 'LEGAL INFORMATION', 'RECHTLICHE INFORMATIONEN')}
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <button
                  onClick={() => onOpenLegalModal('privacidade')}
                  className="hover:text-[#A8C7C2] transition-colors text-left flex items-center gap-1.5 uppercase tracking-wider text-white/80"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A8C7C2]" />
                  <span>{t('Política de Privacidade', 'Privacy Policy', 'Datenschutz-Bestimmungen')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('cookies')}
                  className="hover:text-[#A8C7C2] transition-colors text-left flex items-center gap-1.5 uppercase tracking-wider text-white/80"
                >
                  <Cookie className="w-3.5 h-3.5 text-[#C96F4B]" />
                  <span>{t('Política de Cookies', 'Cookie Policy', 'Cookie-Richtlinie')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('termos')}
                  className="hover:text-[#A8C7C2] transition-colors text-left flex items-center gap-1.5 uppercase tracking-wider text-white/80"
                >
                  <FileText className="w-3.5 h-3.5 text-[#A8C7C2]" />
                  <span>{t('Termos e Condições', 'Terms & Conditions', 'AGB')}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('reclamacoes')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 text-[#C96F4B] font-bold uppercase tracking-wider"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#C96F4B]" />
                  <span>{t('Livro de Reclamações', 'Complaints Book', 'Beschwerdebuch')}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/50 uppercase tracking-widest font-semibold">
          <p>
            © {currentYear} <strong>KAS — Beyond Sport. Beyond Expectations.</strong> {t('Todos os direitos reservados.', 'All rights reserved.', 'Alle Rechte vorbehalten.')}
          </p>

          <p className="text-[#A8C7C2]">
            Beyond Sport. Beyond Expectations.
          </p>
        </div>
      </div>
    </footer>
  );
};



