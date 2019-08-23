import React, { Component } from 'react'
import $ from 'jquery'

export default class ProjectPage extends Component {

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

                            <div className="mb-3 pics animation Frontend hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/crizelarci.png`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend Fullstack hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/bigshelfimagin.png`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend React hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/react-app.png`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/blog.png`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend Fullstack hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/bemad.png`)} alt="Card image cap" />
                            </div>
                            <div className="mb-3 pics animation Frontend hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/car-rental.png`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend Fullstack hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/fixxgroup.png`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend React hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/creaive-agency.png`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/traaexplore-fixx.png`)} alt="Card image cap" />
                            </div>

                            
                            <div className="mb-3 pics animation Frontend React hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/developer-book.png`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend Fullstack hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/traaexplore-netlify.png`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend React hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/resume.png`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/psychicastrologershankar.png`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/traaex-fixx2.png`)} alt="Card image cap" />
                            </div>

                            <div className="mb-3 pics animation Frontend Fullstack hoverable p-2 border border-primary">
                                <img className="img-fluid" src={require(`../assets/project/psychicshakthimurugan.png`)} alt="Card image cap" />
                            </div>


                        </div>

                    </section>
                </div>
            </React.Fragment>
        )
    }
}
