import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import About from './Component/About'


function App() {
  return (
    <React.Fragment>
      <Router>
        <Header /> 
        <div className="">
          <Route path="/" exact component={About} />
        </div>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
