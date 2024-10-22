import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Servicios from './pages/Servicios';
import Planes from './pages/Planes';
import Pagos from './pages/Pagos';
import Admin from './pages/Admin';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Inicio from './pages/Inicio.jsx';
import './css/index.css'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/pagos" element={<Pagos />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    
    </Router>
  );
}

export default App;
