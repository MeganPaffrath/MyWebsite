import React from "react";
import Logo from "./Logo";
import LinkButton from "./LinkButton";

function greeting() {
  var hour = new Date().getHours();

  if (hour < 12) {
    return "Good Morning!";
  } else if (hour < 17) {
    return "Good Afternoon!";
  } else {
    return "Good Evening!";
  }
}


export default function Intro() {
  return (
    <div>
      <Logo />
      <h1>{greeting()}</h1>
      <p>My name is Megan Paffrath. I recently earned my degree in Computer Science in December of 2020 from California State University East Bay! </p>

      <p>I love programming and all things web development! I am most experienced with Java and the MERN stack (MongoDB, Express, React, and Node). I am always open to learning new skills and taking on new challenges.</p>

      <p>I consider learning and self development to be my biggest hobbies. You will never fail to find me without a personal project going. I have many plans for future apps and websites that I look forward to creating.</p>
      
      <p>In my free time I enjoy expanding my programming skills, rocking out on guitar, reading, cooking healthy meals, drawing, and hiking.</p>

      <center>
      <LinkButton type="github" link="https://github.com/MeganPaffrath" text=""/>
      <LinkButton type="linkedin" link="https://www.linkedin.com/in/meganpaffrath/" text=""/>
      </center>
      
    </div>
  )
}