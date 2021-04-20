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

        {/* <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div> */}
      </div>
    </nav>
  );
};

export default Header;
