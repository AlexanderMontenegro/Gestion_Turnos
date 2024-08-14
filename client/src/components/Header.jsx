import { Link } from 'react-router-dom';
import "../css/header.css"

function Header() {
  return (
    <header>
      <nav>
        <Link to="inicio">Inico</Link>
        <Link to="/">Home</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/planes">Planes</Link>
        <Link to="/pagos">Pagos</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
    
  );
}

export default Header;
