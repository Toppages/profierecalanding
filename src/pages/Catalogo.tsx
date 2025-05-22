
import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Product,
  fetchProducts,
  getCategories,
  getSubcategories
} from "@/data/products";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Minus, Plus, Search, ShoppingCart, SlidersHorizontal, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Catalogo = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [subcategories, setSubcategories] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const PRODUCTS_PER_PAGE = 12;
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const { addToCart } = useCart();
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setAllProducts(products);
      setCategories(getCategories(products));
      setSubcategories(getSubcategories(products));
      setFilteredProducts(products); // inicial
    };
    loadProducts();
  }, []);


  useEffect(() => {
    const newSubcategories = getSubcategories(allProducts, selectedCategory);
    setSubcategories(newSubcategories);
    setSelectedSubcategory(undefined);
  }, [selectedCategory, allProducts]);


  useEffect(() => {
    const filtered = allProducts.filter((product) => {
      const matchCategory = !selectedCategory || product.category === selectedCategory;
      const matchSubcategory = !selectedSubcategory || product.subcategory === selectedSubcategory;
      const matchSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSubcategory && matchSearch;
    });
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, selectedSubcategory, searchTerm, allProducts]);


  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setQuantity(1);
  };

  const handleAddToCart = (product: Product, qty: number = 1) => {
    addToCart(product, qty);
    toast({
      title: "Producto agregado",
      description: `${product.title} agregado a la cotización`,
      duration: 3000,
    });
  };

  const handleModalAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, quantity);
      toast({
        title: "Producto agregado",
        description: `${quantity} x ${selectedProduct.title} agregado a la cotización`,
        duration: 3000,
      });
      setIsModalOpen(false);
      setQuantity(1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const handleCategoryChange = (value: string) => {
    if (value === "todos") {
      setSelectedCategory(undefined);
    } else {
      setSelectedCategory(value);
    }
  };

  const handleSubcategoryChange = (value: string) => {
    if (value === "todos") {
      setSelectedSubcategory(undefined);
    } else {
      setSelectedSubcategory(value);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter component
  const FiltersComponent = () => (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-1 block">Categoría</label>
        <Select
          value={selectedCategory || "todos"}
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Todas las categorías" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todas las categorías</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Subcategoría</label>
        <Select
          value={selectedSubcategory || "todos"}
          onValueChange={handleSubcategoryChange}
          disabled={!selectedCategory}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Todas las subcategorías" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todas las subcategorías</SelectItem>
            {subcategories.map((subcategory) => (
              <SelectItem key={subcategory} value={subcategory}>
                {subcategory}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  // Product Card Component (Inlined)
  const ProductCard = ({ product }: { product: Product }) => {
    return (
      <Card className="glass-card overflow-hidden transition-all duration-300 hover:shadow-md h-full">
        <div
          className="relative aspect-square p-2 overflow-hidden bg-muted bg-cover bg-center"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 space-x-2">
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full"
              onClick={() => handleViewDetails(product)}
            >
              <Eye className="h-4 w-4 mr-2" />
              Detalles
            </Button>
            <Button
              size="sm"
              className="rounded-full bg-fire hover:bg-fire-dark"
              onClick={() => handleAddToCart(product)}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              cotizar
            </Button>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-base line-clamp-2 h-12">{product.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
          <div className="flex items-center justify-end mt-2">
            <span className="text-xs text-muted-foreground">{product.subcategory}</span>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Catálogo de Productos</h1>
            
            {isMobile && (
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 mb-4 w-full md:w-auto">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filtros
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85vw] sm:w-[350px]">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold">Filtros</h2>
                   
                  </div>
                  <FiltersComponent />
                </SheetContent>
              </Sheet>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
            {!isMobile && (
              <div className="md:col-span-3 space-y-4">
                <FiltersComponent />
              </div>
            )}

            <div className="md:col-span-9">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.productId} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 border rounded-lg">
                  <h3 className="text-lg font-medium">No se encontraron productos</h3>
                  <p className="text-muted-foreground mt-2">
                    Intenta con otros criterios de búsqueda
                  </p>
                </div>
              )}

              {totalPages > 1 && (
                <div className="mt-8 overflow-x-auto">
                  <Pagination>
                    <PaginationContent className="flex flex-wrap justify-center gap-1">
                      <PaginationItem>
                        <Button
                          variant="ghost"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className={`${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""} px-2 sm:px-4`}
                          size={isMobile ? "sm" : "default"}
                        >
                          <PaginationPrevious />
                        </Button>
                      </PaginationItem>

                      {Array.from({ length: totalPages }).map((_, i) => {
                        // Para pantallas pequeñas, mostrar menos números de página
                        if (isMobile) {
                          const shouldShowPage = 
                            i === 0 || // Primera página
                            i === totalPages - 1 || // Última página
                            (i >= currentPage - 1 && i <= currentPage + 1); // Páginas cercanas a la actual
                          
                          if (!shouldShowPage) {
                            // Mostrar elipsis solo una vez entre rangos
                            if (i === 1 && currentPage > 3) return <span key={`ellipsis-${i}`} className="px-2">...</span>;
                            if (i === totalPages - 2 && currentPage < totalPages - 2) return <span key={`ellipsis-${i}`} className="px-2">...</span>;
                            return null;
                          }
                        }
                        
                        return (
                          <PaginationItem key={i + 1}>
                            <Button
                              variant={currentPage === i + 1 ? "default" : "ghost"}
                              onClick={() => handlePageChange(i + 1)}
                              className={`${currentPage === i + 1 ? "bg-fire hover:bg-fire-dark" : ""} min-w-[36px]`}
                              size={isMobile ? "sm" : "default"}
                            >
                              <PaginationLink>{i + 1}</PaginationLink>
                            </Button>
                          </PaginationItem>
                        );
                      })}

                      <PaginationItem>
                        <Button
                          variant="ghost"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className={`${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""} px-2 sm:px-4`}
                          size={isMobile ? "sm" : "default"}
                        >
                          <PaginationNext />
                        </Button>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Product Modal (Inlined) */}
   <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
  <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
    {selectedProduct && (
      <>
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl break-words">
            {selectedProduct.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {selectedProduct.category} - {selectedProduct.subcategory}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          {/* Imagen siempre primero */}
         <div className="aspect-square overflow-hidden rounded-md mx-auto w-full max-w-[200px]">
  <img
    src={selectedProduct.image}
    alt={selectedProduct.title}
    className="h-full w-full object-contain transition-transform duration-500 hover:scale-110"
  />
</div>


          {/* Contenido */}
          <div className="flex flex-col">
            <p className="text-sm mb-4">{selectedProduct.descrip}</p>

            <div className="mt-auto space-y-4">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">Cantidad:</p>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-r-none"
                    onClick={decrementQuantity}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="h-8 w-12 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    min={1}
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-l-none"
                    onClick={incrementQuantity}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <Button
                className="w-full bg-fire hover:bg-fire-dark"
                onClick={handleModalAddToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Añadir a la cotización
              </Button>
            </div>
          </div>
        </div>
      </>
    )}
  </DialogContent>
</Dialog>


      <Footer />
    </div>
  );
};

export default Catalogo;