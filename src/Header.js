//import "./Header.css";
import Select from "./Select/Select";
import { Form, Container } from "react-bootstrap";

const sorts = [
  "Featured",
  "Best Selling",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Price, low to high",
  "Price, high to low",
  "Date, new to old",
  "Date, old to new",
];

const Header = ({ filters, onFilterSelected }) => {
  return (
    <Container>
      <Form>
        <Form.Row>
          <Select
            title="Filter by:"
            list={filters}
            onSelected={onFilterSelected}
          />
          <Select title="Sort by:" list={sorts} />
        </Form.Row>
      </Form>
    </Container>
  );
};

export default Header;
