import React, { useState, useEffect } from "react";
import Headernav from "./HeaderNav";
import Footer from "./Footer";
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

  // Sepete ekleme fonksiyonu
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Headernav cart={cart} />

      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              {/* Ürün görseli */}
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded"
              />

              {/* Ürün bilgileri */}
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-blue-600 font-bold mt-2">{product.price} ₺</p>
              </div>

              {/* Sepete ekle butonu */}
              <button
                onClick={() => addToCart(product)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Sepete Ekle
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Manpage;
