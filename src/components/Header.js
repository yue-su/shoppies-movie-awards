import { Grid, Snackbar, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { movieContext } from "../providers/MoviesProvider";
import Alert from "./Alert";

const Header = () => {
  const { error, errorHandler } = useContext(movieContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    errorHandler("");
  };

  return (
    <Grid item>
      <Typography variant="h2">The Shoopies</Typography>
      <Snackbar
        open={error ? true : false}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </Grid>
  );
};

export default Header;
