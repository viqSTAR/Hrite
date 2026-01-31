import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo">HRITE.</div>
            <nav>
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Work</a></li>
                    <li><a href="#about">Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
