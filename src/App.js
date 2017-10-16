import './App.css';

import { $, jQuery } from 'jquery';
import { Component } from 'react';
import React from 'react';

import Main from './components/main/main';
import SideNav from './components/side-nav/side-nav';

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;


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
