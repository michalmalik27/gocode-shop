import "./Header.css";
import Select from "./Select/Select";

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
    <nav className="product-filter">
      <h1>Jackets</h1>

      <div className="sort">
        <Select
          title="Filter by:"
          list={filters}
          onSelected={onFilterSelected}
        ></Select>

        <Select
          title="Sort by:"
          list={sorts}
        ></Select>
      </div>
    </nav>
  );
};

export default Header;
