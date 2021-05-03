import { useEffect, useState } from "react";

//import "./App.css";
import Header from "./Header.js";
import Products from "./Products/Products";
import Loading from "./Loading/Loading";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import { Shop } from "react-bootstrap-icons";

const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    rv[x[key]] = true || [];
    return rv;
  }, {});

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [selectedMinPrice, setSelectedMinPrice] = useState();
  const [selectedMaxPrice, setSelectedMaxPrice] = useState();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setCategories(Object.keys(groupBy(products, "category")));
    setPricesRange();
  }, [products]);

  useEffect(() => {
    setSelectedMinPrice(minPrice);
  }, [minPrice]);

  useEffect(() => {
    setSelectedMaxPrice(maxPrice);
  }, [maxPrice]);

  useEffect(() => {
    setPricesRange();
  }, [selectedCategory]);

  let setPricesRange = () => {
    let prices = products
      .filter((p) => selectedCategory === "" || p.category === selectedCategory)
      .map((x) => x.price);

    setMinPrice(Math.min(...prices));
    setMaxPrice(Math.max(...prices));
  };

  let fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoaded(true);
      });
  };

  let onSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  let onRangePriceChanged = (min, max) => {
    setSelectedMinPrice(min);
    setSelectedMaxPrice(max);
  };

  return (
    <ShoppingCartProvider>
      <Container>
        <Jumbotron>
          <h1>Shooping Online</h1>
        </Jumbotron>

        {!isLoaded ? (
          <Loading />
        ) : (
          <>
            <Row>
              <Col>
                <Header
                  filters={categories}
                  onFilterSelected={onSelectedCategory}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  onRangePriceChanged={onRangePriceChanged}
                />

                <Products
                  products={products.filter(
                    (p) =>
                      (selectedCategory === "" ||
                        p.category === selectedCategory) &&
                      p.price >= selectedMinPrice &&
                      p.price <= selectedMaxPrice
                  )}
                />
              </Col>
              <Col>
                <ShoppingCart />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
