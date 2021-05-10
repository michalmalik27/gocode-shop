import { useContext, useState, createContext, useEffect } from "react";

const ProductsContext = createContext();

const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    rv[x[key]] = true || [];
    return rv;
  }, {});

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [selectedMinPrice, setSelectedMinPrice] = useState(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(900);

  useEffect(() => {
    setCategories(Object.keys(groupBy(products, "category")));
  }, [products]);

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory("");
    }
  }, [categories]);

  const getMinPriceByCategory = () => {
    return Math.min(
      ...products
        .filter(
          (p) => selectedCategory === "" || p.category === selectedCategory
        )
        .map((x) => x.price)
    );
  };

  const getMaxPriceByCategory = () => {
    return Math.max(
      ...products
        .filter(
          (p) => selectedCategory === "" || p.category === selectedCategory
        )
        .map((x) => x.price)
    );
  };

  useEffect(() => {
    setSelectedMinPrice(getMinPriceByCategory());
    setSelectedMaxPrice(getMaxPriceByCategory());
  }, [selectedCategory]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        getMinPriceByCategory,
        getMaxPriceByCategory,
        selectedCategory,
        setSelectedCategory,
        selectedMinPrice,
        setSelectedMinPrice,
        selectedMaxPrice,
        setSelectedMaxPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}

export default ProductsContext;
