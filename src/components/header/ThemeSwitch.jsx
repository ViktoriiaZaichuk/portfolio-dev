import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Switch
        </button>
    </div>
  );
};

export default ThemeSwitch;