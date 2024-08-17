import { Link } from 'react-router-dom';
import "../css/header.css"

function Header() {
  return (
    <header>
      <nav>
        <Link to="inicio">INICIO</Link>
        <Link to="/">HOME</Link>
        <Link to="/perfil">PERFIL</Link>
        <Link to="/servicios">SERVICIOS</Link>
        <Link to="/planes">PLANES</Link>
        <Link to="/pagos">PAGOS</Link>
        <Link to="/admin">ADMIN</Link>
      </nav>
    </header>
    
  );
}

export default Header;
