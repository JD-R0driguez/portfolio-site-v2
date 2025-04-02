import React from "react";
import 'animate.css';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, toggleTheme }) {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleClick = (sectionID, event) => {
        event.preventDefault();
        scrollToSection(sectionID);
    };

    return (
        <nav id="home" className="nav-bar">
            <div className="nav-links">
                <ul>
                    <li className="about animate__animated animate__fadeInDown">
                        <a onClick={(e) => handleClick('about', e)} className="header-anchor-tag" href="#about">About</a>
                    </li>
                    <li className="projects animate__animated animate__fadeInDown">
                        <a onClick={(e) => handleClick('projects', e)} className="header-anchor-tag" href="#projects">Projects</a>
                    </li>
                    <li className="toggle animate__animated animate__fadeInDown">
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
