import React, { useState, useContext, useReducer } from "react";
import { productsData } from "../../db/products";
import _ from "lodash";
const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();
// const initialState = [
//   { name: "book", number: "13", id: 1, quantity: 1 },
//   { name: "pen", number: "28", id: 2, quantity: 2 },
//   { name: "pencel", number: "30", id: 3, quantity: 3 },
// ];
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const item = { ...state[index] };
      item.quantity++;
      const productsTemp = [...state];
      productsTemp[index] = item;
      return productsTemp;
    }

    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        return state.filter((p) => p.id !== action.id);
      }
      product.quantity--;
      const productsTemp = [...state];
      productsTemp[index] = product;
      return productsTemp;
    }

    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.name = action.event.target.value;

      const productsTemp = [...state];
      productsTemp[index] = product;
      return productsTemp;
    }

    case "remove": {
      const filterd = state.filter((p) => p.id !== action.id);
      return filterd;
    }
    case "filter": {
      const value = action.selectedOption.value;
      console.log("hi", value);
      if (value === "" || value === undefined) {
        return productsData;
      }
      const updatedState = productsData.filter(
        (p) => p.availableSizes.indexOf(value) >= 0
      );
      return updatedState;
    }
    case "sort": {
      const value = action.selected.type;
      if (value === "") {
        return productsData;
      }
      if (action.selected.sortby === "lowest") {
        return _.orderBy(state, ["price"], ["asc"]);
      }
      return _.orderBy(state, ["price"], ["desc"]);
    }
    case "search": {
      console.log(state);
      const value = action.value.toLowerCase();
      console.log(value);
      const products = [...state];
      const updatedState = products.filter((p) =>
        p.title.toLowerCase().includes(value)
      );
      // products.map((p) => console.log(p));
      return updatedState;
    }
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatcher] = useReducer(reducer, productsData);
  const [filterTemp, setFilterTemp] = useState("");

  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={dispatcher}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => useContext(ProductsContextDispatcher);

// const removeHandler = (id) => {
//   const filterd = products.filter((p) => p.id !== id);
//   console.log(filterd);
//   console.log({ filterd });
//   setProducts(filterd);
// };

// const incrementHandler = (id) => {
//   const index = products.findIndex((item) => item.id === id);
//   const item = { ...products[index] };
//   item.quantity++;

//   const productsTemp = [...products];
//   productsTemp[index] = item;
//   setProducts(productsTemp);
// };

// const decrementHandler = (id) => {
//   const index = products.findIndex((item) => item.id === id);
//   const product = { ...products[index] };
//   if (product.quantity === 1) {
//     console.log(product.quantity);
//     return removeHandler(id);
//   }
//   product.quantity--;
//   const productsTemp = [...products];
//   productsTemp[index] = product;
//   setProducts(productsTemp);
// };

// const changeHandler = (event, id) => {
//   const index = products.findIndex((item) => item.id === id);
//   const product = { ...products[index] };
//   product.name = event.target.value;

//   const productsTemp = [...products];
//   productsTemp[index] = product;
//   setProducts(productsTemp);
// };

// const addproductsOne = () => {
//   setproducts((prevproducts) => prevproducts + 1);
// };
// const addproductsFive = () => {
//   setproducts((prevproducts) => prevproducts + 5);
// };

// return { addproductsOne, addproductsFive };
// };
