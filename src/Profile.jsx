import React, { useState, useEffect } from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import Products from "./components/Products";

function Profile() {
  const [userName, setUserName] = useState(null);
  const [cart] = useState(() => {
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

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <HeaderNav cart={cart} />
        
        <div className="flex-grow bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Profil Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-2">Hoş Geldiniz, {userName}!</h1>
                <p className="text-blue-100 text-lg">Profil bilgilerinizi görüntüleyebilir ve düzenleyebilirsiniz</p>
              </div>
            </div>

            {/* Ana İçerik */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Sol Taraf - Profil Kartı */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <img
                        className="w-28 h-28 rounded-full object-cover border-4 border-white"
                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                        alt="Profil"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{userName} {lastName}</h2>
                  <p className="text-gray-500 mb-6">Premium Üye</p>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <span className="mr-2">✏️</span>
                    Profili Düzenle
                  </button>
                  
                  {/* İstatistikler */}
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{cart.length}</div>
                      <div className="text-sm text-gray-500">Sepetteki Ürün</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">12</div>
                      <div className="text-sm text-gray-500">Toplam Sipariş</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sağ Taraf - Bilgi Kartları */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Kişisel Bilgiler Kartı */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6">
                    <h3 className="text-2xl font-bold text-white flex items-center">
                      <span className="mr-3">👤</span>
                      Kişisel Bilgiler
                    </h3>
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Ad</label>
                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-400 group-hover:bg-blue-50 transition-colors duration-300">
                          <span className="text-lg font-medium text-gray-800">{userName || 'Belirtilmemiş'}</span>
                        </div>
                      </div>
                      
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Soyad</label>
                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-400 group-hover:bg-purple-50 transition-colors duration-300">
                          <span className="text-lg font-medium text-gray-800">{lastName || 'Belirtilmemiş'}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">E-posta Adresi</label>
                      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-400 group-hover:bg-green-50 transition-colors duration-300 flex items-center">
                        <span className="mr-3">📧</span>
                        <span className="text-lg font-medium text-gray-800">{email || 'Belirtilmemiş'}</span>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Telefon Numarası</label>
                      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-400 group-hover:bg-orange-50 transition-colors duration-300 flex items-center">
                        <span className="mr-3">📱</span>
                        <span className="text-lg font-medium text-gray-800">{phone || 'Belirtilmemiş'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hızlı İşlemler Kartı */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 px-8 py-6">
                    <h3 className="text-2xl font-bold text-white flex items-center">
                      <span className="mr-3">⚡</span>
                      Hızlı İşlemler
                    </h3>
                  </div>
                  
                  <div className="p-8">
                    <div className="grid md:grid-cols-3 gap-4">
                      <button className="flex flex-col items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors duration-300 group">
                        <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🛍️</span>
                        <span className="font-semibold text-gray-700">Siparişlerim</span>
                      </button>
                      
                      <button className="flex flex-col items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors duration-300 group">
                        <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">❤️</span>
                        <span className="font-semibold text-gray-700">Favorilerim</span>
                      </button>
                      
                      <button className="flex flex-col items-center p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors duration-300 group">
                        <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🎁</span>
                        <span className="font-semibold text-gray-700">Kuponlarım</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default Profile;