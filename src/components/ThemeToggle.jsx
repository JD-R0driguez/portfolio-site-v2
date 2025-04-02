import React from 'react';
import DarkMode from '../assets/night-mode.svg';
import LightMode from '../assets/day-mode.svg';
import './ThemeToggle.css';

export default function ThemeToggle({ theme, toggleTheme }) {
    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
        >
            {theme === 'light' ? (
                <img src={DarkMode} alt="Dark Mode Icon" className="theme-icon" />
            ) : (
                <img src={LightMode} alt="Light Mode Icon" className="theme-icon" />
            )}
        </button>
    );
}
