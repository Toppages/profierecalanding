
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { CartItem } from "./CartItem";
import { X, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";

export const CartDrawer = () => {
  const {
    items,
    totalItems,
    clearCart,
    isCartOpen,
    toggleCart
  } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={toggleCart}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader className="space-y-0.5">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-bold">Tu cotización.</SheetTitle>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </SheetClose>
          </div>
          <p className="text-sm text-muted-foreground">
            {totalItems} {totalItems === 1 ? 'artículo' : 'artículos'}
          </p>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {items.length > 0 ? (
            <div className="space-y-3">
              {items.map((item) => (
                <CartItem
                  key={item.product.productId}
                  item={item}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">Tu cotización está vacía</h3>
              <p className="text-muted-foreground mt-1">
                Agrega productos para empezar
              </p>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t pt-4">
            <div className="space-y-4 w-full">
              <div className="flex flex-col gap-2">
                <Button
                  className="w-full bg-fire hover:bg-fire-dark"
                  onClick={() => {
                    const message = items.map(item => {
                      return ` ${item.product.title} (${item.quantity}x) - ${item.product.category}/${item.product.subcategory}`;
                    }).join("\n");

                    const fullMessage = `Hola, quiero cotizar los siguientes productos:\n\n${message}\n\n`;

                    const whatsappURL = `https://wa.me/584122359283?text=${encodeURIComponent(fullMessage)}`;

                    window.open(whatsappURL, "_blank");

                    clearCart();
                    toggleCart();
                  }}
                >
                  Proceder al pago
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={clearCart}
                >
                  Vaciar cotización
                </Button>
              </div>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
