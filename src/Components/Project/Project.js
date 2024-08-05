import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Project.css';
import tinkerImg from '../../Assets/Projects/tinker.png';
import measuredImg from '../../Assets/Projects/Measured.png';
import whatnotImg from '../../Assets/Projects/WhatNot.png';
import eightfoldImg from '../../Assets/Projects/Eightfold.png';
import splitImg from '../../Assets/Projects/Split.png';

const projects = [
    {
        title: "Tinker",
        role: "Product Designer",
        src: tinkerImg,
        phrase: "Streamline landlords’ contractor search through an AI powered marketplace.",
        type: "App Design",
        date: "Spring 2024"
    },
    {
        title: "Measured",
        role: "Product Design Intern @",
        src: measuredImg,
        phrase: "Optimize media spend for businesses through data.",
        type: "Website Design",
        date: "Summer 2023 & 2024"
    },{
        title: "WhatNot",
        role: "Product Design Strategist @",
        src: whatnotImg,
        phrase: "Reimagine the TV to couch experience for a live stream marketplace.",
        type: "App Design",
        date: "Fall 2023"
    },{
        title: "Eightfold.AI",
        role: "UX Design Intern",
        src: eightfoldImg,
        phrase: "Transform how organizations hire, manage, retain, and upskill their workers through data and AI.",
        type: "App Design",
        date: "Summer 2021"
    },{
        title: "Split",
        role: "UI/UX Designer and Researcher",
        src: splitImg,
        phrase: "The app that makes dividing expenses easy.",
        type: "App Design",
        date: "Fall 2023"
    }
]

let project = projects[0];

function Project({ to, title}) {
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
        window.scrollTo(0, 0); // Scroll to top
    };


    const linkProps = {
        className: `Project ${isHovered ? 'hovered' : ''} ${isPressed ? 'pressed' : ''}`,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
    };

    if(title ==="Tinker"){
         project = projects[0];
    }else if(title ==="Measured"){
         project = projects[1];
    }else if(title ==="WhatNot"){
         project = projects[2];
    }else if(title==="Eightfold"){
         project = projects[3];
    }else if(title==="Split"){
        project = projects[4];
    }

    return  (
        <RouterLink to={to} {...linkProps}>
            <div className = "ImageContainer">
                <img src = {project.src}/>
            </div>
            <div className = "ProjectInformationContainer">
                <div className = "ProjectInformation">
                    <div className ="TitleContainer">
                        <p>{project.role}</p>
                        <h2>{project.title}</h2>
                    </div>
                    <h4>{project.phrase}</h4>
                </div>
                <div className = "ProjectDetails">
                    {/* <p>{project.type}</p>
                    <div className="circle"></div> */}
                    <p>{project.date}</p>
                </div>
            </div>
        </RouterLink>
    );
}

export default Project;
