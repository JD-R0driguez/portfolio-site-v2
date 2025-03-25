import React, { useEffect } from "react";
import HomePage from '../assets/project-1.png'
import HonestAdvisor from '../assets/project-2.png'
import DeckoratorsCostCalculator from '../assets/project-3.png'
import DeckoratorsBalusterCalculator from '../assets/project-4.png'
import './Projects.css'


export default function Projects() {

    return (
        <section id="projects" className="projects">
            <div className="projects-title">
                <h2>Check out some of my projects</h2>
            </div>
            <div className="section-projects">
                <div className="project-container left">
                    <div className="project-image-container">
                        <img
                            src={HonestAdvisor}
                            alt="Preview of Honest Advisor web app displaying stock analysis and AI-driven recommendations."
                            className="project-image"
                        />
                        <a
                            href="https://honest-advisor.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="center-link"
                            aria-label="Visit Honest Advisor live site"
                        ></a>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-name">Honest Advisor</h2>
                        <div className="text-overlap">
                            <p>
                                <span className="inline-color-text">Honest Advisor</span> is a playful, data-driven app that provides real-time S&P 500 stock insights using Polygon.io, and OpenAI’s. Users can explore historical stock data and receive recommendations to buy, sell, or hold.
                            </p>
                        </div>
                        <h2 className="tech-stack">
                            <pre>JavaScript   OpenAI   Polygon.io   Vercel   CSS3/HTML5</pre>
                        </h2>
                        <div className="links">
                            <a href="https://honest-advisor.vercel.app/" target="_blank">
                                <button className="live-code">Live
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="18" height="18">
                                        <g id="external-link">
                                            <path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z" />
                                            <path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z" />
                                        </g>
                                    </svg>
                                </button>
                            </a>
                            <a href="https://github.com/JD-R0driguez/honest-advisor-2.0" target="_blank">
                                <button className="repo-link">Source &lt;/&gt;</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-container right">
                    <div className="project-image-container">
                        <img
                            src={HomePage}
                            alt="Screenshot of Portfolio Site showcasing web development projects."
                            className="project-image"
                        />
                        <a
                            href="https://jd-r0driguez.github.io/home-page/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="center-link"
                            aria-label="Visit Portfolio Site Repository"
                        ></a>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-name">Portfolio Site</h2>
                        <div className="text-overlap">
                            <p>
                                <span className="inline-color-text">Portfolio Site</span> is a personal website developed to showcase web development projects and skills, featuring an interactive and responsive design.
                            </p>
                        </div>
                        <h2 className="tech-stack">
                            <pre>React   Vite   JavaScript   CSS3   HTML5</pre>
                        </h2>
                        <div className="links">
                            <a href="https://jd-r0driguez.github.io/home-page/" target="_blank" rel="noopener noreferrer">
                                <button className="live-code">Live
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="18" height="18">
                                        <g id="external-link">
                                            <path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z" />
                                            <path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z" />
                                        </g>
                                    </svg>
                                </button>
                            </a>
                            <a href="https://github.com/JD-R0driguez/home-page" target="_blank" rel="noopener noreferrer">
                                <button className="repo-link">Source &lt;/&gt;</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-container right">
                    <div className="project-image-container">
                        <img
                            src={DeckoratorsCostCalculator}
                            alt="Preview of Deckorators Cost Calculator web app displaying deck cost estimation interface."
                            className="project-image"
                        />
                        <a
                            href="https://www.deckorators.com/pages/cost-calculator"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="center-link"
                            aria-label="Visit Deckorators Cost Calculator live site"
                        ></a>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-name">Deckorators Cost Calculator</h2>
                        <div className="text-overlap">
                            <p>
                                <span className="inline-color-text">Deckorators Cost Calculator</span> is an interactive web app that helps users estimate materials for their deck. It provides quick cost approximations based on size and materials to assist early planning.
                            </p>
                        </div>
                        <h2 className="tech-stack">
                            <pre>JavaScript   Liquid   Shopify   CSS3   HTML5</pre>
                        </h2>
                        <div className="links">
                            <a href="https://www.deckorators.com/pages/cost-calculator" target="_blank" rel="noopener noreferrer">
                                <button className="live-code">Live
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="18" height="18">
                                        <g id="external-link">
                                            <path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z" />
                                            <path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z" />
                                        </g>
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-container left">
                    <div className="project-image-container">
                        <img
                            src={DeckoratorsBalusterCalculator}
                            alt="Preview of Deckorators Baluster Calculator web app displaying baluster estimation interface."
                            className="project-image"
                        />
                        <a
                            href="https://www.deckorators.com/pages/baluster-calculator"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="center-link"
                            aria-label="Visit Deckorators Baluster Calculator live site"
                        ></a>
                    </div>
                    <div className="project-text-container">
                        <h2 className="project-name">Deckorators Baluster Calculator</h2>
                        <div className="text-overlap">
                            <p>
                                <span className="inline-color-text">Deckorators Baluster Calculator</span> is a user-friendly web application that assists users in finding the exact number of balusters required for their deck railing projects.
                            </p>
                        </div>
                        <h2 className="tech-stack">
                            <pre>JavaScript   Liquid   Shopify   CSS3   HTML5</pre>
                        </h2>
                        <div className="links">
                            <a href="https://www.deckorators.com/pages/baluster-calculator" target="_blank" rel="noopener noreferrer">
                                <button className="live-code">Live
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="18" height="18">
                                        <g id="external-link">
                                            <path d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z" />
                                            <path d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z" />
                                        </g>
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}