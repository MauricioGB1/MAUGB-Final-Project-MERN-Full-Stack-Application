import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="container">
      <Slider/>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;