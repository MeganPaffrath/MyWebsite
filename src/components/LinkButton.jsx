import React from "react";
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';



export default function ProjectButton(props) {

  function openLink() {
    window.open(props.link, "_blank");
  }


  return <button onClick={openLink} className="project-btn">
    {props.type === "github" ? (
      <div>
        <LogoGithub className="project-btn-logo"/>
        <br/>
        {props.text}
      </div>
    ) : null}
    {props.type === "linkedin" ? (
      <div>
        <LogoLinkedin className="project-btn-logo"/>
        <br/>
        {props.text}
      </div>
    ) : null}
    
  </button>
}