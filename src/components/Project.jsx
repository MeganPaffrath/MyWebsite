import React from "react";
import projects from "./projects";

export default function Project(props) {
  return (
    <div class="project">
        <h4> {props.title} </h4>
        <p> Tech: {props.tech} </p>
        <p> {props.description} </p>
      </div>
  );
}