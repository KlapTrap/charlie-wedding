import './button.scss';

import { Component } from 'react';
import React from 'react';

class ButtonWrapper extends Component {
    render() {
        return (
            <div className="button-wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default ButtonWrapper;