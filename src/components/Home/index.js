import React from "react";
import { streamingHistory } from "../../utils/music";

import Dock from "./Dock";
import SideBar from "./Sidebar";
import HomeContainer from "./HomeContainer";

import "./index.css";

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            history: [],
            route: 'home'
        };
        this.handleRouteChange = this.handleRouteChange.bind(this);
    }

    async componentDidMount(){
        let data = await streamingHistory();
        this.setState({
            history: data.data
        })
    }

    handleRouteChange = (route) => {
        this.setState({ route });
    }

    render(){
        return(
            <div className="home">
                <div className="player-screen">
                    <SideBar handleRouteChange={this.handleRouteChange} music={this.state.history[0]} />
                    <HomeContainer />
                </div>
                <div className="player-dock">
                    <Dock music={this.state.history[0]} />
                </div>
            </div>
        );
    }
}

export default Home;