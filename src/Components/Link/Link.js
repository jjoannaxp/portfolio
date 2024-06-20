import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Link.css';

function Link({ to, href, text, isArrow, isSelected, onClick, isButton}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsPressed(false);
    };

    const handleMouseDown = () => {
        setIsHovered(false);
        setIsPressed(true);
    };

    const handleMouseUp = () => {
        setIsPressed(false);
        setIsHovered(true);
    };

    const handleClick = (e) => {
        if (href) {
            e.preventDefault(); // Prevent default routing behavior
            window.open(href, '_blank'); // Open the link in a new tab
        }
        onClick(text);
    };
    const LinkName = isButton ? 'NavButton' : 'NavLink';
    const ContentName = isButton ? 'ButtonContent' : 'LinkContent';

    const linkProps = {
        className: `${LinkName} ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''} ${isPressed ? 'pressed' : ''} ${isButton ? 'button' : ''}` ,
        onClick: handleClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
    };


    return href ? (
        <a href={href} {...linkProps}>
            <div className={ContentName}>
                <h4>{text}</h4>
                {isArrow && 
                <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0.374512L4.64513 2.53291L9.19179 6.09117L10 0.374512ZM1.39375 12.1827L7.62037 4.22644L6.83286 3.61013L0.606248 11.5664L1.39375 12.1827Z"/>
                </svg>}
            </div>
            <div className="Underline"></div>
        </a>
    ) : (
        <RouterLink to={to} {...linkProps}>
            <div className={ContentName}>
                <h4>{text}</h4>
                {isArrow && 
                <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0.374512L4.64513 2.53291L9.19179 6.09117L10 0.374512ZM1.39375 12.1827L7.62037 4.22644L6.83286 3.61013L0.606248 11.5664L1.39375 12.1827Z"/>
                </svg>}
            </div>
            <div className="Underline"></div>
        </RouterLink>
    );
}

export default Link;
