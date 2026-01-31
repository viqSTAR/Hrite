import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="section-padding">
            <span className="mono-tag">04 // LEADERSHIP</span>
            <h2>The Architect</h2>
            <div className="glass-panel profile-container">
                <div className="profile-info">
                    <h3 className="profile-name">Vikashdeep Prasad</h3>
                    <span className="profile-role">Lead Developer & Technical Strategy</span>
                    <p style={{ color: 'var(--text-muted)' }}>
                        Bridging the gap between complex backend logic and seamless frontend experiences. Focused on modern web technologies and absolute efficiency.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
