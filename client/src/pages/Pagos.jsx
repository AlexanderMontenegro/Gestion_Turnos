import Footer from "../components/Footer";
import "../css/pagos.css";

const Pagos = () => {
  return (
    <div className="principal">
      <div className="container_pagos">
        <div className="Plan-actual item">Plan-actual</div>
        <div className="Mercado-Pago item">Mercado-Pago</div>
        <div className="Opciones-de-Pago item">Opciones-de-Pago</div>
        <div className="Costo-Final item">Costo-Final</div>
        <div className="Detalle item">Detalle</div>
      </div>
      <Footer />
    </div>
  );
};

export default Pagos;
