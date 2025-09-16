import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/moe2.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Cart from "./components/Cart"; // Cart bileşenini import ediyoruz

function HeaderNav({ cart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("userName");
    if (storedUser) {
      setUserName(storedUser);
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const emptyCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    window.location.reload();
  };

  return (
    <div>
      <header className="w-full shadow-s  shadow-black flex pb-3 pt-3 border-b-2 border-white justify-between md:justify-around items-center bg-black relative px-4 md:px-0">
        <div className="flex items-center">
          <button
            className="text-white text-2xl mr-4 md:hidden"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} className="me-3 text-2xl" />
          </button>
          <link to="./Homepage">
            <img
              src={logo}
              className="h-10 md:h-14 object-contain"
              alt="Logo"
            />
          </link>
        </div>

        <div className="hidden md:block">
          <div className="flex rounded-md border-blue-500 overflow-hidden max-w-md">
            <input
              type="text"
              placeholder="Aradığınız ürün..."
              className="w-full outline-none bg-white text-gray-600 text-sm px-5 py-2.5"
            />
            <button
              type="button"
              className="flex items-center justify-center bg-[#007bff] px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="fill-white"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-white text-xl mr-4"
            onClick={toggleSearch}
          >
           
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <div className="">
              {userName ? (
                <a href="./Profile"> 
                <div className="flex flex-col items-center gap-2 text-white">
                  <FontAwesomeIcon icon={faUser} className="text-white text-2xl rounded-2xl" />
                  <span className="text-sm md:text-base font-semibold">{userName}</span>
                </div>
                </a>
               
              ) : (
                <a href="./Login">
                  <button className="border-2 bg-white hover:bg-blue-600 hover:border-blue-500 hover:text-white cursor-pointer rounded p-1.5 md:p-2.5 text-sm md:text-base">
                    Giriş Yap
                  </button>
                </a>
              )}
            </div>
          </div>
          <div className="relative cursor-pointer">
            <div onClick={toggleCart}>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-white text-xl md:text-2xl"
              />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
            
            {/* Sepet açıkken Cart bileşenini göster */}
            {cartOpen && <Cart cart={cart} emptyCart={emptyCart} />}
          </div>
        </div>
      </header>

      {searchOpen && (
        <div className="md:hidden w-full bg-white p-4 absolute z-50 shadow-md">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Aradığınız ürün..."
              className="w-full outline-none bg-white text-gray-600 border border-gray-300 rounded-l-md text-sm px-4 py-2"
            />
            <button className="bg-[#007bff] text-white px-3 py-2 rounded-r-md">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="ml-3 text-gray-700" onClick={toggleSearch}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-8">
            <img src={logo} className="h-10 object-contain" alt="Logo" />
            <button className="text-white text-2xl" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <ul className="flex flex-col space-y-6 text-white font-medium">
            <li><a className="text-xl" href="#">Anasayfa</a></li>
            <li><a className="text-xl" href="./Manpage">Erkek Giyim</a></li>
            <li><a className="text-xl" href="./Womanpage">Kadın Giyim</a></li>
            <li><a className="text-xl" href="./Childpage">Çocuk Giyim</a></li>
            <li><a className="text-xl" href="./Shoepage">Ayakkabılar</a></li>
            <li><a className="text-xl" href="./Accessories">Aksesuarlar</a></li>
           
          </ul>
          {userName ? (
            <div className="mt-8 text-white text-lg flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} />
              <span>{userName}</span>
            </div>
          ) : (
            <a href="./Login">
              <button className="mt-8 w-full border-2 bg-white text-black hover:bg-blue-600 hover:text-white hover:border-blue-500 cursor-pointer rounded-md p-2.5">
                Giriş Yap
              </button>
            </a>
          )}
        </div>
      )}

      <nav className="hidden shadow-gray-300 shadow-md  md:block w-full z-40 items-center">
        <ul className="flex flex-wrap justify-center gap-20 pt-3 font-medium">
          <li className="px-2 mb-2">
            <a className="hover:border-b-4 link text-base lg:text-xl  text-black border-indigo-500 :border-b-3" href="./Homepage">
              Anasayfa
            </a>
          </li>
          <li className="px-2 mb-2">
            <a className="hover:border-b-4 link text-base lg:text-xl text-black border-indigo-500 focus:border-b-3" href="/Manpage">
              Erkek Giyim
            </a>
          </li>
          <li className="px-2 mb-2">
            <a className="hover:border-b-4 link text-base lg:text-xl text-black border-indigo-500 focus:border-b-3" href="./Womanpage">
              Kadın Giyim
            </a>
          </li>
          <li className="px-2 mb-2">
            <a className="hover:border-b-4 link text-base lg:text-xl text-black border-indigo-500 focus:border-b-3" href="./Childpage">
              Çocuk Giyim
            </a>
          </li>
          <li className="px-2 mb-2">
            <a className="hover:border-b-4 link text-base lg:text-xl text-black border-indigo-500 focus:border-b-3" href="./Shoepage">
              Ayakkabılar
            </a>
          </li>
          <li className="px-2 mb-2">
            <a className="hover:border-b-4 link text-base lg:text-xl text-black border-indigo-500 focus:border-b-3" href="./Accessories">
              Aksesuarlar
            </a>
          </li>
        
        </ul>
      </nav>
    </div>
  );
}

export default HeaderNav;