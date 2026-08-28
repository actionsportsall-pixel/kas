import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Calendar, Phone, Mail, SlidersHorizontal, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBookingModal: (activityKey?: string) => void;
  onOpenEditModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBookingModal, onOpenEditModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  const languages = [
    { code: 'pt', name: 'Português' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const experienceLinks = [
    { name: t('SURF', 'SURF', 'SURF'), id: 'surf', tag: t('Ocean & Guiding', 'Ocean & Guiding', 'Ozean & Guiding') },
    { name: t('PADEL', 'PADEL', 'PADEL'), id: 'padel', tag: t('Aulas & Torneios', 'Lessons & Tournaments', 'Kurse & Turniere') },
    { name: t('BOOT CAMPS', 'BOOT CAMPS', 'BOOTCAMPS'), id: 'bootcamp', tag: t('Imersão & Treino', 'Immersion & Training', 'Immersion & Training') },
    { name: t('TEAM BUILDING', 'TEAM BUILDING', 'TEAMBUILDING'), id: 'teambuilding', tag: t('Retiros & Empresas', 'Retreats & Corporate', 'Retreats & Firmen') },
  ];

  const isExpActive = experienceLinks.some((link) => link.id === currentPage) || currentPage === 'experiencias';

  const handleNavClick = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    onNavigate(pageId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F4EE]/35 backdrop-blur-md border-b border-[#73999C]/20 py-3 shadow-xs'
          : 'bg-[#F7F4EE]/25 backdrop-blur-md border-b border-[#73999C]/15 py-4 sm:py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - KAS Luxury Outdoor Experiences */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, 'inicio')}
          className="flex items-center gap-2.5 group focus:outline-none shrink-0"
        >
          <div className="flex flex-col leading-none">
            <span className="font-display text-4xl sm:text-5xl tracking-widest text-[#273334] font-bold uppercase">
              KAS
            </span>
            <div className="flex flex-col text-[8px] uppercase tracking-[0.22em] text-[#73999C] font-semibold leading-[1.15] mt-0.5">
              <span>LUXURY</span>
              <span>OUTDOOR</span>
              <span>EXPERIENCES</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* INÍCIO / HOME */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, 'inicio')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-2xl flex items-center justify-center ${
              currentPage === 'inicio'
                ? 'bg-[#73999C] text-white border-b-2 border-[#C96F4B] shadow-xs'
                : 'bg-[#73999C]/15 text-[#273334] border border-[#73999C]/25 hover:bg-[#73999C] hover:text-white'
            }`}
          >
            {t('INÍCIO', 'HOME', 'START')}
          </a>

          {/* EXPERIÊNCIAS Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(e, 'experiencias');
              }}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-2xl flex items-center gap-1.5 justify-center cursor-pointer ${
                isExpActive || dropdownOpen
                  ? 'bg-[#73999C] text-white border-b-2 border-[#C96F4B] shadow-xs'
                  : 'bg-[#73999C]/15 text-[#273334] border border-[#73999C]/25 hover:bg-[#73999C] hover:text-white'
              }`}
            >
              <span>{t('EXPERIÊNCIAS', 'EXPERIENCES', 'ERLEBNISSE')}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#C96F4B]' : (isExpActive ? 'text-white' : 'text-[#73999C]')}`} />
            </button>

            {/* Dropdown Menu Box with seamless pt-1.5 top padding container to prevent mouseLeave flicker */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 pt-1.5 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-[#F7F4EE] border border-[#73999C]/30 rounded-2xl shadow-2xl py-1.5 overflow-hidden divide-y divide-[#73999C]/10">
                  {experienceLinks.map((item) => {
                    const isActive = currentPage === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={`px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors ${
                          isActive
                            ? 'bg-[#73999C] text-white border-l-4 border-[#C96F4B]'
                            : 'text-[#273334] hover:bg-[#73999C]/20'
                        }`}
                      >
                        <div className="flex flex-col leading-tight">
                          <span>{item.name}</span>
                          <span className={`text-[9px] font-medium normal-case ${isActive ? 'text-white/80' : 'text-[#73999C]'}`}>{item.tag}</span>
                        </div>
                        <span className={isActive ? "text-[#C96F4B] font-black" : "text-[#73999C]"}>→</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* SOBRE / ABOUT */}
          <a
            href="#sobre"
            onClick={(e) => handleNavClick(e, 'sobre')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-2xl flex items-center justify-center ${
              currentPage === 'sobre'
                ? 'bg-[#73999C] text-white border-b-2 border-[#C96F4B] shadow-xs'
                : 'bg-[#73999C]/15 text-[#273334] border border-[#73999C]/25 hover:bg-[#73999C] hover:text-white'
            }`}
          >
            {t('SOBRE', 'ABOUT', 'ÜBER UNS')}
          </a>

          {/* CONTACTOS / CONTACTS */}
          <a
            href="#contactos"
            onClick={(e) => handleNavClick(e, 'contactos')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-2xl flex items-center justify-center ${
              currentPage === 'contactos'
                ? 'bg-[#73999C] text-white border-b-2 border-[#C96F4B] shadow-xs'
                : 'bg-[#73999C]/15 text-[#273334] border border-[#73999C]/25 hover:bg-[#73999C] hover:text-white'
            }`}
          >
            {t('CONTACTOS', 'CONTACTS', 'KONTAKT')}
          </a>
        </nav>

        {/* Header Right CTAs + Language Switcher */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Language Selector Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="px-3.5 py-2 rounded-2xl bg-[#73999C]/15 hover:bg-[#73999C]/25 text-[#273334] border border-[#73999C]/30 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              aria-label="Selecionar Idioma"
            >
              <span>{currentLang.code.toUpperCase()}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-[#73999C] ${langDropdownOpen ? 'rotate-180 text-[#C96F4B]' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#F7F4EE] backdrop-blur-md border border-[#73999C]/30 rounded-2xl shadow-lg py-1.5 z-50 overflow-hidden animate-in fade-in slide-in-from-top-1">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLang(item.code as 'pt' | 'en' | 'de');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors ${
                      lang === item.code
                        ? 'bg-[#73999C] text-white'
                        : 'text-[#273334] hover:bg-[#73999C]/15'
                    }`}
                  >
                    <span>{item.name}</span>
                    {lang === item.code && <span className="text-[#C96F4B] text-xs font-black">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => onOpenBookingModal()}
            id="nav-reservar-btn"
            className="bg-[#C96F4B] hover:bg-[#B05B3A] text-white px-5 py-2.5 rounded-2xl font-bold uppercase tracking-wider text-xs shadow-md shadow-[#C96F4B]/20 transition-all flex items-center gap-2.5 text-left leading-tight"
          >
            <Calendar className="w-4 h-4 text-white shrink-0" />
            <div className="flex flex-col text-[11px] font-bold tracking-wider leading-tight">
              <span>{t('RESERVAR', 'BOOK', 'BUCHEN')}</span>
              <span>{t('AGORA', 'NOW', 'JETZT')}</span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Toggle Button & Lang */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="px-2.5 py-2 rounded-xl bg-[#73999C]/15 hover:bg-[#73999C]/25 text-[#273334] border border-[#73999C]/30 text-[11px] font-bold uppercase flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>{currentLang.code.toUpperCase()}</span>
              <ChevronDown className={`w-3 h-3 text-[#73999C] ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-[#F7F4EE] backdrop-blur-md border border-[#73999C]/30 rounded-xl shadow-lg py-1 z-50 overflow-hidden">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLang(item.code as 'pt' | 'en' | 'de');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-[11px] font-bold uppercase tracking-wider flex items-center justify-between transition-colors ${
                      lang === item.code
                        ? 'bg-[#73999C] text-white'
                        : 'text-[#273334] hover:bg-[#73999C]/15'
                    }`}
                  >
                    <span>{item.name}</span>
                    {lang === item.code && <span className="text-xs">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => onOpenBookingModal()}
            className="bg-[#C96F4B] text-white text-[11px] font-bold uppercase tracking-wider py-2 px-3.5 rounded-xl flex items-center gap-1.5 shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t('RESERVAR', 'BOOK')}</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#E4CEAD]/40 text-[#273334] border border-[#73999C]/20 focus:outline-none"
            aria-label="Alternar Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F4EE] border-b border-[#73999C]/20 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, 'inicio')}
              className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-between ${
                currentPage === 'inicio'
                  ? 'bg-[#73999C] text-white border-l-4 border-[#C96F4B]'
                  : 'bg-[#73999C]/15 text-[#273334] hover:bg-[#73999C] hover:text-white'
              }`}
            >
              <span>{t('INÍCIO', 'HOME')}</span>
              <span className="text-[#C96F4B] text-xs">→</span>
            </a>

            {/* Mobile Experiences Group */}
            <div className="space-y-1.5 bg-[#73999C]/10 rounded-2xl p-2.5 border border-[#73999C]/20">
              {experienceLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#73999C] text-white border-l-4 border-[#C96F4B]'
                        : 'text-[#273334] bg-white/50 hover:bg-[#73999C]/20'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-[#C96F4B] text-xs font-bold">→</span>
                  </a>
                );
              })}
            </div>

            <a
              href="#sobre"
              onClick={(e) => handleNavClick(e, 'sobre')}
              className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-between ${
                currentPage === 'sobre'
                  ? 'bg-[#73999C] text-white border-l-4 border-[#C96F4B]'
                  : 'bg-[#73999C]/15 text-[#273334] hover:bg-[#73999C] hover:text-white'
              }`}
            >
              <span>{t('SOBRE', 'ABOUT')}</span>
              <span className="text-[#C96F4B] text-xs">→</span>
            </a>

            <a
              href="#contactos"
              onClick={(e) => handleNavClick(e, 'contactos')}
              className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-between ${
                currentPage === 'contactos'
                  ? 'bg-[#73999C] text-white border-l-4 border-[#C96F4B]'
                  : 'bg-[#73999C]/15 text-[#273334] hover:bg-[#73999C] hover:text-white'
              }`}
            >
              <span>{t('CONTACTOS', 'CONTACTS')}</span>
              <span className="text-[#C96F4B] text-xs">→</span>
            </a>
          </div>

          <div className="pt-2 border-t border-[#73999C]/15 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full bg-[#C96F4B] hover:bg-[#B05B3A] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('RESERVAR AGORA', 'BOOK NOW')}</span>
            </button>

            <a
              href="#contactos"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigate('contactos');
              }}
              className="w-full py-2.5 rounded-xl bg-[#E4CEAD]/40 border border-[#73999C]/20 text-[#273334] font-semibold text-xs text-center flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-[#C96F4B]" />
              <span>{t('Contactos & Pedidos', 'Contacts & Inquiries')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};




