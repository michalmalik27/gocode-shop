import { useEffect, useState } from "react";

//import "./App.css";
import Header from "./Header.js";
import Products from "./Products/Products";
import Loading from "./Loading/Loading";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

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

  useEffect(() => {
    fetchProducts();
  }, []);

  let fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setCategories(Object.keys(groupBy(data, "category")));
        setIsLoaded(true);
      });
  };

  let onSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <ShoppingCartProvider>
      <Container>
        <Jumbotron>
          <h1>Shooping Online</h1>
        </Jumbotron>

        {!isLoaded && <Loading />}
        {isLoaded && (
          <>
            <Row>
              <Col>
                <Header
                  filters={categories}
                  onFilterSelected={onSelectedCategory}
                />

                <Products
                  products={products.filter(
                    (p) =>
                      selectedCategory === "" || p.category === selectedCategory
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
