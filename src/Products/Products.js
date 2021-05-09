import Product from "./Product.js";
import ProductPage from "./ProductPage";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Products = ({ products }) => {
  const match = useRouteMatch();

  return (
    <Grid container spacing={3}>
      {products.map(({ id, title, image, price, category }) => (
        <Grid item xs={12} sm={3}>
          <Paper>
            <Product
              key={id}
              id={id}
              title={title}
              image={image}
              price={price}
              category={category}
            ></Product>
          </Paper>
        </Grid>
      ))}
      <Switch>
        <Route path={`${match.url}/:id`}>
          <ProductPage />
        </Route>
      </Switch>
    </Grid>
  );
};

export default Products;
