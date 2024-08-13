import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Inicio;
