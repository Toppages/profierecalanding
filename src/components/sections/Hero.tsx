
import { ArrowRight, Shield, Zap, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40 dark:opacity-20">
        <div className="absolute top-1/4 right-1/6 w-64 h-64 rounded-full bg-fire/20 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/6 w-48 h-48 rounded-full bg-safety/20 filter blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background shadow-sm text-sm font-medium text-fire">
                <Flame className="h-4 w-4 mr-2 text-fire" />
                <span>Empresa Líder en Seguridad Contra Incendios</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight lg:leading-tight font-display text-balance">
                <span className="text-gradient">Soluciones Profesionales</span> para la Seguridad Contra Incendios
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
                Protegemos vidas y propiedades con extintores y sistemas de seguridad de alta calidad, respaldados por expertos certificados.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-fire hover:bg-fire-dark text-white gap-2">
                <Link to="/catalogo">
                  Explorar Productos
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/contacto">
                  Solicitar Asesoría
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
             
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-fire" />
                <span className="text-sm font-medium">Respuesta 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-fire" />
                <span className="text-sm font-medium">Expertos Certificados</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto animate-float">
              <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-tr from-fire/20 to-safety/20 backdrop-blur-sm -rotate-6 transform-gpu"></div>
              <img 
                src="https://res.cloudinary.com/di0btw2pi/image/upload/v1747423218/IMAGEN_PRINCIPAL_PAGINA_sxxc6m.jpg" 
                alt="Extintores profesionales para la industria" 
                className="relative mt-5 rounded-2xl object-cover rotate-3 transform-gpu w-full h-full"
              />
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
