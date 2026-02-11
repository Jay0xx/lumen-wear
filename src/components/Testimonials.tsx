'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Sophie M.',
        role: 'Freelance Designer',
        quote:
            'The linen shirt is my new everyday essential. It feels like wearing air, and the quality is exceptional. Worth every penny.',
        rating: 5,
    },
    {
        name: 'James K.',
        role: 'Architect',
        quote:
            'Finally found trousers that fit perfectly and look polished without trying too hard. The fabric drapes beautifully.',
        rating: 5,
    },
    {
        name: 'Elena R.',
        role: 'Marketing Director',
        quote:
            'The cashmere sweater is incredibly soft and doesn\'t pill after multiple wears. Lumen has become my go-to for timeless pieces.',
        rating: 5,
    },
    {
        name: 'Marcus L.',
        role: 'Photographer',
        quote:
            'The wide-leg trousers are perfect for movement and look sharp on camera. Sustainable and stylish — exactly what I needed.',
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 px-6 bg-[var(--bg)] border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-light text-[var(--dark)] tracking-tight">
                        What People Say
                    </h2>
                    <p className="mt-4 text-xl text-[var(--dark)]/70">
                        Real words from those who wear Lumen every day
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="text-[var(--hover)] fill-[var(--hover)]" />
                                ))}
                            </div>

                            <blockquote className="text-lg italic text-[var(--dark)]/90 mb-6 leading-relaxed">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>

                            <div>
                                <p className="font-medium text-[var(--dark)]">{testimonial.name}</p>
                                <p className="text-sm text-[var(--dark)]/60">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
