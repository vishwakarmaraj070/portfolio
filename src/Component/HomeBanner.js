import React, { Component } from "react";

export default class HomeBanner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-intro theme-bg-primary text-white py-5 mt-5">
          <div className="container">
            <div className="profile-teaser media flex-column flex-md-row">
              <img
                className="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
                src="./Bootstrap 4 Portfolio Template For Developers_files/profile.jpg"
                alt="profile-img"
              />
              <div className="media-body text-center text-md-left">
                <div className="lead">Hello, my name is</div>
                <h2 className="mt-0 display-4 font-weight-bold">Raj Vishwakarma</h2>
                <div className="bio mb-3">
                  I'm a T-Shape developer specialised in frontend and i know backend also
                  development for complex scalable web apps. I write about web
                  development on
                  <a
                  target="_blank"
                    className="link-on-bg mx-2"
                    href="http://rajv-portfolio.herokuapp.com/blog"
                  >
                    my blog
                  </a>
                  and regularly
                  <a
                    target="_blank"
                    className="link-on-bg mx-2"
                    href="http://rajv-portfolio.herokuapp.com/talks"
                  >
                    speak
                  </a>
                  at various web conferences and meetups. Want to know how I may
                  help your project? Check out my project
                  <a
                  target="_blank"
                    className="link-on-bg mx-2"
                    href="http://rajv-portfolio.herokuapp.com/project"
                  >
                    case studies
                  </a>
                  and
                  <a
                    target="_blank"
                    className="link-on-bg mx-2"
                    href="http://rajv-portfolio.herokuapp.com/resume"
                  >
                    resume
                  </a>
                  .
                </div>
                <a
                  target="_blank"
                  className="theme-btn-on-bg btn font-weight-bold theme-btn-cta"
                  href="http://rajv-portfolio.herokuapp.com/contact"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
