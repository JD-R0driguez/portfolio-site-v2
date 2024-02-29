import React from "react";
import TextAnimation from "./TextAnimation";
import './Hero.css'

export default function Hero(){
    return (
        <div className="hero">
            <div className="back-image fade-img"></div>
            <div className="text-container">
                <section className="hero-title">
                    <TextAnimation text="Hi, I'm Juan" style="theme-1"/>
                    <TextAnimation text="I build things for the web" style="theme-2"/>
                    <h3 className="hero-small animate__animated animate__fadeIn">
                        I specialize in front-end development and take pride <br/>
                        in calling Grand Rapids, Beer City, USA my home base.
                    </h3>
                </section>
            </div>
        </div>
    )
}

