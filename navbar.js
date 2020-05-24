
//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";
import resume from "./resume-megan-paffrath.pdf";
import mynav from "./nav.css";

class Navbar extends React.Component {

  render() {
    let content = [
      <nav class="navbar navbar-expand-lg navbar-dark sticky">
      <div class ="container">
      <a class="navbar-brand" href="/">Megan Paffrath</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="/">Home</a>
          <a class="nav-item nav-link" href="/education">Education</a>
          <a class="nav-item nav-link" href={resume} target="_blank">Resume</a>
        </div>
      </div>
      </div>
    </nav>,
    <div class="nav-space"></div>
  ];

// <div style="post-nav"></div>
    return <div>{content}</div>;
  }

}

ReactDOM.render(<Navbar/>,
  document.getElementById("myNav")
);
