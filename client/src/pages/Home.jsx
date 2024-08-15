import Footer from "../components/Footer";
import "../css/home.css";

const Home = () => {
  return (
    <div className="principal">
      <div className="container_home">
        <div className="Notificaciones item">Notificaciones</div>
        <div className="Perfil item">Perfil</div>
        <div className="Servicios item">Servicios</div>
        <div className="Eventos item">Eventos</div>
        <div className="Publicidad item">Publicidad</div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
