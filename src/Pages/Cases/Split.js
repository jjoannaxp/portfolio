import React from 'react';
import splitImg from '../../Assets/Projects/Split.png';
import arrow from "../../Assets/Arrow.svg";

function Split() {
    const scrollToSection = () => {
        document.getElementById("Solution").scrollIntoView({ behavior: "smooth" });
      };
      const handleButtonClick = () => {
        window.open(
          "https://www.figma.com/proto/L5ocN1bkIIIDrWlIDyv1pg/Whatnot-Team-%231?page-id=516%3A1818&node-id=516-4202&viewport=82%2C479%2C0.48&t=SbpuRtoxxoErNlTs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=516%3A4202&show-proto-sidebar=1",
          "_blank"
        );
      };
    return (
        <div className="Container">
          <div className="ProjectHeader">
            <div className="ImageProjectContainer">
              <img src={splitImg} />
            </div>
            <div className="TitleSection">
              <h1>Split</h1>
              <p className="bold">
                Split is a fintech app that makes splitting money simple.
              </p>
            </div>
            <hr></hr>
            <div className="ProjectInfo">
              <div className="ProjectHeaderDetails">
                <div className="InfoColumn">
                  <p className="tiny">Role</p>
                  <p>Product Designer</p>
                </div>
    
                <div className="InfoColumn">
                  <p className="tiny">Date</p>
                  <p>Sep-Oct 2023</p>
                </div>
    
                <div className="InfoColumn">
                  <p className="tiny">Tools</p>
                  <div className="Info">
                    <p>Figma</p>
                  </div>
                </div>
                <div className="InfoColumn">
                  <p className="tiny">Skills</p>
                  <div className="Info">
                    <p>UI/UX</p>
                    <p>Product</p>
                    <p>User Research</p>
                  </div>
                </div>
              </div>
              <div className="ProjectDescription">
                <p>
                  As someone with roommates, I've always found splitting expensive to be annoying. this is 
                </p> 
    
                <div className="InfoColumn">
                  <p className="tiny">Short on time?</p>
                  <button onClick={scrollToSection} className="scrollButton">
                    Jump to Final Product
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="CaseSection">
            <div className="SectionHeader">
              <p>01.</p>
              <h2>Problem</h2>
    
              <hr></hr>
            </div>
            
          </div>
          <div className="CaseSection" id="Solution">
            <div className="SectionHeader">
              <p>02.</p>
              <h2>Solution</h2>
    
              <hr></hr>
            </div>
    
            
          </div>
          <div className="CaseSection">
            <div className="SectionHeader">
              <p>03.</p>
              <h2>Process</h2>
              <hr></hr>
            </div>
            <div className="subsection">
              <div className="Subheader">
                <p>03.</p>
                <h3>Design Iterations</h3>
                <hr></hr>
              </div>
              
            </div>
            <button onClick={handleButtonClick} className="prototypeButton">
              Play With the Final Prototype!
              <img src={arrow}></img>
            </button>
          </div>
          <div className="CaseSection">
            <div className="SectionHeader">
              <p>06.</p>
              <h2>Takeaways</h2>
              <hr></hr>
            </div>
            <div className="takeaway">
              <h3>1. Defining the product is vital.</h3>
              <p>
                One of our biggest mistakes was the lack of the bid button, which is the main functionality of the WhatNot stream. We were so focused on how we can make the design for our stakeholder group that we forgot to define the user motivation in the first place. A user story before designing is probably the most important part, and since we neglected that, our design showed reflected that flaw in our design process.
              </p>
            </div>
            <div className="takeaway">
              <h3>2. Think from all directions.</h3>
              <p>
                When we were designing, we were zeroed in on the remote design, and  thus we forgot the entire TV interface when designing. Had we designed the TV interface in addition to the remote, we would've seen the major design flaw in not including the bidding button on the remote. Thinking through the entire ecosystem in play and designing every aspect to work together is incredibly helpful.
              </p>
            </div>
           
            
            
            <button onClick={scrollToSection} className="scrollButton">
            Jump Back to Final Product
          </button>
          </div>
        </div>
      );
}

export default Split;