import { Box, Paper, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { movieContext } from "../providers/MoviesProvider";

const apiURL = "http://www.omdbapi.com/apikey.aspx";

const Search = () => {
  const { setMovies } = useContext(movieContext);

  useEffect(() => {
    axios.get(apiURL);
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
  };
  return (
    <Paper>
      <Box p={3}>
        <Typography gutterBottom variant="h5">
          Movie title
        </Typography>
        <TextField onChange={handleChange} fullWidth variant="outlined" />
      </Box>
    </Paper>
  );
};

export default Search;
