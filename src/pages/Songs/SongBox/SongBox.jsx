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
                    <div className="songBox__num">
                        <p>{song.num}</p>
                    </div>
                    <div className="songBox__play">
                        <a href={song.url} target="_blank">
                            <i class='bx bx-play-circle'></i>
                        </a>
                    </div>
                    <div className="songBox__song">
                        <a href={song.url} target="_blank">{song.song}</a>
                    </div>
                    <div className="songBox__playtime">
                        <p>{`${parseInt(song.playtime / 60)}:${song.playtime % 60 >= 10 ? song.playtime % 60 : "0" + song.playtime % 60}`}</p>
                    </div>
                </div>
            )
        }
    </div>
}
