import React, { createContext, useEffect, useState } from 'react';
import i18n from 'i18next';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const storedLanguage = localStorage.getItem('language');
    const [language, setLanguage] = useState(storedLanguage || 'en');
  
    useEffect(() => {
      i18n.changeLanguage(language);
      localStorage.setItem('language', language);
    }, [language]);
  
    const changeLanguage = (newLanguage) => {
      setLanguage(newLanguage);
    };
  
    const value = {
      language,
      changeLanguage,
    };
  
    return (
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    );
  }

export default LanguageContext;