import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";
import axios from "axios";

function ProductItem({ product, setCart }) {
  const [showModal, setShowModal] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const location = useLocation();

  const shadowMap = {
    "/man": "shadow-blue-200",
    "/woman": "shadow-pink-200",
    "/child": "shadow-yellow-200",
    "/shoe": "shadow-green-200",
    "/accessories": "shadow-purple-200",
  };

  const matchedPath = Object.keys(shadowMap).find((path) =>
    location.pathname.toLowerCase().includes(path)
  );

  const shadowClass = shadowMap[matchedPath] || "shadow-gray-400";

  const productName =
    Object.values(product).find((val, index) =>
      Object.keys(product)[index].toLowerCase().includes("productname")
    ) || "Ürün Adı Yok";

    const categoryName =
    Object.entries(product).find(([key]) =>
      key.toLowerCase().includes("categoryname")
    )?.[1] || "Kategori Adı Yok";
  const productPrice =
    Object.values(product).find((val, index) =>
      Object.keys(product)[index].toLowerCase().includes("productprice")
    ) || "0";

  const productText =
    Object.values(product).find((val, index) =>
      Object.keys(product)[index].toLowerCase().includes("producttext")
    ) || "Açıklama yok";

  const productImg =
    Object.values(product).find((val, index) =>
      Object.keys(product)[index].toLowerCase().includes("productimg")
    ) ||
    "https://via.placeholder.com/300x300.png?text=No+Image";

  useEffect(() => {
    if (showModal) {
      axios.get("https://formal-incline-472217-s5.ey.r.appspot.com/Sizes")
        .then(res => {
          const data = res.data;
          if (Array.isArray(data)) {
            setSizes(data);
          } else if (Array.isArray(data.Kategori)) {
            setSizes(data.Kategori);
          } else {
            console.error("Beden verisi beklenen formatta değil:", data);
            setSizes([]);
          }
        })
        .catch(err => {
          console.error("Beden bilgileri yüklenemedi:", err);
          setSizes([]);
        });

      axios.get("https://formal-incline-472217-s5.ey.r.appspot.com/Colors")
        .then(res => {
          const data = res.data;
          if (Array.isArray(data)) {
            setColors(data);
          } else if (Array.isArray(data.Kategori)) {
            setColors(data.Kategori);
          } else {
            console.error("Renk verisi beklenen formatta değil:", data);
            setColors([]);
          }
        })
        .catch(err => {
          console.error("Renk bilgileri yüklenemedi:", err);
          setColors([]);
        });
    }
  }, [showModal]);

  const addToCart = (product) => {
    const productWithOptions = {
      ...product,
      selectedSize,
      selectedColor
    };
    setCart((prevState) => [...prevState, productWithOptions]);
  };

  const openModal = (e) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSize("");
    setSelectedColor("");
  };

  return (
    <div className={`container mx-auto border-none p-4 m-2 rounded-lg shadow-2xl ${shadowClass}`}>
      <img
        className="w-full h-75 object-cover rounded-t-lg cursor-pointer"
        src={productImg}
        alt={productName}
        onClick={openModal}
      />
      <div>
        <h2 className="text-xl font-semibold mb-2 mt-2">{productName}</h2>
        <p className="text-gray-600 text-sm mb-1">Kategori: {categoryName}</p>
        <p className="text-gray-500 my-2">{productPrice} ₺</p>
        <p className="text-gray-600 text-sm mb-2">{productText}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 p-4 text-white rounded hover:bg-blue-600 w-full cursor-pointer"
        >
          Sepete Ekle
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl overflow-hidden">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-xl font-bold">{productName}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 md:flex">
              <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
                <img
                  src={productImg}
                  alt={productName}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-2">{productName}</h2>
                <p className="text-xl text-gray-800 font-bold mb-4">{productPrice} ₺</p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Ürün Açıklaması</h3>
                  <p className="text-gray-700">{productText}</p>
                </div>
                <div className="mb-4">
                  <label htmlFor="size-select" className="block font-semibold mb-2">
                    Beden Seçimi
                  </label>
                  <select
                    id="size-select"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Beden Seçiniz</option>
                    {sizes.map((size, index) => (
                      <option key={index} value={size.SizeName}>
                        {size.SizeName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block font-semibold mb-2">
                    Renk Seçimi
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color.ColorName)}
                        className={`w-8 h-8 rounded-full border ${
                          selectedColor === color.ColorName
                            ? "ring-2 ring-offset-2 ring--500"
                            : "border-gray-300"
                        }`}
                        title={color.ColorName}
                        style={{
                          backgroundColor: color.ColorName,
                          border:
                            color.ColorName.toLowerCase() === "Mavi" ||
                            color.ColorName.toLowerCase() === "blue"
                              ? "1px solid #ddd"
                              
                              : ""
                              
                        }}
                      ></button>
                    ))}
                  </div>
                  {selectedColor && (
                    <p className="text-sm mt-1 text-gray-600">
                      Seçilen renk: {selectedColor}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {Object.entries(product).map(([key, value]) => {
                    if (
                      !key.toLowerCase().includes("productname") &&
                      !key.toLowerCase().includes("productprice") &&
                      !key.toLowerCase().includes("producttext") &&
                      !key.toLowerCase().includes("productimg") &&
                      typeof value === "string"
                    ) {
                      return (
                        <div key={key} className="text-sm">
                          <span className="font-semibold">{key}: </span>
                          {value}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
                <button
                  onClick={() => {
                    addToCart(product);
                    closeModal();
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded"
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductItem;