import { Box, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";

const Search = () => {
  return (
    <Paper>
      <Box p={3}>
        <Typography gutterBottom variant="h5">
          Movie title
        </Typography>
        <TextField fullWidth variant="outlined" />
      </Box>
    </Paper>
  );
};

export default Search;
