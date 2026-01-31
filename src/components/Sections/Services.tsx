import React from 'react';

const Services: React.FC = () => {
    return (
        <section id="services" className="section-padding">
            <span className="mono-tag">02 // WHAT WE DO</span>
            <h2>Services</h2>
            <div className="services-grid">
                <div className="glass-panel service-card">
                    <h3>Web & App Dev</h3>
                    <ul>
                        <li>Custom Full-Stack Solutions</li>
                        <li>Scalable Architecture</li>
                        <li>Cross-Platform Logic</li>
                    </ul>
                </div>
                <div className="glass-panel service-card">
                    <h3>UI/UX Design</h3>
                    <ul>
                        <li>Minimalist Interfaces</li>
                        <li>High-Conversion Layouts</li>
                        <li>Wireframing & Identity</li>
                    </ul>
                </div>
                <div className="glass-panel service-card">
                    <h3>Server Management</h3>
                    <ul>
                        <li>Secure Deployment</li>
                        <li>Database Optimization</li>
                        <li>24/7 Uptime Monitoring</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services;
