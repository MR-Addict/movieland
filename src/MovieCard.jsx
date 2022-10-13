import Image404 from "./404.png"
import React from "react";

const MovieCard = ({movie})=>{
    return (
        <div className="movie">
            <div>
            <p>{movie.Year}</p>
            </div>

            <div>
            <img
                src={movie.Poster !== "N/A" ? movie.Poster : Image404}
                alt={movie.Title}
            ></img>
            </div>

            <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard