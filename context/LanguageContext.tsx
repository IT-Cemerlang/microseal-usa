
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (idKey: string, enKey: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Hardcoded to 'en' to remove Indonesian option
  const [language] = useState<Language>('en');

  const t = (_idText: string, enText: string) => {
    return enText;
  };

  const setLanguage = () => {
    console.warn("Language switching is disabled. English is the primary system language.");
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
