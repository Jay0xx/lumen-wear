export default function Footer() {
    return (
        <footer className="bg-[var(--dark)] text-white/80 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand & Description */}
                <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-4">LUMEN</h3>
                    <p className="text-sm leading-relaxed opacity-80">
                        Light. Effortless. Timeless.<br />
                        Sustainable luxury basics for the modern wardrobe.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-lg font-medium mb-6">Shop</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="/new-arrivals" className="hover:text-[var(--accent)] transition-colors">New Arrivals</a></li>
                        <li><a href="/women" className="hover:text-[var(--accent)] transition-colors">Women</a></li>
                        <li><a href="/men" className="hover:text-[var(--accent)] transition-colors">Men</a></li>
                        <li><a href="/accessories" className="hover:text-[var(--accent)] transition-colors">Accessories</a></li>
                        <li><a href="/sale" className="hover:text-[var(--accent)] transition-colors">Sale</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="text-lg font-medium mb-6">Company</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="/about" className="hover:text-[var(--accent)] transition-colors">About Us</a></li>
                        <li><a href="/journal" className="hover:text-[var(--accent)] transition-colors">Journal</a></li>
                        <li><a href="/contact" className="hover:text-[var(--accent)] transition-colors">Contact</a></li>
                        <li><a href="/faq" className="hover:text-[var(--accent)] transition-colors">FAQ</a></li>
                    </ul>
                </div>

                {/* Contact & Social */}
                <div>
                    <h4 className="text-lg font-medium mb-6">Get in Touch</h4>
                    <p className="text-sm mb-4">
                        hello@lumenwear.com<br />
                        +1 (555) 123-4567
                    </p>
                    <div className="flex gap-5 mt-6">
                        <a href="#" className="hover:text-[var(--accent)] transition-colors">Instagram</a>
                        <a href="#" className="hover:text-[var(--accent)] transition-colors">Pinterest</a>
                        <a href="#" className="hover:text-[var(--accent)] transition-colors">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm opacity-70">
                <p>&copy; {new Date().getFullYear()} Lumen Wear. All rights reserved.</p>
                <p className="mt-2">
                    <a href="/privacy" className="hover:text-[var(--accent)] mx-2">Privacy Policy</a> •
                    <a href="/terms" className="hover:text-[var(--accent)] mx-2">Terms of Service</a>
                </p>
            </div>
        </footer>
    );
}
