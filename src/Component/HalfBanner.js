import React, { Component } from 'react'

export default class HalfBanner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header-intro theme-bg-primary text-white py-5 mt-5">
                    <div className="container">
                        <div className="profile-teaser media flex-column flex-md-row">
                            <div className="media-body text-center text-md-left">
                                <h2 className="mt-0 display-4 font-weight-bold">Steve Doe</h2>
                                <div className="bio mb-3">
                                    I'm a full-stack developer specialised in frontend and backend
                                    development for complex scalable web apps. I write about web
                                    development on
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
