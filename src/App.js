import { Box, Grid } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import MoviesProvider from "./providers/MoviesProvider";
import Nominations from "./components/Nominations";
import Results from "./components/Results";

function App() {
  return (
    <MoviesProvider>
      <Box height="100vh" px={10} pt={5}>
        <Grid container direction="column" spacing={4}>
          <Header />
          <Grid item>
            <Search />
          </Grid>
          <Grid item container spacing={4}>
            <Grid item md={8}>
              <Results />
            </Grid>
            <Grid item md={4}>
              <Nominations />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </MoviesProvider>
  );
}

export default App;
