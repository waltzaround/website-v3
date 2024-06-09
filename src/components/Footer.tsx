import { useState, useEffect } from "react";

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString("en-NZ"));
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString("en-NZ"));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <footer className="foot">
      <section className="footer-content">
        <div>
     
          <div>
            <div className="time-container">
              <div>
                <h4>Current Time in New Zealand:</h4>
                <p>{currentTime}  </p>
              </div>
              {new Date().getHours() > 9 && new Date().getHours() <= 17 && (
                <div className="time-tag">
                  <div className="awake" />
                  <p>Working </p>

                </div>
              )}
              {new Date().getHours() <= 10 && (
                <div className="time-tag">
                  <div className="awake" />
                  <p>         Probably Asleep</p>

                </div>
              )}
              {new Date().getHours() > 17 && (
                <div className="time-tag">
                  <div className="awake" />
                  <p>         Building Stuff</p>

                </div>
              )}


            </div>
          </div>
        </div>
        <div className="footer-cols">     <h4>Socials:</h4>
          <div className="footer-cols-items">

            <a href="http://discordapp.com/users/waltzaround" title="discord">
              Discord
            </a>
            <a href="https://www.linkedin.com/in/waltzaround/" title="linkedin">
              LinkedIn
            </a>
            <a href="https://twitter.com/iwaltzaround" title="twitter">
              Twitter
            </a>
            <a href="https://www.reddit.com/user/WaltzAround/" title="twitter">
              Reddit
            </a>
          </div>           <h4>Find more stuff on:</h4>
          <div className="footer-cols-items">

            <a href="https://github.com/waltzaround" title="github">
              GitHub
            </a>
            <a
              href="https://www.youtube.com/channel/UCbSAF9R8VhlT29nh3-6mqmA"
              title="youtube"
            >
              Youtube
            </a>
            <a href="https://waltzaround.itch.io/" title="itch.io">
              itch.io
            </a>
            <a href="https://behance.net/waltzaround" title="behance">
              Behance
            </a>
            <a href="https://dribbble.com/waltzaround" title="dribbble">
              Dribbble
            </a>
          </div>
        </div>
      </section>

      <p className="footer-end">
        © {currentYear} Walter Lim - All rights reserved{" "}
      </p>
    </footer>
  );
}



export default Footer;
