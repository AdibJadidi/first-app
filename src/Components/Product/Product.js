import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = ({
  product,
  onChange,
  onClick,
  onDecrement,
  onIncrement,
  onDelete,
}) => {
  return (
    <div className={styles.Product}>
      <p className={styles.product__title}>{product.title}</p>

      <span className={styles.quantity}>{product.quantity}</span>
      <span className={styles.price}>Price : {product.price}</span>

      {/* <input type="text" onChange={onChange} value={product.name} /> */}

      <button
        className={`${styles.button} ${styles.decrement} ${
          product.quantity === 1 && styles.remove
        }`}
        onClick={onDecrement}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button
        className={`${styles.button} ${styles.increment}`}
        onClick={onIncrement}
      >
        +
      </button>

      <button
        className={`${styles.button} ${styles.delete}`}
        onClick={onDelete}
      >
        delete
      </button>
    </div>
  );
};

export default Product;
