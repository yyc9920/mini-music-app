// import QueryNavLink from "../../../QueryNavLink"
import { getAlbum, getMusics } from "../../../musics"
import './songBox.scss'

export default function SongBox(props) {
    let albumInfo = getAlbum(props.album);
    let musics = getMusics();
    let songs = musics['musics'].filter(m => m.album === albumInfo.album);

    return <div className="songBox">
        {
            songs.map(song =>
                <div className="songBox__container">
                    <div className="songBox__num mr">{song.num}</div>
                    <div className="songBox__song mr">{song.song}</div>
                    <div className="songBox__playtime mr">
                        {`${parseInt(song.playtime / 60)}:${song.playtime % 60}`}
                    </div>
                </div>
            )
        }
    </div>
}
