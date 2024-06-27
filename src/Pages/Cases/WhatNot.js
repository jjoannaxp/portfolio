import React from "react";
import "../style/Case.css";
import arrow from "../../Assets/Arrow.svg";

import whatnotImg from "../../Assets/Projects/WhatNot.png";
import problem from "../../Assets/whatnot/initial research.png";
import solution from "../../Assets/whatnot/solution.png";
import start from "../../Assets/whatnot/start.gif";
import bidComment from "../../Assets/whatnot/bid-comment.gif";
import switchStream from "../../Assets/whatnot/switch.gif";
import accessibility from "../../Assets/whatnot/accessibility.gif";
import settings from "../../Assets/whatnot/settings.gif";
import stat1 from "../../Assets/whatnot/stat1.png";
import jInitial from "../../Assets/whatnot/j-initial.png";
import cInitial from "../../Assets/whatnot/c-initial.png";
import nInitial from "../../Assets/whatnot/n-initial.png";
import iteration1 from "../../Assets/whatnot/iteration2-1.png";
import iteration2 from "../../Assets/whatnot/iteration2-2.png";
import iteration3 from "../../Assets/whatnot/iteration2-3.png";
import iteration4 from "../../Assets/whatnot/iteration2-4.png";
import iteration5 from "../../Assets/whatnot/iteration2-5.png";
import home from "../../Assets/whatnot/home.png";
import bid from "../../Assets/whatnot/bidding.png";
import bid2 from "../../Assets/whatnot/bidding2.png";
import tv from "../../Assets/whatnot/TV.png";
import { useNavigate } from "react-router-dom";

