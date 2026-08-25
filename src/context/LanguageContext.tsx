import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en' | 'de';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (pt: string, en: string, de?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('kas_lang');
    return (saved === 'en' || saved === 'pt' || saved === 'de') ? saved : 'pt';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('kas_lang', newLang);
  };

  const toggleLang = () => {
    if (lang === 'pt') setLang('en');
    else if (lang === 'en') setLang('de');
    else setLang('pt');
  };

  const t = (pt: string, en: string, de?: string): string => {
    if (lang === 'de') return de || en || pt;
    if (lang === 'en') return en;
    return pt;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
