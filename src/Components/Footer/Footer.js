import React, { useState } from 'react';
import './Footer.css';
import Link from '../Link/Link.js';


function Footer() {
    const [selectedLink, setSelectedLink] = useState('Work'); // Start with 'Work' selected

    const handleLinkClick = (text) => {
        if(text !=='Resume'){
            setSelectedLink(text);
        }
        
    };
    const handleEmailClick = () => {
        window.location.href = 'mailto:example@example.com';
      };
    

    return (
        <div className="Footer">
            <div className="LeftLinks">
            <div>
            <p>Coded with love and care (+ React, Js, etc.) by Joanna Poon (Yours Truly)</p>
            
            </div>
            </div>
            <div className="Right">
                <div className="RightLinks">
                <Link
                    href="https://drive.google.com/file/d/1a06K76hw8XxepVGo4EruWXFp8QkKzTny/view?usp=sharing"
                    text="Resume"
                    isArrow ="true"
                    isSelected={selectedLink === 'Resume'}
                    onClick={() => handleLinkClick('Resume')}
                />
                <Link
                    href="https://www.linkedin.com/in/joannapoon-/"
                    text="LinkedIn"
                    isArrow ="true"
                    isSelected={selectedLink === 'Resume'}
                    onClick={() => handleLinkClick('Resume')}
                />
                </div>
                <button onClick={handleEmailClick} className="emailButton">jhpoon@usc.edu</button>

            </div>
        </div>
    );
}

export default Footer;
