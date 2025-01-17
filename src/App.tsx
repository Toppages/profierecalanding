import './App.css';
import Navbar from './Components/Navbar';
import Home from './Home';
import Footer from './Components/Footer/Index';
import Catalogo from './Pages/Productos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/profierecalanding" element={<Home />} />
        <Route path="/profierecalanding/Catalogo" element={<Catalogo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;