import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Route path="/" exact component={MainContent} />
        <Footer />
      </Router>
      App
    </React.Fragment>
  );
}

export default App;
