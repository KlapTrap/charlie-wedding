import './input.scss';

import { Component } from 'react';
import React from 'react';

class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="wedding-input__wrapper">
                <input className="wedding-input" placeholder={this.props.placeholder} type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}

export default InputComponent;