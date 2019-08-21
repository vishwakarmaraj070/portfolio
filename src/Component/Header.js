import React, { Component } from "react";
import HalfBanner from "./HalfBanner";
import {NavLink} from 'react-router-dom'
import HomeBanner from "./HomeBanner";

export default class Header extends Component {

  state={
    isHome: true
  }

  render() {
    return (
      <React.Fragment>
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark scrolling-navbar fixed-top text-sm theme-bg-primary-darken">
          <ul className="social-list list-inline mb-0">
			            <li className="list-inline-item mx-3">
                            <a className="text-white" href="#">
                                <svg className="svg-inline--fa fa-twitter fa-w-16 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                </a></li>
		                <li className="list-inline-item mx-3">
                            <a className="text-white" href="#">
                                <svg className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"></path></svg>
                                
                                </a>
                                </li>
		                <li className="list-inline-item mx-3">
                            <a className="text-white" href="#">
                                <svg className="svg-inline--fa fa-github-alt fa-w-15 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" data-fa-i2svg=""><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg></a></li>
		                <li className="list-inline-item mx-3">
                            <a className="text-white" href="#">
                                <svg className="svg-inline--fa fa-stack-overflow fa-w-12 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="stack-overflow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"></path></svg
                                >
                                </a>
                                </li>
		                <li className="list-inline-item mx-3">
                            <a className="text-white" href="#">
                                <svg className="svg-inline--fa fa-codepen fa-w-16 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="codepen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path></svg></a></li>
		            </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="basicExampleNav">

            <div className="collapse navbar-collapse text-uppercase" id="navigation">
						<ul className="navbar-nav ml-lg-auto">
							<li onClick={(e)=>{
                this.setState({
                  isHome:true
                })
              }} className="nav-item mr-lg-3 ">
							    <NavLink activeClassName="active" className="nav-link" to="/">About</NavLink>
							</li>
							<li onClick={(e)=>{
                this.setState({
                  isHome:false
                })
              }} className="nav-item mr-lg-3">
							   <NavLink activeClassName="active" className="nav-link project" to="/project">Projects</NavLink>
							</li>
							<li onClick={(e)=>{
                this.setState({
                  isHome:false
                })
              }} className="nav-item mr-lg-3">
							    <NavLink activeClassName="active" className="nav-link" to="/talks">Talks</NavLink>
							</li>
							<li onClick={(e)=>{
                 this.setState({
                  isHome:false
                })
              }} className="nav-item mr-lg-3">
							    <NavLink activeClassName="active" className="nav-link" to="/blog">Blog</NavLink>
							</li>
							<li onClick={(e)=>{
                 this.setState({
                  isHome:false
                })
              }} className="nav-item mr-lg-3">
							    <NavLink activeClassName="active" className="nav-link" to="/resume">Resume</NavLink>
							</li>
							<li onClick={(e)=>{
                 this.setState({
                  isHome:false
                })
              }} className="nav-item mr-lg-3">
							    <NavLink activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
							</li>
							<li className="nav-item dropdown mr-0">
							    <NavLink activeClassName="active" className="nav-link dropdown-toggle" to="!" id="navigationLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Pages
								</NavLink>
								<div className="dropdown-menu dropdown-menu-right text-capitalize shadow-lg" aria-labelledby="navigationLink">
									<a className="dropdown-item" href="#">Project Case Study (1 Column)</a>
									<a className="dropdown-item" href="#">Project Case Study (2 Columns)</a>
									<a className="dropdown-item" href="#">Blog Post</a>
								</div>
							</li>
						</ul>
						<span id="slide-line"></span>
					</div>
          </div>
        </nav>

         {/* half banner */}
         {
           this.state.isHome ? window.location.href.indexOf('project') === -1 ? (
             <HomeBanner />
           ): (
            <HalfBanner />
           ): (
              <HalfBanner />
           )
         }
        </header>
      </React.Fragment>
    );
  }
}
