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
                    <div className="songBox__num">{song.num}</div>
                    <div className="songBox__song">{song.song}</div>
                    <div className="songBox__playtime">
                        <p>{`${parseInt(song.playtime / 60)}:${song.playtime % 60 >= 10 ? song.playtime % 60 : "0" + song.playtime % 60}`}</p>
                    </div>
                </div>
            )
        }
    </div>
}
