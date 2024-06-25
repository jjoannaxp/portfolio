import React from "react";
import "./About.css";
import arrow from "./../Assets/Arrow.svg";
import me from "./../Assets/me.jpg";

function About() {
  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1a06K76hw8XxepVGo4EruWXFp8QkKzTny/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div className="AboutContainer">
      <div className="SideBySideSection">
        <div className="AboutText">
          <h2>Hi! I'm Joanna Poon.</h2>
          <p>
            I’m a junior at University of Southern California’s Iovine and Young
            Academy, majoring in Arts, Technology, and the Business of
            Innovation. I was originally born and raised in Cupertino,
            California (Silicon Valley!) and moved to Los Angeles to pursue my
            higher education.
          </p>
          <p>
            Growing up I’ve always held a broad collection of interests, ranging
            from dance to coding to music to art. All my interests had a common
            thread: <span className="bold">my desire to create.</span>
          </p>
          <p>
            When I'm not working through a line of code or revisiting a
            wireframe, you can find me searching for a new LA cafe, the perfect
            flea market find, and the next figurine series on my shop list.
          </p>
        </div>

        <img src={me} className="MeImage"></img>
      </div>
      <button onClick={handleButtonClick} className="prototypeButton">
        Check out my Resume! <img src={arrow}></img>
      </button>
    </div>
  );
}

export default About;
