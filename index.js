//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import Home from "./home";
import Education from "./education";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component {

  render() {

    return (
      <Router>
        <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Education" component={Education} />
        </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App/>,
  document.getElementById("root")
);
