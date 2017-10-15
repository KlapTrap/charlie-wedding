import './main.scss';

import { Component } from 'react';
import React from 'react';

import Accommodation from '../accommodation/accommodation';
import AccommodationRow from '../accommodation/accommodation-row';
import BigTime from '../big-time/big-time';
import FormComponent from '../form/form';

class Main extends Component {
	render() {
		return (
			<div className="main">
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
						<FormComponent />
					</div>
				</div>
				<BigTime
					time="1.30"
					title="Meet at Old Luxters Barn"
					text="Meet with us and there other guests at the charming Old Luxters Barn set in the Buckinghamshire countryside."
				/>
				<BigTime
					time="2.00"
					title="Ceremony"
					text="Witness us get married."
					offCenter="true"
				/>
				<BigTime
					time="3.00"
					title="Drinks reception"
					text="There will be some speeches from friends and family and then a toast to the bride and groom."
				/>
				<BigTime
					time="4.00"
					title="Wedding breakfast"
					text="There will be some speeches from friends and family and then a toast to the bride and groom."
					offCenter="true"
				/>
				<BigTime
					time="7.00"
					title="Cake cutting"
					text="Food and drink is served! There is a paid bar but each guest will be amply provided for with alcohol."
				/>
				<BigTime
					time="8.00"
					title="Party"
					text="Food and drink is served! There is a paid bar but each guest will be amply provided for with alcohol."
					offCenter="true"
				/>
				<div className="accommodation__wrapper">
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
			</div>
		);
	}
}

export default Main;
