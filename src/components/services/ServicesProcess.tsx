
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Evaluación inicial",
    description: "Realizamos un análisis completo de sus instalaciones para identificar necesidades específicas y riesgos potenciales."
  },
  {
    number: "02",
    title: "Propuesta personalizada",
    description: "Desarrollamos un plan a medida que incluye los servicios y equipos necesarios para garantizar la seguridad contra incendios."
  },
  {
    number: "03",
    title: "Implementación",
    description: "Nuestro equipo de técnicos certificados lleva a cabo la instalación y configuración de todos los sistemas necesarios."
  },
  {
    number: "04",
    title: "Capacitación",
    description: "Entrenamos a su personal para el uso correcto de los equipos y procedimientos de seguridad en caso de emergencia."
  },
  {
    number: "05",
    title: "Mantenimiento continuo",
    description: "Establecemos un programa de revisiones periódicas para asegurar el funcionamiento óptimo de todos los sistemas."
  }
];

export function ServicesProcess() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-2/5 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background shadow-sm text-sm font-medium text-fire">
              <span>Nuestro Proceso</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              Cómo trabajamos para garantizar su seguridad
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Seguimos un proceso estructurado y personalizado para cada cliente, asegurándonos de cubrir todas sus necesidades específicas de protección contra incendios.
            </p>
            
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mt-6">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80" 
                alt="Equipo de Profireca trabajando" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 p-6 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300"
                >
                  <div className="shrink-0">
                    <span className="text-4xl font-bold text-fire/80 font-display">
                      {step.number}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 mt-20 hidden md:block">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
