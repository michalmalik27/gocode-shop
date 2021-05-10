
import ProductsPage from "./Products/ProductsPage";
import ProductPage from "./Products/ProductPage";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { useShoppingCart } from "./contexts/ShoppingCartContext";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

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
  const {
    getProductsCount,
  } = useShoppingCart();
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Shooping Online</Typography>
          <IconButton aria-label="show shopping cart" color="inherit">
            <Badge badgeContent={getProductsCount()} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Router>
              <Switch>
                <Route path="/products/:id">
                  <ProductPage />
                </Route>
                <Route path="/">
                  <ProductsPage />
                </Route>
              </Switch>
            </Router>
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
