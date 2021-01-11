import React from "react";
import LogoGithub from 'react-ionicons/lib/LogoGithub';



export default function ProjectButton() {
  return <button className="project-btn">
    <LogoGithub className="project-btn-logo"/>
    <br/>
    View on Github
  </button>
}