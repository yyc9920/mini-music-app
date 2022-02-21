import React from "react";
import { Route } from "react-router-dom";
import { AlbumList } from "./AlbumList"

function Albums({ match }) {
    console.log(match)
    return (
        <>
            <h1>Albums</h1>
            {/* <Route path={match.path} element={AlbumList} /> */}
        </>
    )
}

export default Albums;
