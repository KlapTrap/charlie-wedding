import './main.scss';

import { Component } from 'react';
import React from 'react';

import BigTime from '../big-time/big-time';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="section">
                    <div className="left-section no-margin">
                        <div className="section-header">
                            16-02-2018
                        </div>
                        <div className="big-number">
                            16
                        </div>
                        <div className="section-header">
                            Schedule
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="into-text">
                            We’re getting married and we would love for you to join us. Take a look at the day’s schedule below, find accommodation nearby or RSVP straight away just below.
                        </div>
                    </div>
                </div>
                <BigTime
                    time="1pm"
                    title="Meet at Old Luxters Barn"
                    text="Meet with us and there other guests at the charming Old Luxters Barn set in the Buckinghamshire countryside."
                />
                <BigTime
                    time="2pm"
                    title="Ceremony"
                    text="Witness us get married."
                    offCenter="true"
                />
                <BigTime
                    time="3pm"
                    title="Drinks reception"
                    text="There will be some speeches from friends and family and then a toast to the bride and groom."
                />
                <BigTime
                    time="4pm"
                    title="Wedding breakfast"
                    text="There will be some speeches from friends and family and then a toast to the bride and groom."
                    offCenter="true"
                />
                <BigTime
                    time="6pm"
                    title="Cake cutting"
                    text="Food and drink is served! There is a paid bar but each guest will be amply provided for with alcohol."
                />
                <BigTime
                    time="7pm"
                    title="Party"
                    text="Food and drink is served! There is a paid bar but each guest will be amply provided for with alcohol."
                    offCenter="true"
                />

                <div className="section-header accommodation-section-header">
                    Accommodation
                </div>
                <div className="accommodation-section">
                    <div className="accommodation-section-row">

                    </div>

                </div>
            </div>
        );
    }
}

export default Main;
