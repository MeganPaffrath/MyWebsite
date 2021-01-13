import React from "react"

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return <h3> &copy; {year} Megan Paffrath</h3>;
}