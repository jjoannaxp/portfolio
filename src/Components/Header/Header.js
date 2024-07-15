import React, { useState, useEffect } from 'react';
import logo from '../../Assets/Logo.svg';
import './Header.css';
import { Link as RouterLink } from 'react-router-dom';

import Link from '../Link/Link.js';

const Header = () => {
    const [selectedLink, setSelectedLink] = useState('Work');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (link) => {
        setSelectedLink(link);
        setIsMenuOpen(false); // Close menu on link click
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('freeze');
        } else {
            document.body.classList.remove('freeze');
        }
    }, [isMenuOpen]);

    return (
        <div className="Header">
            <RouterLink to="/" onClick={() => handleLinkClick('Work')}>
                <img src={logo} className="Logo" alt="logo" />
            </RouterLink>
            <div className={`NavLinks ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" text="Work" isSelected={selectedLink === 'Work'} onClick={() => handleLinkClick('Work')} />
                <Link to="/Fun" text="Just For Fun" isSelected={selectedLink === 'Fun'} onClick={() => handleLinkClick('Fun')} />
                <Link to="/About" text="About Me" isSelected={selectedLink === 'About'} onClick={() => handleLinkClick('About')} />
                <Link
                    href="https://drive.google.com/file/d/1z6Ljg17jXyY8_OF6loazUasUDTqOoWSG/view?usp=sharing"
                    text="Resume"
                    isArrow="true"
                    isSelected={selectedLink === 'Resume'}
                    onClick={() => handleLinkClick('Resume')}
                />
            </div>
            <div className="Hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`Overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
        </div>
    );
};

export default Header;
