
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ 
  product, 
  isOpen, 
  onClose 
}: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();
  const isMobile = useIsMobile();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Producto agregado",
      description: `${quantity} x ${product.title} agregados a la cotización.`,
      duration: 3000,
    });
    onClose();
    setQuantity(1);
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-md max-h-[90vh] overflow-y-auto ${isMobile ? "p-4" : ""}`}>
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl break-words">{product.title}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {product.category} - {product.subcategory}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div className="aspect-square overflow-hidden rounded-md mx-auto">
            <img 
              src={product.image} 
              alt={product.title}
              className="h-full w-full object-contain"
            />
          </div>
          
          <div className="flex flex-col">
            <p className="text-sm mb-4">{product.descrip}</p>
            
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
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Añadir a la cotización
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
