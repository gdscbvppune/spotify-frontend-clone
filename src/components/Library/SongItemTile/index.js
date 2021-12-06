import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

function SongItemTile(props){
    console.log(props);
    let { title, artist, thumbnail } = props;
    return (
        <div className="song-item-tile">
            <img className="song-item-tile-thumbnail" src={thumbnail} height="32" width="32" />
                <h3 className="song-item-tile-title">{title}</h3>
                <p className="song-item-tile-artist">{artist}</p>
            <FontAwesomeIcon className="play-icon-holder" icon={faPlay} />
        </div>
    );
}

export default SongItemTile;