import { useParams } from "react-router-dom";
import { getAlbum } from "../../musics"
import SongBox from "../Songs/SongBox/SongBox"
import './albums.scss'

function Albums() {
    let params = useParams();
    let albumInfo = getAlbum(params.albumName);
    return (
        <div className="albumDetail">
            <div className="albumDetail__cover">
                <img
                    src={albumInfo.cover}
                    style={{ maxWidth: 15 + "em" }}
                ></img>
            </div>
            <div className="albumDetail__info">
                <h1 className="mb">{albumInfo.album}</h1>
                <h3 className="mb">{albumInfo.artist}</h3>
                <p className="mb">{`${albumInfo.release}･${albumInfo.genre}`}</p>
            </div>
            <div className="albumDetail__playlist">
                <SongBox album={albumInfo.album} />
            </div>
        </div>
    )
}

export default Albums;
