import "./index.css";

function SideBarItem(props){
    let {title} = {...props};
    return (
        <div className={title === "Home" ? "sidebar-item sidebar-item-active" : "sidebar-item"}>
            {title}
        </div>
    );
}

function PlaylistItem(props){
    let {title} = {...props};
    return (
        <div className="playlist-item">
            {title}
        </div>
    );
}

function SideBar(props){
    let { music } = {...props};
    return (
        <div className="sidebar">
            <div className="sidebar-upper">
                <SideBarItem title="Home" key="home" />
                <SideBarItem title="Search" key="search" />
                <SideBarItem title="Your Library" key="library" />
            </div>
            <div className="sidebar-playlists">
                <PlaylistItem title="Wham" key="Wham" />
                <PlaylistItem title="This is Imagine Dragons" key="imagine_dragons" />
                <PlaylistItem title="This is Prateek Kuhad" key="prateek_kuhad" />
                <PlaylistItem title="League of Legends Mix" key="league_of_legends_mix" />
                <PlaylistItem title="Bollywood Remix" key="bollywood_remix" />
                <PlaylistItem title="Drugs" key="drugs" />
                <PlaylistItem title="Work" key="work" />
                <PlaylistItem title="Vibe hai 🤙🏻" key="vibe_hai" />
                <PlaylistItem title="Buzz" key="buzz" />
            </div>
            <div className="sidebar-album-art">
                {music !== undefined && <img className="song-art" src={music.song_thumbnail} alt="current playing thumbnail" />}
            </div>
        </div>
    );
}

export default SideBar;