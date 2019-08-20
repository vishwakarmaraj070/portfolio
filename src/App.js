import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import About from './Component/About'
import ProjectPage from './Component/ProjectPage';
import TalkPage from './Component/TalkPage';
import BlogPage from './Component/BlogPage';
import Resume from './Component/Resume';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Header /> 
        <div className="">
          <Route path="/" exact component={About} />
          <Route path="/project" exact component={ProjectPage} />
          <Route path="/talks" exact component={TalkPage} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/resume" exact component={Resume} />

        </div>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
