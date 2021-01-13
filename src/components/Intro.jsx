import React from "react";
import Logo from "./Logo";

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

      <p>I consider learning and self development to be my biggest hobbies. You will never fail to find me without a personal project going. I have many plans for future apps and websites that I look forward to creating. I invite you to learn more about my journey through this very website.</p>
      
      <p style={{textAlign: "center"}}>Programmer | Musician | Artist</p>
    </div>
  )
}