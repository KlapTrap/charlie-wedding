import './App.css';

import { Component } from 'react';
import React from 'react';

import Main from './components/main/main';
import SideNav from './components/side-nav/side-nav';


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
