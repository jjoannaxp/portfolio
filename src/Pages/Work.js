import React from "react";
import "./Work.css";
import { Link } from 'react-router-dom';
import Project from "../Components/Project/Project.js";
import arrow from '../Assets/Arrow.svg';

function Work() {
  return (
    <div className="Container">
      <div className="Hero">
        <h1>
          Hi, I’m <span>Joanna.</span>
        </h1>
        <h4>
          I’m a <span>digital product designer</span> that loves building and
          crafting experiences to simplify the world and help people form
          connections.
        </h4>
        <div className="ExperienceContainer">
          <h3>previously:</h3>
          <div className="ExperienceButtons">
            <Link to="/Cases/WhatNot" text="WhatNot" isButton={true} />
            <Link to="/Cases/Measured" text="Measured" isButton={true} />
            <Link to="/Cases/Eightfold" text="Eightfold" isButton={true} />
          </div>
        </div>
      </div>

      <div className="WorkContainer">
        <div className="SectionHeader">
          <hr></hr>
          <h2>Selected Works</h2>
          <hr></hr>
        </div>
        <Project to="/Cases/Tinker" title="Tinker" />
        <Project to="/Cases/Measured" title="Measured" />
        <Project to="/Cases/WhatNot" title="WhatNot" />
        <Project to="/Cases/Eightfold" title="Eightfold" />
        {/* <Project to="/Cases/Split" title="Split"/> */}

        <div className="SideBySideSection">
          <h2>Want More?</h2>
          <Link to="/Fun">
            <button>
              Play With the Final Prototype!
              <img src={arrow} alt="arrow" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Work;
