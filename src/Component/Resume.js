import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                <article className="resume-wrapper text-center position-relative">
          <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
            <header className="resume-header pt-4 pt-md-0" style={{backgroundColor: '#3582C4'}}>
              <div className="media flex-column flex-md-row">
                <img className="mr-3 img-fluid picture mx-auto" src={require('../assets/profile.jpg')} alt="Profile" />
                <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                  <div className="primary-info">
                    <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">Raj Vishwakarma</h1>
                    <div className="title mb-3">T-Shape Developer</div>
                    <ul className="list-unstyled">
                      <li className="mb-2"><a href="!"><i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>vishwakarmaraj070@gmail.com</a></li>
                      <li><a href="!"><i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>7080433736</a></li>
                    </ul>
                  </div>
                  <div className="secondary-info ml-md-auto mt-2">
                    <ul className="resume-social list-unstyled">
                      <li className="mb-3"><a href="http://www.linkedin.com/in/raj-vishwakarma" target="_blank"><span className="fa-container text-center mr-2"><i className="fab fa-linkedin-in fa-fw"></i></span>linkedin.com/in/raj-vishwakarma</a></li>
                      <li className="mb-3"><a href="https://github.com/vishwakarmaraj070" target="_blank"><span className="fa-container text-center mr-2"><i className="fab fa-github-alt fa-fw"></i></span>https://github.com/vishwakarmaraj070</a></li>
                      <li className="mb-3"><a href="https://codepen.io/dashboard/" target="_blank"><span className="fa-container text-center mr-2"><i className="fab fa-codepen fa-fw"></i></span>https://codepen.io/rajvishwakarma/</a></li>
                      <li><a href="https://rajv-portfolio.herokuapp.com/" target="_blank"><span className="fa-container text-center mr-2"><i className="fas fa-globe"></i></span>https://rajv-portfolio.herokuapp.com/</a></li>
                    </ul>
                  </div>

                </div>
              </div>
            </header>
            <div className="resume-body p-5">
              <section className="resume-section summary-section mb-5">
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
                <div className="resume-section-content">
                  <p className="mb-0">Hi This is <span className="blue-text">Raj Vishwakarma</span>, I am <span className="blue-text">T-Shape Developer</span> specialized in <span className="blue-text">Front-end</span> technology i use for <span className="blue-text">HTML, CSS, SCSS, React, JavaScript, React, Bootstarp, MDB</span> and lots of js and css <span className="blue-text">plugin and framework</span> and know <span className="blue-text">Back-end</span> also for that i use technology <span className="blue-text">Node.js, MongoDB, Express.js, npm </span> and i love to <span className="blue-text">Design</span> and <span className="blue-text">Animation</span> and try to do some thing new and intresting for user, i love to create <span className="blue-text">User friendaly</span> Ui i love to exccept <span className="blue-text">front-end challeges</span> and as well back-end also, i love served our <span className="blue-text">service best</span> i love to <span className="blue-text">code</span></p>
                </div>
              </section>
              <div className="row">
                <div className="col-lg-9">
                  <section className="resume-section experience-section">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
                    <div className="resume-section-content">
                      <div className="resume-timeline position-relative">
                        <article className="resume-timeline-item position-relative pb-5">

                          <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">Front-End Developer</h3>
                              <div className="resume-company-name ml-auto">Bemad</div>
                            </div>
                            <div className="resume-position-time">Jan-2019 - Jun-2019</div>
                          </div>
                          <div className="resume-timeline-item-desc">
                            <p>In this Project, i as working as front-end developer, this is the php websites nad the team size was only two, one is for back-end and one is for font-end, this is the e-commerce site for sel the cloth and all the stuf, it was amaging</p>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                            <p>I did Lots of css experiments and learn more in css</p>
                            <ul>
                              <li>I learn css and scss</li>
                              <li>I Learn to make device responsive</li>
                              <li>I used to much jquery</li>
                              <li>I loved to do</li>
                            </ul>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                            <ul className="list-inline">
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">HTML</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">CSS</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">SCSS</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Jquery</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Javascript</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Bootstarp</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Other Framework</span></li>
                            </ul>
                          </div>

                        </article>

                        <article className="resume-timeline-item position-relative pb-5">

                          <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">React Developer <small className="text-muted">(self)</small></h3>
                              <div className="resume-company-name ml-auto">Developer Book <small className="text-muted">(Raj)</small></div>
                            </div>
                            <div className="resume-position-time">Jun-2019 - August-2019 </div>
                          </div>
                          <div className="resume-timeline-item-desc">
                            <p>This is my first MERN app create for developer how want to create our book and i future to use and share to others, i this i am using Node, Mongodb, Express, React, and all the rquired framework of css and js this is awesome for me to create and help the developer </p>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements</h4>
                            <p>This is my first MERN app for Developer Book fully usefull developer</p>
                            <ul>
                              <li>I learn css and scss</li>
                              <li>I Learn React lot</li>
                              <li>I Learn React lot</li>
                              <li>I Learn Nodejs lot</li>
                              <li>I Learn Mongodb lot</li>
                              <li>I Learn Express lot</li>
                              <li>I learn Much Javascript and jquery</li>
                              <li>I love to do</li>
                            </ul>       
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                            <ul className="list-inline">
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">React</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Nodejs</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">MongoDB</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Express</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">HTML/CSS/SCSS</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Javascript/Jquery</span></li>
                            </ul>
                          </div>
                        </article>

                        <article className="resume-timeline-item position-relative pb-5">

                          <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">Full Websites Design</h3>
                              <div className="resume-company-name ml-auto">Crizel ARCI</div>
                            </div>
                            <div className="resume-position-time">Feb-2019 - Feb-2019</div>
                          </div>
                          <div className="resume-timeline-item-desc">
                            <p>I was the Only developer for this website only front-end work id done in this. white doing amaging expirence </p>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements</h4>
                            <p>To create and deploy full website complete </p>
                            <ul>
                              <li>I learn css and scss</li>
                              <li>I Learn to make device responsive</li>
                              <li>I used to much jquery</li>
                              <li>I loved to do</li>
                            </ul>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                            <ul className="list-inline">
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">HTML</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">CSS?SCSS</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Bootstap</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">MDB</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Jquery</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Javascript</span></li>
                            </ul>
                          </div>

                        </article>

                        <article className="resume-timeline-item position-relative">

                          <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">Full Stack Developer</h3>
                              <div className="resume-company-name ml-auto">Bigshelfimaging</div>
                            </div>
                            <div className="resume-position-time">March-2019 - April-2019</div>
                          </div>
                          <div className="resume-timeline-item-desc">
                            <p>this was the amaging websites like e-commerce, selling printer tonner, i was the only developer for whole stuff, it was awsome for to learn more javascript and jquery</p>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements</h4>
                            <p>This was my first E-Commerce website that i fully create and deploy</p>
                            <ul>
                              <li>I learn css and scss</li>
                              <li>I Learn to make device responsive</li>
                              <li>I learn Much Javascript and jquery</li>
                              <li>I loved to do</li>
                            </ul>                            
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                            <ul className="list-inline">
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">HTML</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">CSS?SCSS</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Bootstap</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">MDB</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Jquery</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Javascript</span></li>
                            </ul>
                          </div>

                        </article>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-lg-3">
                  <section className="resume-section skills-section mb-5">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                    <div className="resume-section-content">
                      <div className="resume-skill-item">
                        <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">
                            <div className="resume-skill-name">React</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">JavaScript</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">Jquery</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">Node.js</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "40%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          
                          <li className="mb-2">
                            <div className="resume-skill-name">HTML/CSS/SASS</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">SVG</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>

                          <li className="mb-2">
                            <div className="resume-skill-name">Bootstrap</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">MDB</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">GSPA</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">Scroll Magic</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">Scroller</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="resume-skill-item">
                        <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <div className="resume-skill-name">Node.js</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "40%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">Express.js</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">MongoDB</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">Create/Fetch API</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="resume-skill-item">
                        <h4 className="resume-skills-cat font-weight-bold">Others</h4>
                        <ul className="list-inline">
                          <li className="list-inline-item"><span className="badge badge-light">DevOps</span></li>
                          <li className="list-inline-item"><span className="badge badge-light">Code Review</span></li>
                          <li className="list-inline-item"><span className="badge badge-light">Git</span></li>
                          <li className="list-inline-item"><span className="badge badge-light">Github</span></li>
                          <li className="list-inline-item"><span className="badge badge-light">Codepen</span></li>
                          <li className="list-inline-item"><span className="badge badge-light">CSS Framework</span></li>
                          <li className="list-inline-item"><span className="badge badge-light">JS Framework</span></li>
                          <li className="list-inline-item"><span className="badge badge-light">Online Tools</span></li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  <section className="resume-section education-section mb-5">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                    <div className="resume-section-content">
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <div className="resume-degree font-weight-bold">MCA Distance Education</div>
                          <div className="resume-degree-org">Sikkim Manipal Universicy</div>
                          <div className="resume-degree-time">2018 - to</div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-degree font-weight-bold">BCA Computer Application</div>
                          <div className="resume-degree-org">Garware College of Commerce Pune</div>
                          <div className="resume-degree-time">2013 - 2016</div>
                        </li>
                        <li>
                          <div className="resume-degree font-weight-bold">12th</div>
                          <div className="resume-degree-org">National college of Barhalganj Gorakhpur</div>
                          <div className="resume-degree-time">2013 - 2016</div>
                        </li>
                      </ul>
                    </div>
                  </section>
                  <section className="resume-section language-section mb-5">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                    <div className="resume-section-content">
                      <ul className="list-unstyled resume-lang-list">
                        <li className="mb-2"><span className="resume-lang-name font-weight-bold">English</span> <small className="text-muted font-weight-normal">(Professional)</small></li>
                        <li className="mb-2 align-middle"><span className="resume-lang-name font-weight-bold">Hindi</span> <small className="text-muted font-weight-normal">(Professional)</small></li>
                        <li><span className="resume-lang-name font-weight-bold">Bhojpuri</span> <small className="text-muted font-weight-normal">(Native)</small></li>
                      </ul>
                    </div>
                  </section>
                  <section className="resume-section interests-section mb-5">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2> 
                    <div className="resume-section-content">
                      <ul className="list-unstyled">
                        <li className="mb-1">Coding</li>
                        <li className="mb-1">UI / UX Design</li>
                        <li className="mb-1">Listening Songs</li>
                        <li className="mb-1">Playing Cricket</li>
                        <li className="mb-1">Success Developer</li>
                      </ul>
                    </div>
                  </section>
                  <section className="resume-section interests-section">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">See More</h2> 
                    <div className="resume-section-content">
                     <p>Interest to see my all project go to my <a href="https://rajv-portfolio.herokuapp.com/" target="_blank">Portfolio website</a></p>
                    </div>
                  </section>
                  <section>
                  <a class="btn btn btn-primary" href="http://webhut.co/wp-content/uploads/2019/08/resume.pdf" download target="_blank"><svg class="svg-inline--fa fa-download fa-w-16 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>Download PDF Version</a>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </article>
                </div>
            </React.Fragment>
        )
    }
}
