import React from "react";

export default function Project(props) {
  return (
    <div className="project">
        <h4> {props.title} </h4>
        <p> Tech: {props.tech} </p>
        <p> {props.description} </p>
      </div>
  );
}