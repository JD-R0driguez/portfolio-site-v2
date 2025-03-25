import React from "react";
import 'animate.css';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {

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
                        <ThemeToggle />
                    </li>

                </ul>


                {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a
                        href="https://jd-r0driguez.github.io/resume/Juan%20D%20Rodriguez.pdf"
                        className="header-button-resume"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="motion-button resume animate__animated animate__fadeInDown">
                            Resume
                        </button>
                    </a>
                </div> */}
            </div>
        </nav>
    );
}
