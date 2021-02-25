import React from "react";
import {FaLinkedin, FaGithub, FaPlayCircle} from "react-icons/fa";

export default function ProjectButton(props) {

  function openLink() {
    window.open(props.link, "_blank");
  }


  return <button onClick={openLink} className="project-btn">
    {props.type === "github" ? (
      <div>
        <h2>
          <FaGithub className="project-btn-logo"/>
        </h2>
        {props.text ? <h4>{props.text}</h4> : ''}
      </div>
    ) : null}
    {props.type === "linkedin" ? (
      <div>
        <h2>
          <FaLinkedin className="project-btn-logo"/>
        </h2>
        {props.text ? <h4>{props.text}</h4> : ''}
      </div>
    ) : null}
    {props.type === "live" ? (
      <div>
        <h2>
          <FaPlayCircle className="project-btn-logo"/>
        </h2>
        {props.text ? <h4>{props.text}</h4> : ''}
      </div>
    ) : null}
  </button>
}