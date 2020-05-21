//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import Home from "./home";
import Education from "./education";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


let navBar = (
  <nav>navy</nav>
);


class App extends React.Component {

  render() {

    return (
      <div>
        <Education />
      </div>

      // <Router>
      //   <div>
      //     <Route path="/education" component={Education} />
      //     <Home />
      //   </div>
      //
      // </Router>
    );
  }
}

ReactDOM.render(<App/>,
  document.getElementById("root")
);
