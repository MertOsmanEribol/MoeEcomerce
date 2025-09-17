import React, { useState, useEffect } from "react";
import Headernav from "./HeaderNav";
import Footer from "./Footer";
import Products from "./components/Products";
import axios from "axios";

function Manpage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  
  useEffect(() => {
    axios.get("https://formal-incline-472217-s5.ey.r.appspot.com/ManProducts")
      .then((res) => setProducts(res.data.Kategori))
      .catch((err) => console.error("Ürünler yüklenemedi:", err));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="flex flex-col min-h-screen">
      <Headernav cart={cart} />
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Products 
            cart={cart} 
            setCart={setCart} 
            products={products} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Manpage;
