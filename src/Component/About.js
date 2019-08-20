import React, { Component } from 'react'
import Skills from './Skills';
import Client from './Client';
import Project from './Project';
import Blog from './Blog';

export default class About extends Component {
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
					<a className="logo-link" href="https://themes.3rdwavemedia.com/instance/bs4/#" target="_blank"><img
							className="img-fluid svg-ie-fix"
							src="./Bootstrap 4 Portfolio Template For Developers_files/press-logo-1.png" /></a>
				</div>
				<div
					className="align-self-center press-logo px-4 px-lg-3  col-6 col-lg-3 mr-0 px-md-5 px-lg-5 mb-3 mb-lg-0">
					<a className="logo-link" href="https://themes.3rdwavemedia.com/instance/bs4/#" target="_blank"><img
							className="img-fluid svg-ie-fix"
							src="./Bootstrap 4 Portfolio Template For Developers_files/press-logo-2.png" /></a>
				</div>
				<div
					className="align-self-center press-logo px-4 px-lg-3  col-6 col-lg-3 mr-0 px-md-5 px-lg-5 mb-3 mb-lg-0">
					<a className="logo-link" href="https://themes.3rdwavemedia.com/instance/bs4/#" target="_blank"><img
							className="img-fluid svg-ie-fix"
							src="./Bootstrap 4 Portfolio Template For Developers_files/press-logo-3.png" /></a>
				</div>
				<div className="align-self-center press-logo px-4 px-lg-3 col-6 col-lg-3 mr-0 px-md-5 px-lg-5 mb-3 mb-lg-0">
					<a className="logo-link" href="https://themes.3rdwavemedia.com/instance/bs4/#" target="_blank"><img
							className="img-fluid svg-ie-fix"
							src="./Bootstrap 4 Portfolio Template For Developers_files/press-logo-4.png" /></a>
				</div>
			</div>
		</div>
	</section>

                {/* blog */}
                <Blog />
            </React.Fragment>
        )
    }
}
