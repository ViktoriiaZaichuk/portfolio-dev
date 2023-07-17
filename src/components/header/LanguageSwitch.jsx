import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageContext from '../../context/LanguageContext';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const { language, changeLanguage } = useContext(LanguageContext);

  /**
   * Function to handle the language change event.
   * It updates the language state, changes the language in the translation context,
   * and stores the selected language in local storage.
   */
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    i18n.changeLanguage(selectedLanguage);
    changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage); // Save selected language
  };

  return (
    <div>
      <select onChange={handleLanguageChange} value={language}>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;