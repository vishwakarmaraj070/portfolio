import React, { Component } from "react";
import Skills from "./Skills";
import Client from "./Client";
import Project from "./Project";
import Blog from "./Blog";
import $ from "jquery";
import { NavLink } from "react-router-dom";

export default class About extends Component {
  componentDidMount() {
    $("section.section-featured-projects .carousel-item").hover(
      function() {
        let height = this.clientHeight;
        let imgHeight = $(this.children).height();
        $(this.children).css({
          transition: "3s linear",
          top: "-" + (imgHeight - height) + "px"
        });
      },
      function() {
        $(this.children).css({
          transition: "1s linear",
          top: "0px"
        });
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        {/* skills */}
        <Skills />

        {/* client */}
        <Client />

        {/* project */}
        <Project />

        {/* featured in */}
        <section className="bg-primary py-5 section-press white-text">
          <div className="container">
            <h3 className="section-title font-weight-bold text-center mb-5">
              Featured in
            </h3>
            <div className="press-logos row">
              <div className="align-self-center press-logo px-4 px-lg-3 col-6 col-lg-3 mr-0 px-md-5 px-lg-5 mb-3 mb-lg-0">
                <NavLink className="logo-link" to="/">
                  <img
                    className="img-fluid svg-ie-fix"
                    src={require("../assets/featured/press-logo-1.png")}
                  />
                </NavLink>
              </div>
              <div className="align-self-center press-logo px-4 px-lg-3  col-6 col-lg-3 mr-0 px-md-5 px-lg-5 mb-3 mb-lg-0">
                <NavLink className="logo-link" to="/">
                  <img
                    className="img-fluid svg-ie-fix"
                    src={require("../assets/featured/press-logo-2.png")}
                  />
                </NavLink>
              </div>
              <div className="align-self-center press-logo px-4 px-lg-3  col-6 col-lg-3 mr-0 px-md-5 px-lg-5 mb-3 mb-lg-0">
                <NavLink className="logo-link" to="/">
                  <img
                    className="img-fluid svg-ie-fix"
                    src={require("../assets/featured/press-logo-3.png")}
                  />
                </NavLink>
              </div>
              <div className="align-self-center press-logo px-4 px-lg-3 col-6 col-lg-3 mr-0 px-md-5 px-lg-5 mb-3 mb-lg-0">
                <NavLink className="logo-link" to="/">
                  <img
                    className="img-fluid svg-ie-fix"
                    src={require("../assets/featured/press-logo-4.png")}
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* blog */}
        <Blog />
      </React.Fragment>
    );
  }
}
