import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { ListGroup, Badge, Card, Image } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";

const ShoppingCart = () => {
  const {
    shoppingCart,
    getTotalPrice,
    getProductsCount,
    getProductCount,
    setProductCount,
    increaseProductCount,
    decreaseProductCount,
  } = useShoppingCart();
  return (
    <Card>
      <Card.Header as="h5"> You'r Shoppin Cart</Card.Header>
      <Card.Body>
        {shoppingCart.length > 0 ? (
          <ListGroup>
            {shoppingCart.map((product) => (
              <ListGroup.Item>
                <p>
                  {product.title}{" "}
                  <Image width={20} height={20} src={product.image} />
                </p>
                <span>Count: </span>
                <Badge variant="secondary">{product.count}</Badge> |
                <span> Price: </span>
                <Badge pill variant="dark">
                  ${product.price}
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <span>There are no products in the cart</span>
        )}
      </Card.Body>
      <Card.Footer>
        <span> Products: </span>
        <Badge variant="secondary">{getProductsCount()}</Badge>|
        <span> Price: </span>
        <CurrencyFormat
          value={getTotalPrice()}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          decimalScale="2"
          renderText={(value) => (
            <Badge pill variant="dark">
              {value}
            </Badge>
          )}
        />
      </Card.Footer>
    </Card>
  );
};

export default ShoppingCart;
