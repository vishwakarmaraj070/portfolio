import React, { Component } from "react";

export default class Client extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-primary my-5 py-5 text-center white-text">
        <h3 className="section-title font-weight-bold text-center mb-5">
            Great clients I've worked with
            </h3>
          <div className="wrapper-carousel-fix">
            <div
              id="carousel-example-1"
              className="carousel no-flex testimonial-carousel slide carousel-fade"
              data-ride="carousel"
              data-interval="false"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="testimonial">
                    <div className="avatar mx-auto mb-4">
                      <img
                        src={require(`../assets/client/cl1.png`)}
                        className="rounded-circle img-fluid"
                        alt="First sample avatar image"
                      />
                    </div>
                    <p>
                      <i className="fas fa-quote-left" /> Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit. Quod eos id officiis
                      hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Dolore cum
                      accusamus eveniet molestias voluptatum inventore
                      laboriosam labore sit, aspernatur praesentium iste impedit
                      quidem dolor veniam.
                    </p>
                    <h4 className="font-weight-bold">Bigshelfimagin</h4>
                    <h6 className="font-weight-bold my-3">
                      Founder at this Company
                    </h6>
                    <i className="fa fa-star blue-text"> </i>
                    <i className="fa fa-star blue-text"> </i>
                    <i className="fa fa-star blue-text"> </i>
                    <i className="fa fa-star blue-text"> </i>
                    <i className="fa fa-star-half-alt blue-text"> </i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial">
                    <div className="avatar mx-auto mb-4">
                      <img
                        src={require(`../assets/client/cl4.png`)}
                        className="rounded-circle img-fluid"
                        alt="Second sample avatar image"
                      />
                    </div>
                    <p>
                      <i className="fas fa-quote-left" /> Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit, sed quia non numquam eius modi tempora incidunt ut
                      labore.
                    </p>
                    <h4 className="font-weight-bold">Bemad</h4>
                    <h6 className="font-weight-bold my-3">
                      E-commerce site owner
                    </h6>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial">
                    <div className="avatar mx-auto mb-4">
                      <img
                        src={require(`../assets/client/cl6.png`)}
                        className="rounded-circle img-fluid"
                        alt="Third sample avatar image"
                      />
                    </div>
                    <p>
                      <i className="fas fa-quote-left" /> Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum. Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque
                      laudantium.
                    </p>
                    <h4 className="font-weight-bold">traaexplore</h4>
                    <h6 className="font-weight-bold my-3">
                      Front-end Developer want more
                    </h6>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="far fa-star blue-text"> </i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial">
                    <div className="avatar mx-auto mb-4">
                      <img
                        src={require(`../assets/client/cl7.png`)}
                        className="rounded-circle img-fluid"
                        alt="Third sample avatar image"
                      />
                    </div>
                    <p>
                      <i className="fas fa-quote-left" /> Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum. Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque
                      laudantium.
                    </p>
                    <h4 className="font-weight-bold">Fixxgroup</h4>
                    <h6 className="font-weight-bold my-3">
                      Front-end Developer want more
                    </h6>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="far fa-star blue-text"> </i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial">
                    <div className="avatar mx-auto mb-4">
                      <img
                        src={require(`../assets/client/cl8.png`)}
                        className="rounded-circle img-fluid"
                        alt="Third sample avatar image"
                      />
                    </div>
                    <p>
                      <i className="fas fa-quote-left" /> Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum. Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque
                      laudantium.
                    </p>
                    <h4 className="font-weight-bold">Crizel ARCI</h4>
                    <h6 className="font-weight-bold my-3">
                      Founder of this arcitecture websites
                    </h6>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="far fa-star blue-text"> </i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial">
                    <div className="avatar mx-auto mb-4">
                      <img
                        src={require(`../assets/client/cl9.png`)}
                        className="rounded-circle img-fluid"
                        alt="Third sample avatar image"
                      />
                    </div>
                    <p>
                      <i className="fas fa-quote-left" /> Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum. Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque
                      laudantium.
                    </p>
                    <h4 className="font-weight-bold">Grip academy</h4>
                    <h6 className="font-weight-bold my-3">
                      Front-end Developer want more
                    </h6>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="far fa-star blue-text"> </i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial">
                    <div className="avatar mx-auto mb-4">
                      <img
                        src={require(`../assets/client/cl2.png`)}
                        className="rounded-circle img-fluid"
                        alt="Third sample avatar image"
                      />
                    </div>
                    <p>
                      <i className="fas fa-quote-left" /> Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum. Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque
                      laudantium.
                    </p>
                    <h4 className="font-weight-bold">Astrolrger Shanker</h4>
                    <h6 className="font-weight-bold my-3">
                      owner of this sites
                    </h6>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="far fa-star blue-text"> </i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial">
                    <div className="avatar mx-auto mb-4">
                      <img
                        src={require(`../assets/client/cl3.png`)}
                        className="rounded-circle img-fluid"
                        alt="Third sample avatar image"
                      />
                    </div>
                    <p>
                      <i className="fas fa-quote-left" /> Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum. Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque
                      laudantium.
                    </p>
                    <h4 className="font-weight-bold">Shakti murgan</h4>
                    <h6 className="font-weight-bold my-3">
                      owner of this websites
                    </h6>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="far fa-star blue-text"> </i>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial">
                    <div className="avatar mx-auto mb-4">
                      <img
                        src={require(`../assets/client/cl5.png`)}
                        className="rounded-circle img-fluid"
                        alt="Third sample avatar image"
                      />
                    </div>
                    <p>
                      <i className="fas fa-quote-left" /> Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum. Sed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque
                      laudantium.
                    </p>
                    <h4 className="font-weight-bold">cabs-to</h4>
                    <h6 className="font-weight-bold my-3">
                      car-rental websites want more
                    </h6>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="fas fa-star blue-text"> </i>
                    <i className="far fa-star blue-text"> </i>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev left carousel-control"
                href="#carousel-example-1"
                role="button"
                data-slide="prev"
              >
                <span className="icon-prev" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next right carousel-control"
                href="#carousel-example-1"
                role="button"
                data-slide="next"
              >
                <span className="icon-next" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
