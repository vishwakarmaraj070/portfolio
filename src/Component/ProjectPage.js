import React, { Component } from 'react'
import $ from 'jquery'

export default class ProjectPage extends Component {

    handleActive = (e) => {
        $('.btn.filter').removeClass('active btn-primary').addClass('btn-outline-primary')
        $(e.target).addClass('active').addClass('btn-primary').removeClass('btn-outline-primary')
    }
    render() {
        return (
            <React.Fragment>
                <div className="container my-5">
                    <section className="mt-3 mb-5 pt-1 pb-5">

                        <h3 className="dark-grey-text fadeIn font-weight-bold text-center title wow" data-wow-delay="0.2s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                            <strong>Our projects</strong>
                        </h3>

                        <div className="row">

                            <div className="col-md-12 d-flex justify-content-center mb-5 pb-2">

                                <button onClick={(e) => {
                                    this.handleActive(e)
                                }} type="button" className={`btn btn-rounded active btn-primary font-weight-bold waves-effect waves-dark filter`} data-rel="all">All</button>
                                <button onClick={(e) => {
                                    this.handleActive(e)
                                }} type="button" className="btn btn-rounded btn-outline-primary font-weight-bold waves-effect waves-dark filter" data-rel="Branding">Branding</button>
                                <button onClick={(e) => {
                                    this.handleActive(e)
                                }} type="button" className="btn btn-rounded btn-outline-primary font-weight-bold waves-effect waves-dark filter" data-rel="webdesign">web design</button>

                            </div>

                        </div>

                        <div className="gallery" id="gallery">

                            <div className="mb-3 pics animation all webdesign">
                                <img className="img-fluid" src={require(`../assets/58.jpg`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation all Branding">
                                <img className="img-fluid" src={require(`../assets/7.jpg`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation all Branding">
                                <img className="img-fluid" src={require(`../assets/4.jpg`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation all webdesign">
                                <img className="img-fluid" src={require(`../assets/63.jpg`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation all webdesign">
                                <img className="img-fluid" src={require(`../assets/64.jpg`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation all Branding">
                                <img className="img-fluid" src={require(`../assets/62.jpg`)} alt="Card image cap" />
                            </div>

                        </div>

                    </section>
                </div>
            </React.Fragment>
        )
    }
}
