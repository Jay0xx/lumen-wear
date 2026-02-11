'use client';

import { motion } from 'framer-motion';

export default function OurCraft() {
    return (
        <section className="py-24 px-6 bg-[var(--bg)]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1200&q=80"
                            alt="Artisan hands working on fabric"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-5xl md:text-6xl font-light text-[var(--dark)] tracking-tight">
                            Crafted with Intention
                        </h2>

                        <p className="text-xl leading-relaxed text-[var(--dark)]/80">
                            At Lumen, we believe clothing should feel like a second skin — light, thoughtful, and built to last.
                            Every piece is made with premium natural materials and timeless design, crafted in small batches by skilled artisans who value quality over quantity.
                        </p>

                        <p className="text-xl leading-relaxed text-[var(--dark)]/80">
                            Sustainability isn't a trend for us; it's the foundation. We use low-impact dyes, organic cotton, linen, and responsibly sourced fibers to create wardrobe essentials that age beautifully and leave a gentle footprint.
                        </p>

                        <div className="pt-6">
                            <a
                                href="/about"
                                className="inline-block px-10 py-5 border-2 border-[var(--dark)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-white transition-all text-lg font-medium tracking-wide"
                            >
                                Our Story →
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
