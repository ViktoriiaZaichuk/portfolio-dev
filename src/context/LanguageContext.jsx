import React, { createContext, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n';

// Create the LanguageContext for providing language state and functions
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Retrieve the stored language from local storage
  const storedLanguage = localStorage.getItem('language');
  // Initialize the language state with the stored language or 'en' (English) as the default
  const [language, setLanguage] = useState(storedLanguage || 'en');
  
  // Change the language in the translation context and 
  // store the new language in local storage whenever the language state changes
  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  }, [language]);

  // Function to update the language state
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  // Create the value object to be provided to the nested components
  const value = {
    language,
    changeLanguage,
  };
  
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    </I18nextProvider>
  );
}

export default LanguageContext;