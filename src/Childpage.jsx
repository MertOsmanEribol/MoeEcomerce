import React, { useState, useEffect } from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import Products from "./components/Products";
import axios from "axios";




function Childpage() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    // İlk başta localStorage'dan oku
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  

  useEffect(() => {
    axios.get("https://formal-incline-472217-s5.ey.r.appspot.com/ChildProducts")
      .then((res) => setProducts(res.data.Kategori))
      .catch((err) => console.error("Ürünler yüklenemedi:", err));
  }, []);

  // Sepet değişince her zaman localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);




  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <HeaderNav cart={cart} />
        <div className=" container mx-auto flex-grow">
          
        <Products className="bg-black" products={products} cart={cart} setCart={setCart}  />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Childpage;
