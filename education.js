
//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";
import FontAwesome from "react-fontawesome";
import faStyles from 'font-awesome/css/font-awesome.css';

let courseWork = (
  <section class="courseWork">
  <h1>Course Work</h1>
  <p>I am currently taking courses both through college and online resourses.
  Below are classes that I am taking and classes that I have taken.</p>
  </section>
);

let current = (
  <section>
    <h2>Current College Classes</h2>
    <h4>
    Programming:<br/>
    <span class="badge badge-light">Analysis of Algorithms</span>
    <span class="badge badge-light">Computer Architecture</span>
    <span class="badge badge-light">Computer Networks</span>
    <span class="badge badge-light">Operating Systems</span>
    <span class="badge badge-light">Website development</span>
    </h4>
  </section>
);

let currentOnline = (
  <section>
  <h2>Current Online Classes</h2>
  <h4>
  Programming:<br/>
  <span class="badge badge-light">Web Developer Bootcamp</span>
  <br/>
  Creativity:<br/>
  <span class="badge badge-light">Character Art</span>
  <span class="badge badge-light">Guitar System</span>
  </h4>
</section>
);

let past = (
  <section>
    <h2>Past College Classes</h2>
    <h4>
    Programming:<br/>
      <span class="badge badge-light">Webpage Authoring</span>
      <span class="badge badge-light">Python</span>
      <span class="badge badge-light">Java I &amp; II</span>
      <span class="badge badge-light font-small-60">C++ I &amp; II</span>
      <span class="badge badge-light">Perl</span>
      <span class="badge badge-light font-small-60">Computer Architecture</span>
      <span class="badge badge-light font-small-50">UNIX/LINUX Operating System</span>
      <span class="badge badge-light">Programming in C</span>
      <span class="badge badge-light font-small-60">Discrete Structures</span>
      <span class="badge badge-light">Computing &amp; Responsibility</span>
      <span class="badge badge-light">Data Structures &amp; Algorithms</span>
      <span class="badge badge-light">Programming Language Concepts</span>
    <br/>
    Math:<br/>
      <span class="badge badge-light font-small-50">Mathematical Analysis <br/>of Engineering Problems</span>
      <span class="badge badge-light">Statistics for Sci/Eng</span>
      <span class="badge badge-light font-small-60">Calculus I &amp; II &amp; III</span>
      <span class="badge badge-light font-small-70">Differential Equations</span>
      <span class="badge badge-light">Linear Algebra</span>
      <span class="badge badge-light">Dynamics</span>
    <br/>
    Science/Physics:<br/>
      <span class="badge badge-light font-small-50">Physics for Engineers <br/>and Scientists I &amp; II &amp; III)</span>
      <span class="badge badge-light">Chemistry</span>
      <span class="badge badge-light">Astronomy</span>
      <span class="badge badge-light">Materials Science</span>
    </h4>
  </section>
)

let pastOnline = (
  <section>
  <h2>Past Online Classes</h2>
  <h4>
    <span class="badge badge-light">Responsive Web Design</span>
  </h4>
</section>
)


class Education extends React.Component {

  render() {
    return <div>
    {courseWork}
    {current}
    {currentOnline}
    {past}
    {pastOnline}
    </div>;
  }
}

export default Education;
