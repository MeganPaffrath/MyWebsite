import React from "react";
import megan from "../img/meganpaffrath.jpg";

export default function Logo() {
  const photoBoxStyle = {
    textAlign: "center"
  }

  const logoStyle = {
    width: "40%",
    borderRadius: "50%"
  }

  return (
    <div style={photoBoxStyle}>
      <img style={logoStyle} src={megan} alt="Megan Paffrath" />
    </div>
    
  );
}