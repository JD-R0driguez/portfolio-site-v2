import React from "react";
import 'animate.css';
import './Navbar.css'


export default function Navbar(){

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth', block: 'start'});
    };

    const handleClick = (sectionID, event)=>{
        event.preventDefault();
        scrollToSection(sectionID);
    }

    const goToPage = () => {
        window.location.href = '.';
    };

    return (
        <nav id="home" className="nav-bar">
            <div>
                <div className="logo-image">                
                    <button onClick={goToPage} className="motion-button logo animate__animated animate__fadeIn">JR</button>
                </div>
            </div>
            <div className="nav-links">
                <ul>
                    <li className="about animate__animated animate__fadeInDown">
                        <a onClick={(e) => handleClick('about', e)} className="header-anchor-tag" href="">About</a>
                    </li>
                    <li className="projects animate__animated animate__fadeInDown">
                        <a onClick={(e) => handleClick('projects', e)} className="header-anchor-tag" href="">Projects</a>
                    </li>
                    <li className="contact about animate__animated animate__fadeInDown">
                        <a onClick={(e) => handleClick('contact', e)} className="header-anchor-tag" href="">Contact</a>
                    </li>
                </ul>
                <a href="https://jd-r0driguez.github.io/resume/Juan%20D%20Rodriguez.pdf" className="header-button-resume" target="_blank"><button className="motion-button resume animate__animated animate__fadeInDown">Resume</button></a>
            </div>
        </nav>
    )
}