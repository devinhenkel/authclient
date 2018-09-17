import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';


class Login extends Component {
    handleFormSubmit({ email, password }) {
        console.log(email, password);
        this.props.loginUser({email,password}, this.props.history);
        // need to sign user in
    }

    renderAlert() {
        console.log(this.props.errorMessage);
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
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
                <Field component="input" name="password" type="password" {...password} className="form-control"/>
            </fieldset>
            {this.renderAlert()}
            <button action="submit" className="button button-primary">Login</button>
        </form>
        
        );
    }
}

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error };
}

Login = connect(mapStateToProps, actions)(Login);

export default reduxForm({
    form: 'login',
    fields: ['email', 'password']
})(Login);