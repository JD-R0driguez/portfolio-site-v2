import React from "react";
import './Footer.css'

export default function Contact() {

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
        <section id="footer" className="footer">
            <footer>
                <h4>Designed and Built with <span>&hearts;</span> by Juan Rodirguez
                    <span className="counter-icon"> &#9860;</span> {Math.floor(count / 2)}
                </h4>
            </footer>
        </section>

    )
}