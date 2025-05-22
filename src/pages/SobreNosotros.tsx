import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, Heart, Target, Award, Compass, CheckCircle2, Users } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function SobreNosotros() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://res.cloudinary.com/di0btw2pi/image/upload/v1747230102/FONDO_LEMA_PROFIRECA_a4lu8h.png" 
              alt="Extintores PROFIRECA" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="container relative z-10 text-center px-4 md:px-6">
            <div className="flex flex-col items-center gap-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-white/80 text-sm">
                <Flame className="h-4 w-4 mr-2 text-fire" />
                <span>Nuestra Empresa</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white font-display leading-tight max-w-4xl mx-auto">
                PROFIRECA
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-display">
                FÁBRICA DE EXTINTORES PRO FIRE CA
              </p>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto italic">
                "Mantener seguro aquello que más valoras es nuestra prioridad"
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass-card h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-4 w-12 h-12 rounded-full bg-fire/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-fire" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Visión</h2>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                 Ser reconocidos como los principales fabricantes y comercializadores de extintores y equipos de seguridad industrial en Venezuela, destacándonos por nuestra innovación, calidad y compromiso con nuestros clientes, consolidándonos como un referente en seguridad.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-4 w-12 h-12 rounded-full bg-safety/10 flex items-center justify-center">
                    <Compass className="h-6 w-6 text-safety" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Misión</h2>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                  Diseñar, fabricar y comercializar soluciones de seguridad industrial de alta calidad, siendo un proveedor confiable y líder en el mercado venezolano, ofreciendo productos y servicios que superen las expectativas de nuestros clientes.

                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What identifies us */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 -z-10 opacity-30">
            <img 
              src="public/lovable-uploads/5fcdbc13-e2da-44f8-96bd-0c81b1abb09e.png" 
              alt="Fondo de extintores" 
              className="w-full h-full object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-background"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">¿Qué nos identifica?</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Fabricamos la seguridad de nuestros clientes y aliados 
                garantizando la calidad de nuestros productos y ofreciendo 
                una atención al cliente personalizada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-card/70 backdrop-blur-sm p-6 rounded-lg shadow-md">
                <img 
                  src="https://res.cloudinary.com/di0btw2pi/image/upload/v1747406907/PRODUCTOS_DE_CALIDAD_500X300_hgh8kv.png" 
                  alt="Extintores" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2 font-display">Productos de Calidad</h3>
                <p className="text-muted-foreground">
                  Todos nuestros productos cumplen con los más altos estándares de calidad y seguridad internacional.
                </p>
              </div>
              
              <div className="bg-card/70 backdrop-blur-sm p-6 rounded-lg shadow-md">
                <img 
                  src="https://res.cloudinary.com/di0btw2pi/image/upload/v1747406906/EQUIPO_PROFESIONAL_500X300_mhy6e9.png" 
                  alt="Equipo profesional" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2 font-display">Equipo Profesional</h3>
                <p className="text-muted-foreground">
                  Contamos con un equipo de profesionales certificados y en constante capacitación.
                </p>
              </div>
              
              <div className="bg-card/70 backdrop-blur-sm p-6 rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&auto=format&fit=crop&q=60" 
                  alt="Atención personalizada" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2 font-display">Atención Personalizada</h3>
                <p className="text-muted-foreground">
                  Ofrecemos soluciones adaptadas a las necesidades específicas de cada cliente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Nuestros Valores</h2>
              <p className="text-muted-foreground">
                Los valores que definen nuestra cultura empresarial y guían nuestras acciones día a día.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 w-12 h-12 rounded-full bg-fire/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-fire" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-display">RESPETO</h3>
                  <p className="text-muted-foreground flex-grow">
                    Aceptar las diferencias de cada individuo mejorando sus cualidades para 
                    lograr un gran trabajo en equipo.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 w-12 h-12 rounded-full bg-fire/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-fire" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-display">LIDERAZGO</h3>
                  <p className="text-muted-foreground flex-grow">
                    Influir en otros de la mejor manera posible logrando sus objetivos 
                    planificados conjuntamente.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 w-12 h-12 rounded-full bg-fire/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-fire" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-display">SERVICIO</h3>
                  <p className="text-muted-foreground flex-grow">
                    Buscar siempre la forma de conseguir la meta trazada, superando todas las 
                    situaciones que se presenten.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 w-12 h-12 rounded-full bg-fire/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-fire" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-display">PERSEVERANCIA</h3>
                  <p className="text-muted-foreground flex-grow">
                    Entregar siempre lo mejor de cada uno, con la firme intención de generar 
                    bienestar a los demás.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
              
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/di0btw2pi/image/upload/v1744140971/VARIADOS_500X300_2_wdoomq.png" 
                  alt="Extintores profesionales" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/di0btw2pi/image/upload/v1744140972/VARIADOS_500X300_tpuhrv.png" 
                  alt="Equipo de seguridad" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/di0btw2pi/image/upload/v1744140972/VARIADOS_500X300_5_iip5hx.png" 
                  alt="Mantenimiento de extintores" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/di0btw2pi/image/upload/v1744140980/asset_quienes_somos_2_e4jrtx.png" 
                  alt="Kit de control de derrames" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/di0btw2pi/image/upload/v1744141611/VARIADOS_500X300_3_jsdfh2.png" 
                  alt="Equipo técnico" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/di0btw2pi/image/upload/v1744141611/VARIADOS_500X300_4_ozvgwo.png" 
                  alt="Revisión de equipos" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* History/Trajectory */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Nuestra Trayectoria</h2>
              <p className="text-muted-foreground text-lg">
                Más de una década de experiencia en el sector de la seguridad contra incendios, 
                brindando soluciones innovadoras y de calidad.
              </p>
            </div>

            <div className="space-y-8 relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-muted"></div>
              
              <div className="relative flex flex-col md:flex-row items-center md:gap-8">
                <div className="order-1 md:w-1/2 md:text-right md:pr-8">
                  <div className="bg-card p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold mb-2 font-display">2023</h3>
                    <p className="text-muted-foreground">Fundación de PROFIRECA con el objetivo de brindar soluciones de seguridad contra incendios de calidad.</p>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-fire text-white shadow-lg md:order-1 order-2 my-4 md:my-0">
                  <Flame className="h-6 w-6" />
                </div>
                <div className="order-3 md:w-1/2"></div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center md:gap-8">
                <div className="order-3 md:w-1/2"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-fire text-white shadow-lg order-2 my-4 md:my-0">
                  <Award className="h-6 w-6" />
                </div>
                <div className="order-1 md:w-1/2 md:pl-8">
                  <div className="bg-card p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold mb-2 font-display">2024</h3>
                    <p className="text-muted-foreground">Expansión de nuestras operaciones a nivel nacional, consolidándonos como referentes en la industria.</p>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center md:gap-8">
                <div className="order-1 md:w-1/2 md:text-right md:pr-8">
                  <div className="bg-card p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold mb-2 font-display">2025</h3>
                    <p className="text-muted-foreground">Continuamos innovando y mejorando nuestros productos y servicios para garantizar la mayor seguridad a nuestros clientes.</p>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-fire text-white shadow-lg md:order-1 order-2 my-4 md:my-0">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div className="order-3 md:w-1/2"></div>
              </div>

         
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
