
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServiceModal } from "./ServiceModal";
import { ClipboardList, Shield, Flame, School, Wrench, Bell, Users, FileCheck } from "lucide-react";

const services = [
  {
    title: "Mantenimiento de Extintores",
    description: "Servicio profesional de recarga, mantenimiento y pruebas hidrostáticas para garantizar la funcionalidad de sus extintores según normativa vigente.",
    details: "Nuestro servicio incluye inspección visual, pesaje, verificación de presión, recarga de agente extintor, pruebas hidrostáticas según normativa, reemplazo de partes deterioradas y entrega de certificado de mantenimiento. Trabajamos con extintores de todas las marcas y tipos (PQS, CO2, agua, espuma, etc).",
    icon: Wrench,
    color: "text-fire"
  },
  {
    title: "Inspección de Seguridad",
    description: "Evaluaciones completas de sus instalaciones para identificar riesgos potenciales y asegurar el cumplimiento de todas las normativas de seguridad contra incendios.",
    details: "Realizamos inspecciones exhaustivas siguiendo protocolos internacionales. Identificamos riesgos potenciales, verificamos cumplimiento normativo, evaluamos sistemas existentes y entregamos informe detallado con recomendaciones de mejora. Nuestros técnicos están certificados por organismos nacionales e internacionales.",
    icon: ClipboardList,
    color: "text-amber-500"
  },
  {
    title: "Instalación de Sistemas",
    description: "Diseño e instalación de sistemas completos de protección contra incendios adaptados a sus necesidades específicas y al tipo de edificio o industria.",
    details: "Instalamos sistemas de detección de humo, calor y llamas; sistemas de rociadores automáticos; sistemas de extinción por gas, agua nebulizada o agentes químicos; sistemas de alarma y evacuación; señalización de emergencia y más. Todos nuestros sistemas cumplen con las normativas locales e internacionales más exigentes.",
    icon: Shield,
    color: "text-safety"
  },
  {
    title: "Capacitación y Entrenamiento",
    description: "Programas de formación para su personal en prevención, evacuación y manejo correcto de equipos contra incendios en situaciones de emergencia.",
    details: "Ofrecemos talleres prácticos de uso de extintores, simulacros de evacuación, formación de brigadas de emergencia, primeros auxilios básicos, y capacitación en protocolos de emergencia. Nuestros instructores son profesionales con amplia experiencia en situaciones reales. Emitimos certificados reconocidos por las autoridades pertinentes.",
    icon: School,
    color: "text-blue-500"
  },
  {
    title: "Consultoría en Normativas",
    description: "Asesoramiento especializado para garantizar el cumplimiento de las normativas nacionales e internacionales en materia de seguridad contra incendios.",
    details: "Nuestro equipo de consultores le ayudará a entender y cumplir con todas las normativas aplicables a su sector. Identificamos requisitos específicos, realizamos auditorías de cumplimiento, desarrollamos planes de adecuación y gestionamos la documentación necesaria para inspecciones oficiales o trámites con aseguradoras.",
    icon: Flame,
    color: "text-purple-500"
  },
  {
    title: "Sistemas de Alarma",
    description: "Instalación y mantenimiento de sistemas de detección temprana y alarmas contra incendios conectados a centrales de monitoreo 24/7.",
    details: "Instalamos sistemas de última generación para detección temprana de incendios: detectores de humo fotoeléctricos e iónicos, detectores de calor, barreras de detección para grandes espacios, pulsadores manuales, sirenas, paneles de control inteligentes y más. Ofrecemos servicios de monitoreo 24/7 con respuesta inmediata.",
    icon: Bell,
    color: "text-red-500"
  },
  {
    title: "Planes de Evacuación",
    description: "Desarrollo de planes de evacuación personalizados, señalización y simulacros para preparar a su organización ante emergencias.",
    details: "Diseñamos planes de evacuación completos adaptados a las características específicas de su edificio e industria. Incluye análisis de rutas de escape, puntos de reunión, asignación de responsabilidades, protocolos específicos para personas con movilidad reducida y más. Instalamos señalización fotoluminiscente y realizamos simulacros periódicos de evacuación.",
    icon: Users,
    color: "text-green-500"
  },
  {
    title: "Certificación y Documentación",
    description: "Gestión completa de la documentación técnica y certificados necesarios para cumplir con los requisitos legales y de aseguradoras.",
    details: "Nos encargamos de toda la documentación técnica requerida: certificados de instalación, informes de mantenimiento, registros de inspección, documentación para aseguradoras, permisos municipales, planes de autoprotección y más. Mantenemos un archivo digital de toda su documentación para facilitar futuras inspecciones.",
    icon: FileCheck,
    color: "text-cyan-500"
  }
];

export function ServicesList() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Nuestros Servicios Profesionales
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos una amplia gama de servicios especializados en protección contra incendios para empresas e industrias de todos los sectores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 hover:shadow-md cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              <CardContent className="p-6">
                <div className={`rounded-full w-12 h-12 flex items-center justify-center ${service.color} bg-background mb-4`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <Button 
                  variant="link" 
                  className={`mt-4 px-0 ${service.color}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service);
                  }}
                >
                  Solicitar información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </section>
  );
}
