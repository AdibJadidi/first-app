import React from "react";
import styles from "./productlist.module.css";
import Product from "../Product/Product";
import { useProducts, useProductsActions } from "../Providers/ProductsProvider";

const ProductList = (props) => {
  const products = useProducts();
  const dispatcher = useProductsActions();
  return (
    <div className={styles.product__list}>
      {products.map((product, index) => {
        return (
          <Product
            product={product}
            key={index}
            onIncrement={() =>
              dispatcher({ type: "increment", id: product.id })
            }
            onDecrement={() =>
              dispatcher({ type: "decrement", id: product.id })
            }
            onDelete={() => dispatcher({ type: "remove", id: product.id })}
            onChange={(e) =>
              dispatcher({ type: "edit", id: product.id, event: e })
            }
          />
        );
      })}
    </div>
  );
};

export default ProductList;

// class ProductList extends React.Component {
//   render() {
//     const { onChange, onDecrement, onDelete, onIncrement, products } =
//       this.props;
//     return (
//       <div>
//         {products.map((product, index) => {
//           return (
//             <Product
//               product={product}
//               key={index}
//               onIncrement={() => onIncrement(product.id)}
//               onDecrement={() => onDecrement(product.id)}
//               onDelete={() => onDelete(product.id)}
//               onChange={(e) => onChange(e, product.id)}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default ProductList;
