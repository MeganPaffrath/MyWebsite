import React from "react";
import ProjectButton from "./LinkButton";

export default function Project(props) {
  return (
    <div className="project single-box">
        <h3> {props.title} </h3>
        <p> Technology: {props.tech} </p>
        <p> {props.description} </p>
        <div className="all-btns">
          {props.links.github ? <ProjectButton type="github" link={props.links.github} text="View on Github"/> : null}
          {props.links.google ? <ProjectButton /> : null}
        </div>
    </div>
  );
}

// {projectItems.map(createProject)}