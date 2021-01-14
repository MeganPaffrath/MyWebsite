import React from "react";
import LinkButton from "./LinkButton";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <h3> &copy; {year} Megan Paffrath</h3>
      <center>
        <LinkButton type="github" link="https://github.com/MeganPaffrath" text=""/>
        <LinkButton type="linkedin" link="https://www.linkedin.com/in/meganpaffrath/" text=""/>
      </center>
      </footer>
  );
}