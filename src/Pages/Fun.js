import React from "react";
import "./Fun.css";
import { useNavigate } from "react-router-dom";

import night from "./../Assets/fun/nightmarket.png";
import cd from "./../Assets/fun/cd.png";
import cae from "./../Assets/fun/cae.png";
import agt from "./../Assets/fun/agt.png";
import mnm from "./../Assets/fun/M+M First Post.png";
import blog from "./../Assets/fun/3-night-market.png";
import loop from "./../Assets/fun/loop.gif";
import inter from "./../Assets/fun/interface.gif";
import typography from "./../Assets/fun/combined.gif";
import charcoal from "./../Assets/fun/charcoal.jpeg";
import digital from "./../Assets/fun/digital.jpg";
import frustrations from "./../Assets/fun/frustrations.jpeg";
import landscape from "./../Assets/fun/landscape.png";
import scratch from "./../Assets/fun/scratchboard.jpg";
import still from "./../Assets/fun/still life.jpeg";
import bench from "./../Assets/fun/bench.jpeg";
import lamp from "./../Assets/fun/lamp.jpeg";
import mushroom from "./../Assets/fun/mushroom.jpg";
import cam from "./../Assets/fun/camera_perspective2.png";
import render from "./../Assets/fun/scene render 1.png";

function Fun() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <div className="AboutContainer">
      <div className="subsection" id="full">
        <div className="header">
        <h1>Just For Fun</h1>
          <h4>My creative endeavors on the side!</h4>
        </div>
      </div>

      <div className="FunSection">
        <div className="SectionHeader">
          
        <hr></hr><h4>MAKING GRAPHICS FOR CLUBS</h4>
          <hr></hr>
        </div>

        <div className="wrapMocks">
        <div className="ImageCaption" id="reg">
            <img src={night}></img>
          </div>
          <div className="ImageCaption" id="reg">
            <img src={cae}></img>
          </div>
          <div className="ImageCaption" id="reg">
            <img src={agt}></img>
          </div>
          
        </div>
      </div>
      <div className="FunSection">
      <div className="SectionHeader">
      <hr></hr>
      <h4>PAINTING AND SKETCHING</h4>
          <hr></hr>
        </div>
        <div className="wrapMocks">
          <div className="ImageCaption" id="graphic">
            <img src={still}></img>
            <p className="tiny">Color Pencil Still Life</p>
          </div>
          <div className="ImageCaption" id="graphic">
            <img src={scratch}></img>
            <p className="tiny">Scratch Board Dog</p>
          </div>
          <div className="ImageCaption" id="graphic">
            <img src={frustrations}></img>
            <p className="tiny">Creative Acrylic Painting</p>
          </div>
        </div>
      </div>
      <div className="FunSection">
        <div className="SectionHeader">
        <hr></hr>
        <h4>CREATING ANIMATIONS</h4>
          <hr></hr>
        </div>

        <div className="wrapMocks">
          <a
            href="https://drive.google.com/file/d/12F0KEoVxR1HSdj1Aqg3FhGOy1899bnL7/view?usp=sharing"
            className="long"
          >
            <div className="ImageCaption">
              <img src={typography}></img>
              <p className="tiny">Lyric Video</p>
            </div>
          </a>

          <a
            href="https://drive.google.com/file/d/1BJo9iWyccr936BJZFv7fw4cPpOiJNbn-/view?usp=sharing"
            className="long"
          >
            <div className="ImageCaption">
              <img src={inter}></img>
              <p className="tiny">Interface Mock Up</p>
            </div>
          </a>
        </div>
      </div>

      <div className="FunSection">
        
        <div className="SectionHeader">
        <hr></hr>
        <h4>BUILDING THINGS</h4>
          <hr></hr>
        </div>
        <div className="wrapMocks">
          <div className="ImageCaption" id="reg">
            <img src={cam}></img>
            <p className="tiny">Camera Render</p>
          </div>
          <div className="ImageCaption" id="reg">
            <img src={bench}></img>
            <p className="tiny">Wooden Bench</p>
          </div>
          <div className="ImageCaption" id="reg">
            <img src={lamp}></img>
            <p className="tiny">Wooden Lamp</p>
          </div>
        </div>
      </div>
      <button onClick={handleClick} className="homeButton">
        See my Featured Work!
      </button>
    </div>
  );
}

export default Fun;
