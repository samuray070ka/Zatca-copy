import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem('lang') || 'en';
  });

  // Har safar lang o‘zgarsa, uni localStorage’ga yozamiz
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Custom setLang -> localStorage + reload
  const setLang = (newLang) => {
    setLangState(newLang); // state ni yangilash
    localStorage.setItem('lang', newLang); // qo‘shimcha ehtiyot chorasi
    window.location.reload(); // sahifani yangilash
  };

  const value = {
    lang,
    setLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);