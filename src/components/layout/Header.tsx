
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalItems, toggleCart } = useCart();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Detect theme changes to update logo
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" && 
          mutation.attributeName === "class"
        ) {
          const isDark = document.documentElement.classList.contains("dark");
          setTheme(isDark ? "dark" : "light");
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);
  
  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Catálogo", path: "/catalogo" },
    { name: "Servicios", path: "/servicios" },
    { name: "Nosotros", path: "/sobre-nosotros" },
    { name: "Contacto", path: "/contacto" },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "glass py-2 shadow-md" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center"
            aria-label="Inicio"
          >
            <div style={{ width: 70, marginLeft: 'auto', marginRight: 'auto' }}>
              <img
                src={theme === "light" 
                  ? "https://res.cloudinary.com/di0btw2pi/image/upload/v1744139199/PROFIRECA_Negro_q4yio4.png" 
                  : "https://res.cloudinary.com/di0btw2pi/image/upload/v1744139201/PROFIRECA_l5u4ma.png"
                }
                alt="Logo PROFIRECA"
                style={{ borderRadius: '8px', width: '100%', display: 'block' }}
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-fire ${
                  isActive(link.path) 
                    ? "text-fire" 
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              onClick={toggleCart}
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Cotización ({totalItems})</span>
            </Button>
            <ThemeToggle />
          
          </div>
          
          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-4">
            <Button 
              onClick={toggleCart}
              variant="outline" 
              size="icon" 
              className="rounded-full relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-fire text-white text-xs">
                  {totalItems}
                </span>
              )}
            </Button>
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Menú"
              className="rounded-full"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg animate-in">
          <nav className="container mx-auto py-6 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors px-4 py-2 rounded-md ${
                  isActive(link.path) 
                    ? "bg-primary/10 text-fire" 
                    : "hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          
          </nav>
        </div>
      )}
    </header>
  );
}
