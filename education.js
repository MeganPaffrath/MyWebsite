
//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";
import FontAwesome from "react-fontawesome";
import faStyles from 'font-awesome/css/font-awesome.css';
import eduStyles from "./edu.css";

let courseWork = (
  <section class="courseWork">
  <div class="container">
  <h1>Course Work</h1>
  <p>I am currently a student at California State University East Bay majoring
  in computer science.</p>
  </div>
  </section>
);

let current = (
    <div class="container">
    <h2>Current College Classes (Summer 2020)</h2>
    <h4>Programming</h4>
    <h4>
    <span class="badge my-badge">Software Engineering</span>
    </h4>
    <hr/>
    </div>
);


let past = (
  <div class="container">
    <h2>Past College Classes</h2>
    <h4>Computer Science</h4>
    <h4>
      <span class="badge my-badge">Analysis of Algorithms</span>
      <span class="badge my-badge">Computer Architecture</span>
      <span class="badge my-badge">Computer Networks</span>
      <span class="badge my-badge">Operating Systems</span>
      <span class="badge my-badge">Website development</span>
      <span class="badge my-badge">Webpage Authoring</span>
      <span class="badge my-badge">Python</span>
      <span class="badge my-badge">Java I &amp; II</span>
      <span class="badge my-badge font-small-60">C++ I &amp; II</span>
      <span class="badge my-badge">Perl</span>
      <span class="badge my-badge font-small-60">Computer Architecture</span>
      <span class="badge my-badge font-small-50">UNIX/LINUX Operating System</span>
      <span class="badge my-badge">Programming in C</span>
      <span class="badge my-badge font-small-60">Discrete Structures</span>
      <span class="badge my-badge">Computing &amp; Responsibility</span>
      <span class="badge my-badge">Data Structures &amp; Algorithms</span>
      <span class="badge my-badge">Programming Language Concepts</span>
    </h4>
    <h4>Math</h4>
    <h4>
      <span class="badge my-badge font-small-50">Mathematical Analysis of Engineering Problems</span>
      <span class="badge my-badge">Statistics for Sci/Eng</span>
      <span class="badge my-badge font-small-60">Calculus I &amp; II &amp; III</span>
      <span class="badge my-badge font-small-70">Differential Equations</span>
      <span class="badge my-badge">Linear Algebra</span>
      <span class="badge my-badge">Dynamics</span>
    </h4>
    <h4>Science/Physics</h4>
    <h4>
      <span class="badge my-badge font-small-50">Physics for Engineers and Scientists I &amp; II &amp; III)</span>
      <span class="badge my-badge">Chemistry</span>
      <span class="badge my-badge">Astronomy</span>
      <span class="badge my-badge">Materials Science</span>
    </h4>
    </div>
)


class Education extends React.Component {

  render() {
    return <div>
    {courseWork}
    <section>
    {current}
    {past}
    </section>
    </div>
  }
}

export default Education;
