import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./../inputControl/MovieinfoComponent.css";


const MovieinfoComponent = (props) => {
    //tosetMovieInfo
    const [toSetMovieInfo, updateToSetMovieInfo] = useState([]);
    const API_KEY = "7b7154de";

    const movieid = props.selectedMovie;
    console.log(movieid);
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${movieid}&apikey=${API_KEY}`)
            .then((clickedMovieInfo) => {
                console.log(clickedMovieInfo);
                console.log(clickedMovieInfo.data);
                updateToSetMovieInfo(clickedMovieInfo.data);
            })
            .catch((err) => {
                console.log("-------------------------------------")
            })
    }, [movieid])

    return (
        <>
            <div className="mainContainer">
                <div className="newCoverImage">
                    <img src={toSetMovieInfo.Poster} alt="" />
                </div>
                <div className="info">
                    <div className="movieName">
                        <span>  Movie:{toSetMovieInfo.Title}</span>
                    </div>
                    <div className="movieInfo">
                        <span> IMDB Rating :&nbsp;&nbsp;&nbsp;
                            {toSetMovieInfo.imdbRating}
                        </span>
                        <span> Realese Date :&nbsp;&nbsp;&nbsp;
                            {toSetMovieInfo.Released}
                        </span>
                        <span> Language:&nbsp;&nbsp;&nbsp;
                            {toSetMovieInfo.Language}
                        </span>
                        <span> Rated :&nbsp;&nbsp;&nbsp;
                            {toSetMovieInfo.Rated}
                        </span>
                        <span> Runtime:&nbsp;&nbsp;&nbsp;
                            {toSetMovieInfo.Runtime}
                        </span>
                        <span> Genre:&nbsp;&nbsp;&nbsp;
                            {toSetMovieInfo.Genre}
                        </span>
                        <span> Actors:&nbsp;&nbsp;&nbsp;
                            {toSetMovieInfo.Actors}
                        </span>
                        <span> Plot:&nbsp;&nbsp;&nbsp;
                            {toSetMovieInfo.Plot}
                        </span>

                    </div>

                </div>
                <div className="closeSpan" onClick={() => props.onMovieSelect()}>
                    <span class="material-symbols-outlined">
                        arrow_back
                    </span>
                </div>
            </div>
        </>
    )

}

export default MovieinfoComponent;