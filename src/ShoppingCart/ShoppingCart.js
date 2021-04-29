import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { ListGroup, Badge } from "react-bootstrap";

const ShoppingCart = () => {
  const { shoppingCart } = useShoppingCart();
  return (
    <ListGroup>
      {shoppingCart.map(({ id, title, image, price, category, count }) => (
        <ListGroup.Item>
          {title} <Badge>{price}</Badge> * {count}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ShoppingCart;
