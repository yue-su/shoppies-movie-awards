import {
  Box,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { movieContext } from "../providers/MoviesProvider";
import SearchIcon from "@material-ui/icons/Search";
import useLocalStorage from "../hooks/useLocalStorage";

const apiURL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const Search = () => {
  const { setMovieList, nominations, titleRef, errorHandler } = useContext(
    movieContext
  );
  const [title, setTitle] = useLocalStorage("title", "");

  const titleDebounced = useDebounce(title, 500);

  useEffect(() => {
    if (titleDebounced) {
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
          errorHandler(movies.data.Error);
        }
      });
      titleRef.current = titleDebounced;
    } else {
      setMovieList([]);
      titleRef.current = "";
    }
    // eslint-disable-next-line
  }, [titleDebounced]);

  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  return (
    <Paper>
      <Box p={3}>
        <Typography gutterBottom variant="h5">
          Movie Title
        </Typography>
        <TextField
          placeholder="Search movie title"
          onChange={handleChange}
          value={title}
          fullWidth
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Paper>
  );
};

export default Search;
