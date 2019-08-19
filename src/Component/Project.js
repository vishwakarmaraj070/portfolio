import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section-featured-projects py-5">
		<div className="container">
			<h3 className="section-title font-weight-bold text-center mb-5">
				Featured Projects
			</h3>

			<div className="project-cards row mb-5">
				<div className="col-12 col-lg-4">
					<div className="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
						<div className="card-img-container position-relative">
							<img className="card-img-top rounded-0"
								src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
								alt="project-img" />
							<div className="card-img-overlay overlay-logo text-center">
								<div className="project-logo">
									<img className="img-fluid w-50"
										src="./Bootstrap 4 Portfolio Template For Developers_files/logo-1-inverse.svg" />
								</div>
							</div>
							<a className="card-img-overlay overlay-content text-left p-lg-4"
								href="https://themes.3rdwavemedia.com/instance/bs4/project.html">
								<h5 className="card-title font-weight-bold">Client: Google</h5>
								<p className="card-text">
									Project summary goes here. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Quisque vel sapien quis nulla
									dictum euismod...
								</p>
							</a>
						</div>
						<div className="card-body pb-0">
							<h4 className="card-title text-truncate text-center mb-0">
								<a href="https://themes.3rdwavemedia.com/instance/bs4/project.html">SaaS Product</a>
							</h4>
						</div>

						<div className="card-footer border-0 text-center bg-white pb-4">
							<ul className="list-inline mb-0 mx-auto">
								<li className="list-inline-item">
									<span className="badge badge-secondary badge-pill">Angular</span>
								</li>
								<li className="list-inline-item">
									<span className="badge badge-secondary badge-pill">Django</span>
								</li>
								<li className="list-inline-item">
									<span className="badge badge-secondary badge-pill">MongoDB</span>
								</li>
								<li className="list-inline-item">
									<span className="badge badge-secondary badge-pill">HTML/CSS</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-4">
					<div className="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
						<div className="card-img-container position-relative">
							<img className="card-img-top rounded-0"
								src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
								alt="" />
							<div className="card-img-overlay overlay-logo text-center">
								<div className="project-logo">
									<img className="img-fluid w-50"
										src="./Bootstrap 4 Portfolio Template For Developers_files/logo-2-inverse.svg" />
								</div>
							</div>
							<a className="card-img-overlay overlay-content text-left p-lg-4"
								href="https://themes.3rdwavemedia.com/instance/bs4/project.html">
								<h5 className="card-title font-weight-bold">Client: Basecamp</h5>
								<p className="card-text">
									Project summary goes here. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Quisque vel sapien quis nulla
									dictum euismod...
								</p>
							</a>
						</div>
						<div className="card-body pb-0">
							<h4 className="card-title text-truncate text-center mb-0">
								<a href="https://themes.3rdwavemedia.com/instance/bs4/project.html">Webapp
									Development</a>
							</h4>
						</div>

						<div className="card-footer border-0 text-center bg-white pb-4">
							<ul className="list-inline mb-0 mx-auto">
								<li className="list-inline-item">
									<span className="badge badge-secondary badge-pill">Rails</span>
								</li>
								<li className="list-inline-item">
									<span className="badge badge-secondary badge-pill">jQuery</span>
								</li>
								<li className="list-inline-item">
									<span className="badge badge-secondary badge-pill">PostgresSQL</span>
								</li>
								<li className="list-inline-item">
									<span className="badge badge-secondary badge-pill">HTML/LESS</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-4">
					<div className="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
						<div className="card-img-container position-relative">
							<img className="card-img-top rounded-0"
								src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
								alt="" />
							<div className="card-img-overlay overlay-logo text-center">
								<div className="project-logo">
									<img className="img-fluid w-50"
										src="./Bootstrap 4 Portfolio Template For Developers_files/logo-3-inverse.svg" />
								</div>
							</div>
							<a className="card-img-overlay overlay-content text-left p-lg-4"
								href="https://themes.3rdwavemedia.com/instance/bs4/project.html">
								<h5 className="card-title font-weight-bold">Client: Airbnb</h5>
								<p className="card-text">
									Project summary goes here. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Quisque vel sapien quis nulla
									dictum euismod...
								</p>
							</a>
						</div>
						<div className="card-body pb-0">
							<h4 className="card-title text-truncate text-center mb-0">
								<a href="https://themes.3rdwavemedia.com/instance/bs4/project.html">Mobile app
									development</a>
							</h4>
						</div>

						<div className="card-footer border-0 text-center bg-white pb-4">
							<ul className="list-inline mb-0 mx-auto">
								<li className="list-inline-item">
									<span className="badge badge-secondary badge-pill">React</span>
								</li>
								<li className="list-inline-item">
									<span className="badge badge-secondary badge-pill">Python</span>
								</li>
								<li className="list-inline-item">
									<span className="badge badge-secondary badge-pill">MySQL</span>
								</li>
								<li className="list-inline-item">
									<span className="badge badge-secondary badge-pill">Webpack</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center">
				<a className="btn btn-primary" href="https://themes.3rdwavemedia.com/instance/bs4/projects.html">View all
					projects</a>
			</div>
		</div>
	</section>
            </React.Fragment>
        )
    }
}
