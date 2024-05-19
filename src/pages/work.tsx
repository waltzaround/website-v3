import { useEffect } from "react";
import Header from "../components/Header";
import "../search.css";
import projects from "../current-projects.json";
import featured from "../featured-projects.json";
import more from "../projects.json";



import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

function SearchBar() {
  
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform search logic here
    console.log("Searching for:", searchTerm);
  };
  const combinedProjects = [...projects.projects, ...featured.projects, ...more.projects];
  return (
    <>

    <section className="search">
    <h1 className="search-title">All Work / Projects</h1>
    <form onSubmit={handleSubmit}>
      <input className="search-input"
        type="text"
        placeholder="Search all work / projects..."
        value={searchTerm}
        onChange={handleSearch}
      />
   <h5>Filter by..</h5>
    <div className="search-skills">
    
      <div>
<h6>Skills</h6>
<div  className="search-skills-section">
    <button>Service Design</button>
    <button>Product Design</button>
    <button>UX Research</button>
    <button>Frontend Development</button>
    <button>Game Development</button></div>
    </div>
    <div>
    <h6>Touchpoint</h6>
    <div  className="search-skills-section">
      <button>Web</button>
      <button>iOS</button>
      <button>Android</button>
      <button>Virtual Reality</button>
      <button>Augmented Reality</button></div>
      </div>
    </div>

    </form>
   
    </section>
    <section className="project-parent">
       
          <p>{combinedProjects.length} projects</p>
    <div className="project-card-container">
            {combinedProjects.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
            ))}

        
          </div>
          </section>

    </>
  );
}









function Work() {
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

     <SearchBar/>
     <Footer/>
      </div>
      
    </>
  );
}
export default Work;
