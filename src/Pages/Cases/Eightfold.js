import React from "react";
import eightfoldImg from '../../Assets/Projects/Eightfold.png';

function Eightfold() {
  const scrollToSection = () => {
    document.getElementById("Solution").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="Container">
      <div className="ProjectHeader">
        <div className="ImageProjectContainer">
          <img src={eightfoldImg} />
        </div>
        <div className="TitleSection">
          <h1>Eightfold</h1>
          <p className="bold">
          Eightfold.AI transforms how organizations hire, manage, retain, and upskill their workers through data and AI.
          </p>
        </div>
        <hr></hr>
        <div className="ProjectInfo">
          <div className="ProjectHeaderDetails">
            <div className="InfoColumn">
              <p className="tiny">Role</p>
              <p>UX Design Intern</p>
            </div>

            <div className="InfoColumn">
              <p className="tiny">Date</p>
              <p>Jun-Aug 2021</p>
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
              </div>
            </div>
          </div>
          <div className="ProjectDescription">
            <p>
              I was given the opportunity to learn from some amazing designers in Eightfold.AI. I worked on their new mobile app's navigation, updating it to fit the new settings and notifications page that I designed. 
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
        <p>With the addition of settings and notifications in the app, I was given the task of reworking the navigation.</p>
        <p>We also had to rethink the prioritization of the navigation. Eightfold's Career Hub app's primary use case is through the recommended further their career within the company, and we needed to get the navigation to reflect that interest. </p>

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
        
      </div>
    </div>
  );
}
export default Eightfold;
