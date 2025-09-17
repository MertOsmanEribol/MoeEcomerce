// components/Products.jsx
import React from "react";

function Products({ products, cart, setCart }) {
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="space-y-4">
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
  );
}

export default Products;
