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
        <div className="subsection"id="full">
      <div className="header">
        <h1>Just For Fun</h1>
        <h4>My creative endeavors of UI/UX!</h4>

      </div>
      <div className="Subheader">
      <p>I enjoy...</p>
      </div>
      </div>
      <div className="FunSection">
        <h2>painting and sketching!</h2>
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
          <div className="ImageCaption" id="graphic">
            <img src={charcoal}></img>
            <p className="tiny">Charcoal Drawing</p>
          </div>
          <div className="ImageCaption" id="graphic">
            <img src={landscape}></img>
            <p className="tiny">Oil Landscape</p>
          </div>
          <div className="ImageCaption" id="graphic">
            <img src={digital}></img>
            <p className="tiny">Creative Digital Painting</p>
          </div>
        </div>
      </div>
      <div className="FunSection">
        <h2>making graphics for clubs!</h2>
        <div className="wrapMocks">
          <img src={night} className="graphic"></img>
          <img src={cd} className="graphic"></img>
          <img src={cae} className="graphic"></img>
          <img src={agt} className="graphic"></img>
          <img src={mnm} className="graphic"></img>
          <img src={blog} className="graphic"></img>
        </div>
      </div>
      <div className="FunSection">
        <h2>creating animations!</h2>
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
          <a
            href="https://drive.google.com/file/d/1FIaCw7FUimm9TZroF1buQzZ8-uh25d-W/view?usp=sharing"
            className="reg"
          >
            <div className="ImageCaption">
              <img src={loop}></img>
              <p className="tiny">Looping Animation</p>
            </div>
          </a>
        </div>
      </div>
      
      <div className="FunSection">
        <h2>and building things!</h2>
        <div className="wrapMocks">
          <div className="ImageCaption" id="long">
            <img src={cam}></img>
            <p className="tiny">Camera Render</p>
          </div>
          <div className="ImageCaption" id="long">
            <img src={bench}></img>
            <p className="tiny">Wooden Bench</p>
          </div>
          <div className="ImageCaption" id="reg">
            <img src={lamp}></img>
            <p className="tiny">Wooden Lamp</p>
          </div>
          <div className="ImageCaption" id="reg">
            <img src={mushroom}></img>
            <p className="tiny">3D Printed Lamp</p>
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
