import React from "react";
import styles from "../Sort/Sort.module.css";
import Select from "react-select";
import { useState } from "react";
import { useProducts, useProductsActions } from "../Providers/ProductsProvider";
import { productsData } from "../../db/products";

function Sort({ filter }) {
  const products = useProducts();
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");
  const options = [
    {
      value: "price-l",
      label: "price-lowest",
      sortby: "lowest",
      type: "price",
    },
    {
      value: "price-h",
      label: "price-highest",
      sortby: "highest",
      type: "price",
    },
  ];

  const changeHandler = (selected) => {
    console.log(selected);
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "sort", selected });
    setValue(selected);
  };
  const customStyles = {
    control: (base, state) => ({
      ...base,

      borderColor: "#d97706",

      "&:hover": {
        // Overwrittes the different states of border
      },
    }),
  };
  return (
    <div className={styles.sort}>
      <div className={styles.selectside}>
        <span className={styles.sort__lable}>Sort by :</span>
        <Select
          className={styles.select}
          value={value}
          onChange={changeHandler}
          options={options}
          styles={customStyles}
        />
      </div>
    </div>
  );
}

export default Sort;
