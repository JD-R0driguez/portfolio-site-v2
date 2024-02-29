import React from "react";
import './Contact.css'

export default function Contact(){

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        incrementCounter();
    }, []); 
    const incrementCounter = () => {
        const storedCounter = localStorage.getItem('pageVisitCounter');
        const currentCounter = parseInt(storedCounter) || 0;
        const updatedCounter = currentCounter + 1;
        setCount(updatedCounter);
        localStorage.setItem('pageVisitCounter', updatedCounter);
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="about-title">
                    <h4>Next Steps</h4>
                    <h1>Get In Touch</h1>
                </div>
                <h4 className="text">
                I'm currently seeking a new opportunity to contribute to innovative projects. 
                If you have any exciting prospects or openings on your team, I'd love to hear 
                about them. Looking forward to potentially collaborating with you!
                </h4>
                <div className="button-container">
                    <button className="send-email">
                        <a href="mailto:jd.rodriguez.or@gmail.com">Contact Me</a>
                    </button>
                </div>
                <footer>
                    <h4>Designed and Built with <span>&hearts;</span> by Juan Rodirguez
                        <span className="counter-icon"> &#9860;</span> {Math.floor(count / 2)}
                        <p className="credit-text">Inspired by Brittany Chang</p>
                    </h4>
                </footer>
            </div>
        </section>

    )
}