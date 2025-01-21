import './App.css';
import Navbar from './Components/Navbar';
import Home from './Home';
import Footer from './Components/Footer/Index';
import Catalogo from './Pages/Productos';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Servicie from './Pages/Servicie/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ActionIcon } from '@mantine/core';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/profierecalanding" element={<Home />} />
              <Route path="/profierecalanding/Catalogo" element={<Catalogo />} />
              <Route path="/profierecalanding/Nosotros" element={<About />} />
              <Route path="/profierecalanding/Contacto" element={<Contact />} />
              <Route path="/profierecalanding/Servicio" element={<Servicie />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <a 
            href="https://wa.me/+584127341636?text=hola" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
          >
            <ActionIcon p={8} color="green" size="xl" radius="xl" variant="filled">
              <IconBrandWhatsapp size={34} />
            </ActionIcon>
          </a>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
