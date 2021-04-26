import { useEffect, useState } from "react";

import "./App.css";
import Header from "./Header.js";
import Products from "./Products/Products";
import Loading from "./Loading/Loading";
import Toggle from "./Toggle";

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
    <>
      {!isLoaded && <Loading/>}
      {isLoaded && (
        <>
          <Header filters={categories} onFilterSelected={onSelectedCategory} />
          <Products
            products={products.filter(
              (p) => selectedCategory === "" || p.category === selectedCategory
            )}
          />
        </>
      )}
    </>
  );
}

export default App;
