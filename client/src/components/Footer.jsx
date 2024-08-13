import React from "react";

import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <a href="/homePage ">
          <img
            className="logo_img"
            src="../../public/img/Logo.png"
          />
        </a>
      </div>
      <div className="nosotros">
        <h4>Contactanos</h4>
        <ul>
          <li>
            <a href="/contacto" target="_blank">
              Nosotros
            </a>
          </li>
          <li>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Nuestro proyecto
            </a>
          </li>
          <li>
            <a href="/privacidad" target="_blank">
              Política de Privacidad
            </a>
          </li>
        </ul>
      </div>
      <div className="redes">
        <h4>Redes Sociales</h4>
        <ul className="social-media">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icono_redes"
                src="../../public/iconos/facebook.png"
                alt=""
              />
            </a>
          </li>
          
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icono_redes"
                src="../../public/iconos/instagram.png"
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+54"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icono_redes"
                src="../../public/iconos/whatsapp.png"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
      <li>
            <a
              href="https://portafolio-p9aq.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icono_AGM"
                src="../../public/iconos/AGMDesarrollO.png"
                alt=""
              />
            </a>
          </li>
    </footer>
  );
};
export default Footer;
