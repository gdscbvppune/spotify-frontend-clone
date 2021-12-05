import React from "react";

import SongCard from "./SongCard";
import { getAllSongs } from "../../../utils/music";

import "./index.css";
import SongThumbnail from "./SongThumbnail";

class HomeContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            songs: [],
            selectedSongs: []
        };
    }

    async componentDidMount(){
        let allSongsAPIResponse = await getAllSongs();
        let { selectedSongs } = this.state;
        let setSelectedSongs = true;
        while(setSelectedSongs){
            let idx = Math.floor(Math.random() * 18);
            if(!selectedSongs.includes(idx)){
                selectedSongs.push(idx);
            }
            if(selectedSongs.length === 8){
                setSelectedSongs = false;
            }
        }
        this.setState({
            songs: allSongsAPIResponse.songs,
            selectedSongs
        });
    }

    render(){
        let greeting;
        let currentDateTime = new Date();
        let currentHours = currentDateTime.getHours();
        console.log(this.state);
        if(currentHours >= 4 && currentHours < 12){
            greeting = "Good morning";
        } else if(greeting >= 12 && greeting <= 16){
            greeting = "Good afternoon";
        } else if(greeting > 16 && greeting < 20){
            greeting = "Good evening";
        } else {
            greeting = "Welcome back";
        }
        return (
            <div className="home-container">
                <div className="home-container-greeting">{greeting}</div>
                <div className="home-container-songs">
                    <div className="home-container-songs-row">
                        <SongCard {...this.state.songs[this.state.selectedSongs[0]]} />
                        <SongCard {...this.state.songs[this.state.selectedSongs[1]]} />
                    </div>
                    <br /><br />
                    <div className="home-container-songs-row">
                        <SongCard {...this.state.songs[this.state.selectedSongs[2]]} />
                        <SongCard {...this.state.songs[this.state.selectedSongs[3]]} />
                    </div>
                </div>
                <div className="home-container-recently-played-title">Recently Played</div>
                <div className="home-container-recently-played-songs-holder">
                    <SongThumbnail {...this.state.songs[this.state.selectedSongs[4]]} />
                    <SongThumbnail {...this.state.songs[this.state.selectedSongs[5]]} />
                    <SongThumbnail {...this.state.songs[this.state.selectedSongs[6]]} />
                    <SongThumbnail {...this.state.songs[this.state.selectedSongs[7]]} />
                </div>
            </div>
        );
    }
}

export default HomeContainer;