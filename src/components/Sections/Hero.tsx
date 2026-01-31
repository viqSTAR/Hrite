import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero section-padding">
            <div>
                <span className="mono-tag">01 // OUR MISSION</span>
                <h1>Defined by Precision.<br />Powered by Code.</h1>
                <p>We strip away the noise to build software, websites, and digital experiences that function as beautifully as they look.</p>
                <a href="#contact" className="cta-button">Start A Project</a>
            </div>
        </section>
    );
};

export default Hero;
