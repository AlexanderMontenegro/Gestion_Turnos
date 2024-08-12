import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/servicios">Servicios Médicos</Link>
        <Link to="/planes">Planes Médicos</Link>
        <Link to="/pagos">Pagos</Link>
        <Link to="/admin">Administrador</Link>
      </nav>
    </header>
  );
};

export default Header;
