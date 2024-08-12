import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Servicios from './pages/Servicios';
import Planes from './pages/Planes';
import Pagos from './pages/Pagos';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
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
      <Footer />
    </Router>
  );
}

export default App;
