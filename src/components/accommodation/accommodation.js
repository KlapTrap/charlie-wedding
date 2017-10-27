import './_accommodation.scss';

import { Component } from 'react';
import React from 'react';

import ButtonWrapper from '../button/button';

class Accommodation extends Component {
	render() {
		return (
			<div className="accommodation">
				<div className="accommodation__title App__title">
					{this.props.title}
				</div>
				<div className="accommodation__body  App__text">
					{this.props.body}
				</div>
				<ButtonWrapper>
					<a className="accommodation-button" target="_blank" href={this.props.link}>View website</a>
				</ButtonWrapper>
			</div>
		);
	}
}

export default Accommodation;
