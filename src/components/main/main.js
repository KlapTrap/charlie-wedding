import './_main.scss';

import React from 'react';
import { Component } from 'react';

import hero from '../../images/hero_1.jpg';
import image1 from '../../images/schedule_1.jpg';
import image2 from '../../images/schedule_2.jpg';
import image3 from '../../images/schedule_3.jpg';
import rings from '../../images/rings.svg';
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
						<div className="date-header-wrapper mobile-header">
							<img className="rings" src={rings} />
							<div className="date-wrapper">
								<div className="section-header">
									16-02-2018
							</div>
							</div>
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
					title='<a target="_blank" href="https://www.google.co.uk/maps/place/Southend,+Henley-on-Thames+RG9+6JW/@51.5952039,-0.9039827,15z/data=!3m1!4b1!4m5!3m4!1s0x48768e82bdf1198d:0x309afc0afc80c157!8m2!3d51.594902!4d-0.8918601;">Meet at Old Luxters Barn</a>'
					text='Guests to arrive at <a target="_blank" href="http://www.oldluxtersbarn.co.uk">Old Luxters Barn</a> in Hambleden ready for the ceremony.'
					left="true"
				/>
				<BigTime
					time="2.00"
					title="Ceremony"
					text="Be with us whilst we take our vows and become a married couple!"
				/>
				<BigTime
					image={image2}
					time="2.30"
					title="Drinks and canapés reception"
					text="Time to mingle and warm up by the fire "
					right="true"
				/>
				<BigTime
					time="4.00"
					title="Wedding breakfast"
					text="Enjoy some of our favorite food and hear from some of our nearest and dearest."
				/>
				<BigTime
					image={image3}
					time="7.00"
					title="Party!"
					text="There will be a paid bar so bring your wallet! More food will be served later on in the evening."
					left="true"
				/>
				<div className="accommodation__wrapper">
					<span id="accommodation"></span>
					<AccommodationRow>
						<Accommodation
							title="Henley Greenlands"
							body="All rooms are en-suite & include a safe, iron/ironing board, laptop connection with free Wi-Fi access, direct dial telephone, satellite TV with radio, Molton Brown toiletries, tea & coffee making facilities and a hair dryer."
							link="http://www.henleyconferences.co.uk/about-us/your-stay-at-greenlands/" />
						<Accommodation
							title="The Frog"
							body="The Frog has en-suite facilities, a television and window views of the valley. Included in the room rate is the fantastic Frog breakfast."
							link="http://www.thefrogatskirmett.co.uk/accomodation.html" />
					</AccommodationRow>
					<AccommodationRow right="true">
						<Accommodation
							title="The Old Bakery"
							body="The Old Bakery is a beautifully converted Grade II listed property in the perfect holiday location of the historic market town of Wendover"
							link="http://www.bedbreakfasthenley.co.uk" />
						<Accommodation
							title="The Stag and Huntsman"
							body="Set amidst the Chiltern Hills, between Henley on Thames and Marlow, The Stag and Huntsman is the perfect countryside retreat in Hambleden village."
							link="http://www.thestagandhuntsman.co.uk/rooms/" />
					</AccommodationRow>
				</div>
				<div className="section section-last">
					<div className="left-section no-margin">

					</div>
					<div className="right-section">
						<div className="into-text">
							Sound good? Well put your details in the bit below. Can’t wait to see you there!
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
