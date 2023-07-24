import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

import { ReactComponent as LightTheme } from '../../assets/img/icons/light.svg';
import { ReactComponent as DarkTheme } from '../../assets/img/icons/dark.svg';

const ThemeSwitch = () => {
    // Consume the theme and setTheme function from the ThemeContext
    const { theme, changeTheme } = useContext(ThemeContext);

    const handleThemeChange = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';

        // Update the theme using the changeTheme function
        changeTheme(newTheme);
        // Save the updated theme to localStorage
        localStorage.setItem('theme', newTheme);
    };

    const buttonImage = theme === 'light' ? <DarkTheme /> : <LightTheme />;

    return (
        <div className='theme-switch'>
            <button onClick={handleThemeChange}>
                {buttonImage}
            </button>
        </div>
    );
};

export default ThemeSwitch;