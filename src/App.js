import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  //building cart
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  //what is in the cart function
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve()); // getting the cart and immediately setting to the state
  };

  //add  products to the cart
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart); //the cart after the item has been added
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []); //running at the start or at render

  console.log(cart);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />

          <Route exact path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
