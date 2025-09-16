import React, { useState, useEffect } from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import Products from "./components/Products";

function Profile() {
  const [userName, setUserName] = useState(null);
  const [cart] = useState(() => {
    // İlk başta localStorage'dan oku
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("userName");
    if (storedUser) {
      setUserName(storedUser);
    }
  }, []);

  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  // Sepet değişince her zaman localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <div className="flex flex-col min-h-screen h-300">
        <HeaderNav cart={cart} />
        <div className=" mt-10 container sm:grid-cols-1 grid xl:grid-cols-2 mx-auto  flex-grow">
          <div className="flex flex-col">
            <img
              className="profil-pics mx-auto"
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
              alt=""
            />
            <h1 className="text-4xl mt-10 text-center">{userName}</h1>
            <button className="bg-amber-400 p-4 mt-8 rounded-3xl text-xl cursor-pointer">
              Profili düzenle
            </button>
          </div>

          <div className="">
            <div className="border shadow-neutral-950 shadow-2xl text-gray-900 font-mono flex flex-col my-52 mx-auto ">
              <span className="text-center  text-4xl mb-5">
                {" "}
                Kullanıcı Bilgileri
              </span>
              <h2 className="text-2xl border-b-3"> Ad: {userName}</h2>
              <br />
              <h2 className="text-2xl border-b-3"> Soyad: {lastName}</h2>
              <br />
              <h2 className="text-2xl border-b-3">Email: {email}</h2>
              <br />
              <h2 className="text-2xl mb-2">Telefon: {phone}</h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
