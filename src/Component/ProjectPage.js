import React, { Component } from 'react'
import $ from 'jquery'

export default class ProjectPage extends Component {
componentDidMount(){
    
}

handleFilter =(e, value)=>{
    $('.btn.filter').removeClass('btn-primary').addClass('btn-outline-primary')
    $(e.target).removeClass('btn-outline-primary').addClass('btn-primary')
    $(`#gallery .pics`).css({
        transform: 'scale('+0.2+')',
        opacity: '0.3',
    })
    setTimeout(() => {
        $(`#gallery .pics`).css('display', 'none')
        $(`#gallery .pics.${value}`).css({
            transform: 'scale('+1+')',
            opacity: '1',
            display:'block'
        })
    }, 200);
    
}
    render() {
        return (
            <React.Fragment>
                <div className="container my-5">
                    <section className="">
                    <h2 className="h1-responsive font-weight-bold text-center my-3">Our projects</h2>

                        <div className="row">

                            <div className="col-md-12 d-flex justify-content-center mb-3 pb-2">
                                <button onClick={(e)=>{
                                    this.handleFilter(e, "Frontend")
                                }} type="button" className={`btn btn-rounded btn-primary font-weight-bold waves-effect waves-dark filter`} data-rel="Frontend">Front-End</button>
                                <button onClick={(e)=>{
                                    this.handleFilter(e, 'React')
                                }} type="button" className="btn btn-rounded btn-outline-primary font-weight-bold waves-effect waves-dark filter" data-rel="React">React</button>
                                <button onClick={(e)=>{
                                    this.handleFilter(e, 'Fullstack')
                                }} type="button" className="btn btn-rounded btn-outline-primary font-weight-bold waves-effect waves-dark filter" data-rel="Fullstack">Full-Stack</button>
                            </div>

                        </div>

                        <div className="gallery" id="gallery">

                            <div className="mb-3 pics animation Frontend React">
                                <img className="img-fluid" src={require(`../assets/58.jpg`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend Fullstack">
                                <img className="img-fluid" src={require(`../assets/7.jpg`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend Fullstack">
                                <img className="img-fluid" src={require(`../assets/4.jpg`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend React">
                                <img className="img-fluid" src={require(`../assets/63.jpg`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend React">
                                <img className="img-fluid" src={require(`../assets/64.jpg`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend Branding">
                                <img className="img-fluid" src={require(`../assets/62.jpg`)} alt="Card image cap" />
                            </div>

                        </div>

                    </section>
                </div>
            </React.Fragment>
        )
    }
}
