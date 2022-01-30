import React, { useRef, useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./common/Search/Search";
import Filter from "./Components/Filter/Filter";
import NavBar from "./Components/NavBar/NavBar";
import ProductList from "./Components/ProductList/ProductList";
import ProductsProvider, {
  useProducts,
  useProductsActions,
} from "./Components/Providers/ProductsProvider";
import Sort from "./Components/Sort/Sort";

const App = () => {
  const products = useProducts();
  const setProducts = useProductsActions();

  return (
    <div className={styles.Container} id="title">
      <ProductsProvider>
        <NavBar />
        <div className={styles.main}>
          <Filter />
          <ProductList />
        </div>
      </ProductsProvider>
    </div>
  );
};

export default App;

// class App extends React.Component {

//   render() {
//     return (
//       <div className={styles.Container} id="title">
//         <CounterProvider>
//           <CounterOne />
//         </CounterProvider>
//         {/* <CounterProvider>
//           <h2>welcome</h2>
//           <CounterOne />
//         </CounterProvider> */}
//         {/* <ClickCounter />
//         <HoverCounter /> */}
//         {/* <NavBar
//           totalItems={this.products.filter((p) => p.quantity > 0).length}
//         />
//         <button onClick={() => this.setProducts({ isShow: !this.isShow })}>
//           {this.isShow ? "hide" : "show"}
//         </button>
//         {this.isShow && <FunctionalTimer />} */}
//         {/* <ClassCounter /> */}
//         {/* <ProductList
//           products={this.products}
//           onChange={this.changeHandler}
//           onIncrement={this.incrementHandler}
//           onDecrement={this.decrementHandler}
//           onDelete={this.removeHandler}
//         /> */}
//       </div>
//     );
//   }
// }

// // const App = () => {
// //   const [products, setProducts] = useState([
// //     { name: "book", number: "13" },
// //     { name: "pen", number: "28" },
// //     { name: "pencel", number: "30" },
// //   ]);

// //   const clickHandler = (newTitle) => {
// //     setProducts([
// //       { name: "book", number: "70" },
// //       { name: newTitle, number: "80" },
// //       { name: "pencel", number: "90" },
// //     ]);
// //   };

// //   const countHandler
// //   return (
// //     <div className="title" id="container">
// //       <h1>first app</h1>
// //       {products.map((product) => {
// //         return (
// //           <Product
// //             name={product.name}
// //             number={product.number}
// //             key={index}
// //             click={() => {
// //               clickHandler("new Title");
// //             }}
// //           />
// //         );
// //       })}
// //       <button onClick={countHandler}>count {count}</button>
// //     </div>
// //   );
// // };
