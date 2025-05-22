
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
export function Footer() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

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

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <div className="flex items-center">
             <div style={{ width: 200, marginLeft: 'auto', marginRight: 'auto' }}>
  <img
    style={{ marginTop: '-90px', borderRadius: '8px' }}
    src={
      theme === "light"
        ? "https://res.cloudinary.com/di0btw2pi/image/upload/v1744139201/PROFIRECA_l5u4ma.png"
        : "https://res.cloudinary.com/di0btw2pi/image/upload/v1744139199/PROFIRECA_Negro_q4yio4.png"
    }
    alt="Logo Profireca"
  />
</div>

            </div>
            <p className="text-primary-foreground/80 text-sm max-w-xs">
              Mantener seguro aquello que más valoras es nuestra prioridad </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-fire transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-primary-foreground/80 hover:text-fire transition-colors text-sm">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-primary-foreground/80 hover:text-fire transition-colors text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-primary-foreground/80 hover:text-fire transition-colors text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-primary-foreground/80 hover:text-fire transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios#mantenimiento" className="text-primary-foreground/80 hover:text-fire transition-colors text-sm">
                  Mantenimiento de Extintores
                </Link>
              </li>
              <li>
                <Link to="/servicios#instalacion" className="text-primary-foreground/80 hover:text-fire transition-colors text-sm">
                  Instalación de Sistemas
                </Link>
              </li>
              <li>
                <Link to="/servicios#capacitacion" className="text-primary-foreground/80 hover:text-fire transition-colors text-sm">
                  Capacitación y Entrenamiento
                </Link>
              </li>
              <li>
                <Link to="/servicios#inspeccion" className="text-primary-foreground/80 hover:text-fire transition-colors text-sm">
                  Inspección de Seguridad
                </Link>
              </li>
              <li>
                <Link to="/servicios#consultoria" className="text-primary-foreground/80 hover:text-fire transition-colors text-sm">
                  Consultoría
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-fire shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Avenida 6 entre calles C y D, diagonal a la C2, casa #C15
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-fire shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +58 412-2359283
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-fire shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  fabricaprofireca@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Profireca. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.facebook.com/profile.php?id=100090402380758" className="text-primary-foreground/60 hover:text-fire transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.instagram.com/extintoresprofireca?igsh=YWJsemxobG04M2Zp" className="text-primary-foreground/60 hover:text-fire transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}
