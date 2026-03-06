import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/products";
// Define un ítem del carrito: producto + cantidad
interface CartItem {
  product: Product;
  quantity: number;
}
// Define la estructura del contexto del carrito: funciones y estado
interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  isCartOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
// Proveedor del contexto del carrito
// Maneja items, cantidad total, apertura del carrito y funciones para modificarlo
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Agrega un producto al carrito
  // Si ya existe, suma la cantidad; si no, lo agrega como nuevo ítem
  const addToCart = (product: Product, quantity: number) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.productId === product.productId,
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.product.productId === product.productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
  };
  // Elimina un producto del carrito por su ID
  const removeFromCart = (productId: number) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.product.productId !== productId),
    );
  };
  // Actualiza la cantidad de un producto en el carrito
  // Si la cantidad es <= 0, lo elimina
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.productId === productId ? { ...item, quantity } : item,
      ),
    );
  };
  // Vacía todos los items del carrito
  const clearCart = () => {
    setItems([]);
  };
  // Calcula la cantidad total de productos en el carrito
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  // Abre o cierra el carrito (estado booleano)
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    isCartOpen,
    toggleCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
// Hook para consumir el contexto del carrito
// Lanza error si se usa fuera de CartProvider
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
