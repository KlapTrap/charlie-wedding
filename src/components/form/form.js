import './form.scss';

import { MenuItem } from 'material-ui/Menu';
import { Component } from 'react';
import React from 'react';

import InputComponent from '../input/input';
import SelectComponent from '../select/select';

class FormComponent extends Component {
    render() {
        return (
            <form autoComplete="off">
                <InputComponent name="name" placeholder="Your Name" />
                <SelectComponent name="guest-type" value="day">
                    <MenuItem value={'day'}>Day Guest</MenuItem>
                    <MenuItem value={'evening'}>Evening Guest</MenuItem>
                </SelectComponent>
                <InputComponent name="diet" placeholder="Your dietary requirements" />
                <InputComponent name="question" placeholder="Questions" />
            </form>
        );
    }
}

export default FormComponent;