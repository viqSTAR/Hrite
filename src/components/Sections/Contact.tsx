import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="section-padding">
            <footer>
                <span className="mono-tag">05 // CONNECT</span>
                <h2>Start a Project</h2>
                <br />
                <div className="contact-glass-box">
                    <p className="contact-sub">READY TO BUILD?</p>
                    <a href="mailto:hrite.business@proton.me" className="contact-link">hrite.business@proton.me</a>
                    <a href="tel:+916206733818" className="contact-link">+91 62067 33818</a>
                </div>

                <div className="copyright">
                    &copy; 2026 HRITE. All Rights Reserved.
                </div>
            </footer>
        </section>
    );
};

export default Contact;
