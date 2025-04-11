import React from 'react';
import 'animate.css';
import './TextAnimation.css';

export default function TextAnimation(props) {

    const lettersArray = props.text.split('').map((char, index) => {

        const charType = char === ' ' ? "space" : "letter";
        return (<span key={index} className={`${charType} ${props.style} animate__animated animate__bounceIn`} style={{ animationDelay: `${index * 0.05 + 0.9}s` }}>
            {char}
        </span>
        )
    });

    return (
        <div className="text-animation animate__animated animate__fadeIn">
            {lettersArray}
        </div>
    );
}
