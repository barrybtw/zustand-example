import create from "zustand";

type ProductItem = {
  id: number;
  name: string;
  price: number;
};

type Products = ProductItem[];

type ProductStore = {
  products: Products;
};

export const useProductsStore = create<ProductStore>(() => ({
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 10,
    },
    {
      id: 2,
      name: "Product 1",
      price: 10,
    },
    {
      id: 3,
      name: "Product 1",
      price: 10,
    },
    {
      id: 4,
      name: "Product 1",
      price: 10,
    },
  ],
}));
