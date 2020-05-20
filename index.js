//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import Footer from "./footer";


let navBar = (
  <nav>navy</nav>
);

class App extends React.Component {

  Navbar(props) {
    return myNav;
  }

  render() {
    return ( <div>
      contents
      </div>
    );
  }
}

ReactDOM.render(<App/>,
  document.getElementById("root")
);
