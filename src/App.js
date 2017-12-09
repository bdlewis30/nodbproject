import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Search from './Components/Search/Search';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Results from './Components/Results/Results';

class App extends Component {
  render() {
    return (
      <div className="main-page">
        <Header />
        <Search />
        <section className="results-container">
          {/* <Results /> */}
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
