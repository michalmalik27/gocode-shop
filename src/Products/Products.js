import Product from "./Product.js";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Products = ({ products }) => {
  return (
    <Grid container spacing={3}>
      {products.map(({ id, title, image, price, category }) => (
        <Grid item xs={12} sm={4} md={2}>
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
    </Grid>
  );
};

export default Products;
