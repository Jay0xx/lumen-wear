'use client';

import { motion } from 'framer-motion';

export default function Newsletter() {
    return (
        <section className="py-24 px-6 bg-[var(--dark)] text-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-light tracking-tight mb-6"
                >
                    Stay in the Light
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl mb-10 opacity-90"
                >
                    Join our community for exclusive drops, styling tips, and early access to new collections.
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert('Thank you for subscribing! (demo)');
                    }}
                >
                    <input
                        type="email"
                        placeholder="Your email address"
                        required
                        className="flex-1 px-6 py-5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                    <button
                        type="submit"
                        className="px-10 py-5 bg-[var(--accent)] text-[var(--dark)] rounded-full font-medium hover:bg-white transition-colors"
                    >
                        Subscribe
                    </button>
                </motion.form>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-6 text-sm opacity-70"
                >
                    We respect your privacy — unsubscribe anytime.
                </motion.p>
            </div>
        </section>
    );
}
