import  react, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import SocialLogin from '../components/SocialLogin';
import '../css/inicio.css';
import Footer from '../components/Footer';

const Inicio = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
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
        <SocialLogin />
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
