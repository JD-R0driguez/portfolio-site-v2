import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faCss3, faHtml5, faJsSquare, faGithub, faPython } from '@fortawesome/free-brands-svg-icons'
import './About.css'

export default function About(){
    return (
        <section id="about" className="about">
            <div className="about-title">
                <h4>Get To Know More</h4>
                <h1>About Me</h1>
            </div>
            <div className="about-split">
                <div className="about-text">
                    <p>
                        <span className="about-text-color">Hi there!</span> I am Juan and I enjoy creating things that live on the internet.
                        My interest in web development started back in 2020 when I decided to tackle creating
                        a website for my woodworking business. — turns out attempting to create a header taught me a lot about HTML & CSS!
                    </p>
                    <p>
                        I have a background in mechatronics engineer and love programming because it is so practical, and I can solve real-world challenges with it. 
                        For me, programming is a tool to express myself in a creative way. Today I'm enthralled by web development. Creating new experiences,
                        implementing eye pleasing designs and making them come to life with animation is what I do best.
                    </p>
                    <p>
                        <span className="about-text-color">Here</span> are some of the technologies I am familiar with: 
                    </p>
                </div>
                <did className="image-container">
                    <div className="cube-spinner">
                        <div className="face-1">
                            <FontAwesomeIcon icon={faCss3} color="color"/>
                        </div>
                        <div className="face-2">
                            <FontAwesomeIcon icon={faHtml5} color="color"/>
                        </div>
                        <div className="face-3">
                            <FontAwesomeIcon icon={faJsSquare} color="color"/>
                        </div>
                        <div className="face-4">
                            <FontAwesomeIcon icon={faGithub} color="color"/>
                        </div>
                        <div className="face-5">
                            <FontAwesomeIcon icon={faPython} color="color"/>
                        </div>
                        <div className="face-6">
                            <FontAwesomeIcon icon={faReact} color="color"/>
                        </div>
                    </div>
                </did>
            </div>
        </section>

    )
}