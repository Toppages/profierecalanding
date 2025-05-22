
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  FireExtinguisher, 
  ShieldAlert, 
  Droplets, 
  Factory, 
  Sprout, 
  Search, 
  Truck,
  Filter,
  ChevronDown,
  Star
} from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const categories = [
  { id: "todos", name: "Todos", icon: FireExtinguisher },
  { id: "extintores", name: "Extintores", icon: FireExtinguisher },
  { id: "deteccion", name: "Sistemas de Detección", icon: ShieldAlert },
  { id: "rociadores", name: "Sistemas de Rociadores", icon: Droplets },
  { id: "industrial", name: "Equipamiento Industrial", icon: Factory },
  { id: "ecologicos", name: "Productos Ecológicos", icon: Sprout },
  { id: "accesorios", name: "Accesorios y Repuestos", icon: Truck }
];

const products = [
  {
    id: 1,
    name: "Extintor Polvo Químico ABC 6kg",
    category: "extintores",
    image: "https://images.unsplash.com/photo-1630346006267-ac0f7e18c5ff?w=500&auto=format&fit=crop&q=80",
    description: "Extintor de polvo químico seco, eficaz para fuegos de clase A, B y C. Ideal para hogares, oficinas y comercios.",
    rating: 5,
    badge: "Más Vendido"
  },
  {
    id: 2,
    name: "Extintor de CO2 5kg",
    category: "extintores",
    image: "https://images.unsplash.com/photo-1591164493883-413bbf3c1aa6?w=500&auto=format&fit=crop&q=80",
    description: "Perfecto para equipos eléctricos y electrónicos. No deja residuos tras su uso.",
    rating: 4.5
  },
  {
    id: 3,
    name: "Sistema de Detección de Humo",
    category: "deteccion",
    image: "https://images.unsplash.com/photo-1617816816783-c79b7d952b3a?w=500&auto=format&fit=crop&q=80",
    description: "Detector fotoeléctrico de alta sensibilidad con alarma integrada de 85dB.",
    rating: 4.8,
    badge: "Nuevo"
  },
  {
    id: 4,
    name: "Extintor Portátil de Agua Pulverizada",
    category: "extintores",
    image: "https://images.unsplash.com/photo-1584258350869-19973ea9b1b8?w=500&auto=format&fit=crop&q=80",
    description: "Especial para fuegos clase A. Tecnología de pulverización avanzada.",
    rating: 4.2
  },
  {
    id: 5,
    name: "Panel de Control de Alarma",
    category: "deteccion",
    image: "https://images.unsplash.com/photo-1581092921461-7d65ca45394a?w=500&auto=format&fit=crop&q=80",
    description: "Sistema centralizado para monitoreo y control de alarmas contra incendios.",
    rating: 4.9
  },
  {
    id: 6,
    name: "Rociador Automático Pendent",
    category: "rociadores",
    image: "https://images.unsplash.com/photo-1622866306950-81d17097d458?w=500&auto=format&fit=crop&q=80",
    description: "Rociador automático con ampolla de 68°C, acabado en bronce.",
    rating: 4.7
  },
  {
    id: 7,
    name: "Extintor de Espuma AFFF",
    category: "extintores",
    image: "https://images.unsplash.com/photo-1601348786200-7a5fafba2a58?w=500&auto=format&fit=crop&q=80",
    description: "Especial para fuegos de clase A y B, ideal para industrias con riesgo de derrames de líquidos inflamables.",
    rating: 4.6
  },
  {
    id: 8,
    name: "Extintor de Agentes Limpios",
    category: "ecologicos",
    image: "https://images.unsplash.com/photo-1609904083858-2d3a925f7331?w=500&auto=format&fit=crop&q=80",
    description: "Extintor ecológico sin residuos, ideal para equipos electrónicos sensibles.",
    rating: 4.8,
    badge: "Ecológico"
  },
  {
    id: 9,
    name: "Gabinete para Extintor",
    category: "accesorios",
    image: "https://images.unsplash.com/photo-1526218161308-a387d55fc05a?w=500&auto=format&fit=crop&q=80",
    description: "Gabinete metálico con puerta de vidrio para extintores de hasta 6kg.",
    rating: 4.4
  },
  {
    id: 10,
    name: "Sistema de Supresión para Cocinas",
    category: "industrial",
    image: "https://images.unsplash.com/photo-1556911073-52527ac43761?w=500&auto=format&fit=crop&q=80",
    description: "Sistema automático especial para cocinas industriales y restaurantes.",
    rating: 4.9
  }
];

const Productos = () => {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "todos" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold font-display">
                Nuestros Productos
              </h1>
              <p className="text-muted-foreground text-lg">
                Descubra nuestra amplia gama de productos de seguridad contra incendios, 
                diseñados para proteger vidas y propiedades con la más alta calidad.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Buscar productos..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filtrar</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="gap-2">
                  <span>Ordenar</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Tabs 
              defaultValue="todos" 
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="space-y-8"
            >
              <TabsList className="flex flex-wrap h-auto bg-transparent gap-2 justify-center">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <category.icon className="h-4 w-4 mr-2" />
                    <span>{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value={activeCategory} className="mt-6 space-y-6">
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                      <div key={product.id} className="glass-card rounded-xl overflow-hidden flex flex-col h-full">
                        <div className="relative">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                          {product.badge && (
                            <div className="absolute top-3 right-3 bg-fire text-white text-xs font-medium px-2 py-1 rounded-md">
                              {product.badge}
                            </div>
                          )}
                        </div>
                        
                        <div className="p-5 flex flex-col flex-grow">
                          <h3 className="text-lg font-bold font-display mb-2">{product.name}</h3>
                          <p className="text-muted-foreground text-sm mb-4 flex-grow">{product.description}</p>
                          
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star 
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating) 
                                      ? "text-amber-500 fill-amber-500" 
                                      : i < product.rating 
                                      ? "text-amber-500 fill-amber-500 opacity-50" 
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                              <span className="text-xs text-muted-foreground ml-2">
                                ({product.rating})
                              </span>
                            </div>
                            
                            <Button variant="outline" size="sm">
                              Detalles
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-medium mb-2">No se encontraron productos</h3>
                    <p className="text-muted-foreground">
                      Intente con otra búsqueda o categoría diferente
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Productos;
