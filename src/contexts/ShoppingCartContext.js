import { useContext, useState, createContext, useMemo } from "react";

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  const increaseProductCount = (product) => {
    let _product = getProduct(product);

    if (!_product) {
      addProduct(product, 1);
    } else {
      updateProductCount(product, _product.count + 1);
    }
  };

  const decreaseProductCount = (product) => {
    let _product = getProduct(product);

    if (!_product) {
      return;
    }

    if (_product.count === 1) {
      removeProduct(_product);
    } else {
      updateProductCount(product, _product.count - 1);
    }
  };

  const setProductCount = (product, count = 0) => {
    let _product = getProduct(product);

    if (_product) {
      count <= 0
        ? removeProduct(_product)
        : updateProductCount(_product, count);
    } else if (count > 0) {
      addProduct(product, count);
    }
  };

  const getProductCount = (product) => {
    let productInCart = getProduct(product);

    return productInCart ? productInCart.count : 0;
  };

  const getProduct = (product) => {
    return shoppingCart.find((p) => p.id === product.id);
  };

  const updateProductCount = (product, count) => {
    let _shoppingCart = shoppingCart.map((s) => {
      if (s.id === product.id) {
        s.count = count;
      }
      return s;
    });

    setShoppingCart(_shoppingCart);
  };

  const removeProduct = (product) => {
    let _shoppingCart = shoppingCart.filter((p) => p.id !== product.id);

    setShoppingCart(_shoppingCart);
  };

  const addProduct = (product, count) => {
    let _shoppingCart = [...shoppingCart, { ...product, count: count }];

    setShoppingCart(_shoppingCart);
  };

  const getTotalPrice = useMemo(() =>
    shoppingCart.map((p) => p.price * p.count).reduce((a, b) => a + b, 0)
  );

  const getProductsCount = useMemo(() =>
    shoppingCart.map((p) => p.count).reduce((a, b) => a + b, 0)
  );

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        increaseProductCount,
        decreaseProductCount,
        setProductCount,
        getProductCount,
        getProductsCount,
        getTotalPrice,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export default ShoppingCartContext;
