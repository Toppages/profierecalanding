
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Profireca ha sido nuestro proveedor de confianza durante más de 5 años. Su servicio es impecable y sus productos de la más alta calidad.",
    author: "María Rodríguez",
    position: "Directora de Seguridad",
    company: "Industrias Metalúrgicas S.A."
  },
  {
    id: 2,
    text: "La capacitación que recibió nuestro personal fue excepcional. Ahora todos saben exactamente cómo actuar en caso de emergencia.",
    author: "Carlos López",
    position: "Gerente de Planta",
    company: "Fábrica Textil Nacional"
  },
  {
    id: 3,
    text: "El mantenimiento preventivo que realizan ha evitado problemas mayores en nuestras instalaciones. Definitivamente, una inversión que vale la pena.",
    author: "Ana Martínez",
    position: "Jefa de Operaciones",
    company: "Centro Comercial Plaza Mayor"
  },
  {
    id: 4,
    text: "La instalación de los sistemas contra incendios fue rápida y profesional. El equipo técnico resolvió todas nuestras dudas y nos explicó el funcionamiento detalladamente.",
    author: "Roberto Sánchez",
    position: "Director General",
    company: "Hotel Panorama"
  }
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background shadow-sm text-sm font-medium text-fire">
            <span>Testimonios</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Lo que nuestros clientes dicen
          </h2>
          <p className="text-muted-foreground">
            La confianza de nuestros clientes es nuestro mejor aval. Conoce las experiencias de quienes ya trabajan con nosotros.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-6 top-0 text-fire/20 dark:text-fire/10">
            <Quote className="h-20 w-20" />
          </div>
          
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 absolute inset-0 ${
                  index === active 
                    ? "opacity-100 translate-x-0 z-10" 
                    : "opacity-0 translate-x-8 -z-10"
                }`}
              >
                <blockquote className="glass-card rounded-xl p-8 md:p-10 shadow-lg">
                  <p className="text-xl md:text-2xl mb-6 font-medium italic text-balance">
                    "{testimonial.text}"
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-fire to-fire-dark text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
          
          <div className="h-64 md:h-56"></div> {/* Spacer for absolute positioning */}
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === active 
                    ? "bg-fire scale-125" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
