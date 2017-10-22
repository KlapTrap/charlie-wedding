import './side-nav.scss';

import { Component } from 'react';
import React from 'react';

$scrollElm = $('#main')



scrollTo(id) {
  $('html, body').animate({
    scrollTop: $("#elementtoScrollToID").offset().top
  }, 2000);
}

class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <div className="side-nav__inner">
          <div className="side-nav__items">
            <a className="side-nav__item">
              Schedule
          </a>
            <a className="side-nav__item">
              Accommodation
          </a>
            <a className="side-nav__item">
              RSVP
          </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
