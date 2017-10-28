import './_form.scss';

import $ from 'jquery';
import { MenuItem } from 'material-ui/Menu';
import { Component } from 'react';
import React from 'react';

import ButtonWrapper from '../button/button';
import InputComponent from '../input/input';
import SelectComponent from '../select/select';

class FormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            sending: false,
            done: false
        };
    }

    guid = this.guidGenerator();

    url = 'https://script.google.com/macros/s/AKfycby13l58T8e1IdL4UaWOYiRrTpbLNa0vM-e26V6txJcLBytIefg/exec';

    $form;

    submit = e => {
        const that = this;
        this.setState((prevState, props) => {
            return { sending: true, error: false };
        });
        $.post(this.url, this.$form.serialize(), function (data) {
            that.setState((prevState, props) => {
                return { sending: false };
            });
            if (data.error) {
                that.setState((prevState, props) => {
                    return { error: false };
                });
                return;
            }
            const $formsOuter = $('.wedding-form-outer');
            const $forms = $('.wedding-form');
            $formsOuter.height($formsOuter.height());

            // $forms.fadeOut(() => {
            // $formsOuter.addClass('done');
            that.setState((prevState, props) => ({
                done: true
            }))
            // });

        });
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
        const button = this.state.done ? <button disabled="true" className="accommodation-button form-button" type="submit">Sent!</button> :
            <button disabled={this.state.sending} className="accommodation-button form-button" type="submit">{this.state.sending ? 'sending...' : 'send'}</button>
        return (
            <div className="wedding-form-outer">
                <div className="wedding-thanks">Thank you!</div>
                <form id={this.guid} className="wedding-form" onSubmit={this.submit} autoComplete="off" action="#">
                    <InputComponent required name="name" placeholder="Your Name" />
                    <SelectComponent name="guestType" value="hot-meat">
                        <MenuItem value={'hot-meat'}>I would like a hot meat curry</MenuItem>
                        <MenuItem value={'mild-meat'}>I would like a mild meat curry</MenuItem>
                        <MenuItem value={'veggie'}>I would like a vegetarian curry</MenuItem>
                    </SelectComponent>
                    <InputComponent name="question" placeholder="Questions or specific requirements" />
                    <ButtonWrapper>
                        <div className="form-filler"></div>
                        {button}
                    </ButtonWrapper>
                </form>
                <div className={'form-error ' + (this.state.error ? 'form-error--show' : '')}>We couldn't send your rsvp, please try again.</div>
            </div>
        );
    }
}

export default FormComponent;