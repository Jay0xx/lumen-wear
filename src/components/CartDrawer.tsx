'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function CartDrawer({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();

    // Lock body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black z-40"
                        onClick={onClose}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-offwhite z-50 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <ShoppingBag size={24} className="text-dark" />
                                <h2 className="text-2xl font-light text-dark">Your Cart</h2>
                            </div>
                            <button onClick={onClose} aria-label="Close cart">
                                <X size={24} className="text-dark hover:text-accent transition-colors" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <ShoppingBag size={64} className="text-gray-300 mb-6" />
                                    <p className="text-xl text-dark/70 mb-2">Your cart is empty</p>
                                    <p className="text-dark/60">Add some timeless pieces</p>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {items.map((item) => (
                                        <div key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-4">
                                            {/* Thumbnail */}
                                            <div className="w-24 h-32 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                                                <img
                                                    src={item.product.mainImage}
                                                    alt={item.product.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="flex-1">
                                                <h4 className="font-medium text-dark">{item.product.name}</h4>
                                                <p className="text-sm text-dark/70 mt-1">
                                                    {item.selectedColor} • {item.selectedSize}
                                                </p>
                                                <p className="text-sm font-medium mt-1">${item.product.price}</p>

                                                {/* Quantity controls */}
                                                <div className="flex items-center gap-4 mt-3">
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.product.id,
                                                                item.selectedColor,
                                                                item.selectedSize,
                                                                item.quantity - 1
                                                            )
                                                        }
                                                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                                                    >
                                                        <Minus size={16} />
                                                    </button>
                                                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.product.id,
                                                                item.selectedColor,
                                                                item.selectedSize,
                                                                item.quantity + 1
                                                            )
                                                        }
                                                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                                                    >
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Remove */}
                                            <button
                                                onClick={() => removeItem(item.product.id, item.selectedColor, item.selectedSize)}
                                                className="text-gray-400 hover:text-red-500 transition-colors self-start"
                                            >
                                                <X size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-gray-200">
                                <div className="flex justify-between text-lg mb-4">
                                    <span className="font-medium text-dark">Subtotal</span>
                                    <span className="font-medium text-dark">${getTotalPrice().toFixed(2)}</span>
                                </div>
                                <button className="w-full py-5 bg-dark text-white hover:bg-accent transition-colors text-lg font-medium tracking-wide">
                                    Proceed to Checkout
                                </button>
                                <p className="text-center text-sm text-dark/60 mt-4">
                                    Taxes and shipping calculated at checkout
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
