import { useParams } from "react-router-dom";
import { getAlbum } from "./musics"

function Albums() {
    let params = useParams();
    let albumInfo = getAlbum(params.albumName);
    return (
        <div className="albumDetail">
            <div className="albumDetail__cover">
                <img src={albumInfo.cover}></img>
            </div>
            <div className="albumDetail__info">
                <h1>{albumInfo.album}</h1>
                <h3>{albumInfo.artist}</h3>
                <p>{`${albumInfo.release}･${albumInfo.genre}`}</p>
            </div>
            <div className="albumDetail__playlist">

            </div>
        </div>
    )
}

export default Albums;
