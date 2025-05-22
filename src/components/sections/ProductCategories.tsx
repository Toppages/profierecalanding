
import { FireExtinguisher, ShieldAlert, Droplets, Factory, Sprout, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Extintores",
    description: "Variedad de modelos para diferentes tipos de fuego",
    icon: FireExtinguisher,
    color: "bg-fire",
    link: "/catalogo#extintores"
  },
  {
    title: "Sistemas de Detección",
    description: "Detección temprana y alertas inmediatas",
    icon: ShieldAlert,
    color: "bg-safety",
    link: "/catalogo#deteccion"
  },
  {
    title: "Sistemas de Rociadores",
    description: "Protección automática para espacios amplios",
    icon: Droplets,
    color: "bg-blue-500",
    link: "/catalogo#rociadores"
  },
  {
    title: "Equipamiento Industrial",
    description: "Soluciones especializadas para la industria",
    icon: Factory,
    color: "bg-gray-700",
    link: "/catalogo#industrial"
  },
  {
    title: "Productos Ecológicos",
    description: "Opciones amigables con el medio ambiente",
    icon: Sprout,
    color: "bg-green-600",
    link: "/catalogo#ecologicos"
  },
  {
    title: "Accesorios y Repuestos",
    description: "Complementos para mantener su sistema operativo",
    icon: Truck,
    color: "bg-amber-600",
    link: "/catalogo#accesorios"
  }
];

export function ProductCategories() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Nuestras Categorías de Productos
          </h2>
          <p className="text-muted-foreground">
            Ofrecemos soluciones completas para la prevención y control de incendios, adaptadas a las necesidades específicas de cada cliente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 flex flex-col h-full group"
            >
              <div className={`${category.color} text-white rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-display">{category.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">{category.description}</p>
              <Button asChild variant="ghost" className="justify-start p-0 hover:bg-transparent text-fire">
                <Link to={category.link} className="flex items-center gap-2">
                  <span>Ver productos</span>
                  <svg 
                    width="15" 
                    height="15" 
                    viewBox="0 0 15 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path 
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" 
                      fill="currentColor" 
                      fillRule="evenodd" 
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
