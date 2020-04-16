import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

const renderField = ({ input, label, type, meta: { touched, error} }) => (
    <div className="form-group">
        <div>
            <input className="form-control" {...input} placeholder={label} type={type} />
            {touched && error && <div className="alert alert-danger text-center mt-1" role="alert">{JSON.stringify(error)}</div>}
        </div>
    </div>
)

const Login = ({ error,handleSubmit, submitting, history}) => {
    const validateLogin = values => {
        return axios.post('/api/login', values)
        .then(res => {
            if (res.data.success === false) {
                throw new SubmissionError({
                    _error: res.data.message
                })
            } else if (res.data.success === true) {
                history.push('/dashboard');
            }
        })
    }
        return (
            <div className="row">
                <div className="col-md-6 m-auto">
                    <div className="card card-body">
                        <h1 id="log-in-header" className="text-center mb-3">WarRoom</h1>
                        <form onSubmit={handleSubmit(validateLogin)} className="mb-3">
                            <Field name="email" type="text" component={renderField} label="Email"/>
                            <Field name="password" type="password" component={renderField} label="Password"/>
                            {error && <div className="alert alert-danger text-center mb-2" role="alert">{JSON.stringify(error)}</div>}
                            <button disabled={submitting} type="submit" className="btn btn-outline-secondary btn-block">Log In</button>
                        </form>
                        <small className="text-muted text-center mb-3">Or</small>
                        <a className="btn btn-danger btn-block" href="/auth/google"><i className="fab fa-google"></i> Log In with Google</a>
                        <p className="text-center lead mt-4">
                            No account? <Link className="text-dark" to="/register">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    };


export default withRouter(reduxForm({
    form: 'loginForm'
})(Login));