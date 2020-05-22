
//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";
import FontAwesome from "react-fontawesome";
import faStyles from 'font-awesome/css/font-awesome.css';

let courseWork = (
  <section class="courseWork">
  <div class="container">
  <h1>Course Work</h1>
  <p>I am currently taking courses both through college and online resourses.
  Below are classes that I am taking and classes that I have taken.</p>
  </div>
  </section>
);

let current = (
    <div class="container">
    <h2>Current College Classes (Summer)</h2>
    <h4>
    Programming:<br/>
    <span class="badge">Software Engineering</span>
    </h4>
    <h5>
    <ul>
    <li>item</li>
    <li>item</li>
    <li>item</li>
    <li>item</li>
    </ul>
    </h5>
    <br/><hr/><br/>
    </div>
);

let currentOnline = (
  <div class="container">
  <h2>Current Online Classes</h2>
  <h4>
  Programming:<br/>
  </h4>
  <h5>
  <span class="badge">Web Developer Bootcamp</span>
  </h5>
  <br/>
  Creativity:<br/>
  <span class="badge">Character Art</span>
  <span class="badge">Guitar System</span>
  <br/><hr/><br/>
  </div>
);

let past = (
  <div class="container">
    <h2>Past College Classes</h2>
    <h4>
    Programming:<br/>
      <span class="badge">Analysis of Algorithms</span>
      <span class="badge">Computer Architecture</span>
      <span class="badge">Computer Networks</span>
      <span class="badge">Operating Systems</span>
      <span class="badge">Website development</span>
      <span class="badge">Webpage Authoring</span>
      <span class="badge">Python</span>
      <span class="badge">Java I &amp; II</span>
      <span class="badge font-small-60">C++ I &amp; II</span>
      <span class="badge">Perl</span>
      <span class="badge font-small-60">Computer Architecture</span>
      <span class="badge font-small-50">UNIX/LINUX Operating System</span>
      <span class="badge">Programming in C</span>
      <span class="badge font-small-60">Discrete Structures</span>
      <span class="badge">Computing &amp; Responsibility</span>
      <span class="badge">Data Structures &amp; Algorithms</span>
      <span class="badge">Programming Language Concepts</span>
    <br/>
    Math:<br/>
      <span class="badge font-small-50">Mathematical Analysis <br/>of Engineering Problems</span>
      <span class="badge">Statistics for Sci/Eng</span>
      <span class="badge font-small-60">Calculus I &amp; II &amp; III</span>
      <span class="badge font-small-70">Differential Equations</span>
      <span class="badge">Linear Algebra</span>
      <span class="badge">Dynamics</span>
    <br/>
    Science/Physics:<br/>
      <span class="badge font-small-50">Physics for Engineers <br/>and Scientists I &amp; II &amp; III)</span>
      <span class="badge">Chemistry</span>
      <span class="badge">Astronomy</span>
      <span class="badge">Materials Science</span>
    </h4>
    <br/><hr/><br/>
    </div>
)

let pastOnline = (
  <div class="container">
  <h2>Past Online Classes</h2>
  <h4>
    <span class="badge">Responsive Web Design</span>
  </h4>
  <br/>
  </div>
)


class Education extends React.Component {

  render() {
    return <div>
    {courseWork}
    <section>
    {current}
    {currentOnline}
    {past}
    {pastOnline}
    </section>
    </div>
  }
}

export default Education;
