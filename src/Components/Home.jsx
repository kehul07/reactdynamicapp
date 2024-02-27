import React from "react";
import web from "../Images/img1.gif";
import { NavLink } from "react-router-dom";
import Common from "./Common";

export default function Home() {
  return (
    <>
      <Common
        tital="Grow your business with"
        btnName=" Get Started"
        link="/service"
        imgsrc={web}
      />
    </>
  );
}
