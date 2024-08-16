import Footer from "../components/Footer";
import "../css/planes.css"

const Planes = () => {
  return (
    <div className="principal">
      <div className="container_planes">
        <div className="Planes-Medicos item">Medicos</div>
        <div className="Detalle item">Detalle</div>
        <div className="Beneficios item">Beneficios</div>
        <div className="Costos item">Costos</div>
        <div className="Plan-ACtual item">Plan-Actual</div>
      </div>
      <Footer />
    </div>
  );
};

export default Planes;
