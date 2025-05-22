
export interface Product {
  productId: number;
  title: string;
  category: string;
  subcategory: string;
  descrip: string;
  image: string;
  importan: boolean;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://profirecaback-production.up.railway.app/products");
  const data = await res.json();

  return data.sort((a: Product, b: Product) => Number(b.importan) - Number(a.importan));
};



export const getCategories = (products: Product[]): string[] => {
  const categoriesSet = new Set<string>();
  products.forEach(product => categoriesSet.add(product.category));
  return Array.from(categoriesSet);
};

export const getSubcategories = (products: Product[], category?: string): string[] => {
  const subcategoriesSet = new Set<string>();
  products
    .filter(product => !category || product.category === category)
    .forEach(product => subcategoriesSet.add(product.subcategory));
  return Array.from(subcategoriesSet);
};

export const getFilteredProducts = (
  products: Product[],
  category?: string,
  subcategory?: string,
  searchTerm?: string
): Product[] => {
  return products.filter(product => {
    const matchesCategory = !category || product.category === category;
    const matchesSubcategory = !subcategory || product.subcategory === subcategory;
    const matchesSearch = !searchTerm ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.descrip.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSubcategory && matchesSearch;
  });
};
