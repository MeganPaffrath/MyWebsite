import React from "react";
import ProjectButton from "./ProjectButton";


export default function Project(props) {
  return (
    <div className="project single-box">
        <h3> {props.title} </h3>
        <p> Technology: {props.tech} </p>
        <p> {props.description} </p>
        <div className="all-btns">
          {props.links.github ? <ProjectButton type="github" link={props.links.github} text="View on Github"/> : null}
          {props.links.live ? <ProjectButton type="live" link={props.links.live} text="View Live"/> : null}
        </div>
    </div>
  );
}
