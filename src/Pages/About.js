import React from "react";
import "./About.css";
import arrow from "./../Assets/Arrow.svg";
import me from "./../Assets/me.png";
import { useNavigate } from "react-router-dom";


function About() {
  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1z6Ljg17jXyY8_OF6loazUasUDTqOoWSG/view?usp=sharing",
      "_blank"
    );
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <div className="AboutContainer">
      <div className="SideBySideSection" id="aboutSide">
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
        <div className="ImageContainer">
        <img src={me} className="MeImage"></img>
        </div>
       
      </div>
      <div  className="buttonsSection">
      <button onClick={handleClick} className="homeButton">
        See my other works!
      </button>
      <button onClick={handleButtonClick} className="prototypeButton">
        Check out my Resume! <img src={arrow} id="arrow"></img>
      </button>
      
      </div>
    </div>
  );
}

export default About;
