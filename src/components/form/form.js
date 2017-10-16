import './form.scss';

import $ from 'jquery';
import { MenuItem } from 'material-ui/Menu';
import { Component } from 'react';
import React from 'react';

import ButtonWrapper from '../button/button';
import InputComponent from '../input/input';
import SelectComponent from '../select/select';

class FormComponent extends Component {

    guid = this.guidGenerator();

    url = 'https://script.google.com/macros/u/0/s/AKfycby13l58T8e1IdL4UaWOYiRrTpbLNa0vM-e26V6txJcLBytIefg/exec';

    $form;

    submit = e => {
        $.post(this.url, this.$form.serialize(), function (data) {
            console.log("Success! Data: " + data.statusText);
        })
        e.preventDefault();
    }

    componentDidMount() {
        this.$form = $(`#${this.guid}`);
    }

    guidGenerator() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

    render() {
        return (
            <form id={this.guid} className="wedding-form" onSubmit={this.submit} autoComplete="off" action="#">
                <InputComponent name="name" placeholder="Your Name" />
                <SelectComponent name="guestType" value="day">
                    <MenuItem value={'day'}>Day Guest</MenuItem>
                    <MenuItem value={'evening'}>Evening Guest</MenuItem>
                </SelectComponent>
                <InputComponent name="diet" placeholder="Your dietary requirements" />
                <InputComponent name="question" placeholder="Questions" />
                <ButtonWrapper>
                    <div className="form-filler"></div>
                    <button className="accommodation-button form-button" type="submit">send</button>
                </ButtonWrapper>
            </form>
        );
    }
}

export default FormComponent;