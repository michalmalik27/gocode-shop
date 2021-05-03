import { useShoppingCart } from "../contexts/ShoppingCartContext";
import "./Product.css";
import { Card, Button, InputGroup, FormControl, Badge } from "react-bootstrap";

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
        <Card.Text>
          <Badge pill variant="dark">
            ${price}
          </Badge>
        </Card.Text>
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
  );
};

export default Product;
