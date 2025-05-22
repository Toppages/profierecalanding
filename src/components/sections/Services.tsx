import { ClipboardList, Shield, Flame, School, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Mantenimiento de Extintores",
    description: "Servicio profesional de recarga, mantenimiento y pruebas hidrostáticas para garantizar la funcionalidad de sus extintores.",
    icon: Wrench,
    color: "text-fire"
  },
  {
    title: "Inspección de Seguridad",
    description: "Evaluaciones completas de sus instalaciones para identificar riesgos potenciales y asegurar el cumplimiento normativo.",
    icon: ClipboardList,
    color: "text-amber-500"
  },
  {
    title: "Instalación de Sistemas",
    description: "Diseño e instalación de sistemas completos de protección contra incendios adaptados a sus necesidades específicas.",
    icon: Shield,
    color: "text-safety"
  },
  {
    title: "Capacitación y Entrenamiento",
    description: "Programas de formación para su personal en prevención, evacuación y manejo de equipos contra incendios.",
    icon: School,
    color: "text-blue-500"
  },
  {
    title: "Consultoría en Normativas",
    description: "Asesoramiento especializado para garantizar el cumplimiento de las normativas nacionales e internacionales.",
    icon: Flame,
    color: "text-purple-500"
  }
];

export function Services() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setTheme(isDark ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const imageUrl =
    theme === "light"
      ? "https://res.cloudinary.com/di0btw2pi/image/upload/v1747406905/SENCAMER_RIJ_415_NEGRO_equpye.png"
      : "https://res.cloudinary.com/di0btw2pi/image/upload/v1747406905/SENCAMER_RIJ_415_BLANCO_o3gzzt.png";

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background shadow-sm text-sm font-medium text-fire">
              <span>Servicios Profesionales</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              Servicios completos de protección contra incendios
            </h2>

            <p className="text-muted-foreground text-lg">
              Nuestro equipo de expertos certificados ofrece soluciones integrales para garantizar la seguridad de su empresa o industria cumpliendo con todas las normativas vigentes.
            </p>

            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex gap-3">
                  <div className={`mt-1 ${service.color}`}>
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button asChild size="lg" className="bg-fire hover:bg-fire-dark text-white">
                <Link to="/servicios">
                  Ver todos los servicios
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative mx-auto rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img 
                src={imageUrl}
                alt="Imagen de servicios"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg z-10 glass-card">
              <div className="flex items-center gap-3">
                <div className="bg-safety rounded-full p-2 text-white">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">Servicio 24/7</div>
                  <div className="text-xs text-muted-foreground">Atención de emergencias</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  