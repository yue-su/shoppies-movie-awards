import React, { useState, createContext, useRef } from "react";

export const movieContext = createContext();

const moviesInit = [];
const nominationsInit = [];
const errorInit = "";

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(moviesInit);
  const [nominations, setNominations] = useState(nominationsInit);
  const [error, setError] = useState(errorInit);
  const titleRef = useRef("");

  const setMovieList = (list) => {
    setMovies(list);
  };

  const addNomination = (movie) => {
    if (nominations.length < 5) {
      setNominations([...nominations, movie]);
      const updatedList = movies.filter((item) => item.imdbID !== movie.imdbID);
      setMovies(updatedList);
      setError(errorInit);
    } else {
      setError("You have reached the max number of 5 nominations");
    }
  };

  const removeNomination = (movie) => {
    const updatedList = nominations.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );
    setNominations(updatedList);
  };

  const errorHandler = (error) => {
    setError(error);
  };

  return (
    <movieContext.Provider
      value={{
        movies,
        nominations,
        setMovieList,
        addNomination,
        removeNomination,
        titleRef,
        errorHandler,
        error,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

export default MoviesProvider;
