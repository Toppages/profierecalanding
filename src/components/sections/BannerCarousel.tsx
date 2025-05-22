
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Info, } from "lucide-react";

const banners = [
  {
    id: 1,
    title: "Servicios Residenciales",
    description: "Protege tu hogar con sistemas de detección y respuesta ante incendios, instalados por expertos.",
    imageUrl: "https://res.cloudinary.com/di0btw2pi/image/upload/v1747230115/SERVICIO_RESIDENCIAL_WEB_cccvfr.png",
    ctaText: "Consultar ahora",
    ctaLink: "/servicios",
  },
  {
    id: 2,
    title: "Servicios Industriales",
    description: "Instalación, mantenimiento y supervisión de sistemas industriales contra incendios, cumpliendo con normativas.",
    imageUrl: "https://res.cloudinary.com/di0btw2pi/image/upload/v1747230114/SERVICIO_INDUSTRAL_WEB_wslazm.png",
    ctaText: "Agendar servicio",
    ctaLink: "/servicios",
  },
  {
    id: 3,
    title: "Servicios Comerciales",
    description: "Capacitación certificada para tu personal en prevención, evacuación y uso de equipos contra incendios.",
    imageUrl: "https://res.cloudinary.com/di0btw2pi/image/upload/v1747423225/SERVICIO_COMERCIAL_WEB_IA_DIOSMIO_YA_gzxyaj.png",
    ctaText: "Más información",
    ctaLink: "/servicios",
  }
];

export function BannerCarousel() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background shadow-sm text-sm font-medium text-fire mb-4">
            <Info className="h-4 w-4 mr-2" />
            <span>Información Importante</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Nuestros Servicios Especializados
          </h2>
        </div>
        
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {banners.map((banner) => (
                <CarouselItem key={banner.id}>
                  <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-xl">
                    <img 
                      src={banner.imageUrl} 
                      alt="Banner"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 flex flex-col justify-center p-8 md:p-12">
                       <div className="max-w-xl text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-display text-white">
                          {banner.title}
                        </h3>
                        <p className="text-white/90 mb-6 max-w-md text-shadow">
                          {banner.description}
                        </p>
                        <Button asChild size="lg" className="bg-fire hover:bg-fire-light text-white border-none w-fit">
                          <Link to={banner.ctaLink} className="flex items-center gap-2">
                            {banner.ctaText}
                            <ArrowRight className="h-5 w-5" />
                          </Link>
                        </Button>
                      </div> 
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
