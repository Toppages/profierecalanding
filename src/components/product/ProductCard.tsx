
import { Product } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({
  product,
  onViewDetails,
  onAddToCart
}: ProductCardProps) => {
  return (
    <Card className="glass-card overflow-hidden transition-all duration-300 hover:shadow-md h-full">
      <div className="relative aspect-square overflow-hidden bg-muted">
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
            onClick={() => onViewDetails(product)}
          >
            <Eye className="h-4 w-4 mr-2" />
            Detalles
          </Button>
          <Button 
            size="sm" 
            className="rounded-full bg-fire hover:bg-fire-dark" 
            onClick={() => onAddToCart(product)}
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
