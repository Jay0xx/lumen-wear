'use client';

import { motion } from 'framer-motion';

const categories = [
    {
        title: 'Women',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
        href: '/women',
    },
    {
        title: 'Men',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
        href: '/men',
    },
    {
        title: 'Accessories',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
        href: '/accessories',
    },
    {
        title: 'Sale',
        image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80',
        href: '/sale',
        isSale: true,
    },
];

export default function ShopByCategory() {
    return (
        <section className="py-24 px-6 bg-[var(--bg)]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-light text-[var(--dark)] tracking-tight">
                        Shop by Category
                    </h2>
                    <p className="mt-4 text-xl text-[var(--dark)]/70">
                        Curated collections for every moment
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <motion.a
                            key={category.title}
                            href={category.href}
                            className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-md"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Image */}
                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-6">
                                <h3 className="text-4xl md:text-5xl font-light text-white tracking-wide mb-2">
                                    {category.title}
                                </h3>

                                {category.isSale && (
                                    <span className="mt-2 px-6 py-2 bg-[var(--accent)] text-white text-sm font-medium rounded-full">
                                        Up to 40% Off
                                    </span>
                                )}

                                <span className="mt-4 text-white/90 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Shop Now →
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
