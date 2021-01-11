import React from "react";
import ProjectButton from "./ProjectButton";
import MdCode from 'react-ionicons/lib/MdCode';

export default function Project(props) {
  return (
    <div className="project single-box">
        <h3> {props.title} </h3>
        <p> Technology: {props.tech} </p>
        <p> {props.description} </p>
        <div className="all-btns">
        <ProjectButton /><ProjectButton />
        </div>
    </div>
  );
}