function WhatNot() {
  const scrollToSection = () => {
    document.getElementById("Solution").scrollIntoView({ behavior: "smooth" });
  };
  const handleButtonClick = () => {
    window.open(
      "https://www.figma.com/proto/L5ocN1bkIIIDrWlIDyv1pg/Whatnot-Team-%231?page-id=516%3A1818&node-id=516-4202&viewport=82%2C479%2C0.48&t=SbpuRtoxxoErNlTs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=516%3A4202&show-proto-sidebar=1",
      "_blank"
    );
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <div className="Container">
      <div className="ProjectHeader">
        <div className="ImageProjectContainer">
          <img src={whatnotImg} />
        </div>
        <div className="TitleSection">
          <h1>WhatNot</h1>
          <p className="bold">
            WhatNot is a live-streaming e-commerce platform.
          </p>
        </div>
        <hr></hr>
        <div className="ProjectInfo">
          <div className="ProjectHeaderDetails">
            <div className="InfoColumn">
              <p className="tiny">Role</p>
              <p>Product Design Strategist</p>
            </div>

            <div className="InfoColumn">
              <p className="tiny">Date</p>
              <p>Oct-Dec 2023</p>
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
              For six weeks, my team of 2 other designers and I were given the
              task to imagine a "10-foot" experience for WhatNot for a specific
              demographic within the WhatNot Users. We chose seniors.
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
        <div className="SideBySideSection">
          <div className="SideText">
            <p>
              WhatNot provides a unique service for buyers and sellers through a
              livestream auction experience. WhatNot has previously lived on the
              mobile app, but the television space is an untapped area for the
              company.
            </p>
            <p>
              After our initial research and brainstorming, we decided to
              explore how we can optimize the experience for{" "}
              <span className="bold">seniors.</span>
            </p>
          </div>
          <div className="ImageCaption">
            <div className="ImageContainer">
              <img src={problem} className="sideImg"></img>
            </div>
            <p className="tiny">Our brainstorming session.</p>
          </div>
        </div>
        <div className="Callout">
          <p className="tiny">HOW MIGHT WE STATEMENT</p>
          <h3>
            How might we make live-stream shopping simple for seniors in the
            television space?
          </h3>
        </div>
      </div>
      <div className="CaseSection" id="Solution">
        <div className="SectionHeader">
          <p>02.</p>
          <h2>Solution</h2>

          <hr></hr>
        </div>

        <h3 className="center">
          An easy and <span className="underlined">accessible</span> way to shop
          on the big screen.
        </h3>
        <img src={solution} className="solutionImage"></img>
        <div className="SectionHeader">
          <h3>Features</h3>
        </div>

        <div id="content" className="contentDiv">
          <div className="feature">
            <img src={start} className="gif" />
            <div className="step">
              <h3>01. Switch into TV Mode from the App</h3>
              <p>
                Users will be able to switch to TV mode from the TV or from the
                app itself with ease.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={bidComment} className="gif" />

            <div className="step">
              <h3>02. Bid or Comment</h3>
              <p>
                Users can bid on the product using the recommended number or
                through the custom bidding button. Users can also comment to
                interact and ask questions to the seller.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={switchStream} className="gif" />
            <div className="step">
              <h3>03. Switch from stream to stream</h3>
              <p>
                Users can switch to previously watched streams or WhatNot
                recommended streams based on their history with ease.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={accessibility} className="gif" />

            <div className="step">
              <h3>04. WhatNot TV for All</h3>
              <p>
                Our TV Remote features a speak to command feature for hands free
                convenience. We also have a help section with a glossary for
                WhatNot TV, including a read aloud and speak to ask questions
                feature, making WhatNot TV for everyone.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={settings} className="gif" />
            <div className="step">
              <h3>05. Customize WhatNot TV for you</h3>
              <p>
                Users can customize their interface to fit their needs, whether
                its the font size, the display brightness, or the font.
              </p>
            </div>
          </div>
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
            <p>01.</p>
            <h3>Research</h3>
            <hr></hr>
          </div>

          <p>
            We started by conducting research into our chosen stakeholder
            seniors. We found information that helped solidify our confidence in
            our choice, despite it being an unconventional one.
          </p>
          <div className="SideBySideSection">
            <div className="SideText" id="statisticContainer1">
              <div className="Callout" id="statistic1">
                <h3>
                  U.S. viewers aged{" "}
                  <span className="underlined">65 and above</span> watched for{" "}
                  <span className="bold">over four hours.</span>
                </h3>
              </div>
              <p className="tiny">
                {" "}
                Viewers aged 15 to 19 watched for two hours.
              </p>
            </div>
            <div className="ImageCaption" id="statistic">
              <img src={stat1} className="stat"></img>
              <p className="tiny">Statistica</p>
            </div>
          </div>
          <p>
            After confirming that seniors are the largest TV audience, we looked
            into their usage of online shopping.
          </p>
          <div className="Callout">
            <h3>
              Boomers (ages 55-74) are{" "}
              <span className="underlined">
                31% of the online shopping population.
              </span>
            </h3>
            <p className="tiny">Verto Analytics</p>
          </div>
          <p>
            We were able to confirm that a large population of seniors
            participated in online shopping, validating the viability of focus
            on seniors.
          </p>
        </div>
        <div className="subsection">
          <div className="Subheader">
            <p>02.</p>
            <h3>User Interviews</h3>
            <hr></hr>
          </div>
          <p>
            After confirming the validity of the stakeholder group, we moved
            onto talking to actual users to confirm our hypothesis.
          </p>
          <p>
            We asked questions about their habits with watching TV and online
            shopping.{" "}
          </p>
          <div className="Subheader">
            <h4>User Interviews' Key Takeways:</h4>
          </div>
          <div className="side">
            <div className="painpoint">
              <h4 className="bold">Products of Interest</h4>
              <ul>
                <li>
                  <p>clothings and shoes</p>
                </li>
                <li>
                  <p>kitchen tools</p>
                </li>
                <li>
                  <p>cleaning tools</p>
                </li>
                <li className="bold">
                  <p className="bold">gifts</p>
                </li>
              </ul>
            </div>
            <div className="painpoint">
              <h4 className="bold">TV & Internet Usage</h4>
              <ul>
                <li>
                  <p>
                    watches TV <span className="bold">every evening</span>
                  </p>
                </li>
                <li>
                  <p>TV shows and news</p>
                </li>
                <li>
                  <p>
                    browses shopping apps and occasionally makes online
                    purchases
                  </p>
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="painpoint" id="longPainpoint">
            <h4 className="bold">Painpoints</h4>
            <ul>
              <li>
                <p>skeptical of livestream shopping</p>
              </li>
              <li>
                <p>not very digitally literate</p>
              </li>
              <li>
                <p>mostly uses cable TV</p>
              </li>
              <li>
                <p>limited use of current devices</p>
              </li>
            </ul>
          </div>
          <p>
            Based on these user interviews, we were able to come up with the
            following success criteria for our final product:
          </p>
          <ol>
            <h3>
              <li>trustworthy brand/platform with strong social proof</li>
            </h3>
            <h3>
              <li>simple interface and UX</li>
            </h3>
            <h3>
              <li>easily accessible (limit new onboarding)</li>
            </h3>
          </ol>
          <div className="borderSection">
            <h3 className="underlined">
              How do we improve interaction for seniors?
            </h3>
            <p>
              This was a question that we knew we had to truly understand before
              starting the design. After doing extensive research, we realized
              that an intuitive platform for seniors had to have these things:
            </p>
            <ol>
              <p>
                <li>
                  <span className="bold">natural motions:</span> simple
                  horizontal, vertical, or diagonal movement instead of quick
                  movements
                </li>
              </p>
              <p>
                <li>
                  <span className="bold">Clear visual cues:</span> large UI with
                  labels instead/with icons, buttons that mimic physical buttons
                </li>
              </p>
              <p>
                <li>
                  <span className="bold">ease of use and functionality</span> as
                  motivation over gamification
                </li>
              </p>
            </ol>
          </div>
        </div>
        <div className="subsection">
          <div className="Subheader">
            <p>03.</p>
            <h3>Design Iterations</h3>
            <hr></hr>
          </div>
          <p>
            After defining our stakeholder group and their motivations, we moved
            on to the design phase. Together with my fellow designers, Calix and
            Nicole, we each created a unique version of the remote, guided by
            our own interpretations of the guidelines we set.
          </p>
          <div className="SideBySideSection">
            <div className="ImageCaption">
              <img src={jInitial}></img>
              <p className="tiny">My initial mocks</p>
            </div>
            <div className="ImageCaption">
              <img src={cInitial}></img>
              <p className="tiny">Calix's initial mocks</p>
            </div>
            <div className="ImageCaption">
              <img src={nInitial}></img>
              <p className="tiny">Nicole's initial mocks</p>
            </div>
          </div>
          <p>
            We all had very different versions of the remote, but we went back
            to the guidelines we had set in order to choose how to combine the
            designs. We loved Nicole's accessibility features, Calix's
            customizability, and my main interface. From there we made our
            second iteration of the remote.
          </p>
          <div className="ImageCaption">
            <div className="wrapMocks">
              <img src={iteration1}></img>
              <img src={iteration2}></img>
              <img src={iteration3}></img>
              <img src={iteration4}></img>
              <img src={iteration5}></img>
            </div>
            <p className="tiny">Our second iteration</p>
          </div>
          <p>
            However, after asking for feedback from WhatNot and our users, I
            started the final iteration, with a focus on a more physical UI,
            adding a bidding functionality, and considering the entire TV
            ecosystem.
          </p>

          <div className="Subheader">
            <h4>New Interface:</h4>
          </div>
          {/* 
          <p>
            I first worked on fixing the interface. I added shadows and color
            blocking to make it feel more "physical". I also reworked the
            navigation, removing features that I deemed unecessary for the
            functionality of WhatNot TV, like the volume button and the ability
            to swipe through streams. I then added in the bid features, being
            able to bid a recommended amount quickly or write in a custom
            amount.
          </p> */}
          <div className="SideBySideSection">
            <div className="ImageCaption">
              <img src={iteration1} className="sImg"></img>
              <p className="tiny">Our original home design</p>
            </div>
            <div className="ImageCaption">
              <img src={home} className="sImg"></img>
              <p className="tiny">My new design</p>
            </div>
          </div>
          <div className="Subheader">
            <h4>Bid Functionality</h4>
          </div>
          {/* 
          <p>
            I then mocked out the bid functionality. I wanted to include a quick
            bid button since bidding can be a really fast process, while also
            having a custom bid button for those that want to bid a specific
            amount. This way, ease of use was prioritized while still allowing
            for customizability.
          </p> */}
          <div className="ImageCaption">
            <div className="SideBySideSection">
              <div className="ImageCaption">
                <img src={bid} className="sImg"></img>
              </div>
              <div className="ImageCaption">
                <img src={bid2} className="sImg"></img>
              </div>
            </div>
            <p className="tiny">New Bid Functionality</p>
          </div>
          <div className="Subheader">
            <h4>TV Design</h4>
          </div>
          {/* 
          <p>
            My last big addition was the new TV mockup. I wanted it to have the
            same functionalities as the WhatNot streaming app so as to keep the
            integrity of the app.
          </p> */}
          <div className="ImageCaption">
            <img src={tv}></img>
            <p className="tiny">TV Design</p>
          </div>
        </div>
        <button onClick={handleButtonClick} className="prototypeButton">
          Play With the Final Prototype!
          <img src={arrow}></img>
        </button>
      </div>
      <div className="CaseSection">
        <div className="SectionHeader">
          <p>04.</p>
          <h2>Takeaways</h2>
          <hr></hr>
        </div>
        <div className="takeaway">
          <h3>1. Accessibility is vital.</h3>
          <p>
            Ensuring that a product is usable for all users, especially ones
            that are a large portion of your audience, is vital. Through this
            project, I've learned to keep accessibility rules in mind in all my
            designs.
          </p>
        </div>
        <div className="takeaway">
          <h3>2. Consider the entire ecosystem.</h3>
          <p>
            When designing, it's important to think beyond individual components
            and consider the entire ecosystem. By designing the TV interface
            along with the remote, we were able to see where our product was
            lacking and fill those gaps. A holistic approach ensures that all
            parts of the system work seamlessly together.
          </p>
        </div>
      </div>
      <button onClick={handleClick} className="homeButton">
        See my other works!
      </button>
    </div>
  );
}

export default WhatNot;
