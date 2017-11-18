import React, {Component} from 'react';
import {authorizeUser} from './AuthorizeApi';
import {Redirect} from "react-router-dom";

class Auth extends Component {
    state = {
        email: '',
        password: '',
        isAuthorized: false,
        isError: false
    };

    handleSubmit = () => {
        const {email, password} = this.state;
        const isAuthorized = authorizeUser(email, password);
        this.setState(state => ({
            isAuthorized: isAuthorized,
            isError: !isAuthorized
        }));
    };

    handleChangeForm = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const {email, password, isAuthorized, isError} = this.state;

        return (
            <div>
                <div>
                    <div>
                        <input name="email" placeholder="email" value={email} onChange={this.handleChangeForm}/>
                        <input name="password" placeholder="password" value={password}
                               onChange={this.handleChangeForm}/>
                        {isError ? (<p className="error">Неверный пароль и/или почта.</p>) : undefined}
                    </div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
                {isAuthorized ? <Redirect to="/"/> : undefined}
            </div>
        );
    }
}

export default Auth;
