import { useEffect } from "react";

import projects from "../current-projects.json";
import featured from "../featured-projects.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  const ProjectCard = ({ project }: { project: any }) => {
    return (
      <a className="project-card" href={project.url} target="_blank">
        <img src={project.image} alt={project.title} />
        {project.development && (
          <div className="project-development">Under active development</div>
        )}
        <div className="project-card-content">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-tags">
          <div className="project-work-type">
            {project.categories.map((categories: any) => (
              <p className="project-work-type-tag">{categories}</p>
            ))}
          </div>
        </div>
      </a>
    );
  };

  useEffect(() => {
    // inspired by the stripe landing page

    const c = document.getElementById("canv");
    const da = (c as HTMLCanvasElement)?.getContext("2d");

    const col = function (
      x: number,
      y: number,
      r: number,
      g: number,
      b: number
    ) {
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
      <canvas id="canv" width="32" height="32"></canvas>
      <div className="safariHack">
        <Header />

        <section className="hero-grid-2">
          <div className="hero-grid-2-text">
            <h1>
              <strong>Walter Lim</strong> is a<br />
              Designer + UX Engineer
            </h1>
          </div>
          <div className="hero-grid-2-text">
            <p>
              Walter Lim is a cross-functional designer with 7+ years of
              experience based in Auckland, New Zealand.{" "}
            </p>
            <p>
              He's worked across a wide range of B2C, B2B, and B2B2C products
              across many different industries. He&apos;s been featured in both{" "}
              <a href="/media">local and international media</a> for his design
              work.
            </p>
            <p>
              He currently leads product design at{" "}
              <a href="https://infinitystudio.ai" target="_blank">
                Infinity Studio
              </a>
              , and volunteers his spare time building silly things at{" "}
              <a href="https://haxx.nz" target="_blank">
                haxx.nz
              </a>
            </p>
            <h2 className="tag-heading">Current availability:</h2>
            <div className="tag">
              <div className="tag-dot" />
              Oversubscribed &amp; Unavailable
            </div>
          </div>
        </section>
        <section className="testimonials">
          <p>My work has been featured in...</p>
          <div className="slide-track">
            <a
              href="https://businessdesk.co.nz/article/news-in-brief/developers-build-better-vaccine-booking-website"
              className="slide"
              target="_blank"
            >
              <img src="/media/01.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://tedxauckland.com/events/dec-2022-down-to-earth/"
              className="slide"
              target="_blank"
            >
              <img src="/media/02.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://www.zmonline.com/the-latest/this-website-will-show-you-every-available-vaccination-slot-in-your-area-so-we-can-all-get-vaxxd/"
              className="slide"
              target="_blank"
            >
              <img src="/media/03.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://www.1news.co.nz/2021/09/06/kiwi-friends-build-website-to-help-speed-up-vaccinations/"
              className="slide"
              target="_blank"
            >
              <img src="/media/04.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=erZ6kTJTpmI"
              className="slide"
              target="_blank"
            >
              <img src="/media/05.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://www.stuff.co.nz/national/health/coronavirus/126293947/covid19-hackathon-creates-faster-way-to-find-a-covid19-vaccine-near-you"
              className="slide"
              target="_blank"
            >
              <img src="/media/06.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://gizmodo.com/twitter-elon-musk-verified-impersonators-checkmark-1849768462"
              className="slide"
              target="_blank"
            >
              <img src="/media/07.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://www.theverge.com/2022/11/10/23451316/this-chrome-extension-tells-you-who-paid-for-twitters-blue-checkmark"
              className="slide"
              target="_blank"
            >
              <img src="/media/08.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://www.engadget.com/browser-extension-tells-you-who-paid-for-twitter-verification-012103388.html?src=rss"
              className="slide"
              target="_blank"
            >
              <img src="/media/09.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://businessdesk.co.nz/article/news-in-brief/developers-build-better-vaccine-booking-website"
              className="slide"
              target="_blank"
            >
              <img src="/media/01.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://tedxauckland.com/events/dec-2022-down-to-earth/"
              className="slide"
              target="_blank"
            >
              <img src="/media/02.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://www.zmonline.com/the-latest/this-website-will-show-you-every-available-vaccination-slot-in-your-area-so-we-can-all-get-vaxxd/"
              className="slide"
              target="_blank"
            >
              <img src="/media/03.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://www.1news.co.nz/2021/09/06/kiwi-friends-build-website-to-help-speed-up-vaccinations/"
              className="slide"
              target="_blank"
            >
              <img src="/media/04.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=erZ6kTJTpmI"
              className="slide"
              target="_blank"
            >
              <img src="/media/05.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://www.stuff.co.nz/national/health/coronavirus/126293947/covid19-hackathon-creates-faster-way-to-find-a-covid19-vaccine-near-you"
              className="slide"
              target="_blank"
            >
              <img src="/media/06.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://gizmodo.com/twitter-elon-musk-verified-impersonators-checkmark-1849768462"
              className="slide"
              target="_blank"
            >
              <img src="/media/07.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://www.theverge.com/2022/11/10/23451316/this-chrome-extension-tells-you-who-paid-for-twitters-blue-checkmark"
              className="slide"
              target="_blank"
            >
              <img src="/media/08.png" height="100" width="250" alt="" />
            </a>
            <a
              href="https://www.engadget.com/browser-extension-tells-you-who-paid-for-twitter-verification-012103388.html?src=rss"
              className="slide"
              target="_blank"
            >
              <img src="/media/09.png" height="100" width="250" alt="" />
            </a>
          </div>
        </section>
        <section className="project-parent">
          <h2>Current projects</h2>
          <div className="project-card-container">
            {projects.projects.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <section className="project-parent">
          <h2>Featured Work</h2>
          <div className="project-card-container">
            {featured.projects.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <a className="project-see-more" href="/">
            See all projects
          </a>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
