import { useEffect } from "react";
import Header from "../components/Header";
import "../contact.css"
import Footer from "../components/Footer";
function Contact() {
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
        <div className="spacer">
        <section className="contact">
          <h1>Contact</h1>
          <div className="contact-container">
            <div>
          
          <h2>Discord</h2>
          <p>Send a message here if you want to collaborate on interesting noncommercial projects / open source stuff</p>
          
          </div>
          <a href="http://discordapp.com/users/waltzaround">Contact</a>
          </div>
          <div className="contact-container">
            <div> 
          <h2>LinkedIn</h2>
          <p>Send a message here if you want to chat in a professional capacity</p>
          </div>   <a href="https://www.linkedin.com/in/waltzaround/">Contact</a>
          </div>
          <div className="contact-container">
            <div>
          <h2>Email</h2>
          <p>Email available on request</p>
          </div>   
          </div>
        </section></div>
        <Footer />
      </div>
  
    </>
  );
}
export default Contact;
