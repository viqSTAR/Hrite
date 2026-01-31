import React from 'react';
import projectFresh from '../../assets/project-fresh.png';
import projectRealEstate from '../../assets/project-real-estate.png';
import projectStore from '../../assets/project-store.png';
import projectCollab from '../../assets/project-collab.jpg';
import projectFreshCard from '../../assets/project-fresh-card.jpg';

const projects = [
    {
        title: "Organization Manager App",
        desc: "A mobile-first collaboration tool for managing organizations, announcements, and team insights. Designed with a clean, friendly UI/UX.",
        img: projectCollab,
        link: "https://drive.google.com/file/d/1GGOdHTYEyKX4aJPEbxWJWF16Dn0yCVKJ/view?usp=sharing"
    },
    {
        title: "Product Store via MERN",
        desc: "A full-stack product management store built with the MERN stack. Features real-time updates, dark mode, and a responsive product grid.",
        img: projectStore,
        link: "https://mern-viq.onrender.com"
    },
    {
        title: "Fresh by Hrite",
        desc: "Fresh Organic Groceries Delivered to Your Door. A comprehensive e-commerce platform for farm-fresh produce with a green, nature-inspired aesthetic.",
        img: projectFresh,
        link: "https://grocery-ecommerce-gwcc.onrender.com/"
    },
    {
        title: "HRITE Real Estate",
        desc: "Where Quality Meets Innovation. Building dreams into reality with excellence, integrity, and innovative design solutions.",
        img: projectRealEstate,
        link: "https://real-estate-p9j8.onrender.com/"
    },
    {
        title: "Fresh by Hrite (Mobile UI)",
        desc: "A sleek, modern mobile user interface for an organic grocery delivery app, featuring high-fidelity design elements and vibrant farm-fresh aesthetics.",
        img: projectFreshCard,
        link: "https://drive.google.com/file/d/1OC4iOmqHIh1q06OUN_o5DWMe2M2ii4hG/view?usp=sharing"
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section-padding">
            <span className="mono-tag">03 // PORTFOLIO</span>
            <h2>Demo Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="glass-panel" style={{ padding: '20px' }}>
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            overflow: 'hidden',
                            borderRadius: '16px',
                            marginBottom: '20px',
                            background: 'rgba(0,0,0,0.2)'
                        }}>
                            <img
                                src={project.img}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />
                        </div>
                        <h3>{project.title}</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.9rem' }}>
                            {project.desc}
                        </p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-button"
                            style={{ width: '100%', textAlign: 'center', marginTop: '0' }}
                        >
                            Visit Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
