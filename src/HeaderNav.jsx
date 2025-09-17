import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/moe2.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Cart from "./components/Cart";

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
      <header className="w-full shadow-lg bg-gradient-to-r from-gray-900 via-black to-gray-900 flex pb-4 pt-4 border-b border-gray-700 justify-between md:justify-around items-center relative px-6 md:px-8">
        <div className="flex items-center">
          <button
            className="text-white text-2xl mr-4 md:hidden hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} className="me-3 text-2xl" />
          </button>
          <a href="./Homepage" className="hover:scale-105 transition-transform duration-300">
            <img
              src={logo}
              className="h-12 md:h-16 object-contain drop-shadow-lg"
              alt="Logo"
            />
          </a>
        </div>

        <div className="hidden md:block">
          <div className="flex rounded-xl border-2 border-gray-600 overflow-hidden max-w-md shadow-lg bg-white hover:border-blue-400 transition-colors duration-300">
            <input
              type="text"
              placeholder="Aradığınız ürün..."
              className="w-full outline-none bg-white text-gray-700 text-sm px-6 py-3 placeholder-gray-400"
            />
            <button
              type="button"
              className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 px-4 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
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

        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-white text-xl mr-4 hover:text-blue-400 transition-colors duration-300"
            onClick={toggleSearch}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="">
              {userName ? (
                <a href="./Profile" className="group"> 
                <div className="flex flex-col items-center gap-2 text-white hover:text-blue-400 transition-all duration-300 group-hover:scale-105">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full">
                    <FontAwesomeIcon icon={faUser} className="text-white text-xl" />
                  </div>
                  <span className="text-sm md:text-base font-medium">{userName}</span>
                </div>
                </a>
               
              ) : (
                <a href="./Login">
                  <button className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black cursor-pointer rounded-lg px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Giriş Yap
                  </button>
                </a>
              )}
            </div>
          </div>
          <div className="relative cursor-pointer group">
            <div onClick={toggleCart} className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group-hover:scale-110">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-white text-lg md:text-xl"
                />
              </div>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                  {cart.length}
                </span>
              )}
            </div>
            
            {cartOpen && <Cart cart={cart} emptyCart={emptyCart} />}
          </div>
        </div>
      </header>

      {searchOpen && (
        <div className="md:hidden w-full bg-white p-4 absolute z-50 shadow-xl border-t-2 border-blue-400">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Aradığınız ürün..."
              className="w-full outline-none bg-gray-50 text-gray-700 border-2 border-gray-200 rounded-l-lg text-sm px-4 py-3 focus:border-blue-400 transition-colors duration-300"
            />
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-r-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="ml-3 text-gray-600 hover:text-red-500 transition-colors duration-300" onClick={toggleSearch}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 z-50 flex flex-col p-6 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-10">
            <img src={logo} className="h-12 object-contain" alt="Logo" />
            <button className="text-white text-3xl hover:text-red-400 transition-colors duration-300" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <ul className="flex flex-col space-y-4 text-white font-medium">
            <li>
              <a className="text-lg hover:text-blue-400 transition-all duration-300 flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-400" href="#">
                <span className="text-2xl">🏠</span>
                <span>Anasayfa</span>
              </a>
            </li>
            <li>
              <a className="text-lg hover:text-blue-400 transition-all duration-300 flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-400" href="./Manpage">
                <span className="text-2xl">👔</span>
                <span>Erkek Giyim</span>
              </a>
            </li>
            <li>
              <a className="text-lg hover:text-blue-400 transition-all duration-300 flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-400" href="./Womanpage">
                <span className="text-2xl">👗</span>
                <span>Kadın Giyim</span>
              </a>
            </li>
            <li>
              <a className="text-lg hover:text-blue-400 transition-all duration-300 flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-400" href="./Childpage">
                <span className="text-2xl">🧸</span>
                <span>Çocuk Giyim</span>
              </a>
            </li>
            <li>
              <a className="text-lg hover:text-blue-400 transition-all duration-300 flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-400" href="./Shoepage">
                <span className="text-2xl">👟</span>
                <span>Ayakkabılar</span>
              </a>
            </li>
            <li>
              <a className="text-lg hover:text-blue-400 transition-all duration-300 flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-400" href="./Accessories">
                <span className="text-2xl">💎</span>
                <span>Aksesuarlar</span>
              </a>
            </li>
          </ul>
          {userName ? (
            <div className="mt-10 text-white text-lg flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <span>{userName}</span>
            </div>
          ) : (
            <a href="./Login">
              <button className="mt-10 w-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black cursor-pointer rounded-lg p-3 font-medium transition-all duration-300 hover:scale-105">
                Giriş Yap
              </button>
            </a>
          )}
        </div>
      )}

      <nav className="hidden md:block w-full z-40 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex justify-center items-center gap-2 lg:gap-4 py-3">
            <li className="relative group">
              <a className="flex items-center px-6 py-3 text-gray-700 font-semibold text-sm lg:text-base uppercase tracking-wide hover:text-blue-600 transition-all duration-300 relative overflow-hidden rounded-lg hover:bg-blue-50" href="./Homepage">
                <span className="relative z-10">🏠 Anasayfa</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10"></div>
              </a>
            </li>
            <li className="h-8 w-px bg-gray-300"></li>
            <li className="relative group">
              <a className="flex items-center px-6 py-3 text-gray-700 font-semibold text-sm lg:text-base uppercase tracking-wide hover:text-blue-600 transition-all duration-300 relative overflow-hidden rounded-lg hover:bg-blue-50" href="/Manpage">
                <span className="relative z-10">👔 Erkek Giyim</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10"></div>
              </a>
            </li>
            <li className="h-8 w-px bg-gray-300"></li>
            <li className="relative group">
              <a className="flex items-center px-6 py-3 text-gray-700 font-semibold text-sm lg:text-base uppercase tracking-wide hover:text-blue-600 transition-all duration-300 relative overflow-hidden rounded-lg hover:bg-blue-50" href="./Womanpage">
                <span className="relative z-10">👗 Kadın Giyim</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10"></div>
              </a>
            </li>
            <li className="h-8 w-px bg-gray-300"></li>
            <li className="relative group">
              <a className="flex items-center px-6 py-3 text-gray-700 font-semibold text-sm lg:text-base uppercase tracking-wide hover:text-blue-600 transition-all duration-300 relative overflow-hidden rounded-lg hover:bg-blue-50" href="./Childpage">
                <span className="relative z-10">🧸 Çocuk Giyim</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10"></div>
              </a>
            </li>
            <li className="h-8 w-px bg-gray-300"></li>
            <li className="relative group">
              <a className="flex items-center px-6 py-3 text-gray-700 font-semibold text-sm lg:text-base uppercase tracking-wide hover:text-blue-600 transition-all duration-300 relative overflow-hidden rounded-lg hover:bg-blue-50" href="./Shoepage">
                <span className="relative z-10">👟 Ayakkabılar</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10"></div>
              </a>
            </li>
            <li className="h-8 w-px bg-gray-300"></li>
            <li className="relative group">
              <a className="flex items-center px-6 py-3 text-gray-700 font-semibold text-sm lg:text-base uppercase tracking-wide hover:text-blue-600 transition-all duration-300 relative overflow-hidden rounded-lg hover:bg-blue-50" href="./Accessories">
                <span className="relative z-10">💎 Aksesuarlar</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10"></div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HeaderNav;