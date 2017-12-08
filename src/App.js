import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Search from './Components/Search/Search';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="main-page">
        <Header/>
        <Search />
      </div>
    );
  }
}

export default App;
