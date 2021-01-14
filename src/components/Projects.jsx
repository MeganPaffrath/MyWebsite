import React from "react";
import Project from "./Project";
import projectItems from "./project-items.json";

function createProject(project) {
  return (
  <Project
      key={project.id}
      title={project.title}
      tech={project.tech}
      description={project.description}
      links={project.links}
    />
  );
}

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      {projectItems.map(createProject)}
    </div>
  )
}