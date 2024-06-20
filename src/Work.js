import React from 'react';
import './Work.css';
import Link from './Components/Link/Link.js';
import Project from './Components/Project/Project.js';



function Work() {
    return (
        <div className="Container">
            <div className="Hero">
                <h1>Hi, I’m <span>Joanna.</span></h1>
                <h4>I’m a <span>digital product designer</span> that loves building and crafting experiences to simplify the world and help people form connections.</h4>
                <div className="ExperienceContainer">
                    <h3>previously:</h3>
                    <div className="ExperienceButtons">
                        {/* <Link to="/Cases/WhatNot" text="WhatNot" isButton ={true} />
                        <Link to="/Cases/Measured" text="Measured" isButton ={true} />
                        <Link to="/Cases/Eightfold" text="Eightfold" isButton ={true} /> */}
                        <div className="NavButton"><h4>WhatNot</h4></div>
                        <div className="NavButton"><h4>Eightfold.AI</h4></div>
                        <div className="NavButton"><h4>Measured</h4></div>
                    </div>
                </div>
            </div>

            <div className="WorkContainer">
                <Project to="/Cases/Tinker" title="Tinker"/>
                <Project to="/Cases/Measured" title="Measured"/>
                <Project to="/Cases/WhatNot" title="WhatNot"/>
                <Project to="/Cases/Eightfold" title="Eightfold"/>
                {/* <Project to="/Cases/Split" title="Split"/> */}
            </div>
            
        </div>
    );
}

export default Work;
