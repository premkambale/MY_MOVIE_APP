import react from "react";
import { useEffect } from "react";
import "./../inputControl/Moviecomponent.css";

const Moviecomponent = (props) => {
    //
    useEffect(()=>{
        document.body.style.backgroundColor="rgb(33, 37, 33)";
    })
    //

    const { Title, Year, imdbID, Type, Poster } = props.movie;

    return (
        <>
            <div className="movieContainer" onClick={() => props.onMovieSelect(imdbID)}>
                <div className="coverImage" >
                    <img src={Poster} alt="" />
                </div>
                <div className="movieName">{Title}</div>
                <div className="infoColumn">
                    <span>Year:{Year}</span>
                    <span>Type:{Type}</span>

                </div>
            </div>
        </>
    )

}
export default Moviecomponent;