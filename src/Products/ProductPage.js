import { useEffect, useState } from "react";

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
import LinearProgress from "@material-ui/core/LinearProgress";

import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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

const ProductPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProduct();
  }, [id]);

  let fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .then(() => {
        setIsLoaded(true);
      });
  };

  const {
    increaseProductCount,
    decreaseProductCount,
    setProductCount,
    getProductCount,
  } = useShoppingCart();

  return (
    <>
      {isLoaded ? (
        <div>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={product.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
                </Typography>
                <Badge badgeContent={product.price}></Badge>
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
      ) : (
        <LinearProgress />
      )}
    </>
  );
};
export default ProductPage;
