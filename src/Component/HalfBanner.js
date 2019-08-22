import React, { Component } from 'react'

export default class HalfBanner extends Component {
    
    render() {
        const {title, titleContent} = this.props
        return (
            <React.Fragment>
                <div className="header-intro theme-bg-primary text-white py-5 mt-5">
                    <div className="container">
                        <div className="profile-teaser media flex-column flex-md-row">
                            <div className="media-body text-center text-md-left">
                                <h2 className="mt-0 display-4 font-weight-bold text-uppercase">{title}</h2>
                                <div className="bio mb-3">
                                    {titleContent}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
