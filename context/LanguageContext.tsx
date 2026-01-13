"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import th from '../dictionaries/th.json';
import en from '../dictionaries/en.json';

const translations = { th, en };

type Language = 'th' | 'en';

interface LanguageContextType {
  lang: Language;
  t: any; // หรือระบุ Type ตามโครงสร้าง JSON
  switchLanguage: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const switchLanguage = (l: Language) => {
    setLang(l);
    localStorage.setItem('preferred_lang', l); // จำภาษาที่เลือกไว้
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred_lang') as Language;
    if (savedLang) setLang(savedLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};