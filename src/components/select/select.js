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

    state = {
        value: ''
    };
    render() {
        return (
            <FormControl className="wedding-select__wrapper">
                <InputLabel htmlFor="age-simple">{this.props.placeholder}</InputLabel>
                <Select
                    className="wedding-select"
                    value={this.state.value}
                    onChange={this.handleChange}
                    classes={{
                        root: { borderColor: '#F3C019' }
                    }}
                >
                    {this.props.children}
                </Select>
            </FormControl>
        );
    }
}


export default withStyles(styles)(SelectComponent);