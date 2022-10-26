import create from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Cart = CartItem[];

type CartStore = {
  cart: Cart;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  addToCart: (item) => set({ cart: [...get().cart, item] }),

  removeFromCart: (itemId) =>
    set({ cart: get().cart.filter((i) => i.id !== itemId) }),

  clearCart: () => set({ cart: [] }),
}));
