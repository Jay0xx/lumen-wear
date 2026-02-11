'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import CartDrawer from './CartDrawer';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const totalItems = useCartStore((state) => state.getTotalItems());

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Collections', href: '/collections' },
        { name: 'Shop', href: '/shop' },
        { name: 'Journal', href: '/journal' },
        { name: 'About', href: '/about' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
                        ? 'bg-offwhite/90 backdrop-blur-xl py-4 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
                        : 'bg-transparent py-8'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Menu Button (Mobile Lead) */}
                    <button
                        className="md:hidden text-dark p-2 -ml-2"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={20} strokeWidth={1.5} />
                    </button>

                    {/* Logo - Centered on Mobile */}
                    <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 group">
                        <span className="text-2xl font-semibold tracking-[0.2em] text-dark">LUMEN</span>
                        <div className="h-px w-0 group-hover:w-full bg-accent transition-all duration-500" />
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <nav className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[11px] uppercase tracking-[0.25em] text-dark/70 hover:text-dark transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-accent group-hover:w-full group-hover:left-0 transition-all duration-300" />
                            </Link>
                        ))}
                    </nav>

                    {/* Action Icons */}
                    <div className="flex items-center space-x-4 md:space-x-8">
                        <button className="hidden sm:block text-dark/60 hover:text-dark transition-colors">
                            <Search size={18} strokeWidth={1.5} />
                        </button>
                        <button className="hidden sm:block text-dark/60 hover:text-dark transition-colors">
                            <User size={18} strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="text-dark hover:text-accent transition-all relative p-2"
                        >
                            <ShoppingBag size={20} strokeWidth={1.5} />
                            <AnimatePresence>
                                {totalItems > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute top-0 right-0 bg-dark text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold"
                                    >
                                        {totalItems}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* Fullscreen Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-offwhite z-[60] flex flex-col p-8"
                        >
                            <div className="flex justify-between items-center mb-20">
                                <span className="text-xl font-semibold tracking-widest text-dark">LUMEN</span>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2 text-dark">
                                    <X size={24} strokeWidth={1} />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-8">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * idx }}
                                        key={link.name}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-4xl font-light text-dark hover:text-accent transition-colors block"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto pt-12 border-t border-dark/5 flex gap-8 text-xs uppercase tracking-widest text-dark/40">
                                <span>Instagram</span>
                                <span>Pinterest</span>
                                <span>Journal</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}
