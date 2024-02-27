import React from "react";
import web from "../Images/img1.gif";
import { NavLink } from "react-router-dom";

export default function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.tital}
                    <strong className="brand-name"> KSTech</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites.
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.link} className=" btn2">
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    alt=""
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
