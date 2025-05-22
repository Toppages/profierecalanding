import { useEffect, useState } from "react";
import { Product } from "@/types/product";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

    fetchData();
    const interval = setInterval(fetchData, 5000); // actualiza cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return { products, loading };
};
