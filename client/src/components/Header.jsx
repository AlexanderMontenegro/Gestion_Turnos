import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/planes">Planes</Link>
        <Link to="/pagos">Pagos</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

export default Header;
