import { createContext, useEffect, useState } from "react";

const storeContext = createContext();

const Context = ({ children }) => {
  const [productData, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("all-products");
  const [isLoading, setIsLoading] = useState(false);
  const [inputVal, setInputVal] = useState("");

  //====>>>
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setIsLoading(true);
      setData(() => {
        if (category === "all-products") {
          return data;
        } else {
          return data.filter((item) => item.category === category);
        }
      });
      setIsLoading(false);
    }
    getData();
  }, [category]);

  const onAddCartItem = (item) => {
    const index = cart.findIndex((product) => product.id === item.id);
    setCart((prevCart) => {
      if (index !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[index].qty += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, qty: 1 }];
      }
    });
  };

  const onRemoveAllCartItems = () => {
    setCart([]);
  };

  const onIncreaseQty = (item) => {
    const index = cart.findIndex((product) => product.id === item.id);
    setCart((prev) => {
      const updatedCart = [...prev];
      updatedCart[index].qty += 1;
      return updatedCart;
    });
  };

  const onDecreaseQty = (item) => {
    const index = cart.findIndex((product) => product.id === item.id);
    if (cart[index].qty > 1) {
      setCart((prev) => {
        const updatedCart = [...prev];
        updatedCart[index].qty -= 1;
        return updatedCart;
      });
    }
  };

  const onRemoveItem = (item) => {
    setCart((prevCart) => {
      return prevCart.filter((product) => {
        return product.id !== item.id;
      });
    });
  };

  const categories = new Set();
  productData.forEach((item) => {
    categories.add(item.category);
  });

  const onChangeCategory = (cat) => {
    setCategory(cat);
  };

  const onChangeInputVal = (e) => {
    setInputVal(e.target.value);
  };
  const onSubmittingInputQuery = (e) => {
    if (e.key === "Enter") {
      if (inputVal === "") {
        setData((prev) => [...prev]);
      } else {
        setData((prev) =>
          prev.filter(
            (item) =>
              item.title.toLowerCase().indexOf(inputVal.toLocaleLowerCase()) !==
              -1
          )
        );
      }
    }
  };

  return (
    <storeContext.Provider
      value={{
        productData,
        onAddCartItem,
        cart,
        onRemoveAllCartItems,
        onIncreaseQty,
        onDecreaseQty,
        onRemoveItem,
        categories,
        onChangeCategory,
        isLoading,
        inputVal,
        onChangeInputVal,
        onSubmittingInputQuery,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};

export { storeContext };

export default Context;
