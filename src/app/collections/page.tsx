export default function CollectionsPage() {
    return (
        <div className="pt-32 px-6 min-h-screen bg-offwhite flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-light text-dark mb-6">Collections</h1>
            <p className="text-xl text-dark/60 max-w-lg mx-auto italic font-serif">
                Curating timelessness for the modern soul. Our seasonal lookbooks are arriving soon.
            </p>
            <a href="/" className="mt-12 text-sm uppercase tracking-widest border-b border-dark py-2 hover:text-accent hover:border-accent transition-all">
                Back to Home
            </a>
        </div>
    );
}
