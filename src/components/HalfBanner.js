import React, { Component } from 'react'

export default class HalfBanner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header-intro theme-bg-primary text-white py-5">
			<div className="container">
				<div className="profile-teaser media flex-column flex-md-row">
					<img className="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
						src="./Bootstrap 4 Portfolio Template For Developers_files/profile.jpg" alt="" />
					<div className="media-body text-center text-md-left">
						<div className="lead">Hello, my name is</div>
						<h2 className="mt-0 display-4 font-weight-bold">Steve Doe</h2>
						<div className="bio mb-3">
							I'm a full-stack developer specialised in frontend and backend
							development for complex scalable web apps. I write about web
							development on
							<a className="link-on-bg" href="https://themes.3rdwavemedia.com/instance/bs4/blog.html">my
								blog</a>
							and regularly
							<a className="link-on-bg"
								href="https://themes.3rdwavemedia.com/instance/bs4/talks.html">speak</a>
							at various web conferences and meetups. Want to know how I may
							help your project? Check out my project
							<a className="link-on-bg" href="https://themes.3rdwavemedia.com/instance/bs4/projects.html">case
								studies</a>
							and
							<a className="link-on-bg"
								href="https://themes.3rdwavemedia.com/instance/bs4/resume.html">resume</a>.
						</div>
						<a className="theme-btn-on-bg btn font-weight-bold theme-btn-cta"
							href="https://themes.3rdwavemedia.com/instance/bs4/contact.html">Hire Me</a>
					</div>
				</div>
			</div>
		</div>
            </React.Fragment>
        )
    }
}
