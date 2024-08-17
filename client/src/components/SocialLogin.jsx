// src/components/SocialLogin.jsx
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { googleProvider, facebookProvider, auth } from '../firebase';
import '../css/SocialLogin.css';

const SocialLogin = () => {
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log('Inicio de sesión con Google exitoso');
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      console.log('Inicio de sesión con Facebook exitoso');
    } catch (error) {
      console.error('Error al iniciar sesión con Facebook:', error.message);
    }
  };

  return (
    <div className="socialButtons">
      <button className="socialButton google" onClick={handleGoogleLogin}>
        Iniciar sesión con Google
      </button>
      <button className="socialButton facebook" onClick={handleFacebookLogin}>
        Iniciar sesión con Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
