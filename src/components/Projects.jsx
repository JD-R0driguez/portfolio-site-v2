import React from "react";
import HomePage from '../assets/project-1.png'
import Sketch from '../assets/project-2.png'
import AgeApp from '../assets/project-3.png'
import Bootstrap from '../assets/project-4.png'
import DrumKit from '../assets/project-5.png'
import './Projects.css'


export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="projects-title">
                <h4>Check Out Some</h4>
                <h1>Projects I've Built</h1>
            </div>
            <div className="section-projects">
            <div className="project-container left">
                    <div className="project-image-container">
                        <img src={HomePage} alt="A mac laptop image displaying photo of my portfolio website"/>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-name">Personal Website</h2>
                            <div className="text-overlap">
                                <p><span className="inline-color-text">Discover</span> the first version of my personal portfolio.
                                    Simple and clean design  meticulously crafted with React.
                                </p>
                            </div>
                            <h2 className="tech-stack"><pre>React      CSS3      HTML5      </pre></h2>
                            <div className="links">
                                <a href="https://github.com/JD-R0driguez/personal-site" target="_blank">
                                    <button className="repo-link">Source &lt;/&gt;</button>
                                </a>
                            </div>
                    </div>
                </div>
                <div className="project-container right">
                    <div className="project-image-container">
                        <img src={Sketch} alt="A mac laptop image displaying photo of my Pixel Drawing App"/>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-name">Pixel Drawing Application  </h2>
                            <div className="text-overlap">
                                <p><span className="inline-color-text">Interactive</span>  drawing app  where users can adjust pixel size, 
                                pick colors, and switch between hover<span className="inline-color-text">&</span>draw and click<span className="inline-color-text">&</span>draw modes.
                                </p>
                            </div>
                            <h2 className="tech-stack"><pre>JS    Dynamic-Grid-Generation   CSS3/HTML5</pre></h2>
                            <div className="links">
                                <a href="https://jd-r0driguez.github.io/etch-a-sketch/" target="_blank">
                                    <button className="live-code">Live
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="18" height="18">
                                            <g id="external-link">
                                                <path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z"/>
                                                <path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z"/>
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a href="https://github.com/JD-R0driguez/etch-a-sketch" target="_blank">
                                    <button className="repo-link">Source &lt;/&gt;</button>
                                </a>
                            </div>
                    </div>
                </div>
                <div className="project-container right">
                    <div className="project-image-container">
                        <img src={AgeApp} alt="A mac laptop image displaying photo of my Age Calculator App"/>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-name">Age Calculator Application  </h2>
                            <div className="text-overlap">
                                <p><span className="inline-color-text">User-friendly</span>  app allows users to input birthdate for instant, 
                                accurate age calculation with intuitive interface and real-time validation.
                                </p>
                            </div>
                            <h2 className="tech-stack"><pre>JS    Event-Handling   CSS3/HTML5</pre></h2>
                            <div className="links">
                                <a href="https://jd-r0driguez.github.io/age-calculator-app/" target="_blank">
                                    <button className="live-code">Live
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="18" height="18">
                                            <g id="external-link">
                                                <path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z"/>
                                                <path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z"/>
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a href="https://github.com/JD-R0driguez/age-calculator-app" target="_blank">
                                    <button className="repo-link">Source &lt;/&gt;</button>
                                </a>
                            </div>
                    </div>
                </div>
                <div className="project-container left">
                    <div className="project-image-container">
                        <img src={Bootstrap} alt="A mac laptop image displaying photo of Tin-Dog a landing page"/>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-name">Bootstrap Theme Page  </h2>
                            <div className="text-overlap">
                                <p><span className="inline-color-text">A colorful</span> landing page using Bootstrap framework capabilities
                                    to create an appealing website with animated background color.
                                </p>
                            </div>
                            <h2 className="tech-stack"><pre>Bootstrap      HTML5      CSS3      jQuery</pre></h2>
                            <div className="links">
                                <a href="https://jd-r0driguez.github.io/bootstrap-play-around-site/" target="_blank">
                                    <button className="live-code">Live
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="18" height="18">
                                            <g id="external-link">
                                                <path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z"/>
                                                <path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z"/>
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a href="https://github.com/JD-R0driguez/bootstrap-play-around-site" target="_blank">
                                    <button className="repo-link">Source &lt;/&gt;</button>
                                </a>
                            </div>
                    </div>
                </div>
                <div className="project-container right">
                    <div className="project-image-container">
                        <img src={DrumKit} alt="A mac laptop image displaying photo of ma drum kit application website"/>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-name">Keyboard Dum</h2>
                            <div className="text-overlap">
                                <p><span className="inline-color-text">Drum Kit App</span> developed with JavaScript, enables users to trigger 
                                drum sounds by key press events, featuring keys designed to display pressed states.
                                </p>
                            </div>
                            <h2 className="tech-stack"><pre>JS    Event-Handling   CSS3/HTML5</pre></h2>
                            <div className="links">
                                <a href="https://jd-r0driguez.github.io/simple-drum-javascript/" target="_blank">
                                    <button className="live-code">Live
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="18" height="18">
                                            <g id="external-link">
                                                <path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z"/>
                                                <path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z"/>
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                                <a href="https://github.com/JD-R0driguez/drum-kit" target="_blank">
                                    <button className="repo-link">Source &lt;/&gt;</button>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}