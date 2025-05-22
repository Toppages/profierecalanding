
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    name: "ISO 9001",
    description: "Sistema de Gestión de Calidad certificado para asegurar los mejores estándares en nuestros servicios."
  },
  {
    name: "NFPA",
    description: "Cumplimiento con los estándares de la National Fire Protection Association para sistemas contra incendios."
  },
  {
    name: "EN 3",
    description: "Certificación europea para extintores portátiles, garantizando su eficacia y seguridad."
  },
  {
    name: "OHSAS 18001",
    description: "Sistema de Gestión de Seguridad y Salud Ocupacional para nuestras operaciones."
  }
];

export function Certifications() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background shadow-sm text-sm font-medium text-fire">
              <span>Certificaciones</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              Respaldados por certificaciones internacionales
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Todos nuestros servicios y productos cumplen con las normativas más exigentes a nivel nacional e internacional, garantizando los más altos estándares de calidad y seguridad.
            </p>
            
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-safety mt-1" />
                  <div>
                    <h4 className="font-bold">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <Card className="bg-white dark:bg-card glass-card shadow-lg">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <Award className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Empresa certificada</h3>
                <p className="text-muted-foreground">
                  Todos nuestros procesos están certificados bajo estándares internacionales
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-card glass-card shadow-lg">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/NFPA_logo.svg/800px-NFPA_logo.svg.png" 
                  alt="NFPA Certification" 
                  className="h-16 mb-4"
                />
                <h3 className="text-xl font-bold mb-2">NFPA Compliant</h3>
                <p className="text-muted-foreground">
                  Cumplimos con todas las normativas NFPA aplicables
                </p>
              </CardContent>
            </Card>
            
            <Card className="col-span-2 bg-fire/10 glass-card shadow-lg">
              <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ISO_9001_Logo.svg/1200px-ISO_9001_Logo.svg.png" 
                  alt="ISO Certification" 
                  className="h-24"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">ISO 9001 Certified</h3>
                  <p className="text-muted-foreground">
                    Nuestra empresa mantiene un riguroso sistema de gestión de calidad certificado bajo la norma ISO 9001, garantizando procesos consistentes y enfocados en la satisfacción del cliente.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
