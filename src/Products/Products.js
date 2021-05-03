import Product from "./Product.js";
//import "./Products.css";
import { CardColumns, Row, Col } from "react-bootstrap";

const Products = ({ products }) => (
  <CardColumns>
    {products.map(({ id, title, image, price, category }) => (
      <Product
        key={id}
        id={id}
        title={title}
        image={image}
        price={price}
        category={category}
      ></Product>
    ))}
  </CardColumns>
);

export default Products;
