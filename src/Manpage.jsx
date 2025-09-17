import React, { useState, useEffect } from "react";
import Headernav from "./HeaderNav";
import Footer from "./Footer";
import Products from "./components/Products";
import axios from "axios";

function Manpage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    // İlk başta localStorage'dan oku
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  
  useEffect(() => {
    axios.get("https://formal-incline-472217-s5.ey.r.appspot.com/ManProducts")
      .then((res) => setProducts(res.data.Kategori))
      .catch((err) => console.error("Ürünler yüklenemedi:", err));
  }, []);

  // Sepet değişince her zaman localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="flex flex-col min-h-screen">
      <Headernav cart={cart} />
      <div className="container mx-auto flex-grow px-4">
        {/* Buraya sadece responsive için alt alta durma ayarı ekledim */}
        <div className="flex flex-col space-y-4">
          <Products cart={cart} setCart={setCart} products={products} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Manpage;
