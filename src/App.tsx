import './App.css';
import Cart from './Pages/Cart/Index';
import Home from './Home';
import About from './Pages/About';
import Footer from './Components/Footer/Index';
import Contact from './Pages/Contact';
import Service from './Pages/Service/Index';
import Catalogo from './Pages/Productos';
import HideAppBar from './Components/Hidebar/hide';
import ScrollToTop from "./ScrollToTop";
import { ActionIcon } from '@mantine/core';
import { CartProvider } from './CartContext';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
 <div style={{ background: '#fafafa' }}>

    <CartProvider>
      <Router>

        <ScrollToTop />
        <HideAppBar />
        <Routes>
          <Route path="/profierecalanding" element={<Home />} />
          <Route path="/profierecalanding/Catalogo" element={<Catalogo />} />
          <Route path="/profierecalanding/Nosotros" element={<About />} />
          <Route path="/profierecalanding/Contacto" element={<Contact />} />
          <Route path="/profierecalanding/Servicio" element={<Service />} />
          <Route path="/profierecalanding/Cart" element={<Cart />} />
          <Route path="*" element={<Home />} />
        </Routes>
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
      </Router>
    </CartProvider>
 </div>
  );
}

export default App;