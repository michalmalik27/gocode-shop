import { useShoppingCart } from "../contexts/ShoppingCartContext";
import "./Product.css";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";

const Product = (product) => {
  const { title, image, price } = product;
  const {
    increaseProductCount,
    decreaseProductCount,
    setProductCount,
    getProductCount,
  } = useShoppingCart();

  return (
    <Card
      className="p-7"
      border={getProductCount(product) > 0 ? "success" : "light"}
    >
      <Card.Img src={image} className="product-image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text></Card.Text>
        <Card.Subtitle>${price}</Card.Subtitle>
        <InputGroup size="sm">
          <InputGroup.Prepend>
            <Button
              onClick={() => {
                increaseProductCount(product);
              }}
              variant="success"
            >
              +
            </Button>
          </InputGroup.Prepend>
          <FormControl
            type="number"
            value={getProductCount(product)}
            onChange={(e) => {
              setProductCount(product, e.target.value);
            }}
          />
          <InputGroup.Append>
            <Button
              onClick={() => {
                decreaseProductCount(product);
              }}
              variant="danger"
            >
              -
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </Card>

    // <div
    //   className="product-card"
    //   onClick={() => {
    //     increaseProductCount(product);
    //   }}
    // >
    //   <div className="product-image">
    //     <img src={image} />
    //   </div>
    //   <div className="product-info">
    //     <h5>{title}</h5>
    //     <h6>${price}</h6>
    //     <h6>{category}</h6>
    //   </div>
    // </div>
  );
};

export default Product;
