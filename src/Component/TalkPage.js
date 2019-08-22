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
        tabImg = $('#talk .single-news.active').find('img').attr('src')
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
        tabImg = $(target).find('img').attr('src')
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
              Section title
            </h2>
            <p className="text-center dark-grey-text w-responsive mx-auto mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              id laborum.
            </p>

            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="single-news mb-lg-0 mb-4 talk-main">
                  <div className="view overlay rounded z-depth-1-half mb-4">
                    <img
                      className="img-fluid"
                      src={this.state.tabImg}
                      alt="Sample image"
                    />
                    <a>
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>

                  <div className="news-data d-flex justify-content-between">
                    <a href="#!" className="deep-orange-text">
                      <h6 className="font-weight-bold">
                        <i className="fas fa-utensils pr-2" />Raj Blogs
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
                    <div className="col-md-3">
                      <div className="view overlay rounded z-depth-1">
                        <img
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg"
                          alt="Sample image"
                        />
                        <a>
                          <div className="mask rgba-white-slight" />
                        </a>
                      </div>
                    </div>

                    <div className="col-md-9">
                      <p className="font-weight-bold dark-grey-text date mb-1">
                        26/02/2018
                      </p>
                      <p className="talk-title mb-0">
                            This is the title of 26/02/2018
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
                    <div className="col-md-3">
                      <div className="view overlay rounded z-depth-1 ">
                        <img
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                          alt="Sample image"
                        />
                        <a>
                          <div className="mask rgba-white-slight" />
                        </a>
                      </div>
                    </div>

                    <div className="col-md-9">
                      <p className="font-weight-bold dark-grey-text date mb-1">
                        25/02/2018
                      </p>
                      <p className="talk-title mb-0">
                            This is the title of 25/02/2018
                      </p>
                      <div className="d-flex justify-content-between">
                        <div className="col-11 text-truncate pl-0">
                          <p className="dark-grey-text mb-0 talk-content">
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
                    <div className="col-md-3">
                      <div className="view overlay rounded z-depth-1 ">
                        <img
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg"
                          alt="Sample image"
                        />
                        <a>
                          <div className="mask rgba-white-slight" />
                        </a>
                      </div>
                    </div>

                    <div className="col-md-9">
                      <p className="font-weight-bold dark-grey-text date mb-1">
                        24/02/2018
                      </p>
                      <p className="talk-title mb-0">
                            This is the title of 24/02/2018
                      </p>
                      <div className="d-flex justify-content-between">
                        <div className="col-11 text-truncate pl-0 ">
                          <p className="dark-grey-text mb-0 talk-content">
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
                    <div className="col-md-3">
                      <div className="view overlay rounded z-depth-1 mb-md-0">
                        <img
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                          alt="Sample image"
                        />
                        <a>
                          <div className="mask rgba-white-slight" />
                        </a>
                      </div>
                    </div>

                    <div className="col-md-9">
                      <p className="font-weight-bold dark-grey-text date mb-1">
                        23/02/2018
                      </p>
                      <p className="talk-title mb-0">
                            This is the title of 23/02/2018
                      </p>
                      <div className="d-flex justify-content-between">
                        <div className="col-11 text-truncate pl-0">
                          <p className="dark-grey-text mb-0 talk-content">
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
