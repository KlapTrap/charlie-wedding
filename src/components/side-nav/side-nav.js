import './_side-nav.scss';

import $ from 'jquery';
import { Component } from 'react';
import React from 'react';


class SideNav extends Component {

  $scrollElm = $('#main')

  scrollTo(id) {
    return () => {
      const top = $(`#${id}`).offset().top + $('#main').scrollTop();
      console.log(top);
      $('#main').animate({
        scrollTop: top
      }, 400);
    }
  }

  render() {
    return (
      <div className="side-nav">
        <div className="side-nav__inner">
          <div className="side-nav__items">
            <a className="side-nav__item" onClick={this.scrollTo('schedule')}>
              Schedule
            </a>
            <a className="side-nav__item" onClick={this.scrollTo('accommodation')}>
              Accommodation
            </a>
            <a className="side-nav__item" onClick={this.scrollTo('rsvp')}>
              RSVP
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
