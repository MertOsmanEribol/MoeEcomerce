import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";

const Shopping = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const newCart = [...cart];
    newCart[index] = {
      ...newCart[index],
      quantity: newQuantity,
    };
    setCart(newCart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const calculateSubtotal = (item) => {
    const productPrice =
      Object.values(item).find((val, index) =>
        Object.keys(item)[index].toLowerCase().includes("productprice")
      ) || "0";

    const cleanPrice =
      typeof productPrice === "string"
        ? parseFloat(productPrice.replace(/[^\d.-]/g, ""))
        : productPrice;

    const quantity = item.quantity || 1;
    return (isNaN(cleanPrice) ? 0 : cleanPrice) * quantity;
  };

  const calculateTotal = () => {
    if (!cart || cart.length === 0) return 0;
    return cart.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <HeaderNav cart={cart} />
        <div className="container mx-auto py-12 flex-grow flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav cart={cart} />
      <div className="container mx-auto py-8 px-4 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Alışveriş Sepeti
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 mx-auto text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Sepetiniz boş
            </h2>
            <p className="text-gray-500 mb-6">
              Alışverişe başlamak için ürün ekleyin
            </p>
            <button
              onClick={() => navigate("/")}
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Alışverişe Başla
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Sepet Ürünleri ({cart.length})
                  </h2>
                </div>
                <ul className="divide-y divide-gray-200">
                  {cart.map((item, index) => {
                    const productName =
                      Object.values(item).find((val, idx) =>
                        Object.keys(item)
                          [idx].toLowerCase()
                          .includes("productname")
                      ) || "Ürün Adı Yok";

                    const productPrice =
                      Object.values(item).find((val, idx) =>
                        Object.keys(item)
                          [idx].toLowerCase()
                          .includes("productprice")
                      ) || "0";

                    const productImg =
                      Object.values(item).find((val, idx) =>
                        Object.keys(item)
                          [idx].toLowerCase()
                          .includes("productimg")
                      ) ||
                      "https://via.placeholder.com/120x120.png?text=No+Image";

                    const quantity = item.quantity || 1;
                    const subtotal = calculateSubtotal(item);

                    return (
                      <li
                        key={index}
                        className="p-6 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row gap-6 items-center">
                          <div className="h-28 w-28 flex-shrink-0">
                            <img
                              src={productImg}
                              alt={productName}
                              className="h-full w-full object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-medium text-gray-800">
                              {productName} X {quantity}
                            </h3>
                            
                            <p className="text-blue-600 font-medium mt-1">
                              {productPrice} ₺
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() =>
                                  updateQuantity(index, quantity - 1)
                                }
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer"
                              >
                                -
                              </button>
                              <span className="px-3 py-1 border-l border-r border-gray-300">
                                {quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(index, quantity + 1)
                                }
                                className="px-3 py-1 text-gray-600 cursor-pointer hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-800">
                                {subtotal.toFixed(2)} ₺
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(index)}
                            className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                            title="Ürünü sepetten çıkar "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                  <button
                    onClick={emptyCart}
                    className="px-4 py-2 cursor-pointer text-red-500 hover:text-red-600 font-medium flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Sepeti Boşalt
                  </button>
                  <button
                    onClick={() => navigate("/ManPage")}
                    className="px-4 py-2 cursor-pointer text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Alışverişe Devam Et
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Sipariş Özeti
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ara Toplam</span>
                    <span className="font-medium text-gray-800">
                      {calculateTotal().toFixed(2)} ₺
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kargo</span>
                    <span className="font-medium text-gray-800">30.00 ₺</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-gray-800">
                        Toplam
                      </span>
                      <span className="text-lg font-semibold text-blue-600">
                        {(calculateTotal() + 30).toFixed(2)} ₺
                      </span>
                    </div>
                  </div>
                </div>
                <a href="/PaymentPage" className="block w-full">
                  <button className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm">
                    Ödemeye Geç
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Shopping;
