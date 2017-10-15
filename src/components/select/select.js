import './select.scss';

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
            <Select
                className="wedding-select"
                value={this.state.value}
                onChange={this.handleChange}
                classes={{
                    root: { borderColor: '#F3C019' }
                }}
            >
                <InputLabel htmlFor="age-simple">{this.props.placeholder}</InputLabel>
                {this.props.children}
            </Select>
        );
    }
}


export default withStyles(styles)(SelectComponent);