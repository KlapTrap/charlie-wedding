import './accommodation.scss';

import { Component } from 'react';
import React from 'react';

class AccommodationRow extends Component {
    render() {
        return (
            <div className="accommodation-row">
                {this.props.children}
            </div>
        );
    }
}

export default AccommodationRow;