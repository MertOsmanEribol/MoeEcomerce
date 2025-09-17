import React from "react";

const Cart = ({ cart = [], emptyCart }) => {
  
  const removeFromCart = (index) => {
    
    let currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    currentCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    window.location.reload(); 
    
  };

  const calculateTotal = () => {
    if (!cart || cart.length === 0) return 0;
    return cart.reduce((total, item) => {
      const productPrice = Object.values(item).find((val, index) =>
        Object.keys(item)[index].toLowerCase().includes("productprice")
      ) || "0";

      const cleanPrice = typeof productPrice === "string"
        ? parseFloat(productPrice.replace(/[^\d.-]/g, ""))
        : productPrice;

      return total + (isNaN(cleanPrice) ? 0 : cleanPrice);
    }, 0);
  };

  // Sepet boşsa boş sepet mesajı göster
  if (!cart || cart.length === 0) {
    return (
      <div className="border w-full md:w-96 p-5 rounded-xl shadow-lg top-16 absolute right-1 z-10 bg-white">
        <h2 className="text-2xl font-bold mb-5 text-center text-gray-800 border-b pb-3">Sepetim</h2>
        <div className="py-8 text-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className="font-medium">Sepetiniz boş</p>
          <p className="text-sm mt-1">Alışverişe başlamak için ürün ekleyin</p>
        </div>
      </div>
    );
  }

  return (
    <div className="border w-full md:w-96 p-5 rounded-xl shadow-lg top-16 absolute right-1 z-10 bg-white">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-800 border-b pb-3">Sepetim</h2>

      <div className="max-h-64 overflow-y-auto pr-1">
        <ul className="space-y-3">
          {cart.map((product, index) => {
            const productName = Object.values(product).find((val, idx) =>
              Object.keys(product)[idx].toLowerCase().includes("productname")
            ) || "Ürün Adı Yok";

            const productPrice = Object.values(product).find((val, idx) =>
              Object.keys(product)[idx].toLowerCase().includes("productprice")
            ) || "0";

            const productImg = Object.values(product).find((val, idx) =>
              Object.keys(product)[idx].toLowerCase().includes("productimg")
            ) || "https://via.placeholder.com/60x60.png?text=No+Image";

            return (
              <li key={index} className="flex items-center justify-between gap-3 py-2 px-1 border-b border-gray-100 hover:bg-gray-50 rounded group">
                <img src={productImg} alt={productName} className="w-12 h-12 rounded object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{productName}</p>
                  <p className="text-xs text-blue-600">{productPrice} ₺</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50"
                  title="Ürünü sepetten çıkar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-4 bg-gray-50 p-4 rounded-lg">
        <p className="font-bold text-xl text-right text-gray-800">
          Toplam: <span className="text-blue-600">{calculateTotal().toFixed(2)}₺</span>
        </p>
      </div>

      <div className="flex gap-3 mt-5">
        <button
          className="bg-red-500 text-white py-3 px-4 rounded-lg w-full hover:bg-red-600 transition-all cursor-pointer font-medium shadow-sm"
          onClick={emptyCart}
        >
          Sepeti Boşalt
        </button>
        <a href="/Shopping" className="w-full">
          <button className="bg-blue-500 text-white py-3 px-4 rounded-lg w-full hover:bg-blue-600 transition-all cursor-pointer font-medium shadow-sm">
          Sepetime git
          </button>
        </a>
      </div>
    </div>
  );
};

export default Cart;