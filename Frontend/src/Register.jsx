import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/moe2.png";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Şifreler uyuşmuyor!");
      return;
    }

    const userToSave = {
      username: formData.username,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
    };

    try {
      const response = await fetch('https://formal-incline-472217-s5.ey.r.appspot.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userToSave),
      });
      
      const data = await response.json();
      
      if (data.success) {
        alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
        navigate("/Login");
      } else {
        alert(data.message || "Kayıt işlemi başarısız!");
      }
    } catch (error) {
      console.error("Kayıt hatası:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <div> <img src={logo} className=" md:h-50 mb-5 object-contain" alt="" /> </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Kayıt Ol</h2>
        
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        
        <input
          type="password"
          name="confirmPassword"
          placeholder="Şifre Tekrar"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        
        <input
          type="text"
          name="firstName"
          placeholder="İsim"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        
        <input
          type="text"
          name="lastName"
          placeholder="Soyisim"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        
        <input
          type="text"
          name="phone"
          placeholder="Telefon Numarası"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Kayıt Ol
        </button>
      </form>
    </div>
  );
}

export default Register;