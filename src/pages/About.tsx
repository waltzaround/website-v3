import { useEffect } from "react";
import Header from "../components/Header";
import "../about.css";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
function About() {
  useEffect(() => {
    // inspired by the stripe landing page

    let c = document.getElementById("canv");
    let da = (c as HTMLCanvasElement)?.getContext("2d");

    let col = function (x: number, y: number, r: number, g: number, b: number) {
      if (da) {
        da.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        da.fillRect(x, y, 1, 1);
      }
    };
    let R = function (x: number, y: number, t: number) {
      return Math.floor(192 + 200 * Math.cos((x * x - y * y) / 300 + t));
    };

    let G = function (x: number, y: number, t: number) {
      return Math.floor(
        192 +
          200 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    let B = function (x: number, y: number, t: number) {
      return Math.floor(
        192 +
          200 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };

    let t = 0;

    let x, y;
    const run = function () {
      for (x = 0; x <= 35; x++) {
        for (y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.02; // adjust this to change seizure level
      window.requestAnimationFrame(run);
    };

    run();

    console.log("background running");
  }, []);

  return (
    <>
      {" "}
      <canvas id="canv" width="32" height="32"></canvas>
      <div className="safariHack">
        <Header />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Walter Lim - About</title>
        </Helmet>
        <section className="about-grid-2">
          <div>
            <video
              className="about-video"
              autoPlay
              playsInline
              muted
              src="/video/walt.mp4"
            ></video>
          </div>
          <div className="about-content">
            <h1>About me</h1>
            <p className="about-constrain">
              I’m a cross-functional designer with 7+ years of experience.{" "}
              <br />
              <br />I like solving problems, by making things with people. I’ve
              worked everywhere between ux research, product design, and
              frontend engineering to deliver real working products that
              actually help people. All of this in organisations from big to
              small.
              <br />
              <br />
              My past work ranges from making big multinational corporates lots
              of money through the targeted design, testing, and implementation
              of simple consumer-facing usability + accessibility improvements,
              all the way to helping b2b SaaS startups reduce churn, and get new
              features to market quickly through the delivery of simultaneous
              research, design, and code deliverables.
              <br />
              <br />
              When I put my UX engineering hat on, I thoroughly understand the
              little nuances of design and engineering collaboration. It saves a
              lot of time!
              <br />
              <br /> I’m the kind of designer that knows that using margin
              instead of padding in your components means that users are going
              to have a bad time on tablets and mobile devices because it often
              shrinks the effective touchable tap target area, making your app
              harder to interact with.
              <br />
              <br /> I'm the kind of engineer that understands the limitations
              and tradeoffs between unmoderated user research with a figma
              prototype, and moderated usability testing with a static react
              prototype without a backend. users cant input text into figma
              prototypes, and this skews results especially with forms and
              wizards that explicitly depend on accurate user input.
              <br />
              <br />
              My guiding belief is that if you don’t deliver useful, impactful
              outcomes for your users, your company and team haven’t earned your
              social license to operate.
              <br />
              <br />I am currently a design lead at{" "}
              <a
                title="Infinity Studio"
                href="https://infinitystudio.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Infinity Studio
              </a>
              , and volunteer my spare time designing and building things at{" "}
              <a
                href="https://haxx.nz"
                target="_blank"
                rel="noopener noreferrer"
              >
                haxx.nz
              </a>
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
export default About;
