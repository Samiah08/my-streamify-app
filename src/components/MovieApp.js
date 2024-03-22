import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

const MovieApp = () => {
  const [loading, setLoading] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchMovies = async (searchTerm) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
      );
      if (response.data.Response === "True") {
        //console.log(response.data);
        setMovies(response.data.Search);
      } else {
        setError(response.data.Error);
      }
    } catch (error) {
      setError("An Error Occured While Fetching the Data", error);
    } finally {
      setLoading(false);
    }
  };

  const addFavouriteMovie =(movie) =>{
    const newfavouriteList = [...favourites, movie];
    setFavourites(newfavouriteList);
  }

  return (

            <div>
       <div className="Search-bar"> 
       <SearchBar onSearch={fetchMovies} />
        </div> 

        {loading && <p>Loading Movies......</p>}
        {error && <p>{error}</p>}
<br></br>
<br></br>
            <MovieList movies={movies} 	handleFavouritesClick={addFavouriteMovie}
            />

      </div>

  );
};

export default MovieApp;