import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { googleProvider, facebookProvider, auth } from '../firebase';
import '../css/sociallogin.css'; 

const SocialLogin = () => {
    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            alert('Inicio de sesión con Google exitoso');
        } catch (error) {
            console.error('Error en el inicio de sesión con Google:', error);
        }
    };

    const handleFacebookLogin = async () => {
        try {
            await signInWithPopup(auth, facebookProvider);
            alert('Inicio de sesión con Facebook exitoso');
        } catch (error) {
            console.error('Error en el inicio de sesión con Facebook:', error);
        }
    };

    return (
        <div>
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
