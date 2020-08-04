
import React from 'react'

import Result from './Result'

function ResultsList({ singleResult, openPopup }) {
    return (
        <section className="results">
            {singleResult.map(movie => (
                <Result key={movie.imdbID} movie={movie} openPopup={openPopup} />
            ))}
        </section>
    )
}

export default ResultsList