
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { Services } from "@/components/sections/Services";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { CallToAction } from "@/components/sections/CallToAction";
import { BannerCarousel } from "@/components/sections/BannerCarousel";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductCategories />
        <BannerCarousel />
        <Services />
        <FeaturedProducts />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
