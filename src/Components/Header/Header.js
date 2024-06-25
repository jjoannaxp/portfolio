import React, { useState } from 'react';
import logo from '../../Assets/Logo.svg';
import './Header.css';
import { Link as RouterLink } from 'react-router-dom';

import Link from '../Link/Link.js';

function Header() {
    const [selectedLink, setSelectedLink] = useState('Work'); // Start with 'Work' selected

    const handleLinkClick = (text) => {
        if(text !=='Resume'){
            window.scrollTo(0, 0); // Scroll to top
            setSelectedLink(text);
        }
        
    };

    return (
        <div className="Header">
            
            <RouterLink to="/" onClick={() => handleLinkClick('Work')}>
            <  img src={logo} className="Logo" alt="logo" />
            </RouterLink>
            <div className="NavLinks">
                <Link to="/" text="Work" isSelected={selectedLink === 'Work'} onClick={() => handleLinkClick('Work')} />
                <Link to="/About" text="About Me" isSelected={selectedLink === 'About'} onClick={() => handleLinkClick('About')} />
                <Link
                    href="https://drive.google.com/file/d/10Ew9k9THc-U8e789pCuLnDpaSmPO8K65/view?usp=sharing"
                    text="Resume"
                    isArrow ="true"
                    isSelected={selectedLink === 'Resume'}
                    onClick={() => handleLinkClick('Resume')}
                />
            </div>
        </div>
    );
}

export default Header;
