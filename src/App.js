import ProductsPage from "./Products/ProductsPage";
import ProductPage from "./Products/ProductsPage";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Shooping Online</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Paper>
              <Router>
                <Switch>
                  <Route path="/products/:id">
                    <ProductPage />
                  </Route>
                  <Route path="/products">
                    <ProductsPage />
                  </Route>
                </Switch>
              </Router>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <ShoppingCart />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
