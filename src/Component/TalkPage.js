import React, { Component } from "react";
import $ from 'jquery'

export default class TalkPage extends Component {

    state={
        tabImg:"",
        tabTitle: '',
        tabDate: '',
        tabContent:''
    }


    componentDidMount(){
        let {tabImg, tabDate, tabTitle, tabContent} = ''
        tabImg = $('#talk .single-news.active').find('iframe').attr('src')
        tabDate = $('#talk .single-news.active').find('p.date').html()
        tabTitle = $('#talk .single-news.active').find('p.talk-title').html()
        tabContent = $('#talk .single-news.active').find('p.talk-content').html()
        this.setState({
            tabImg,
            tabTitle,
            tabDate,
            tabContent
        })
    }

    handleTalk = (e)=>{
        $('.talk-main').css({
            opacity: '0.3',
            transform: 'scale('+0.2+')'
        })
        let tabImg, tabDate, tabTitle, tabContent, target
        target = $(e.target).parent()
        $('#talk .single-news').removeClass('active')
        $(target).addClass('active')
        tabImg = $(target).find('iframe').attr('src')
        tabDate = $(target).find('p.date').html()
        tabTitle = $(target).find('p.talk-title').html()
        tabContent = $(target).find('p.talk-content').html()
        
        setTimeout(() => {
            this.setState({
                tabImg,
                tabTitle,
                tabDate,
                tabContent
            })
            $('.talk-main').css({
                opacity: '1',
                transform: 'scale('+1+')'
            })
        }, 150);
        
    }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <section className="magazine-section my-5">
            <h2 className="h1-responsive font-weight-bold text-center mt-5 mb-3">
              Talks 
            </h2>
            <p className="text-center dark-grey-text w-responsive mx-auto mb-4">
             Talking Section
            </p>

            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="single-news mb-lg-0 mb-4 talk-main">
                  <div className="view overlay rounded z-depth-1-half mb-4">
                  <div className="embed-responsive embed-responsive-16by9">
                      <iframe src={this.state.tabImg} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div> 
                    <a>
                    </a>
                  </div>

                  <div className="news-data d-flex justify-content-between">
                    <a href="https://www.youtube.com/channel/UCKCB6S-0cVkVPZ2h4n9W4lQ" target="_blank" className="deep-orange-text">
                      <h6 className="font-weight-bold">
                        <i className="fas fa-utensils pr-2" />Frontend Adda
                      </h6>
                    </a>
                    <p className="font-weight-bold dark-grey-text">
                      {
                          this.state.tabDate
                      }
                    </p>
                  </div>

                  <h3 className="font-weight-bold dark-grey-text mb-3">
                    <a>{this.state.tabTitle}</a>
                  </h3>
                  <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                   {this.state.tabContent}
                  </p>
                </div>
              </div>

              <div id="talk" className="col-lg-6 col-md-12">
                <div className="hoverable mb-4 py-2 single-news active">
                    <div onClick={(e)=>{
                    this.handleTalk(e)
                }} className="talk-click"></div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="view overlay rounded z-depth-1">
                      <div className="embed-responsive embed-responsive-16by9">
                      <iframe src="https://www.youtube.com/embed/bjY9fQ7Dz7w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                        <a>
                          <div className="mask rgba-white-slight" />
                        </a>
                      </div>
                    </div>

                    <div className="col-md-8">
                      <p className="font-weight-bold dark-grey-text date mb-1">
                        Ui components/ Fontend Adda
                      </p>
                      <p className="talk-title mb-0">
                            this is the place where you can see the awesome ui animation frontend design
                      </p>
                      
                      <div className="d-flex justify-content-between">
                        <div className="col-11  pl-0">
                          <p className="dark-grey-text mb-0 text-sm text-truncate talk-content">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis 
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis 
                          </p>
                        </div>
                        <a>
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hoverable mb-4 py-2 single-news">
                    <div onClick={(e)=>{
                    this.handleTalk(e)
                }} className="talk-click"></div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="view overlay rounded z-depth-1 ">
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe src="https://www.youtube.com/embed/6eNRQor7StI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                        <a>
                          <div className="mask rgba-white-slight" />
                        </a>
                      </div>
                    </div>

                    <div className="col-md-8">
                      <p className="font-weight-bold dark-grey-text date mb-1">
                        React app / React basic app
                      </p>
                      <p className="talk-title mb-0">
                            this is the basic React app help to begginer how is learning React
                      </p>
                      <div className="d-flex justify-content-between">
                        <div className="col-11 text-truncate pl-0">
                          <p className="dark-grey-text mb-0 talk-content text-sm">
                            Itaque earum rerum hic tenetur a sapiente delectus
                          Itaque earum rerum hic tenetur a sapiente delectusItaque earum rerum hic tenetur a sapiente delectusp>
                          Itaque earum rerum hic tenetur a sapiente delectus
                          </p>
                        </div>
                        <a>
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hoverable mb-4 py-2 single-news">
                <div onClick={(e)=>{
                    this.handleTalk(e)
                }} className="talk-click"></div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="view overlay rounded z-depth-1 ">
                      <div className="embed-responsive embed-responsive-16by9">
                      <iframe src="https://www.youtube.com/embed/jrnJp6VEGmA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                        <a>
                          <div className="mask rgba-white-slight" />
                        </a>
                      </div>
                    </div>

                    <div className="col-md-8">
                      <p className="font-weight-bold dark-grey-text date mb-1">
                        This is the MERN app Developer Book
                      </p>
                      <p className="talk-title mb-0">
                           Here Developer can create your own Book and mang with edit delete and read
                      </p>
                      <div className="d-flex justify-content-between">
                        <div className="col-11 text-truncate pl-0 ">
                          <p className="dark-grey-text mb-0 talk-content text-sm">
                            Soluta nobis est eligendi optio cumque nihil impedit
                            quo minus
                          </p>
                        </div>
                        <a>
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hoverable py-2 single-news">
                <div onClick={(e)=>{
                    this.handleTalk(e)
                }} className="talk-click"></div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="view overlay rounded z-depth-1 mb-md-0">
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe src="https://www.youtube.com/embed/TDB2gk4zg0Y" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                        <a>
                          <div className="mask rgba-white-slight" />
                        </a>
                      </div>
                    </div>

                    <div className="col-md-8">
                      <p className="font-weight-bold dark-grey-text date mb-1">
                        Awesome single page design and animation
                      </p>
                      <p className="talk-title mb-0">
                          this is the single page awesome layout application
                      </p>
                      <div className="d-flex justify-content-between">
                        <div className="col-11 text-truncate pl-0">
                          <p className="dark-grey-text mb-0 talk-content text-sm">
                            Duis aute irure dolor in reprehenderit in voluptate
                          </p>
                        </div>
                        <a>
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
