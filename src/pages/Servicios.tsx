
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesList } from "@/components/services/ServicesList";
import { ServicesProcess } from "@/components/services/ServicesProcess";
const Servicios = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <ServicesHero />
        <ServicesList />
        <ServicesProcess />
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;
