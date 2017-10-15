import './select.scss';

import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { withStyles } from 'material-ui/styles';
import { Component } from 'react';
import React from 'react';

const styles = theme => ({
    container: {
        borderColor: '#F3C019',
    },
});

class SelectComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { value: props.value || '' };
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        return (
            <FormControl className="wedding-select__wrapper">
                <InputLabel htmlFor="age-simple">{this.props.placeholder}</InputLabel>
                <Select
                    name={this.props.name}
                    className="wedding-select"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    {this.props.children}
                </Select>
            </FormControl>
        );
    }
}


export default withStyles(styles)(SelectComponent);