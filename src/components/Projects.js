import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" data-aos = 'fade-right'>
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Web application for movie name prediction based on movie scripts.</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Mobile Application Development.</p>
      </div>
    </section>
  );
}

export default Projects;
