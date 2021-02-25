import React from "react";
import ProjectButton from "./ProjectButton";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <h3> &copy; {year} Megan Paffrath</h3>
      <center>
        <ProjectButton type="github" link="https://github.com/MeganPaffrath" text=""/>
        <ProjectButton type="linkedin" link="https://www.linkedin.com/in/meganpaffrath/" text=""/>
      </center>
    </footer>
  );
}