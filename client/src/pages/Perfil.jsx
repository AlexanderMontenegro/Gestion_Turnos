import Footer from "../components/Footer";
const Perfil = () => {
  return (
    <div className="principal">
      <div className="container_perfil">
        <div className="Foto item">Foto</div>
        <div className="Datos item">Datos</div>
        <div className="Notificaciones item">Notificaciones</div>
        <div className="Historial item">Historial</div>
        <div className="Recetas item">Recetas</div>
        <div className="Turnos item">Turnos</div>
        <div className="Eventos item">Eventos</div>
        <div className="Pagos item">Pagos</div>
      </div>
      <Footer />
    </div>
  );
};

export default Perfil;
