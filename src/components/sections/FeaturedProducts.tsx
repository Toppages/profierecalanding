import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  _id: string;
  title: string;
  category: string;
  subcategory: string;
  descrip: string;
  image: string;
  importan: boolean;
}

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://profirecaback-production.up.railway.app/products");
        const data = await res.json();
        const featured = data.filter((product: Product) => product.importan === true);
        setProducts(featured);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Cargando productos...</div>;
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background shadow-sm text-sm font-medium text-fire">
              <span>Productos Destacados</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Equipos de alta calidad para la protección contra incendios
            </h2>
            <p className="text-muted-foreground">
              Nuestros productos cumplen con los más altos estándares de calidad y están certificados por las principales normativas nacionales e internacionales.
            </p>
          </div>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem key={product._id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="glass-card h-full rounded-xl overflow-hidden flex flex-col">
                  <div className="relative">
                    <div
          className="relative aspect-square p-6 overflow-hidden bg-muted bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/di0btw2pi/image/upload/v1747406907/FONDO_PRODUCTOS_uebcvv.png')",
          }}
        >
                      <img
                        src={product.image}
                        alt={product.title}
            className="h-full w-full object-contain transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                    <h3 className="text-lg font-bold font-display mb-2">{product.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{product.descrip}</p>

                    <div className="flex items-center justify-end mt-auto">
                      <Button asChild variant="ghost" size="sm" className="text-fire">
                        <Link to="/catalogo">Detalles</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious className="relative inset-0 translate-y-0 left-0" />
            <CarouselNext className="relative inset-0 translate-y-0 right-0" />
          </div>
        </Carousel>

        <div className="flex justify-center mt-8">
          <Button asChild className="bg-fire hover:bg-fire-dark text-white">
            <Link to="/catalogo">Ver todos los productos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
