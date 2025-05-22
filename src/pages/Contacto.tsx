
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Phone, Mail, MapPin, Flame } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
const [selectedCity, setSelectedCity] = useState("Zulia");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const { name, email, phone, message } = formData;

  const composedMessage = `Hola mi nombre es ${name}\n${email} (${phone})\n\nquisiera comunicar que ${message}`;

  const whatsappNumbers: Record<string, string> = {
    Zulia: "584122359283",
    Caracas: "584122359283",
    Anzoategui: "584122359339"
  };

  const number = whatsappNumbers[selectedCity];

  if (number) {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(composedMessage)}`;
    window.open(url, "_blank");
  }

  setTimeout(() => {
    setIsSubmitting(false);
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  }, 1000);
};

  const cityContacts = {
    Zulia: {
      phone: "+58 412-2359283",
      email: "fabricaprofireca@gmail.com",
      address: "Avenida 6 entre calles C y D, diagonal a la C2, casa #C15",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.559664596235!2d-71.61429906032714!3d10.691246572862605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89997a04389231%3A0x327497681a0c38c4!2sEXTINTORES%20PROFIRECA!5e0!3m2!1ses!2sve&zoom=100"
    },
    Caracas: {
      phone: "+58 412-2359283",
      email: "Mail@gmail.com",
      address: "Calle este 12 entre esquina de rivas y miranda segunda casa, PLANTA NRO 124-A",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3923.036985885686!2d-66.91113362496202!3d10.497750589634602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI5JzUxLjkiTiA2NsKwNTQnMzAuOCJX!5e0!3m2!1ses!2sve!4v1737401092181!5m2!1ses!2sve"
    },
    Anzoategui: {
      phone: "+58 412-6425335",
      email: "Mail@gmail.com",
      address: "Lorem ipsum",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3928.62788937227!2d-65.04331132496812!3d10.047533090060321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDAyJzUxLjEiTiA2NcKwMDInMjYuNyJX!5e0!3m2!1ses!2sus!4v1738877137688!5m2!1ses!2sus"
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col pt-20">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://res.cloudinary.com/di0btw2pi/image/upload/v1747430209/FOTO_CONTACTO_cyhsuk.jpg"
                alt="Extintores PROFIRECA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container relative z-10 text-center px-4 md:px-6">
              <div className="flex flex-col items-center gap-4">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-white/80 text-sm">
                  <Flame className="h-4 w-4 mr-2 text-fire" />
                  <span>Contacto</span>
                </div>
                
                <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-display">
                  ¡Estamos aquí para ayudarte, contáctanos!
                </p>
              
              </div>
            </div>
          </section>
          {/* Contact Form Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Input
                          placeholder="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-14 rounded-xl"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Teléfono"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="h-14 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <Input
                        placeholder="Nombre completo"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-14 rounded-xl"
                      />
                    </div>

                    <div>
                      <Textarea
                        placeholder="Mensaje"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="min-h-32 rounded-xl"
                      />
                    </div>

                    <div>
                      <Button
                        type="submit"
                        className="bg-fire hover:bg-fire-dark text-white h-12 px-8 rounded-xl"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                      </Button>
                    </div>
                  </form>
                </div>

                <div className="bg-muted/30 rounded-xl p-8">
<Tabs value={selectedCity} onValueChange={setSelectedCity} className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="Zulia">Zulia</TabsTrigger>
                      <TabsTrigger value="Caracas">Caracas</TabsTrigger>
                      <TabsTrigger value="Anzoategui">Anzoategui</TabsTrigger>
                    </TabsList>

                    {Object.entries(cityContacts).map(([city, info]) => (
                      <TabsContent key={city} value={city} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                          <div className="bg-background p-4 rounded-xl">
                            <div className="flex items-center mb-2">
                              <Phone className="h-5 w-5 text-fire mr-2" />
                              <span className="font-bold">Teléfono</span>
                            </div>
                            <h3 className="text-lg font-medium">{info.phone}</h3>
                          </div>

                          <div className="bg-background p-4 rounded-xl">
                            <div className="flex items-center mb-2">
                              <Mail className="h-5 w-5 text-fire mr-2" />
                              <span className="font-bold">Email</span>
                            </div>
                            <h3 className="text-lg font-medium">{info.email}</h3>
                          </div>

                          <div className="bg-background p-4 rounded-xl">
                            <div className="flex items-center mb-2">
                              <MapPin className="h-5 w-5 text-fire mr-2" />
                              <span className="font-bold">Dirección</span>
                            </div>
                            <h3 className="text-lg font-medium">{info.address}</h3>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              </div>

              {/* Map */}
              <div className="mt-16 rounded-xl overflow-hidden">
                <Tabs defaultValue="Zulia" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="Zulia">Zulia</TabsTrigger>
                    <TabsTrigger value="Caracas">Caracas</TabsTrigger>
                    <TabsTrigger value="Anzoategui">Anzoategui</TabsTrigger>
                  </TabsList>

                  {Object.entries(cityContacts).map(([city, info]) => (
                    <TabsContent key={`map-${city}`} value={city}>
                      <iframe
                        src={info.mapUrl}
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        title={`Ubicación de Profireca en ${city.toUpperCase()}`}
                      ></iframe>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contacto;
