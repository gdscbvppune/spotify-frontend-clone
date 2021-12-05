import React from "react";
import "./index.css";
import LoginInput from "./LoginInput";

import loginUtil from "../../utils/auth";

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.updateCredentials = this.updateCredentials.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    updateCredentials = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLogin = () => {
        const {username, password} = {...this.state};
        loginUtil(username, password);
    }

    render(){
        return (
            <div className="login">
                <div className="login-form">
                    <h3 className="login-form-title">Login</h3>
                    <br />
                    <LoginInput identifier="username" updateCredentials={this.updateCredentials} />
                    <LoginInput identifier="password" updateCredentials={this.updateCredentials} />
                    <br /><br /><br />
                    <span className="login-bttn" onClick={this.handleLogin}>Sign in</span>
                </div>
            </div>
        );
    }
}

export default Login;