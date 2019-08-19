import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="skills-section section py-5">
          <div className="container">
            <h3 className="section-title font-weight-bold text-center mb-3">
              Skills Overview
            </h3>
            <div className="section-intro mx-auto text-center mb-5 text-secondary">
              I have more than 8 years' experience building rich web
              applications for clients all over the world. Below is a quick
              overview of my main technical skill sets and tools I use. Want to
              find out more about my experience?
              <a href="https://themes.3rdwavemedia.com/instance/bs4/resume.html">
                Check out my online resume
              </a>
            </div>
            {/*skills  */}

            <div className="skills-blocks mx-auto pt-5">
              <div className="row">
                <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
                  <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                    <h4 className="skills-cat text-center mb-3 mt-5">
                      Frontend
                    </h4>
                    <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                      <img
                        className="skills-icon"
                        src="./Bootstrap 4 Portfolio Template For Developers_files/frontend-icon.svg"
                      />
                    </div>
                    <ul className="skills-list list-unstyled text-secondary">
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        React/Redux/Angular
                      </li>
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        Javascript
                      </li>
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        Node.js
                      </li>
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        Webpack/Gulp/Grunt
                      </li>
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>{" "}
                        HTML/CSS/SASS/LESS
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
                  <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                    <h4 className="skills-cat text-center mb-3 mt-5">
                      Frontend
                    </h4>
                    <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                      <img
                        className="skills-icon"
                        src="./Bootstrap 4 Portfolio Template For Developers_files/frontend-icon.svg"
                      />
                    </div>
                    <ul className="skills-list list-unstyled text-secondary">
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        React/Redux/Angular
                      </li>
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        Javascript
                      </li>
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        Node.js
                      </li>
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        Webpack/Gulp/Grunt
                      </li>
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>{" "}
                        HTML/CSS/SASS/LESS
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
                  <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                    <h4 className="skills-cat text-center mb-3 mt-5">
                      Frontend
                    </h4>
                    <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                      <img
                        className="skills-icon"
                        src="./Bootstrap 4 Portfolio Template For Developers_files/frontend-icon.svg"
                      />
                    </div>
                    <ul className="skills-list list-unstyled text-secondary">
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        React/Redux/Angular
                      </li>
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        Javascript
                      </li>
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        Node.js
                      </li>
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>
                        Webpack/Gulp/Grunt
                      </li>
                      <li className="mb-2">
                        <svg
                          className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          />
                        </svg>{" "}
                        HTML/CSS/SASS/LESS
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
