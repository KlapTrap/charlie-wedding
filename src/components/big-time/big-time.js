import './big-time.scss';

import { Component } from 'react';
import React from 'react';

class BigTime extends Component {
	render() {
		return ( <
			div className = {
				(this.props.offCenter ? 'big-time__wrapper--off-center' : '') +
				' big-time__wrapper'
			} >
			<
			div className = "big-time__inner" >
			<
			div className = "big-time__time" > {
				this.props.time
			} <
			/div> <
			div className = "big-time__body" >
			<
			div className = "App__title" > {
				this.props.title
			} <
			/div> <
			div className = "App__text" > {
				this.props.text
			} <
			/div> <
			/div> <
			/div> <
			/div>
		);
	}
}

export default BigTime;
