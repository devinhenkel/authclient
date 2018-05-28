import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';


class Login extends Component {
    handleFormSubmit({ email, password }) {
        console.log(email, password);
        this.props.loginUser({email,password});
        // need to sign user in
    }

    render() {
        const { handleSubmit, fields: { email, password }} = this.props;

        return(
        
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}> 
            <fieldset className="form-group">
                <label>Email:</label>
                <Field component="input" name="email" {...email} className="form-control"/>
            </fieldset>
            <fieldset className="form-group">
                <label>Password:</label>
                <Field component="input" name="password" {...password} className="form-control"/>
            </fieldset>
            <button action="submit" className="button button-primary">Login</button>
        </form>
        
        );
    }
}

export default reduxForm({
    form: 'login',
    fields: ['email', 'password']
})(
    connect(null, actions)(Login)
);