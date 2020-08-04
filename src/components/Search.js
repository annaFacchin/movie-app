import React from 'react';

// function Search( props ) {
function Search({ handleInput, search }) {

    return (
        <div>
            <section className="searchbox-wrap">
                <input type="text" className="searchbox" placeholder="search for a movie"
                    onChange={handleInput}
                    onKeyPress={search}>
                    {/* onChange={props.handleInput}> */}
                </input>
            </section>
        </div>
    )
}

export default Search;

