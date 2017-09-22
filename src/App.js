import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SideNav from './components/side-nav/side-nav';
import Main from './components/main/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <Main />
      </div>
    );
  }
}

export default App;
