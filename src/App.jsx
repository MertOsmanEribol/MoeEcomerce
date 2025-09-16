import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Manpage from "./Manpage";
import Womanpage from "./Womanpage";
import Childpage from "./Childpage";
import Shoepage from "./Shoepage";
import Accessories from "./Accessories";
import Login from "./Login";
import Register from "./Register";
import PaymentPage from "./PaymentPage"
import Profile from "./Profile";
import Questions from "./Questions";
import Cargo from "./Cargo";
import Shopping from "./Shopping";



function App() {
  const [cart, setCart] = useState([]);

  // Sayfa yüklenince cart'ı localStorage'dan oku
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // cart her değiştiğinde localStorage'a yaz
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);




  
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Homepage cart={cart} setCart={setCart} />} />
          <Route path="/Homepage" element={<Homepage cart={cart} setCart={setCart} />} />
          <Route path="/Manpage" element={<Manpage cart={cart} setCart={setCart} />} />
          <Route path="/Womanpage" element={<Womanpage cart={cart} setCart={setCart} />} />
          <Route path="/Childpage" element={<Childpage cart={cart} setCart={setCart} />} />
          <Route path="/Shoepage" element={<Shoepage cart={cart} setCart={setCart} />} />
          <Route path="/Accessories" element={<Accessories cart={cart} setCart={setCart} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Questions" element={<Questions />} />
          <Route path="/Cargo" element={<Cargo />} />
          <Route path="/Shopping" element={<Shopping />} />

          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
