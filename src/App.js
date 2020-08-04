import React, { useState } from 'react';
import axios from 'axios';

import Search from './components/Search';
import ResultsList from './components/ResultsList';
import Popup from './components/Popup';

function App() {
  const api = "http://www.omdbapi.com/?apikey=6d2c4437";
  const [state, setState] = useState({
    searchQuery: "",
    results: [],
    selectedMovie: {}
  });

  const search = (e) => {
    if (e.key === "Enter") {
      axios(api + "&s=" + state.searchQuery).then(({ data }) => {
        let found = data.Search;
        console.log(found);

        setState(prevState => {
          return { ...prevState, results: found }
        })
      });
    }
  }

  const handleInput = (e) => {
    let newQuery = e.target.value;

    setState(prevState => {
      return { ...prevState, searchQuery: newQuery }
    });

    console.log("query: " + state.searchQuery);

  }

  const openPopup = id => {
    axios(api + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selectedMovie: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selectedMovie: {} }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Movies app</h3>
        <Search handleInput={handleInput} search={search} />
        <hr></hr>
        <ResultsList singleResult={state.results} openPopup={openPopup} />

        {(typeof state.selectedMovie.Title != "undefined") ?
          <Popup selected={state.selectedMovie} closePopup={closePopup} /> : false}
      </header>
    </div>
  );
}

export default App;

// api: http://www.omdbapi.com/?i=tt3896198&apikey=6d2c4437