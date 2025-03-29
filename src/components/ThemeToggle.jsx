import React, { useEffect, useState } from 'react';
import DarkMode from '../assets/night-mode.svg'
import LightMode from '../assets/day-mode.svg'
import './ThemeToggle.css'

export default function ThemeToggle() {

    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(prevState => {
            return prevState === 'light' ? 'dark' : 'light';
        });
    }


    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
        >
            {theme === 'light' ? <img src={DarkMode} alt="Dark Mode Icon" className="theme-icon" /> : <img src={LightMode} alt="Light Mode Icon" className="theme-icon" />}

        </button>
    );
}

