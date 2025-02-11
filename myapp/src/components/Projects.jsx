import React from 'react';

const Projects = () => {
  return (
    <section className="projects">
      {[
        {
          title: "Tic Tac Toe Game",
          description:
            "An interactive Tic Tac Toe game built with modern web technologies. Features include two-player mode, win detection, and a clean, responsive design.",
          tech: ["HTML5", "CSS3", "JavaScript"],
        },
        {
          title: "Calculator",
          description:
            "A fully functional calculator application with a modern interface. Supports basic arithmetic operations and features a responsive design.",
          tech: ["HTML5", "CSS3", "JavaScript"],
        },
      ].map((project, index) => (
        <div key={index} className="project-card">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="tech-stack">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <a href="#" className="project-link">
            View Project
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
