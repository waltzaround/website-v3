import { useEffect } from "react";
import Header from "../components/Header";
import "../components/search.css";
import projects from "../data/current-projects.json";
import featured from "../data/featured-projects.json";
import more from "../data/projects.json";

import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const combinedProjects = [
  ...projects.projects,
  ...featured.projects,
  ...more.projects,
];

let activeList: any[];
activeList = combinedProjects;

function SearchBar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log("Searching for:", event.target.value);

    const searchResults = combinedProjects.filter(
      (project: any) =>
        project?.name
          ?.toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        project?.description
          ?.toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        project?.categories?.some((category: string) =>
          category.toLowerCase().includes(event.target.value.toLowerCase())
        )
    );

    activeList = searchResults;
    if (searchTerm === "") {
      activeList = combinedProjects;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const resetSearch = () => {
    setSearchTerm("");
    handleSearch({
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Walter Lim - Projects </title>
        <meta
          name="description"
          content="Check out my portfolio of projects and work. Explore my design, development, and research projects in various domains."
        />
        <meta
          name="keywords"
          content="portfolio, projects, work, design, development, research"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Walter Lim - Projects" />
        <meta
          property="og:description"
          content="Check out my portfolio of projects and work. Explore my design, development, and research projects in various domains."
        />
        <meta
          property="og:image"
          content="https://walt.online/images/walt.png"
        />
        <meta property="og:url" content="https://walt.online/images/walt.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Walter Lim - Projects" />
        <meta
          name="twitter:description"
          content="Check out my portfolio of projects and work. Explore my design, development, and research projects in various domains."
        />
        <meta
          name="twitter:image"
          content="https://walt.online/images/walt.png"
        />
        <link rel="canonical" href="https://walt.online" />
      </Helmet>

      <section className="search-heading">
        <h1 className="search-title">All Work / Projects</h1>
      </section>
      <section className="search" id="top">
        <form onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Search all work / projects..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {/* <h5>Filter by..</h5>
          <div className="search-skills">
            <div>
              <h6>Skills</h6>
              <div className="search-skills-section">
                <button>Product Design</button>
                <button>UX Research</button>
                <button>Design Systems</button>
                <button>Frontend Development</button>
                <button>Game Development</button>
              </div>
            </div>
            <div>
              <h6>Touchpoint</h6>
              <div className="search-skills-section">
                <button>Web</button>
                <button>iOS</button>
                <button>Android</button>
                <button>Virtual Reality</button>
                <button>Augmented Reality</button>
              </div>
            </div>
          </div> */}
        </form>
        <div className="search-footer">
          <p className="search-count">{activeList.length} projects</p>
          {/* <div className="search-filters">
            <label htmlFor="active">
              <input type="checkbox" name="active" id="active" />
              <p>Active Projects</p>
            </label>
            <label htmlFor="inactive">
              <input type="checkbox" name="inactive" id="active" />
              <p>Inactive Projects</p>
            </label>
            <label htmlFor="research">
              <input type="checkbox" name="active" id="research" checked />
              <p>UX Research</p>
            </label>
            <label htmlFor="active">
              <input type="checkbox" name="active" id="active" checked />
              <p>Product Design</p>
            </label>
            <label htmlFor="active">
              <input type="checkbox" name="active" id="active" checked />
              <p>Product Design</p>
            </label>
          </div> */}
        </div>
      </section>
      <section className="project-parent">
        <div className="project-card-container">
          {activeList.map((project: any) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        {activeList.length === 0 && (
          <section className="none-found">
            <div>
              <h3>No projects found 😢</h3>
              <button onClick={resetSearch}>Reset</button>
            </div>
          </section>
        )}
      </section>
    </>
  );
}

function Work() {
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
    const R = function (x: number, y: number, t: number) {
      return Math.floor(192 + 200 * Math.cos((x * x - y * y) / 300 + t));
    };

    const G = function (x: number, y: number, t: number) {
      return Math.floor(
        192 +
          200 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    const B = function (x: number, y: number, t: number) {
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
        <SearchBar />
        <Footer />
      </div>
    </>
  );
}
export default Work;
