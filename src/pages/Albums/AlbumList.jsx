import { Link } from "react-router-dom";
import musics from "./musics.js"
import './albumlist.scss';
let groupBy = require("json-groupby");

console.log("musics : " + musics);
let album_cover = groupBy(musics["musics"], ['album'], ['cover']);
console.log(album_cover);
let albums = Object.keys(album_cover);
console.log(albums[0]);
console.log(album_cover[albums[0]]);

function AlbumList() {
    return(
        <div className="album">
            <h1>Albums</h1>
            <div className="album__list">
                {
                    albums.map(a => (
                        <img
                            className="album__img"
                            key={a}
                            src={album_cover[a]['cover'][0]}
                        ></img>
                    ))
                }
            </div>
        </div>
    )
}

export default AlbumList;
