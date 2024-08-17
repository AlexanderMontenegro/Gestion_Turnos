import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import "../css/inicio.css";
import Footer from "../components/Footer";

const Inicio = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSocialLogin = (platform) => {
    console.log(`Iniciar sesión con ${platform}`);
    // Aquí puedes agregar la lógica de autenticación para cada red social
  };

  return (
    <div className="principal">
      <div className="container_inicio">
        {isLogin ? <Login /> : <Register />}
        <button className="toggleButton" onClick={toggleForm}>
          {isLogin
            ? "¿No tienes una cuenta? Regístrate"
            : "¿Ya tienes una cuenta? Inicia sesión"}
        </button>

        {/* Botones de redes sociales */}
        <div className="socialButtons">
          <button 
            className="socialButton facebook" 
            onClick={() => handleSocialLogin('Facebook')}
          >
            Iniciar sesión con Facebook
          </button>
          <button 
            className="socialButton google" 
            onClick={() => handleSocialLogin('Google')}
          >
            Iniciar sesión con Google
          </button>
        
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
