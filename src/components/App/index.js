import React from "react";

import Login from "../Login";
import Home from "../Home";

class App extends React.Component {

    constructor(props){
        let accessToken = sessionStorage.getItem("access");
        let refreshToken = sessionStorage.getItem("refresh");
        super(props);
        this.state = {
            isLoggedIn: (accessToken && refreshToken) !== null
        };
    }

    componentDidMount(){
    }

    render(){
        return (
            this.state.isLoggedIn ? <Home /> : <Login />
        );
    }
}

export default App;