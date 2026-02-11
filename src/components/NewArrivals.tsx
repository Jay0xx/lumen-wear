'use client';

import { motion } from 'framer-motion';
import { featuredProducts } from '@/lib/products';
import { useCartStore } from '@/store/cartStore';
import { ShoppingBag } from 'lucide-react';

export default function NewArrivals() {
    const addItem = useCartStore((state) => state.addItem);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="new-arrivals" className="bg-offwhite">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-5xl md:text-7xl font-light text-dark tracking-tighter leading-none mb-6">
                            Seasonal <br />
                            <span className="italic font-normal">Essentials</span>
                        </h2>
                        <p className="text-lg text-dark/60 font-light">
                            Carefully crafted pieces that prioritize longevity over trends.
                            Our new collection explores the interplay of light fabrics and structural silhouettes.
                        </p>
                    </div>
                    <a href="/shop" className="text-sm uppercase tracking-widest border-b border-dark/20 pb-2 hover:text-accent hover:border-accent transition-all">
                        Browse All Items
                    </a>
                </div>

                {/* Product Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
                >
                    {featuredProducts.slice(0, 4).map((product) => (
                        <motion.div
                            key={product.id}
                            variants={cardVariants}
                            className="group"
                        >
                            {/* Image Frame */}
                            <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-6">
                                <img
                                    src={product.mainImage}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-110"
                                />

                                {/* Overlay Action */}
                                <div className="absolute inset-0 bg-dark/5 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                    <button
                                        onClick={() => addItem(product, product.colors[0], product.sizes[0])}
                                        className="translate-y-4 group-hover:translate-y-0 bg-white text-dark px-8 py-4 shadow-xl hover:bg-dark hover:text-white transition-all duration-300 flex items-center gap-3"
                                    >
                                        <ShoppingBag size={18} />
                                        <span className="text-xs uppercase tracking-widest font-medium">Add to Cart</span>
                                    </button>
                                </div>
                            </div>

                            {/* Info Frame */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-base font-medium text-dark group-hover:text-accent transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                    <span className="text-sm font-serif italic text-dark/50">${product.price}</span>
                                </div>
                                <p className="text-sm text-dark/40 uppercase tracking-widest font-light">
                                    {product.category}
                                </p>

                                {/* Minimal Color Indicators */}
                                <div className="flex gap-1.5 pt-2">
                                    {product.colors.map((color, idx) => (
                                        <div
                                            key={idx}
                                            className="w-2.5 h-2.5 rounded-full border border-dark/5"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
