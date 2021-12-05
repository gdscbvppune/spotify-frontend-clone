import "./index.css";

function SongThumbnail(props){
    let { thumbnail, title } = props;
    return (
        <div className="song-thumbnail-item">
            <img className="song-thumbnail-item-image" src={thumbnail} alt="song thumbnail" />
            <h2 className="song-thumbnail-item-title">{title}</h2>
        </div>
    );
}

export default SongThumbnail;