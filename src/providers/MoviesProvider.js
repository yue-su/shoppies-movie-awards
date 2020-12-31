import React, { useState, createContext } from "react";

export const movieContext = createContext();

const moviesInit = [];
const nominationsInit = [];

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(moviesInit);
  const [nominations, setNominations] = useState(nominationsInit);

  const setMovieList = (list) => {
    setMovies(list);
  };

  const addNomination = (movie) => {
    setNominations([...nominations, movie]);
  };

  const removeNomination = (movie) => {
    console.log("target movie id is:", movie.imdbID);
    console.log("nomination list is:", nominations);
    const updatedList = nominations.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );
    console.log("updated list is:", updatedList);
    setNominations(updatedList);
  };

  return (
    <movieContext.Provider
      value={{
        movies,
        nominations,
        setMovieList,
        addNomination,
        removeNomination,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

export default MoviesProvider;
