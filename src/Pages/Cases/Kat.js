import React, { useState } from "react";
import katImg from "../../Assets/Projects/Kat.png";
import { useNavigate } from "react-router-dom";

function Kat() {
  const navigate = useNavigate();

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = "jjoannaxmeasured@123";

  const handleClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsUnlocked(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="Container">
      <div className="ProjectHeader">
        <div className="ImageProjectContainer">
          <img src={katImg} />
        </div>
        <div className="TitleSection">
          <h1>Measured Testing Platform</h1>
          <p className="bold">
            Test marketing strategies to optimize ad spend.
          </p>
        </div>
        <hr></hr>
        <div className="ProjectInfo">
          <div className="ProjectHeaderDetails">
            <div className="InfoColumn">
              <p className="tiny">Role</p>
              <p>Product Design Intern</p>
            </div>

            <div className="InfoColumn">
              <p className="tiny">Date</p>
              <p>May-Jul 2024</p>
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
              During my internship at Measured, a data platform optimizing media
              spend for businesses, I led the end-to-end design of the{" "}
              <span className="bold">Known Audience Testing platform.</span> My
              responsibilities included conducting product discovery,
              collaborating with cross-functional teams, and delivering final
              design solutions. I focused on ensuring the platform’s value to users, making sure the information necessary for users are highlighted.
            </p>
          </div>
        </div>
      </div>
      <div className="CaseSection">
        <div className="SectionHeader">
          <p>02.</p>
          <h2>Case Study</h2>
          <hr></hr>
        </div>
        <div className="iframe-container">
          {!isUnlocked && (
            <div className="password-overlay">
              <form onSubmit={handlePasswordSubmit}>
                <p>Enter Password to View Case Study:</p>

                <div className="password-form">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <button type="submit">Unlock</button>
                </div>
              </form>
            </div>
          )}
          <div className={isUnlocked ? "unblurred" : "blurred"}>
            <iframe
              width="100%"
              height="500px"
              src="https://embed.figma.com/proto/L2ZFfdszF6UA0ZrEEKzPrk/Portfolio-Slides?page-id=126%3A6513&node-id=126-6526&viewport=2116%2C229%2C0.11&scaling=contain&content-scaling=fixed&embed-host=share"
              allowFullScreen
              style={{
                pointerEvents: isUnlocked ? "auto" : "none",
              }}
            />
          </div>
        </div>
      </div>
      <div className="CaseSection">
        <div className="SectionHeader">
          <p>03.</p>
          <h2>Takeaways</h2>
          <hr></hr>
        </div>
        <div className="takeaway">
          <h3>
            1. Understanding the product is vital, especially for designers.{" "}
          </h3>
          <p>
            Since I was the sole designer on product discovery, I was able to
            fully understand the product and user needs. This resulted in my
            designs taking user needs into great consideration, allowing for a
            great product that is truly useful to the users to be designed. I
            was able to back my design decisions with real user feedback and
            insights, allowing me to have full confidence in my designs.
          </p>
        </div>
        <div className="takeaway">
          <h3>2. Iteration and feedback is key.</h3>
          <p>
            Throughout the entire design process, I was constantly looking to
            different teams, clients, and designers for feedback on my design.
            Having their different perspectives allowed my designs to be the
            best that it can be. I was able to factor in all the limitations and
            ideas to create a successful design.
          </p>
        </div>
      </div>
      <button onClick={handleClick} className="homeButton">
        See my other works!
      </button>
    </div>
  );
}

export default Kat;
