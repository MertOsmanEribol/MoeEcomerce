import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/moe2.png"; // Logo path'inin doğru olduğundan emin olun

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formal-incline-472217-s5.ey.r.appspot.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Kullanıcı bilgilerini localStorage'a kaydet
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("userName", data.user.firstName);
        localStorage.setItem("lastName", data.user.lastName);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("phone", data.user.phone);
        alert("Giriş başarılı!");
        navigate("/"); // Ana sayfaya yönlendir
      } else {
        alert(data.message || "Kullanıcı adı veya şifre hatalı!");
      }
    } catch (error) {
      console.error("Giriş hatası:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <div> <img src={logo} className="md:h-50 mb-5 object-contain" alt="" /> </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Giriş Yap</h2>
        
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
        
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Giriş Yap
        </button>
        
        <div className="mt-4 text-center">
          <p>Hesabınız yok mu? <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/Register")}>Kayıt Ol</span></p>
        </div>
      </form>
    </div>
  );
}

export default Login;