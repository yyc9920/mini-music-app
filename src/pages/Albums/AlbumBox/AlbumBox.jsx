import Link from "../../../QueryNavLink"
import { getAlbum } from "../../../musics.js"
import './albumBox.scss'

export default function AlbumBox(props) {
    let albumInfo = getAlbum(props.album);

    return <div className="albumBox">
        <Link to={albumInfo.album}>
            <img
                style={{ maxWidth: 12.5 + "em" }}
                className="albumBox__img"
                src={albumInfo.cover}
            ></img>
            <div className="iconBox">
                <i className='bx bx-play icon'></i>
            </div>
        </Link>
        <Link to={albumInfo.album}>
            <div className="albumBox__album">
                {albumInfo.album}
            </div>
        </Link>
        <div className="albumBox__artist">
            {albumInfo.artist}
        </div>
    </div>
}
