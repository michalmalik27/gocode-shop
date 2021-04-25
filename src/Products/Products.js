import Product from "../Product/Product.js";
import "./Products.css";

const Products = ({ products }) => (
  <section className="products">
    {products.map(({ id, title, image, price, category }) => (
      <Product
        key={id}
        title={title}
        image={image}
        price={price}
        category={category}
      ></Product>
    ))}
  </section>
);

export default Products;
