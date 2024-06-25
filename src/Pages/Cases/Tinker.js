import React from "react";
import tinkerImg from "../../Assets/Projects/tinker.png";
import arrow from "../../Assets/Arrow.svg";
import "../style/Case.css";
import problem from "../../Assets/Tinker/problem-image.png";
import solution from "../../Assets/Tinker/solution.png";
import chat from "../../Assets/Tinker/tenant-chat.gif";
import acceptTenant from "../../Assets/Tinker/accept-request.gif";
import contractor from "../../Assets/Tinker/contractor.gif";
import approveContractor from "../../Assets/Tinker/approve-contractor.gif";
import complete from "../../Assets/Tinker/complete.gif";
import contractorLogo from "../../Assets/Tinker/contractor.svg";
import landlordLogo from "../../Assets/Tinker/landlord.svg";
import tenantLogo from "../../Assets/Tinker/tenant.svg";
import flow from "../../Assets/Tinker/users.png";
import lowfiContractor1 from "../../Assets/Tinker/contractor-lf-1.png";
import lowfiContractor2 from "../../Assets/Tinker/contractor-lf-2.png";

import finalContractor from "../../Assets/Tinker/final-contractor.png";
import statusLF from "../../Assets/Tinker/status-lf.png";
import statusMF from "../../Assets/Tinker/status-mf.png";
import statusHF from "../../Assets/Tinker/status-hf.png";
import designSystem from "../../Assets/Tinker/designSystem.png";
import components from "../../Assets/Tinker/components.png";
import tinkerTeam from "../../Assets/Tinker/tinkerTeam.png";
function Tinker() {
  const scrollToSection = () => {
    document.getElementById("Solution").scrollIntoView({ behavior: "smooth" });
  };
  const handleButtonClick = () => {
    window.open(
      "https://www.figma.com/proto/GsS06f5RSWT2lbYexBU0Xa/Lava-Product?page-id=92%3A720&node-id=92-722&viewport=2276%2C-2506%2C0.33&t=Y4G2sROXzJ2rHIVb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=92%3A722&show-proto-sidebar=1",
      "_blank"
    );
  };

  return (
    <div className="Container">
      <div className="ProjectHeader">
        <div className="ImageProjectContainer">
          <img src={tinkerImg} />
        </div>
        <div className="TitleSection">
          <h1>Tinker</h1>
          <p className="bold">
            Tinker is a AI-powered marketplace that streamlines landlords’
            contractor search.
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
              <p>Feb-May 2024</p>
            </div>

            <div className="InfoColumn">
              <p className="tiny">Tools</p>
              <div className="Info">
                <p>Figma</p>
                <p>Pen + Paper</p>
              </div>
            </div>
            <div className="InfoColumn">
              <p className="tiny">Skills</p>
              <div className="Info">
                <p>UI/UX</p>
                <p>User Research</p>
                <p>Branding</p>
              </div>
            </div>
          </div>
          <div className="ProjectDescription">
            <p>
              As real estate becomes increasingly popular, many small landlords
              entering the industry struggle to find reliable contractors
              quickly, resulting in tenants suffering with their problems for
              too long.
            </p>

            <p>
              That's why me and my team created Tinker, an AI-powered
              marketplace platform that{" "}
              <span className="bold">
                streamlines your search for great contractors.
              </span>
            </p>
            <p>
              In the Spring 2024 LavaLab Demo Night, Tinker won won the Best
              Pitch award after pitching our product to 200+ attendees.
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
            <h3>
              I've experienced first-hand the frustration that comes with
              property maintenance.
            </h3>
            <p>
              Both of my parents are landlords, and they rely heavily on
              word-of-mouth recommendations and had to call around to find
              reliable contractors. They usually have a couple contractors
              they're going back and forth with at the same time. This process
              is not only time-consuming but also highly inefficient, often
              leading to chaos and frustration when urgent repairs are needed.
            </p>
            <p>
              And I know our parents weren't alone with this problem. My team
              and I ran countless user interviews and found that many{" "}
              <span className="bold">new non-commercial landlords</span> go
              through the same tedious process.
            </p>
          </div>
          <div className="ImageCaption">
            <div className="ImageContainer">
              <img src={problem} className="sideImg"></img>
            </div>
            <p className="tiny">A look into the hectic, multi-step process.</p>
          </div>
        </div>
        <div className="Callout">
          <p>PROBLEM STATEMENT</p>
          <h3>
            Property maintenance management is{" "}
            <span className="bold">tedious</span> and{" "}
            <span className="underlined">time consuming.</span>
          </h3>
        </div>
      </div>

      <div className="CaseSection" id="Solution">
        <div className="SectionHeader">
          <p>02.</p>
          <h2>Solution</h2>
          <hr></hr>
        </div>
        <h3 className="SolutionStatement">
          Tinker is a marketplace platform that links tenant’s{" "}
          <span className="underlined">work orders</span> with{" "}
          <span className="bold">licensed contractors</span> for efficient
          property maintenance management.
        </h3>

        <img src={solution} className="solutionImage"></img>
        <div className="SectionHeader">
          <h3>Step by Step:</h3>
        </div>

        <div id="content" className="contentDiv">
          <div className="feature">
            <img src={chat} className="gif" />
            <div className="step">
              <h3>
                01. <span className="underlined">Tenant</span> submits a work
                order
              </h3>
              <p>
                First, tenants will describe their issue to our AI-powered
                chatbot, answering some guiding questions to clarify the
                problem. They also input their availability for scheduling
                purposes.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={acceptTenant} className="gif" />
            <div className="step">
              <h3>
                02. <span className="underlined">Landlord</span> accepts the
                request
              </h3>
              <p>
                Then, our system notifies landlords with a problem summary and
                an estimated cost breakdown.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={contractor} className="gif" />
            <div className="step">
              <h3>
                03. <span className="underlined">Contractor</span> accepts the
                project
              </h3>
              <p>
                Upon landlord approval, the project will be sent out to local
                contractors with the appropriate licensing. Contractors can see
                the same estimated cost and problem summary as well as potential
                times to schedule the project.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={approveContractor} className="gif" />
            <div className="step">
              <h3>
                04. <span className="underlined">Landlord</span> approves the
                contractor
              </h3>
              <p>
                The first contractor to take the project gets sent back to the
                landlord for review. After they approve the contractor, the
                landlord pays a deposit and waits for the project to finish.
              </p>
            </div>
          </div>

          <div className="feature">
            <img src={complete} className="gif" />
            <div className="step">
              <h3>
                05. <span className="underlined">Contractor</span> completes the
                project
              </h3>
              <p>
                The contractor then completes the project, bills the final
                amount, and the landlord completes payment.
              </p>
            </div>
          </div>
          <div className="Tldr">
            <p className="center">tl;dr</p>
            <h3 className="center">
              Our platform trims a 30 step process down to just <br />
              <span className="bold">three clicks of a button.</span>
            </h3>
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
            <h3>User Research</h3>
            <hr></hr>
          </div>
          <div className="side">
            <div className="subsection">
              <div className="pill">
                <img src={landlordLogo} className="userLogo"></img>
                Landlords
              </div>
              <p>
                We hopped on calls with 20+ landlords from a large range of
                locations and experience levels and asked about their experience
                with being a landlord, maintenance orders, and finding
                contractors.
              </p>
              <p>
                They all found the process tedious, time consuming, and
                confusing, especially those who had just entered the industry.
                Current platforms are unreliable and over saturated, and still
                require landlords to go out of their way to filter through a
                large number of contractors on their own.
              </p>
            </div>
            <div className="subsection">
              <div className="pill">
                <img src={contractorLogo} className="userLogo"></img>
                Contractors
              </div>
              <p>
                We also talked to 10+ contractors and asked about their current
                work process, asking about what they find difficult about their
                job and finding projects.
              </p>
              <p>
                We found that smaller contractors say that finding work is
                difficult and they find they customer side of their job
                incredibly draining, as customers are constantly trying to
                haggle prices. Even after a lot of back and forth with a
                landlord, the project isn't gauranteed to be theirs.
              </p>
            </div>
          </div>
          <div className="CaseSection">
            <div className="Subheader">
              <h4>Painpoints, summarized:</h4>
            </div>

            <div className="side">
              <div className="painpoint">
                <img src={landlordLogo} className="userLogo"></img>
                <h4>
                  Landlords spend too much time and effort looking for
                  contractors.
                </h4>
              </div>
              <div className="painpoint">
                <img src={contractorLogo} className="userLogo"></img>

                <h4>
                  Contractors don't have <em>stability</em> and spend too much
                  time haggling.
                </h4>
              </div>
              <div className="painpoint">
                <img src={tenantLogo} className="userLogo"></img>
                <h4>
                  Tenants experience long wait times for their work orders.
                </h4>
              </div>
            </div>
          </div>
          <div className="Callout">
            <p>HOW MIGHT WE</p>
            <h3>
              How might we make the work order process{" "}
              <span className="underlined">fast and simple</span> for landlords?
            </h3>
          </div>
          <p>
            With this How Might We as our guiding question, my team and I
            started to iterate on potential features that would solve the pain
            points we discovered.
          </p>
        </div>
        <div className="subsection">
          <div className="Subheader">
            <p>02.</p>
            <h3>Ideation</h3>
            <hr></hr>
          </div>

          <p>
            The bulkiest part of this app design was the user flow. Since there
            were so many users, we had to make sure that each flow was
            incredibly thought out to result in the most ideal experience for
            all use cases.
          </p>
          <p>
            It's also important to note that this project was under the time
            constraint of one semester, meaning we had to prioritize which
            features would make it to MVP.
          </p>

          <div className="ImageCaption">
            <img src={flow} className="sideImg"></img>
            <p className="tiny">Our user flow and feature ideation process.</p>
          </div>
          <div className="Subheader">
            <h4>User Flows, summarized:</h4>
          </div>
          <div className="side">
            <div className="painpoint">
              <img src={landlordLogo} className="userLogo"></img>
              <h4>Landlords:</h4>
              <p>
                Approve a tenant request, approve the contractor for the
                project, and pay.
              </p>
            </div>
            <div className="painpoint">
              <img src={contractorLogo} className="userLogo"></img>

              <h4>Contractor:</h4>
              <p>See currently available projects and accept.</p>
            </div>
            <div className="painpoint">
              <img src={tenantLogo} className="userLogo"></img>
              <h4>Tenant:</h4>
              <p>
                Submit work order through the chatbot and have your project
                completed.
              </p>
            </div>
          </div>
        </div>
        <div className="subsection">
          <div className="Subheader">
            <p>03.</p>
            <h3>Design</h3>
            <hr></hr>
          </div>

          <p>
            From these baseline user flows, I designed the basic iteration of
            the 3 flows and iterated multiple times on each flow.
          </p>

          <p>
            The experience for contractors was the most difficult for me, and
            involved a multitude of iterations before the final product. I
            started by looking a other apps with similar interactions, like Uber
            for drivers, UpWork, and Airbnb. I thought of a range of
            interactions, from having contractors go "live" to accept work
            orders or sending them notifications when there was a work order in
            their area.
          </p>
          <div className="SideBySideSection">
            <div className="ImageCaption">
              <img src={lowfiContractor1} className="sideImg"></img>
              <p>"Start Work"</p>
            </div>
            <div className="ImageCaption">
              <img src={lowfiContractor2} className="sideImg"></img>
              <p>Notifications Only</p>
            </div>
          </div>
          <p>
            My final interaction was having a large database, both in list and
            map form, for contractors to peruse when they want to look for jobs.
          </p>
          <div className="ImageCaption">
            <img src={finalContractor} className="sideImg"></img>
          </div>
          <p>
            Another example of iterations I made was in the status component.
            This component is to show landlords the progress on their projects.
            I started with just a status bar based on time, but I soon realized
            that in reality, Landlords wouldn't care as much about how the
            project is faring time-wise, and its a relatively inaccurate form of
            measurement of status. So instead, I opted to use stages to show
            status.
          </p>
          <div className="SideBySideSection">
            <div className="ImageCaption">
              <img src={statusLF} className="sideImg"></img>
              <p>Low Fidelity</p>
            </div>
            <div className="ImageCaption">
              <img src={statusMF} className="sideImg"></img>
              <p>Mid Fidelity</p>
            </div>
            <div className="ImageCaption">
              <img src={statusHF} className="sideImg"></img>
              <p>High Fidelity</p>
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
          <p>04.</p>
          <h2>Design System</h2>
          <hr></hr>
        </div>
        <h3>Branding</h3>
        <div className="ImageContainer" id="designSystem">
          <img src={designSystem}></img>
        </div>
        <p>
          My main goal with the design system is to create a simple yet
          meaningful brand identity. I made sure{" "}
          <span className="underlined">simplicity</span> was the most important
          by identifying a couple key colors to hone in on the brand identity
          without over-complicating the design. I made sure to create styles
          that the developers can consistently replicate.
        </p>
        <h3>Components</h3>
        <div className="ImageContainer" id="designSystem">
          <img src={components}></img>
        </div>
        <p>
          Creating a <span className="bold">scalable</span> design system in
          terms of components was also incredibly vital for our development
          process. Making sure every design aligned with a basic design system
          was one of my overarching rules when designing.
        </p>
      </div>
      <div className="CaseSection">
        <div className="SectionHeader">
          <p>05.</p>
          <h2>Pitch Deck</h2>
          <hr></hr>
        </div>
        <h3>Our award winning pitch deck!</h3>
        <iframe
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIvQxyZJCGeXyFHwF3luDuc%2FLava-Decks%3Fpage-id%3D545%253A10574%26node-id%3D545-10575%26viewport%3D535%252C91%252C0.02%26t%3DOu4jYJEMoSq1R6mQ-1%26scaling%3Dcontain%26content-scaling%3Dfixed%26starting-point-node-id%3D545%253A10575"
        ></iframe>
      </div>

      <div className="CaseSection">
        <div className="SectionHeader">
          <p>06.</p>
          <h2>Takeaways</h2>
          <hr></hr>
        </div>
        <div className="takeaway">
          <h3>1. Getting feedback is so important.</h3>
          <p>
            After working on the same idea everyday for an extended period of
            time, it was difficult for me to see beyond my current designs.
            Asking other designers and users for feedback on my designs helped
            me open my eyes to inherent flaws in my designs.
          </p>
        </div>
        <div className="takeaway">
          <h3>2. Less is more.</h3>
          <p>
            As a designer, it can be easy to do too much, making it difficult
            for the user to navigate. During my design process, I realized that
            having a simple and scalable design system makes it easy both for me
            as a designer and for my developers. Since we were in a time
            constraint, keeping it simple was vital.
          </p>
        </div>
        <div className="takeaway">
          <h3>3. Design is all-encompassing.</h3>
          <p>
            I'm someone who usually sticks to my strengths, and within design,
            I've always thought that that was UI/UX. Doing this project has made
            me realize that as a designer, I need to be skilled in all facets of
            design (branding, graphic, product, and more) in order to be make a
            successful product. Design can be and is more than just your
            individual niche.
          </p>
        </div>
        <h2>Thank you!</h2>
        <div className="SideBySideSection">
          <div className="SideText">
            <p>
              And finally, a big thank you to my amazing team, Shane Yokota,
              Jonathan Pham, Saad El Gharbaoui, and my amazing mentors, Indira
              Abhyanker, Mitchell Morrison, and Kelcie Fan! I definitely could
              not have done it without them.{" "}
            </p>
          </div>
          <div className="ImageCaption">
            <div className="ImageContainer">
              <img src={tinkerTeam}></img>
            </div>
            <p className="tiny">Me and my team at Demo Night!</p>
          </div>
        </div>
        <button onClick={scrollToSection} className="scrollButton">
        Jump Back to Final Product
      </button>
      </div>
      
    </div>
  );
}

export default Tinker;
