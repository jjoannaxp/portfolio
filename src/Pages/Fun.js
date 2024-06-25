import React from "react";
import './Fun.css';
import night from './../Assets/fun/nightmarket.png';
import cd from './../Assets/fun/cd.png';
import cae from './../Assets/fun/cae.png';
import agt from './../Assets/fun/agt.png';
import mnm from './../Assets/fun/M+M First Post.png';
import blog from './../Assets/fun/3-night-market.png';
import loop from './../Assets/fun/loop.gif';

function Fun(){
    return(
        <div className="Container">
            <h1>Other than UI/UX I...</h1>
            <div className="FunSection">
                <h2>make graphics for clubs!</h2>
                <div className="wrapMocks">
                    <img src={night}></img>
                    <img src={cd}></img>
                    <img src={cae}></img>
                    <img src={agt}></img>
                    <img src={mnm}></img>
                    <img src={blog}></img>
                </div>
            </div>
            <div className="FunSection">
                <h2>create animations!</h2>
                <div className="wrapMocks">
                    <a href="https://drive.google.com/file/d/1FIaCw7FUimm9TZroF1buQzZ8-uh25d-W/view?usp=sharing"><img src={loop}></img></a>
                </div>
            </div>
        </div>
    );
}

export default Fun;