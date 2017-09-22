import './main.scss';

import { Component } from 'react';
import React from 'react';

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
                {/* Section */}
                <div className="center-text big-time-text">
                    1pm
                </div>
                <div className="section">
                    <div className="left-section">
                    </div>
                    <div className="right-section">
                        <div className="paragraph big-time-text-sub">
                            <div className="big-time-text-sub-header">Meet at Old Luxters Barn</div>
                            Meet with us and there other guests at the charming Old Luxters Barn set in the Buckinghamshire countryside.
                        </div>
                    </div>
                </div>
                {/* Section */}
                <div className="section">
                    <div className="left-section">
                        <div className="off-center-text big-time-text">2pm</div>
                    </div>
                    <div className="right-section">
                    </div>
                </div>
                <div className="section">
                    <div className="left-section">
                    </div>
                    <div className="right-section">
                        <div className="paragraph big-time-text-sub big-time-text-sub-left">
                            <div className="big-time-text-sub-header">Ceremony</div>
                            Witness us get married.
                        </div>
                    </div>
                </div>
                {/* Section */}
                <div className="center-text big-time-text">
                    3pm
                </div>
                <div className="section">
                    <div className="left-section">
                    </div>
                    <div className="right-section">
                        <div className="paragraph big-time-text-sub">
                            <div className="big-time-text-sub-header">Drinks reception</div>
                            There will be some speeches from friends and family and then a toast to the bride and groom.
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="left-section">
                        <div className="off-center-text big-time-text">4pm</div>
                    </div>
                    <div className="right-section">
                    </div>
                </div>
                {/* Section */}
                <div className="section">
                    <div className="left-section">
                    </div>
                    <div className="right-section">
                        <div className="paragraph big-time-text-sub big-time-text-sub-left">
                            <div className="big-time-text-sub-header">Wedding breakfast</div>
                            Food and drink is served! There is a paid bar but each guest will be amply provided for with alcohol.
                        </div>
                    </div>
                </div>
                <div className="center-text big-time-text">
                    6pm
                </div>
                <div className="section">
                    <div className="left-section">
                    </div>
                    <div className="right-section">
                        <div className="paragraph big-time-text-sub">
                            <div className="big-time-text-sub-header">Cake cutting</div>
                            Food and drink is served! There is a paid bar but each guest will be amply provided for with alcohol.
                        </div>
                    </div>
                </div>
                {/* Section */}
                <div className="section">
                    <div className="left-section">
                        <div className="off-center-text big-time-text">7pm</div>
                    </div>
                    <div className="right-section">
                    </div>
                </div>
                <div className="section">
                    <div className="left-section">
                    </div>
                    <div className="right-section">
                        <div className="paragraph big-time-text-sub big-time-text-sub-left">
                            <div className="big-time-text-sub-header">Party</div>
                            Food and drink is served! There is a paid bar but each guest will be amply provided for with alcohol.
                        </div>
                    </div>
                </div>
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
