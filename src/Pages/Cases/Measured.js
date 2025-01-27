import React from "react";
import arrow from "../../Assets/Arrow.svg";
import measuredImg from "../../Assets/Projects/Measured.png";
import before from "../../Assets/measured/before.png";
import view from "../../Assets/measured/view.gif";
import drill from "../../Assets/measured/drill.gif";
import custom from "../../Assets/measured/customize-portfolio.gif";
import side from "../../Assets/measured/side.gif";
import add from "../../Assets/measured/add.gif";
import { useNavigate } from "react-router-dom";

function Measured() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const scrollToSection = () => {
    document.getElementById("Solution").scrollIntoView({ behavior: "smooth" });
  };
  const handleButtonClick = () => {
    window.open(
      "https://www.figma.com/proto/vSBodrwPUCz7Up5r28wARs/Measured-Work?page-id=4%3A33943&node-id=4-39209&viewport=1608%2C466%2C0.48&t=hpQkpuscnqhIz4Ig-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A39209",
      "_blank"
    );
  };
  return (
    <div className="Container">
      <div className="ProjectHeader">
        <div className="ImageProjectContainer">
          <img src={measuredImg} />
        </div>
        <div className="TitleSection">
          <h1>Measured Dashboard</h1>
          <p className="bold">
            Measured is a data platform that optimizes media spend for
            businesses.
          </p>
        </div>
        <hr></hr>
        <div className="ProjectInfo">
          <div className="ProjectHeaderDetails">
            <div className="InfoColumn">
              <p className="tiny">Role</p>
              <p>UI/UX Design Intern</p>
            </div>

            <div className="InfoColumn">
              <p className="tiny">Date</p>
              <p>Jun-Aug 2023</p>
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
              In Summer 2023, I interned for Measured whilst they were in the
              midst of a major redesign. I was assigned a range of small tasks,
              but my main goal was{" "}
              <span className="bold">redesigning the main dashboard</span> and
              creating components for the new design to be used throughout the
              rest of the platform.
            </p>

            <div className="InfoColumn">
              <p>Short on time?</p>
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
        <div className="SideBySideSection">
          <div className="SideText">
            {" "}
            <p>
              In my time at Measured, our main goal was to completely revamp the
              User Experience.
            </p>
            <h3>
              I owned the redesign of the Main Dashboard, the starting point of
              all user journeys.
            </h3>
          </div>
          <div className="ImageCaption">
            <img src={before} className="sideImage" id="round"></img>
            <p className="tiny">Our original home design</p>
          </div>
        </div>
      </div>
      <div className="CaseSection" id="Solution">
        <div className="SectionHeader">
          <p>02.</p>
          <h2>Solution</h2>
          <hr></hr>
        </div>
        <h3 className="center">
          A <span className="underlined">simple and easy-to-navigate</span>{" "}
          dashboard for all your marketing needs.
        </h3>
        <img src={measuredImg} className="solutionImage"></img>
        <div className="SectionHeader">
          <h3>Features</h3>
        </div>

        <div id="content" className="contentDiv">
          <div className="feature">
            <img src={view} className="gifDesktop" />
            <div className="stepDesktop">
              <h3>01. Our Most Important Metrics at a Glance</h3>
              <p>
                Users will have a consolidated view of all their portfolio
                metrics and trends as well as a overview of selected channels
                and tactics.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={drill} className="gifDesktop" />
            <div className="stepDesktop">
              <h3>02. Drilldown Metrics</h3>
              <p>
                Drilldown your portfolio metrics to see the trends and data
                behind them as well as the metrics in your channels and tactics.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={side} className="gifDesktop" />

            <div className="stepDesktop">
              <h3>03. View Opportunities and Updates in the Sidebar</h3>
              <p>
                The sidebar includes opportunities for optimization, recommended
                tests to conduct, and notifications that the users will need to
                know.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={add} className="gifDesktop" />
            <div className="stepDesktop">
              <h3>04. Add New Channels/Tactics to Dashboard</h3>
              <p>
                Users will be able easily customize what metrics are shown on
                the main dashboard with this simple flow.{" "}
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={custom} className="gifDesktop" />
            <div className="stepDesktop">
              <h3>05. Customize Channels in Portfolio</h3>
              <p>
                Users can customize which channels feed data into the overall portfolio metrics.{" "}
              </p>
            </div>
          </div>
        </div>
        <button onClick={handleButtonClick} className="prototypeButton">
          Play With the Final Prototype!
          <img src={arrow}></img>
        </button>
      </div>
      
      <div className="CaseSection">
        <div className="SectionHeader">
          <p>03.</p>
          <h2>Takeaways</h2>
          <hr></hr>
        </div>
        <div className="takeaway">
          <h3>1. Listen to the user. </h3>
          <p>
            In the process of making the dashboard, we conducted a couple user
            interviews with existing Measured users to see how they feel about
            some of our design decisions. It turns out, a lot of the product
            decisions we had initially made didn't actually solve user burdens.
            Within the scope of my internship, I wasn't able to adjust the
            design based on this feedback, but I learned that constant user
            feedback is vital.
          </p>
        </div>
        <div className="takeaway">
          <h3>2. Make the hard trade-offs.</h3>
          <p>
            One of the biggest challenges I faced was prioritizing what to
            display on the dashboard to avoid overwhelming the user. This is
            especially a problem when designing dashboards, and learning how to
            make those trade-offs and prioritizations based on user feedback is
            critical in maintaining a clean and understandable interface without
            excess user burden.
          </p>
        </div>
        <div className="takeaway">
          <h3>3. A design system is vital.</h3>
          <p>
            For a platform as large as Measured, having a scalable and organized
            design system can make or break the design process. Creating
            components based off the home page was a huge learning experience
            for me, allowing me to understand the importance of scalability.
          </p>
        </div>
      </div>
      <button onClick={handleClick} className="homeButton">
        See my other works!
      </button>
    </div>
  );
}

export default Measured;
