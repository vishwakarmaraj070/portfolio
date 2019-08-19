import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
               	<section className="section-cta py-5 bg-primary text-white">
		<div className="container">
			<div className="text-center">
				<img className="profile-small d-inline-block mx-auto rounded-circle mb-2"
					src="./Bootstrap 4 Portfolio Template For Developers_files/profile.jpg" alt="" />
			</div>
			<h3 className="section-title font-weight-bold text-center mb-2">
				Interested in hiring me for your project?
			</h3>
			<div className="section-intro mx-auto text-center mb-3">
				Looking for an experienced full-stack developer to build your web app
				or ship your software product? To start an initial chat, just drop me
				an email at
				<a className="link-on-bg" href="https://themes.3rdwavemedia.com/instance/bs4/#">steve.doe@youremail.com</a>
				or use the
				<a className="link-on-bg" href="https://themes.3rdwavemedia.com/instance/bs4/contact.html">form on the
					contact page</a>.
			</div>
			<div className="text-center">
				<a className="theme-btn-on-bg btn" href="https://themes.3rdwavemedia.com/instance/bs4/contact.html">Let's
					Talk</a>
			</div>
		</div>
	</section>

	<footer className="footer text-light text-center py-2 theme-bg-primary-darken">
		<small className="copyright">Template Copyright ©
			<a className="text-light" href="https://themes.3rdwavemedia.com/" target="_blank">3rd Wave Media</a></small>
	</footer>
            </React.Fragment>
        )
    }
}
