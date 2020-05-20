
//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";
import FontAwesome from "react-fontawesome";
import faStyles from 'font-awesome/css/font-awesome.css'

class Footer extends React.Component {

  Footer(props) {
    return [
      // <!-- icons -->
      <script defer="" src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>,
      // <!-- Social buttons -->
      <span key="s1"><a href="https://github.com/MeganPaffrath" target="_blank"><FontAwesome name="github"/></a></span>,
      <span key="s2"><a href="https://www.linkedin.com/in/megan-paffrath-360480183/" target="_blank"><FontAwesome name="linkedin"/></a></span>,
      <p>&copy; 2020 Megan Paffrath</p>
    ];
  }

  render() {
    return <div>{this.Footer(this)}</div>;
  }

}

ReactDOM.render(<Footer/>,
  document.getElementById("myFoot")
);
