import { Box, Paper, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { movieContext } from "../providers/MoviesProvider";

const apiURL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const Search = () => {
  const { setMovieList, nominations } = useContext(movieContext);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const titleDebounced = useDebounce(title, 500);

  useEffect(() => {
    axios.get(apiURL + "&s=" + titleDebounced).then((movies) => {
      if (movies.data.Search) {
        const moviesList = [...movies.data.Search];
        for (let movie of moviesList) {
          for (let nomination of nominations) {
            if (movie.imdbID === nomination.imdbID) {
              movie.isNominated = true;
            }
          }
        }
        setMovieList(moviesList);
      } else if (movies.data.Response === "False") {
        setError(movies.data.Error);
      }
    });
  }, [titleDebounced]);

  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };
  return (
    <Paper>
      <Box p={3}>
        <Typography gutterBottom variant="h5">
          Movie title
        </Typography>
        <TextField
          onChange={handleChange}
          value={title}
          fullWidth
          variant="outlined"
        />
      </Box>
    </Paper>
  );
};

export default Search;
