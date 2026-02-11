import { create } from 'zustand';
import { featuredProducts, type Product } from '@/lib/products';

export type CartItem = {
    product: Product;
    quantity: number;
    selectedColor: string;
    selectedSize: string;
};

type CartStore = {
    items: CartItem[];
    addItem: (product: Product, selectedColor: string, selectedSize: string) => void;
    removeItem: (productId: string, selectedColor: string, selectedSize: string) => void;
    updateQuantity: (productId: string, selectedColor: string, selectedSize: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],

    addItem: (product, selectedColor, selectedSize) =>
        set((state) => {
            const existingItem = state.items.find(
                (item) =>
                    item.product.id === product.id &&
                    item.selectedColor === selectedColor &&
                    item.selectedSize === selectedSize
            );

            if (existingItem) {
                return {
                    items: state.items.map((item) =>
                        item.product.id === product.id &&
                            item.selectedColor === selectedColor &&
                            item.selectedSize === selectedSize
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }

            return {
                items: [...state.items, { product, quantity: 1, selectedColor, selectedSize }],
            };
        }),

    removeItem: (productId, selectedColor, selectedSize) =>
        set((state) => ({
            items: state.items.filter(
                (item) =>
                    !(
                        item.product.id === productId &&
                        item.selectedColor === selectedColor &&
                        item.selectedSize === selectedSize
                    )
            ),
        })),

    updateQuantity: (productId, selectedColor, selectedSize, quantity) =>
        set((state) => {
            if (quantity <= 0) {
                return {
                    items: state.items.filter(
                        (item) =>
                            !(
                                item.product.id === productId &&
                                item.selectedColor === selectedColor &&
                                item.selectedSize === selectedSize
                            )
                    ),
                };
            }

            return {
                items: state.items.map((item) =>
                    item.product.id === productId &&
                        item.selectedColor === selectedColor &&
                        item.selectedSize === selectedSize
                        ? { ...item, quantity }
                        : item
                ),
            };
        }),

    clearCart: () => set({ items: [] }),

    getTotalItems: () => {
        const state = get();
        return state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    getTotalPrice: () => {
        const state = get();
        return state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    },
}));
