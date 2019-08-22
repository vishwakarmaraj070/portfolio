import React, { Component } from 'react'
import $ from 'jquery'

export default class ProjectPage extends Component {
componentDidMount(){
    $('.btn.filter').click(function () {
        $('.btn.filter').removeClass('btn-primary').addClass('btn-outline-primary')
        $(this).removeClass('btn-outline-primary').addClass('btn-primary')
    })
}
    render() {
        return (
            <React.Fragment>
                <div className="container my-5">
                    <section className="mt-3 mb-5 pt-1 pb-5">
                    <h2 class="h1-responsive font-weight-bold text-center my-5">Our projects</h2>

                        <div className="row">

                            <div className="col-md-12 d-flex justify-content-center mb-5 pb-2">
                                <button type="button" className={`btn btn-rounded btn-primary font-weight-bold waves-effect waves-dark filter`} data-rel="all">All</button>
                                <button  type="button" className="btn btn-rounded btn-outline-primary font-weight-bold waves-effect waves-dark filter" data-rel="Branding">Branding</button>
                                <button type="button" className="btn btn-rounded btn-outline-primary font-weight-bold waves-effect waves-dark filter" data-rel="webdesign">web design</button>
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
