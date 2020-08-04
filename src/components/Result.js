import React from 'react'

function Result({ movie, openPopup }) {

    return (

        <div className="results" onClick={() => openPopup(movie.imdbID)}>
            <img src={movie.Poster} />
            <h3>{movie.Title}</h3>
        </div>
    )
}

export default Result;
