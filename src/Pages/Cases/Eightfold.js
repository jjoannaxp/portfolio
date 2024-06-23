import React from "react";
import eightfoldImg from "../../Assets/Projects/Eightfold.png";
import nav from "../../Assets/eighfold/navigation.gif";
import notifs from "../../Assets/eighfold/notifications.gif";
import settings from "../../Assets/eighfold/settings.gif";
import oldnav from "../../Assets/eighfold/slide-old.png";
import newnav from "../../Assets/eighfold/slide.png";
import all from "../../Assets/eighfold/notifs-old.png";
import notifNew from "../../Assets/eighfold/notifs-new.png";

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
            Eightfold.AI transforms how organizations hire, manage, retain, and
            upskill their workers through data and AI.
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
              I was given the opportunity to learn from some amazing designers
              in Eightfold.AI. I worked on their new mobile app's navigation,
              updating it to fit the new settings and notifications page that I
              designed.
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
        <p>
          With the addition of settings and notifications in the app, I was
          given the task of reworking the navigation.
        </p>
        <p>
          We also had to rethink the prioritization of the navigation.
          Eightfold's Career Hub app's primary use case is through the
          recommended further their career within the company, and we needed to
          get the navigation to reflect that interest.{" "}
        </p>
      </div>
      <div className="CaseSection" id="Solution">
        <div className="SectionHeader">
          <p>02.</p>
          <h2>Design</h2>
          <hr></hr>
        </div>
        <div className="feature">
          <img src={nav} className="gif" />
          <div className="step">
            <h3>01. Navigate with ease through the app.</h3>
            <p>
              Use the main bottom navigation and the burger menu to navigate
              through the app based on your needs.
            </p>
          </div>
        </div>
        <div className="feature">
          <img src={settings} className="gif" />
          <div className="step">
            <h3>02. Easily change your settings.</h3>
            <p>
              Use the main bottom navigation and the burger menu to navigate
              through the app based on your needs.
            </p>
          </div>
        </div>
        <div className="feature">
          <img src={notifs} className="gif" />
          <div className="step">
            <h3>03. View your relevant notifications.</h3>
            <p>
              View notifications for your project and job applications as well
              as project/job requests, referrals, and endorsements.
            </p>
          </div>
        </div>
      </div>
      <div className="CaseSection">
        <div className="SectionHeader">
          <p>03.</p>
          <h2>Process</h2>

          <hr></hr>
        </div>
        <h3>Main Navigation</h3>
        <p>
          My main project was working on reworking the navigation to fit the
          users needs based on the new feature we were adding. Because of this,
          I had to think about the prioritization of different tasks that the
          users would conduct on the Career Hub App.
        </p>
        <div className="persona">
          <div>
            <p className="tiny">User Persona:</p>
            <h3>Company Employee</h3>
          </div>
          <ul>
            <li>
              <p>
                <b>Goal:</b> Grow their career within their existing company
              </p>
            </li>
            <li>
              <p>
                <b>Painpoints:</b>
              </p>
            </li>
            <ol>
              <p>
                <li>
                  Don't know how to gain the correct{" "}
                  <span className="underlined">skillsets/experience</span> for
                  their preferred position
                </li>
              </p>
              <p>
                <li>
                  Don't have the right{" "}
                  <span className="underlined">connections/mentors</span> to get
                  there
                </li>
              </p>
            </ol>
          </ul>
        </div>
        <p>
          Based on this persona, I started to prioritize pages within the
          Eightfold app. Which pages would be the most important for the user?
          This was the final ranking I was able to create.
        </p>
        <div className="borderSection">
          <h3 className="underlined">Pages, ranked:</h3>
          <ol>
            <h4>
              <li>
                Home
                <p>
                  Main exploration in the career hub, with recommended jobs and
                  projects.
                </p>
              </li>
            </h4>
            <h4>
              <li>
                Projects{" "}
                <p>
                  Look through recommended projects that align with your career
                  goals and aimed skills.
                </p>
              </li>
            </h4>
            <h4>
              <li>
                Jobs<p>Look through jobs that align with your career goals.</p>
              </li>
            </h4>
            <h4>
              <li>
                People
                <p>
                  Look through potential mentors to guide you through your
                  professional journey.
                </p>
              </li>
            </h4>
            <h4>
              <li>
                Notifications
                <p>
                  Your notifications of updates on projects, jobs, referrals,
                  and endorsements.
                </p>
              </li>
            </h4>
            <h4>
              <li>
                Courses<p>Courses to guide you through skill building.</p>
              </li>
            </h4>
          </ol>
        </div>
        <p>
          Through this ranking, I was able to create my final navigation
          organization, with the first 5 in the main navigation and every other
          page in the burger menu.
        </p>
        <h3>Design Iterations</h3>
        <div class="Subheader">
          <h4>Navigation:</h4>
        </div>
        <p>
          I reordered the pages based on importance, removing the repeats from
          the bottom navigation, which is the most important one. I also made
          the access to the profile more intuitive. Rather than having a whole
          bottom tab for profile, clicking on your name is intuitive and saves
          space. The text size is increased for accessibility.
        </p>
        <div className="SideBySideSection">
          <div className="ImageCaption">
            <img src={oldnav} className="sImg"></img>
            <p>Old Slide Navigation</p>
          </div>
          <div className="ImageCaption">
            <img src={newnav} className="sImg"></img>
            <p>New Slide Navigation</p>
          </div>
        </div>
        <div class="Subheader">
          <h4>Settings:</h4>
        </div>
        <p>
          I experimented with the organization of the settings of the
          notifications. I didn't want to overwhelm the user, so I tried keeping
          different notification settings in different tabs, but I sooned
          realized that this caused the userflow to be unecessarily extended
          with extra steps.
        </p>
        <div className="SideBySideSection">
          <div className="ImageCaption">
            
              <img src={all} className="sImg"></img>
            <p>Separated Notification Setting</p>
          </div>

          <div className="ImageCaption">
            <img src={notifNew} className="sImg"></img>
            <p>Combined Notification Setting</p>
          </div>
        </div>
      </div>
      <div className="CaseSection">
        <div className="SectionHeader">
          <p>04.</p>
          <h2>Takeaways</h2>
          <hr></hr>
        </div>
        <p>
          This internship was an amazing learning experience as someone who
          didn't encounter UX design at all beforehand. It allowed me to learn
          UX from the ground up and discover the process behind every design
          decision.
        </p>
        <div className="takeaway">
          <h3>1. Think from the user.</h3>
          <p>
            Design is always based on the user's wants and needs. In order to
            create a good design, I need to imagine myself as the user with
            their wants and needs in order to create a design for them.
          </p>
        </div>
        <div className="takeaway">
          <h3>2. Be detailed.</h3>
          <p>
            Every interaction counts, even the splash screens or onboarding
            slides, for creating the user experience. A small move in
            positioning in terms of different pages and how to access them
            creates a huge change in the user's experience.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Eightfold;
