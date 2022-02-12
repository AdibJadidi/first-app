import React, { useState } from "react";
import { useProductsActions } from "../../Components/Providers/ProductsProvider";
import styles from "./Search.module.css";
function SearchBar({ filter }) {
  const [value, setValue] = useState("");
  const dispatch = useProductsActions();
  const changeHandler = (e) => {
    console.log({ filter });
    console.log(e.target.value);
    setValue(e.target.value);
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", value: e.target.value });
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <input
        type="text"
        placeholder="search here"
        onChange={changeHandler}
        className={styles.input}
        value={value}
      />
    </div>
  );
}

export default SearchBar;
