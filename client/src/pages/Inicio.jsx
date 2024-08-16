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

  return (
    <div className="principal">
      <div className="container_inicio">
        <div className="formContainer">
          {isLogin ? <Login /> : <Register />}
          <button className="toggleButton" onClick={toggleForm}>
            {isLogin
              ? "¿No tienes una cuenta? Regístrate"
              : "¿Ya tienes una cuenta? Inicia sesión"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
