
import { Button } from "@/components/ui/button";
import { Shield, Award, Clock } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-b from-background to-background/80 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background shadow-sm text-sm font-medium text-fire">
              <span>Servicios Profesionales de Seguridad</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight">
              Protección contra incendios <span className="text-fire">especializada</span>
            </h1>
            
            <p className="text-muted-foreground text-lg">
              En Profireca nos dedicamos a ofrecer soluciones completas y personalizadas para la prevención, detección y control de incendios, garantizando la seguridad de tu empresa, industria o entorno.
            </p>
            
          
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-fire hover:bg-fire-dark text-white">
                Solicitar presupuesto
              </Button>
              <Button size="lg" variant="outline">
                Contactar con un experto
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/di0btw2pi/image/upload/v1744140980/asset_quienes_somos_rogbin.png" 
                alt="Profesional de Profireca inspeccionando sistemas contra incendios" 
                className="w-full object-cover h-[400px]"
              />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
