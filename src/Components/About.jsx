import React from "react";
import about from "../Images/about.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

export default function About() {
  return (
    <>
      <Common
        tital="Welcome to about page"
        btnName="Contact Now"
        link="/contact"
        imgsrc={about}
      />
    </>
  );
}
