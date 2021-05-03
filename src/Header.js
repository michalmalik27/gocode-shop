//import "./Header.css";
import { useState } from "react";
import Select from "./Select/Select";
import { Form, Container } from "react-bootstrap";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

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

const Header = ({
  filters,
  onFilterSelected,
  minPrice,
  maxPrice,
  onRangePriceChanged,
}) => {
  const [value, setValue] = useState([minPrice, maxPrice]);

  const handleChange = (event, newValue) => {
    //console.log(newValue);
    setValue(newValue);
    onRangePriceChanged(...newValue);
  };

  return (
    <>
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
      <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography>
      {minPrice} {maxPrice}
      <Slider
        value={value}
        onChange={handleChange}
        min={minPrice}
        max={maxPrice}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </>
  );
};

export default Header;
