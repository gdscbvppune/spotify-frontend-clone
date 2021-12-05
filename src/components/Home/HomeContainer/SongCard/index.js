import "./index.css";

function SongCard(props){
    let { title, artist, thumbnail } = props;
    return (
        <div className="song-card">
            <img className="song-card-thumbnail" src={thumbnail} alt="thumbnail" />
            <div className="song-card-holder">
                <h2 className="song-card-title">{title}</h2>
                <p className="song-card-artist">{artist}</p>
            </div>
        </div>
    );
}

export default SongCard;