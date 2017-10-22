import './main.scss';

import React from 'react';
import { Component } from 'react';

import hero from '../../images/hero_1.jpg';
import image1 from '../../images/schedule_1.jpg';
import image2 from '../../images/schedule_2.jpg';
import image3 from '../../images/schedule_3.jpg';
import footerImage from '../../images/schedule_4.jpg';
import Accommodation from '../accommodation/accommodation';
import AccommodationRow from '../accommodation/accommodation-row';
import BigTime from '../big-time/big-time';
import FormComponent from '../form/form';

class Main extends Component {
	render() {
		return (
			<div className="main" id="main">
				<span id="rsvp"></span>
				<div className="section">
					<div className="left-section no-margin">
						<div className="section-header">
							16-02-2018
						</div>
					</div>
					<div className="right-section">
						<div className="into-text">
							We’re getting married and we would love for you to join us. Take a look at the day’s schedule below, find accommodation nearby or RSVP straight away just below.
						</div>
						<img className="big-time__image form-image" src={hero} />
						<FormComponent />
					</div>
				</div>
				<span id="schedule"></span>
				<BigTime
					image={image1}
					time="1.30"
					title="Meet at Old Luxters Barn"
					text="Meet with us and there other guests at the charming Old Luxters Barn set in the Buckinghamshire countryside."
					left="true"
				/>
				<BigTime
					time="2.00"
					title="Ceremony"
					text="Witness us get married."
				/>
				<BigTime
					image={image2}
					time="3.00"
					title="Drinks reception"
					text="There will be some speeches from friends and family and then a toast to the bride and groom."
					right="true"
				/>
				<BigTime
					time="4.00"
					title="Wedding breakfast"
					text="There will be some speeches from friends and family and then a toast to the bride and groom."
				/>
				<BigTime
					image={image3}
					time="7.00"
					title="Cake cutting"
					text="Food and drink is served! There is a paid bar but each guest will be amply provided for with alcohol."
					left="true"
				/>
				<BigTime
					time="8.00"
					title="Party"
					text="Food and drink is served! There is a paid bar but each guest will be amply provided for with alcohol."
				/>
				<div className="accommodation__wrapper">
					<span id="accommodation"></span>
					<AccommodationRow>
						<Accommodation
							title="The Cart Shed"
							body="Luxurious but quirky self-catering detached accommodation in the heart of the picturesque village of Turville" />
						<Accommodation
							title="The Frog"
							body="The Frog has en-suite facilities, a television and window views of the valley. Included in the room rate is the fantastic Frog breakfast." />
					</AccommodationRow>
					<AccommodationRow right="true">
						<Accommodation
							title="The Old Bakery"
							body="The Old Bakery is a beautifully converted Grade II listed property in the perfect holiday location of the historic market town of Wendover" />
						<Accommodation
							title="The Stag and Huntsman"
							body="Set amidst the Chiltern Hills, between Henley on Thames and Marlow, The Stag and Huntsman is the perfect countryside retreat in Hambleden village." />
					</AccommodationRow>
				</div>
				<div className="section section-last">
					<div className="left-section no-margin">

					</div>
					<div className="right-section">
						<div className="into-text">
							We’re getting married and we would love for you to join us. Take a look at the day’s schedule below, find accommodation nearby or RSVP straight away just below.
					</div>
						<img className="big-time__image form-image" src={footerImage} />
						<FormComponent />
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
