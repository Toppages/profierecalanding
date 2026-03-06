import { useEffect, useState } from "react";
import { Product } from "@/types/product";
// Hook personalizado para obtener productos desde la API
// Incluye estado de productos, loading y actualización automática cada 5 segundos
export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  // useEffect para cargar los productos al montar el componente
  // y configurar un intervalo de actualización cada 5 segundos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products", err);
        setLoading(false);
      }
    };
    // Función asincrónica que obtiene los productos desde la API
    // Maneja errores y actualiza el estado de productos y loading
    fetchData();
    const interval = setInterval(fetchData, 5000); // actualiza cada 5 segundos
    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return { products, loading };
};
