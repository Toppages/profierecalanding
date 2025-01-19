import './App.css';
import Navbar from './Components/Navbar';
import Home from './Home';
import Footer from './Components/Footer/Index';
import Catalogo from './Pages/Productos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/profierecalanding" element={<Home />} />
            <Route path="/profierecalanding/Catalogo" element={<Catalogo />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
