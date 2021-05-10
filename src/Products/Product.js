import { useShoppingCart } from "../contexts/ShoppingCartContext";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Add from "@material-ui/icons/Add";
import Minimize from "@material-ui/icons/Minimize";
import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import ProductPage from "./ProductPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

const Product = (product) => {
  const classes = useStyles();
  const match = useRouteMatch();

  const { id, title, image, price } = product;
  const {
    increaseProductCount,
    decreaseProductCount,
    setProductCount,
    getProductCount,
  } = useShoppingCart();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} />
          <CardContent>
            <Link to={`products/${id}`}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
            </Link>
            <span>${price}</span>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => {
              increaseProductCount(product);
            }}
            variant="contained"
            color="primary"
            size="small"
            aria-label="add to shopping cart"
          >
            <Add />
          </Button>
          <InputBase
            className={classes.input}
            size="small"
            value={getProductCount(product)}
            onChange={(e) => {
              setProductCount(product, e.target.value);
            }}
          />
          <Button
            onClick={() => {
              decreaseProductCount(product);
            }}
            variant="contained"
            size="small"
            color="secondary"
            aria-label="remove from shopping cart"
          >
            <Minimize />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
