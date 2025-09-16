import React from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";



  function Homepage( ) {

  const [cart] = useState(() => {
    // İlk başta localStorage'dan oku
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

 
  // Sepet değişince her zaman localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

    
      const [selectedShoe, setSelectedShoe] = useState(
        "src/assets/pics1/nike-b.png"
      );
      const [selectedShoe2, setSelectedShoe2] = useState(
        "src/assets/pics1/nike1.png"
      );
      const [currentSlide, setCurrentSlide] = useState(0);
    
      const sliderpics = [
        "src/assets/sliderpics/0208991.webp",
        "src/assets/sliderpics/gomlek.jpg",
        "https://www.hangifirsat.com/wp-content/uploads/2023/10/skechers-bahar-kampanyasina-ozel-yuzde25-indirim-ayakkabi-dunyasinda.jpg",
        "https://img-network.mncdn.com/bannerimages/slider_2025041411073880930.jpg",
      ];
    
      const shoes = [
        { src: "src/assets/pics1/nike-b.png", bg: "bg-blue-600" },
        { src: "src/assets/pics1/nike-g.png", bg: "bg-green-600" },
        { src: "src/assets/pics1/nike-s.png", bg: "bg-blue-300" },
        { src: "src/assets/pics1/nike.png", bg: "bg-red-600" },
      ];
      const shoes2 = [
        { src: "src/assets/pics1/nike1.png", bg: "bg-blue-600" },
        { src: "src/assets/pics1/nike2.png", bg: "bg-green-600" },
        { src: "src/assets/pics1/nike3.png", bg: "bg-blue-300" },
        { src: "src/assets/pics1/nike4.png", bg: "bg-red-600" },
      ];
    
      const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderpics.length);
      };
    
      const prevSlide = () => {
        setCurrentSlide(
          (prev) => (prev - 1 + sliderpics.length) % sliderpics.length
        );
      };
    
      useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
      }, []);



    return (

<div>
  
        <section className="h-fit bg-white ">
          {/* Navbar */}
          <HeaderNav cart={cart} />
          

          {/* Brand Logos */}
          <div className="flex flex-wrap gap-2 md:gap-5 mb-1 pt-5 justify-around px-2">
            <a
              href="#"
              className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center"
            >
              <img
                className="w-full h-full object-contain circle"
                src="https://s3-symbol-logo.tradingview.com/nike--600.png"
                alt="Nike"
              />
            </a>
            <a
              href="#"
              className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center"
            >
              <img
                className="w-full h-full object-contain circle"
                src="https://netrinoimages.s3.eu-west-2.amazonaws.com/2012/01/03/122125/49895/adidas_logo_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_384267.jpg"
                alt="Adidas"
              />
            </a>
            <a
              href="#"
              className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center"
            >
              <img
                className="w-full h-full object-contain circle"
                src="https://assets.turbologo.com/blog/en/2021/07/07050018/hm-color-logo.png"
                alt="H&M"
              />
            </a>
            <a
              href="#"
              className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center"
            >
              <img
                className="w-full h-full object-contain circle"
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3a/3a/70/3a3a7031-cf07-5088-9898-d7c016434549/AppIcon-0-0-1x_U007emarketing-0-8-0-sRGB-0-85-220.png/1200x630wa.png"
                alt="Brand"
              />
            </a>
            <a
              href="#"
              className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center hidden sm:flex"
            >
              <img
                className="w-full h-full object-contain circle"
                src="https://static.vecteezy.com/system/resources/previews/021/963/705/original/reebok-logo-illustration-free-vector.jpg"
                alt="Reebok"
              />
            </a>
            <a
              href="#"
              className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center hidden sm:flex"
            >
              <img
                className="w-full h-full object-contain circle"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjX_VbiyMIAIDAuZNauUhNbuMfhY-EVmiEQ&s"
                alt="Brand"
              />
            </a>
            <a
              href="#"
              className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center hidden md:flex"
            >
              <img
                className="w-full h-full object-contain circle"
                src="https://logowik.com/content/uploads/images/407_hummel_logo.jpg"
                alt="Hummel"
              />
            </a>
            <a
              href="#"
              className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center hidden md:flex"
            >
              <img
                className="w-full h-full object-contain circle"
                src="https://logowik.com/content/uploads/images/810_dockers.jpg"
                alt="Dockers"
              />
            </a>
          </div>

          {/* Main Content */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-1">
            {/* Slider */}
            <div className="flex relative min-h-[300px] sm:min-h-[400px] md:min-h-[600px] lg:min-h-[800px] slider my-4">
              <div className="absolute w-full h-full overflow-hidden rounded-xl shadow-2xl">
                <div
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {sliderpics.map((img, idx) => (
                    <img
                      key={idx}
                      className="w-full h-full object-cover flex-shrink-0"
                      src={img}
                      alt={`slide-${idx}`}
                    />
                  ))}
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 md:left-5 top-1/2 transform -translate-y-1/2 bg-black/60 text-white text-xl md:text-3xl p-1 md:p-2 rounded"
                >
                  <FontAwesomeIcon className="cursor-pointer" icon={faChevronLeft} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 md:right-5 top-1/2 transform -translate-y-1/2 bg-black/60 text-white text-xl md:text-3xl p-1 md:p-2 rounded"
                >
                  <FontAwesomeIcon className="cursor-pointer" icon={faChevronRight} />
                </button>
              </div>
            </div>

            <h1 className="text-center bg-black text-white border-2 p-2 text-base md:text-xl lg:text-2xl mx-2 md:mx-0">
              Nike Air Max 2025 sezon ürünleri!
            </h1>

            {/* Shoes Display Section */}
            <div className="flex flex-col  md:flex-row p-3 gap-4 md:gap-8 h-fit justify-baseline">
              {/* First Shoe */}
              <div className="flex p-3 items-start justify-center md:justify-start space-y-4 md:space-y-10 overflow-hidden h-auto">
                <div className="transform rotate-[-20deg]  transition-all duration-500 hover:rotate-0">
                  <img
                    src={selectedShoe}
                    className="h-[200px] pt-3 sm:h-[250px] md:h-[300px] lg:h-[400px] max-w-full object-contain shoe2"
                    alt="Nike Ayakkabı"
                  />
                </div>
                <div className="flex flex-col md:flex-col gap-2 md:gap-6 mt-4 md:mt-0">
                  {shoes.map((item, index) => (
                    <div
                      key={index}
                      className={`w-[60px] h-[60px] md:w-[100px] md:h-[100px] ${item.bg} flex items-center justify-center rounded cursor-pointer`}
                      onClick={() => setSelectedShoe(item.src)}
                    >
                      <img
                        src={item.src}
                        className="h-[50px] md:h-[80px] absolute transform rotate-[-20deg] transition-all duration-500 hover:rotate-0"
                        alt={`Ayakkabı ${index}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Shoe */}
              <div className="flex p-3 items-start justify-center md:justify-start space-y-4 md:space-y-10 overflow-hidden h-auto">
                <div className="transform rotate-[-20deg] transition-all duration-500 hover:rotate-0">
                  <img
                    src={selectedShoe2}
                    className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] max-w-full object-contain shoe pe-5"
                    alt="Nike Ayakkabı"
                  />
                </div>
                <div className="flex flex-col md:flex-col gap-2 md:gap-6 mt-4 md:mt-0">
                  {shoes2.map((item, index) => (
                    <div
                      key={index}
                      className={`w-[60px] h-[60px] md:w-[100px] md:h-[100px] ${item.bg} flex items-center justify-center rounded cursor-pointer`}
                      onClick={() => setSelectedShoe2(item.src)}
                    >
                      <img
                        src={item.src}
                        className="h-[90px] md:h-[150px] absolute transform rotate-[-20deg] transition-all duration-500 hover:rotate-0"
                        alt={`Ayakkabı ${index}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Cards Section */}
           
          </div>

          {/* Footer */}
          <Footer/>
        </section>
      </div>
    );
  }


export default Homepage;


// .indirim sayfası olusturalacka ve sqlde otomatik indirim kodu getirilecek functionu yazılıp indiim kodu giirliğinde indirim uygulanacak.arama inputu aktif hale getiricek içinde geçen isimlere göre filtremee yapıp ekrana getirecek .ödeme sistemi aktif hale getirileek.  ödeme sayfasına sepetteki ürünler getireilecek ve local storagede yazan ürün toplam fiyatı ile satın alınacak ürün fiyatları satın alınırken check edilecek. ve ödeme yapılan ürünler sql de siparişler listesine gönderilecek kayıt edilecek.sql de sipariş kargo takip sayfaları açılacak bu admin panelde olacak.



//30.04.2025 yapılanalar şunlar
//sepet açılır kapanır hale getirildi. carticon componenti kaldırıldı.headernav altına shaadow eklenildi.
//02.05.2025 yapılanlar şunlar
//Ürünlere tıkladınıgında modal açılıyor renk ve size seçenekleri mevcut oluyor buradan da sepete ekleme yapıalibliyor ancak renk ve size seççimleri
//sepete düşmüyor bu ayarlanacak ayakkabı ve akssusardan kaldırılacak size 
//03.05.2025 Acordion yapıldı ve sorular bölümü eklende footer sayfaları düzenlendi. Sepete ürün sayısı eklendi.
//06.05.2025 Kategoriler tüm syafalara eklendi. Sidebar sistemine başlandı 





