
import { ArrowRight, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CallToAction() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-fire-dark to-fire opacity-90 z-0"></div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
                  Proteja su empresa con los mejores sistemas contra incendios
                </h2>
                
                <p className="text-white/80 text-lg max-w-xl">
                  No espere a que sea demasiado tarde. Nuestros expertos pueden evaluar sus necesidades y proporcionarle una solución personalizada que garantice la seguridad de sus instalaciones.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-fire hover:bg-white/90 gap-2">
                    <Link to="/contacto">
                      Solicitar Cotización
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                 
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="glass rounded-xl p-6 bg-white/10 backdrop-blur-sm border-white/20">
                  <h3 className="text-xl font-bold mb-4 font-display">Contacto Rápido</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-white/70" />
                      <div>
                        <div className="font-medium">Teléfono</div>
                        <a href="tel:+5215512345678" className="text-white/80 hover:text-white transition-colors">
                          +58 412-2359283
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-white/70" />
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="fabricaprofireca@gmail.com" className="text-white/80 hover:text-white transition-colors">
                        fabricaprofireca@gmail.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-white/70" />
                      <div>
                        <div className="font-medium">Horario de Atención</div>
                        <div className="text-white/80">
                        8:00am a 5:30 pm
                        </div>
                        
                      </div>
                    </li>
                  </ul>
                </div>
                
         
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
