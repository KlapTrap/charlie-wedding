import React, { Component } from 'react';
import './side-nav.scss';

class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <div className="side-nav--items">
          <span className="side-nav--item">
            Schedule
          </span>
          <span className="side-nav--item">
            Accommodation
          </span>
          <span className="side-nav--item">
            RSVP
          </span>
        </div>
      </div>
    );
  }
}

export default SideNav;
