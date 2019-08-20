import React, { Component } from "react";

export default class Project extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section-featured-projects py-5">
          <div className="container">
            <h3 className="section-title font-weight-bold text-center mb-5">
              Featured Projects
            </h3>
            {/* <div
              id="carousel-thumb"
              className="carousel slide carousel-fade carousel-thumbnails"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carousel-thumb"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carousel-thumb"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
              <ol className="carousel-indicators">
                <li
                  data-target="#carousel-thumb"
                  data-slide-to="0"
                  className="active"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg"
                    width="100"
                  />
                </li>
                <li data-target="#carousel-thumb" data-slide-to="1">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(121).jpg"
                    width="100"
                  />
                </li>
                <li data-target="#carousel-thumb" data-slide-to="2">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg"
                    width="100"
                  />
                </li>
              </ol>
			</div> */}
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleControls"
                  data-slide-to="0"
                  className="active"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                    width="100"
                  />
                </li>
                <li data-target="#carouselExampleControls" data-slide-to="1">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                    width="100"
                  />
                </li>
                <li data-target="#carouselExampleControls" data-slide-to="2">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                    width="100"
                  />
                </li>
              </ol>
            </div>
            <div className="text-center">
              <a
                className="btn btn-primary"
                href="https://themes.3rdwavemedia.com/instance/bs4/projects.html"
              >
                View all projects
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
