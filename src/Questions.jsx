import React, { useState, useEffect } from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";

function Questions() {
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
        <div className=" mt-10 container  mx-auto  flex-grow">
          <div className="mx-auto  mt-15 max-w-screen ">
            <div className="divide-y divide-gray-100 ">
              <details className="group" open>
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                 Bu sitenin amacı nedir?
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 group-open:hidden"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="hidden h-5 w-5 group-open:block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="pb-4 text-secondary-500">
                  Bu site Mert Osman Eribol tarafından React Node.js Express.js MsSql Javascript ve Tailwind teknolojilerini kullanarak oluşturulmuş örnek bir projedir.
                </div>
              </details>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                Ürün bilgileri ve diğer datalar nereden geliyor?
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 group-open:hidden"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="hidden h-5 w-5 group-open:block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="pb-4 text-secondary-500">
                  Ürün bilgileri ve tüm datalar kendi oluşturduğum sql kütüphaneme bağlı node.js servisimden geliyor şimdilik.
                </div>
              </details>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                  Ödeme sistemi, Giriş ve Kayıt ol sistemleri çalışıyor mu?
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 group-open:hidden"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="hidden h-5 w-5 group-open:block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="pb-4 text-secondary-500">
                 Evet Ödeme sistemi demo olarak kullanılabiliyor ve ödeme simülasyonu yapılabiliyor. Giriş ve Kayıt ol sistemleri de çalışıyor.
                </div>
              </details>
              <details className="group" open>
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                  Bu siteyi oluştururken yapay zekadan yararlanıldı mı?
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 group-open:hidden"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="hidden h-5 w-5 group-open:block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="pb-4 text-secondary-500">
                  Evet yararlanıldı Claude ve Chatgpt bir sanal asistan gibi kullanıldı.
                </div>
              </details>
              <details className="group" open>
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                  Eksik olan bölümler filtreleme ve gelişmiş arama bölümleri neden yok?
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="block h-5 w-5 group-open:hidden"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="hidden h-5 w-5 group-open:block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="pb-4 text-secondary-500">
                  Projeyi tasarlarken bu iki bölümü hesaba katmadığım için koymadım.İlerleyen sürümlerde bunlar gelecek.
                </div>
              </details>
            </div>
          </div>
          {/* acordion yapıalcak buraya unutma! */}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Questions;
