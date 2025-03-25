import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faCss3, faHtml5, faJsSquare, faGithub, faPython } from '@fortawesome/free-brands-svg-icons'
import './About.css'

export default function About() {

    return (
        <section id="about" className="about">
            <div className="about-split">
                <div className="image-container">
                    <div className="cube-spinner">
                        <div className="face-1">
                            <FontAwesomeIcon icon={faCss3} />
                        </div>
                        <div className="face-2">
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className="face-3">
                            <FontAwesomeIcon icon={faJsSquare} />
                        </div>
                        <div className="face-4">
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <div className="face-5">
                            <FontAwesomeIcon icon={faPython} />
                        </div>
                        <div className="face-6">
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                    </div>
                </div>
                <div className="about-text">
                    <p> I'm a front-end developer with a passion for crafting seamless and
                        engaging web experiences. My web dev journey began in 2020 when building my woodworking website, I
                        discovered the joy of turning ideas into interactive sites through HTML, CSS, and JavaScript.
                    </p>
                    <p> In my current role, I focus on creating custom Shopify solutions. Through this work,
                        I’ve sharpened my ability to transform designs into responsive, accessible, and visually appealing interfaces
                        that seamlessly integrate with our store theme.
                    </p>
                    <div className="experience-title">
                        <h2>Experience</h2>
                    </div>
                    <div className="experience-cards-container">
                        <div className="experience-card">
                            <h3>Frontend Developer</h3>
                            <h4>UFP Industries</h4>
                            <p>
                                Create interactive Shopify solutions from Figma designs, emphasizing responsive, user-friendly experiences. Collaborate closely with remote teams to optimize code for performance and scalability.
                            </p>
                            <div className="skill-tags">
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">Liquid</span>
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">Responsive Design</span>
                            </div>
                        </div>

                        <div className="experience-card">
                            <h3>Business Architect & Owner</h3>
                            <h4>BlueWoodCo</h4>
                            <p>
                                Built an engaging online storefront, optimized user experience, and leveraged visuals—translating directly to frontend development and e-commerce design.
                            </p>
                            <div className="skill-tags">
                                <span className="skill-tag">E-commerce UX</span>
                                <span className="skill-tag">HTML/CSS</span>
                                <span className="skill-tag">Shopify</span>
                            </div>
                        </div>

                        <div className="experience-card">
                            <h3>Software Engineer</h3>
                            <h4>Structures Laboratory, Universidad Nacional</h4>
                            <p>
                                Engineered robust data systems, collaborated cross-functionally, and optimized software performance, building strong foundational skills in software engineering and technical problem-solving.
                            </p>
                            <div className="skill-tags">
                                <span className="skill-tag">C++</span>
                                <span className="skill-tag">LabView</span>
                                <span className="skill-tag">Software Optimization</span>
                            </div>
                        </div>

                        <a href="your-resume-link.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
                            View Full Resume <span className="arrow">↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
