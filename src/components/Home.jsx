import React from "react";
import Projects from "./Projects";
import Logo from "./Logo";
import Intro from "./Intro";

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

export default function Home() {
  return (
    <div className="home">
      <section>
        <div class="page-boundary">
          < Intro />
        </div>
      </section>
      <section>
        <div class="page-boundary">
         <Projects />
        </div>
      </section>
    </div>
  )
}