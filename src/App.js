import { Box, Grid, ThemeProvider } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import MoviesProvider from "./providers/MoviesProvider";
import Nominations from "./components/Nominations";
import Results from "./components/Results";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MoviesProvider>
        <Box minHeight="100vh" px={10} py={5} className="app">
          <Grid container direction="column" spacing={4}>
            <Header />
            <Grid item>
              <Search />
            </Grid>
            <Grid item container spacing={4} wrap="nowrap">
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
    </ThemeProvider>
  );
}

export default App;
