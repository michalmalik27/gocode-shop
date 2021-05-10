import { useEffect, useState } from "react";
import Products from "./Products";
import Header from "./Header";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useProducts } from "../contexts/ProductsContext";

const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    rv[x[key]] = true || [];
    return rv;
  }, {});

function ProductsPage() {
  const {
    products,
    setProducts,
    selectedCategory,
    selectedMaxPrice,
    selectedMinPrice,
  } = useProducts();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  let fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .then(() => {
        setIsLoaded(true);
      });
  };

  return (
    <>
      {isLoaded ? (
        <div>
          <Header />
          <Products
            products={products.filter(
              (p) =>
                (selectedCategory === "" || p.category === selectedCategory) &&
                p.price >= selectedMinPrice &&
                p.price <= selectedMaxPrice
            )}
          />
        </div>
      ) : (
        <LinearProgress />
      )}
    </>
  );
}

export default ProductsPage;
