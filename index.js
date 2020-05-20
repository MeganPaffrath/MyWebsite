//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import Home from "./home";
import About from "./about";


let navBar = (
  <nav>navy</nav>
);

class App extends React.Component {

  Navbar(props) {
    return myNav;
  }

  render() {
    let content = <Home/>;
    let about = <About/>;

    return ( <div>
      {content}
      {about}
      </div>
    );
  }
}

ReactDOM.render(<App/>,
  document.getElementById("root")
);
