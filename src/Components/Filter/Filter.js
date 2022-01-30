import { useProductsActions } from "../Providers/ProductsProvider";
import Select from "react-select";
import { useState } from "react";
import styles from "../Filter/Filter.module.css";
import SearchBar from "../../common/Search/Search";
import Sort from "../Sort/Sort";

const Filter = () => {
  const dispatch = useProductsActions();
  const [filter, setFilter] = useState("");
  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    console.log(selectedOption);
    setFilter(selectedOption);
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
  const options = [
    { value: "", label: "All" },
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];
  return (
    <div className={styles.filter}>
      <div className={styles.selectside}>
        <SearchBar filter={filter} />
        <div className={styles.filterbox}>
          <span className={styles.sort__lable}>Filter by :</span>
          <Select
            className={styles.select}
            value={filter}
            onChange={filterHandler}
            options={options}
            styles={customStyles}
          />
        </div>
        <Sort filter={filter} />
      </div>
    </div>
  );
};

export default Filter;
