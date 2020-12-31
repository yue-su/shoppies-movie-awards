import { Box, Grid } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import MoviesProvider from "./providers/MoviesProvider";

function App() {
  return (
    <MoviesProvider>
      <Box height="100vh" bgcolor="pink" px={10}>
        <Grid container direction="column">
          <Header />
          <Grid item>
            <Search />
          </Grid>
          <Grid item container>
            <Grid item md={6}></Grid>
            <Grid item md={6}></Grid>
          </Grid>
        </Grid>
      </Box>
    </MoviesProvider>
  );
}

export default App;
