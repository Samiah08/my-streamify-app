import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

const MovieApp = () => {
  const [loading, setLoading] = useState(false);
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
      setError("An Error Occurred While Fetching the Data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="Search-bar">
        <SearchBar onSearch={fetchMovies} />
      </div>
      <div className="loading-message">{loading && <p>Loading Movies......</p>}</div>
      <div className="Error-message">{error && <p>{error}</p>}</div>
      <br></br>
      <br></br>
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieApp;
