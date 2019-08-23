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
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner z-depth-1">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={require(`../assets/project/bemad.png`)}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={require(`../assets/project/bigshelfimagin.png`)}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={require(`../assets/project/crizelarci.png`)}
                    alt="Third slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={require(`../assets/project/grid-academy.png`)}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item ">
                  <img
                    className="d-block w-100"
                    src={require(`../assets/project/creaive-agency.png`)}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item ">
                  <img
                    className="d-block w-100"
                    src={require(`../assets/project/car-rental.png`)}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item ">
                  <img
                    className="d-block w-100"
                    src={require(`../assets/project/fixxgroup.png`)}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item ">
                  <img
                    className="d-block w-100"
                    src={require(`../assets/project/psychicastrologershankar.png`)}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item ">
                  <img
                    className="d-block w-100"
                    src={require(`../assets/project/react-app.png`)}
                    alt="First slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleControls"
                  data-slide-to="0"
                  className="active"
                >
                  <img
                    src={require(`../assets/project/bemad.png`)}
                    width="100"
                    height= "50"
                  />
                </li>
                <li data-target="#carouselExampleControls" data-slide-to="1">
                  <img
                    src={require(`../assets/project/bigshelfimagin.png`)}
                    width="100"
                    height= "50"
                  />
                </li>
                <li data-target="#carouselExampleControls" data-slide-to="2">
                  <img
                    src={require(`../assets/project/crizelarci.png`)}
                    width="100"
                    height= "50"
                  />
                </li>
                <li
                  data-target="#carouselExampleControls"
                  data-slide-to="3"
                  className="active"
                >
                  <img
                    src={require(`../assets/project/grid-academy.png`)}
                    width="100"
                    height= "50"
                  />
                </li>
                <li
                  data-target="#carouselExampleControls"
                  data-slide-to="4"
                  className="active"
                >
                  <img
                    src={require(`../assets/project/creaive-agency.png`)}
                    width="100"
                    height= "50"
                  />
                </li>
                <li
                  data-target="#carouselExampleControls"
                  data-slide-to="5"
                  className="active"
                >
                  <img
                    src={require(`../assets/project/car-rental.png`)}
                    width="100"
                    height= "50"
                  />
                </li>
                <li
                  data-target="#carouselExampleControls"
                  data-slide-to="6"
                  className="active"
                >
                  <img
                    src={require(`../assets/project/fixxgroup.png`)}
                    width="100"
                    height= "50"
                  />
                </li>
                <li
                  data-target="#carouselExampleControls"
                  data-slide-to="7"
                  className="active"
                >
                  <img
                    src={require(`../assets/project/psychicastrologershankar.png`)}
                    width="100"
                    height= "50"
                  />
                </li>
                <li
                  data-target="#carouselExampleControls"
                  data-slide-to="8"
                  className="active"
                >
                  <img
                    src={require(`../assets/project/react-app.png`)}
                    width="100"
                    height= "50"
                  />
                </li>
              </ol>
            </div>
            <div className="text-center">
              <a
                className="btn btn-primary"
                href="http://rajv-portfolio.herokuapp.com/project"
              >
                View all projects & Details
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
