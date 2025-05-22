
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/types/cart-item";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { product, quantity } = item;
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-start space-x-4 border-b pb-3">
      <div className="h-16 w-16 bg-muted rounded flex-shrink-0 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm line-clamp-1">{product.title}</h4>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
          {product.category} - {product.subcategory}
        </p>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-1">
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6"
              onClick={() => updateQuantity(product.productId, quantity - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="w-6 text-center text-sm">{quantity}</span>
            
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6"
              onClick={() => updateQuantity(product.productId, quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-destructive"
            onClick={() => removeFromCart(product.productId)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
