import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import "./index.css";

function DockIcon(props){
    let { iconName } = {...props};
    return (
        <div className="player-icon">
            <FontAwesomeIcon icon={iconName} />
        </div>
    );
}

function Dock(props){
    let { music } = {...props};
    return (
        <div className="spotify-music-dock">
            <div className="spotify-music-player-timeline"></div>
            <div className="music-player">
                <div className="player-placeholder">
                    <div className="player-current-playing-song">{music !== undefined && music.song_title}</div>
                    <div className="player-current-playing-song-author">{music !== undefined && music.artist}</div>
                </div>
                <div className="player-control-holder">
                    <DockIcon iconName={faChevronLeft} />
                    <DockIcon iconName={faPauseCircle} />
                    <DockIcon iconName={faChevronRight} />
                </div>
                <div className="volume-control">
                    <div className="volume-bar"></div>
                </div>
            </div>
        </div>
    );
}

export default Dock;