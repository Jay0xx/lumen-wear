'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        },
    };

    return (
        <section
            className="relative h-screen min-h-[750px] p-0 flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1601762603339-fd61e28b698f?auto=format&fit=crop&w=2000&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 30%',
                backgroundColor: '#F1EFE9',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 luxury-overlay" />

            {/* Content Layer */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center"
            >
                <motion.span
                    variants={itemVariants}
                    className="inline-block text-sm uppercase tracking-[0.3em] text-dark/60 mb-8"
                >
                    Essence of Simplicity
                </motion.span>

                <motion.h1
                    variants={itemVariants}
                    className="text-7xl md:text-9xl font-light text-dark leading-[0.9] mb-8 text-balance"
                >
                    Light. Effortless.<br />
                    <span className="italic font-normal">Timeless.</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="max-w-xl mx-auto text-lg md:text-xl text-dark/70 font-light mb-12 text-balance leading-relaxed"
                >
                    Curating a sustainable luxury wardrobe designed for the modern individual who values substance and silence.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="#new-arrivals"
                        className="w-full sm:w-auto px-12 py-5 bg-dark text-white hover:bg-accent transition-all duration-500 text-sm uppercase tracking-widest"
                    >
                        Shop Arrivals
                    </a>
                    <a
                        href="/collections"
                        className="w-full sm:w-auto px-12 py-5 border border-dark/20 text-dark hover:bg-dark hover:text-white transition-all duration-500 text-sm uppercase tracking-widest"
                    >
                        Our Story
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-dark/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-accent"
                    />
                </div>
            </motion.div>
        </section>
    );
}
