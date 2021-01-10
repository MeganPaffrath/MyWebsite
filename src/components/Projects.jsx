import React from "react";
import Project from "./Project";
import projects from "./projects.js";

console.log(projects);

function createProject(project) {
  return (
  <Project
      key={project.key}
      title={project.title}
      tech={project.tech}
      description={project.description}
    />
  );
}

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      {projects.map(createProject)}
    </div>
  )
}