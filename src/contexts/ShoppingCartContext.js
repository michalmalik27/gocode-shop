import { useContext, useState, createContext, useEffect } from "react";

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  const increaseProductCount = (product) => {
    let newShoppingCart = [];

    if (shoppingCart.some((s) => s.id === product.id)) {
      newShoppingCart = shoppingCart.map((s) => {
        if (s.id === product.id) {
          s.count++;
        }
        return s;
      });
    } else {
      newShoppingCart = [...shoppingCart, { ...product, count: 1 }];
    }

    setShoppingCart(newShoppingCart);
  };

  const decreaseProductCount = (product) => {
    if (!shoppingCart.some((s) => s.id === product.id)) {
      return;
    }

    let newShoppingCart = shoppingCart
      .map((s) => {
        if (s.id === product.id) {
          s.count--;
        }
        return s;
      })
      .filter((s) => s.count > 0);

    setShoppingCart(newShoppingCart);
  };

  const setProductCount = (product, count) => {
    let newShoppingCart = [];

    if (count <= 0) {
      newShoppingCart = shoppingCart.filter((s) => s.id !== product.id);
    } else if (!shoppingCart.some((s) => s.id === product.id)) {
      newShoppingCart = [...shoppingCart, { ...product, count: count }];
    } else {
      newShoppingCart = shoppingCart.map((s) => {
        if (s.id === product.id) {
          s.count = count;
        }
        return s;
      });
    }

    setShoppingCart(newShoppingCart);
  };

  const getProductCount = (product) => {
    let productInCart = shoppingCart.find((p) => p.id === product.id);

    return productInCart ? productInCart.count : 0;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        increaseProductCount,
        decreaseProductCount,
        setProductCount,
        getProductCount,
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
