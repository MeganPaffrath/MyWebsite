import React from "react";
import Projects from "./Projects";
import Intro from "./Intro";


export default function Home() {
  return (
    <div className="home">
      <section>
        <div className="page-boundary">
          < Intro />
        </div>
      </section>
      <section>
        <div className="page-boundary padding-top-bottom">
         <Projects />
        </div>
      </section>
    </div>
  )
}