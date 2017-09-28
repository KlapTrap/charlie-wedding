import './side-nav.scss';

import { Component } from 'react';
import React from 'react';

class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <div className="side-nav__items">
          <span className="side-nav__item">
            Schedule
          </span>
          <span className="side-nav__item">
            Accommodation
          </span>
          <span className="side-nav__item">
            RSVP
          </span>
        </div>
      </div>
    );
  }
}

export default SideNav;
