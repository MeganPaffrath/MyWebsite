
//jshint esversion: 6

import React from "react";
import ReactDOM from "react-dom";

class Navbar extends React.Component {

  render() {
    let content = (
      <h1>NAVBAR COMPONENT LOADED</h1>
    );

    return <nav>{content}</nav>;
  }

}

ReactDOM.render(<Navbar/>,
  document.getElementById("myNav")
);
