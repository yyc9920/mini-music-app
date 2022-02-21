import { Link } from "react-router-dom";
import { getMusics } from "../../../musics.js"
import AlbumBox from "../AlbumBox/AlbumBox"
import './albumList.scss'
let groupBy = require("json-groupby");

let musics = getMusics();
let album_cover = groupBy(musics["musics"], ['album'], ['cover']);
let albums = Object.keys(album_cover);

function AlbumList() {
    return(
        <div className="album">
            <h1>Albums</h1>
            <div className="album__list">
                {
                    albums.map(a => (
                        <AlbumBox key={a} album={a} />
                    ))
                }
            </div>
        </div>
    )
}

export default AlbumList;
