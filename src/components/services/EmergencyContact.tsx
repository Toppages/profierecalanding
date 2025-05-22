
import { Button } from "@/components/ui/button";
import { PhoneCall, Clock, MapPin } from "lucide-react";

export function EmergencyContact() {
  return (
    <section className="py-20 bg-fire/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-fire/20 bg-background shadow-sm text-sm font-medium text-fire">
              <span>Servicio de Emergencia 24/7</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              Estamos disponibles cuando más nos necesita
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Nuestro equipo de técnicos especializados está preparado para responder a emergencias las 24 horas del día, los 7 días de la semana, garantizando una respuesta rápida y eficaz.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="shrink-0 bg-fire/10 p-3 rounded-full">
                  <PhoneCall className="h-6 w-6 text-fire" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Línea de Emergencia</h3>
                  <p className="text-xl font-bold text-fire">+1 800 555 0123</p>
                  <p className="text-sm text-muted-foreground">Respuesta inmediata</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="shrink-0 bg-fire/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-fire" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Horario de Atención</h3>
                  <p className="font-medium">24 horas, 7 días</p>
                  <p className="text-sm text-muted-foreground">Siempre disponibles</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button size="lg" className="bg-fire hover:bg-fire-dark text-white">
                Contactar Ahora
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2m3!1f0!2m2!1d-99.1269!3d19.4326!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjUiTiA5OcKwMDcnMzcuNCJX!5e0!3m2!1sen!2sus!4v1623256138569!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Ubicación de Profireca"
              ></iframe>
            </div>
            
            <div className="mt-6 p-6 border rounded-xl bg-card shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-fire mt-1" />
                <div>
                  <h3 className="font-bold">Oficina Central</h3>
                  <p className="text-muted-foreground">
                    Av. Paseo de la Reforma 222, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
