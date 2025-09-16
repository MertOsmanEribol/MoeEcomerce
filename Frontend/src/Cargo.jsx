import React, { useState, useEffect } from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";

function Cargo() {
  const [cart] = useState(() => {
    // İlk başta localStorage'dan oku
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Sepet değişince her zaman localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <div className="flex flex-col min-h-screen h-300">
        <HeaderNav cart={cart} />
        <div className="h-full w-4xl flex items-center mx-auto text-center">
          <div className="h-fit w-4xl bg-black p-10 rounded-2xl shadow-2xl ">
            <h1 className="text-3xl font-medium mt-3 mb-5 text-white ">Sipariş ve Kargo Takip Sorgusu</h1>
            <div className="shadow-2xl mx-auto items-center ">
        
              <div className="flex rounded-lg">
                <input
                placeholder="Lütfen Sipariş Numaranızı giriniz"
                  type="text"
                  id="hs-trailing-button-add-on"
                  name="hs-trailing-button-add-on"
                  className="py-2.5 rounded-2xl bg-white sm:py-3 px-4 block w-full border-gray-200 rounded-s-lg sm:text-sm focus:z-10 focus:border-black-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
                <button
                  type="button"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden cursor-pointer focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Sorgula
                </button>
              </div>
            </div>
            <h1 className="border-2 mt-5 bg-red-400 border-red-400 shadow">
                Sipariş numaranızı giridikten sonra sipariş <br />bilgileriniz bölümünden kargonuzun durmunun öğrenmek için ilgili kargo firmasına yönlendirilecektir
            </h1>

            <h1 className="border-2 mt-5 border-red-400 bg-red-400 shadow">
                Kargo firması tarafından oluşan zararlardan firmamız sorumlu değildir!
            </h1>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Cargo;
