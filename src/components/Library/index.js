import React from "react";

import SongItemTile from "./SongItemTile";
import { getAllSongs } from "../../utils/music";
import "./index.css";

class Library extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            songs: []
        };
    }

    async componentDidMount(){
        let allSongsAPIResponse = await getAllSongs();
        this.setState({
            songs: allSongsAPIResponse.songs
        });
    }

    render(){
        return (
            <div className="library-screen">
                <div className="library-screen-title">Your library</div>
                <div className="library-screen-items">
                    {this.state.songs.map((item) => {
                        return <SongItemTile {...item} />;
                    })}
                </div>
            </div>
        );
    }
}

export default Library;