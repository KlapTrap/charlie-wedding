import './big-time.scss';

import { Component } from 'react';
import React from 'react';

class BigTime extends Component {
	render() {
		let imageLeft = '';
		let imageRight = '';
		if (this.props.image && this.props.right) {
			imageLeft = <img className="big-time__image" src={this.props.image} />
		}
		if (this.props.image && this.props.left) {
			imageRight = <img className="big-time__image" src={this.props.image} />
		}
		return (
			<div className={
				(this.props.right ? 'big-time__wrapper--right' : '') +
				(this.props.left ? 'big-time__wrapper--left' : '') +
				' big-time__wrapper'
			} >
				{imageLeft}
				<div className="big-time__inner" >
					<div className="big-time__time" > {
						this.props.time
					} </div>
					<div className={(this.props.left ? 'big-time__body--left' : '') + (this.props.right ? 'big-time__body--right' : '') + ' big-time__body'} >
						<div className="App__title" > {
							this.props.title
						} </div>
						<div className="App__text" > {
							this.props.text
						}
						</div>
					</div>
				</div>
				{imageRight}
			</div>
		);
	}
}

export default BigTime;
