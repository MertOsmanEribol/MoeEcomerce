
import React, { useState, useEffect } from "react";
const PaymentPage = () => {

  const [cart] = useState(() => {
    // İlk başta localStorage'dan oku
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });



  // Sepet değişince her zaman localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);




  const [card, setCard] = useState("front");
  const [cardholder, setCardholder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiredMonth, setExpiredMonth] = useState("");
  const [expiredYear, setExpiredYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const isValid =
    cardholder.length >= 5 &&
    cardNumber.length >= 19 &&
    expiredMonth &&
    expiredYear &&
    securityCode.length === 3;

  const handleSubmit = () => {
    alert(`Ödeme Başarılı ${cardholder}.`);
  };

  return (
    <div className="h-screen mt-20 credit overflow-hidden ">
      <div className="credit-card sm:w-auto  shadow-black mx-auto rounded-xl bg-gray-200">
        <header className="flex flex-col justify-center items-center">
          {card === "front" ? (
            <div className="relative">
              <img
                className="w-full h-auto"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
                alt="front credit card"
              />
              <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
                <p className="number mb-5 sm:text-xl">
                  {cardNumber || "0000 0000 0000 0000"}
                </p>
                <div className="flex flex-row justify-between">
                  <p>{cardholder || "Kart Sahibi Adı Soyadı"}</p>
                  <div>
                    {expiredMonth && <span>{expiredMonth}/</span>}
                    <span>{expiredYear}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <img
                className="w-full h-auto"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
                alt="back credit card"
              />
              <div className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8 sm:bottom-24 right-0 sm:px-12">
                <div className="border border-white w-16 h-9 flex justify-center items-center">
                  <p>{securityCode || "code"}</p>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Kart Ödemesi
          </h1>

          <div className="my-3">
            <input
              type="text"
              className="block w-full px-5 py-2 border rounded-lg"
              placeholder="Kart Sahibi Ad Soyad"
              maxLength={40}
              value={cardholder}
              onChange={(e) => setCardholder(e.target.value)}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="block w-full px-5 py-2 border rounded-lg"
              placeholder="Kart Numarası"
              maxLength={19}
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            />
          </div>

          <div className="my-3">
            <label className="text-gray-700">Expired</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <select
                className="block w-full px-3 py-2 border rounded-lg"
                value={expiredMonth}
                onChange={(e) => setExpiredMonth(e.target.value)}
              >
                <option value="">MM</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i} value={String(i + 1).padStart(2, "0")}>
                    {String(i + 1).padStart(2, "0")}
                  </option>
                ))}
              </select>
              <select
                className="block w-full px-3 py-2 border rounded-lg"
                value={expiredYear}
                onChange={(e) => setExpiredYear(e.target.value)}
              >
                <option value="">YY</option>
                {[2025, 2026, 2027, 2028, 2029, 2030].map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="block col-span-2 px-5 py-2 border rounded-lg"
                placeholder="Security code"
                maxLength={3}
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
                onFocus={() => setCard("back")}
                onBlur={() => setCard("front")}
              />
            </div>
          </div>
        </main>

        <footer className="mt-6 p-4">
          <button
            className="submit-button px-4 py-3 rounded-full cursor-pointer bg-blue-300 text-blue-900 w-full text-xl font-semibold"
            disabled={!isValid}
            onClick={handleSubmit}
          >
            Ödeme Yap
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PaymentPage;
