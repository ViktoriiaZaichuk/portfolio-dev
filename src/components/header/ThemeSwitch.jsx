import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

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

    return (
        <div>
            <button onClick={handleThemeChange}>
                Switch
            </button>
        </div>
    );
};

export default ThemeSwitch;