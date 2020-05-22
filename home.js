//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";
import photo from "./imgs/megan_paffrath.jpg";
// Project photos
import photoPhoto from "./imgs/image.png";
import simon from "./imgs/simon.png";
import website from "./imgs/website.png";
// Icons:
import FontAwesome from "react-fontawesome";
import faStyles from 'font-awesome/css/font-awesome.css';
import homeStyles from "./home.css";


let hello = (
  <section class="hello">
  <div class="container">
  <div class="row">
    <div class="col-lg-6 center-tb center">
      <img class="picture-of-me" src={photo} alt="megan_paffrath"/>
    </div>
    <div class="col-lg-6 center-tb">
    <h1 id="hello">Hello</h1>
    <p>  My name is Megan Paffrath. I am currently a college student studying computer science.
      Aside from school, I consider learning and self development to be my biggest hobbies.
      You will never fail to find me without a personal project going.
      I have many plans for future apps and websites that I look forward to creating.
      I invite you to learn more about my journey through this very website. </p>
      <h3>
      <span class="badge"><FontAwesome name="code"/> Programmer</span>
      <span class="badge"><FontAwesome name="music"/> Musician</span>
      <br/>
      <span class="badge"><FontAwesome name="pencil"/> Writer</span>
      <span class="badge"><FontAwesome name="paint-brush"/> Artist</span>
      </h3>
    </div>
    </div>
    </div>
  </section>
);

let old = [
  <img class="wrap-left" src={website} alt="megan_paffrath"/>,
  <h4><FontAwesome name="globe"/> This Website</h4>,
  <img class="wrap-left" src={photoPhoto} alt="megan_paffrath"/>,
  <img class="wrap-left" src={simon} alt="megan_paffrath"/>
]

let projects = (
  <section class="projects">
  <div class="container">
  <h1 id="projects">Projects</h1>

  <div class="project">
  <h4 id="this-website">This Website</h4>
  <p class="tech"><FontAwesome name="arrow-right"/> React, JavaScript, HTML, CSS</p>
  <p>This passion project of mine is a result of my continuous efforts to learn new web development skills. It is an ever-evolving project in which changes are constantly being made.</p>
  <p>This passion project of mine is a result of my continuous efforts to learn new web development skills. It is an ever-evolving project in which changes are constantly being made.</p>
  <center><button type="button" class="btn btn-outline-secondary"> <FontAwesome name="github"/> View on GitHub</button></center>
  </div>

  <hr/>

  <div class="project">

  <h4 id="photo-re-namer">Photo Re-namer</h4>
  <p class="tech"><FontAwesome name="arrow-right"/> Python</p>
  <p>This program utilizes exif data to figure out when photos and videos were taken.
  Using that data, it changes the file name of multiple photos and videos at a time to
  contain the date and time the photos and videos were taken.
  This program works for jpg, mp4, and MOV files.
  <a href="https://github.com/MeganPaffrath/photoRenamer" target="\_blank">See program on github!</a></p>
  <center><button type="button" class="btn btn-outline-secondary"> <FontAwesome name="github"/> View on GitHub</button></center>

  </div>

  <hr/>

  <div class="project">

  <h4 id="simon-memory-game">Simon Memory Game</h4>
  <p class="tech"><FontAwesome name="arrow-right"/> JavaScript, HTML, CSS</p>
  <p>The computer creates a pattern that the user must guess correctly
  to move forward. Every time the user guesses correctly, the computer
  adds one more event to the pattern. The pattern gets progressively
  longer until the player fails to guess the pattern properly.
  This game was created with the help of an <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" target="\_blank">online course</a>.
  Also, this game is not yet available for mobile. <a href="https://meganpaffrath.github.io/simonGame/" target="\_blank">Play Now on Computer!</a></p>
  <center><button type="button" class="btn btn-outline-secondary"> <FontAwesome name="github"/> View on GitHub</button></center>
  </div>
  </div>
  </section>
);

class Home extends React.Component {

  render() {
    return ( <div>
      {hello}
      {projects}
      </div>
    );
  }
}
export default Home;
