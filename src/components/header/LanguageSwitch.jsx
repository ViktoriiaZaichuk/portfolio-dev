import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
    const { i18n } = useTranslation();


    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage); // Save selected language
      };
  
    return (
      <div>
        <select onChange={handleLanguageChange} defaultValue={i18n.language}>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>
    );
}

export default LanguageSwitch;