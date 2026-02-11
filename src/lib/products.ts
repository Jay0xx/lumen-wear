export type Product = {
    id: string;
    name: string;
    price: number;
    category: string;
    mainImage: string;
    colors: string[];
    sizes: string[];
};

export const featuredProducts: Product[] = [
    {
        id: 'p1',
        name: 'Oversized Linen Shirt',
        price: 128,
        category: 'Tops',
        mainImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
        colors: ['#F5EDE3', '#2C2C2C', '#C9A47B', '#D4BFA8'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 'p2',
        name: 'Wide Tailored Trousers',
        price: 148,
        category: 'Bottoms',
        mainImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
        colors: ['#2C2C2C', '#FAF9F6', '#4A4A4A'],
        sizes: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 'p3',
        name: 'Ribbed Cotton Tank',
        price: 68,
        category: 'Tops',
        mainImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
        colors: ['#FFFFFF', '#D4BFA8', '#1C1C1C'],
        sizes: ['XS', 'S', 'M', 'L'],
    },
    {
        id: 'p4',
        name: 'Relaxed Cashmere Sweater',
        price: 165,
        category: 'Knitwear',
        mainImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
        colors: ['#D4BFA8', '#2C2C2C', '#FAF9F6'],
        sizes: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 'p5',
        name: 'Structured Blazer',
        price: 198,
        category: 'Outerwear',
        mainImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
        colors: ['#2C2C2C', '#4A4A4A'],
        sizes: ['XS', 'S', 'M', 'L'],
    },
    {
        id: 'p6',
        name: 'Flowy Midi Dress',
        price: 142,
        category: 'Dresses',
        mainImage: 'https://images.unsplash.com/photo-1595777457583-3f4b6de6a502?auto=format&fit=crop&w=800&q=80',
        colors: ['#FAF9F6', '#C9A47B', '#D4BFA8'],
        sizes: ['XS', 'S', 'M', 'L'],
    },
    {
        id: 'p7',
        name: 'Classic Sneakers',
        price: 95,
        category: 'Footwear',
        mainImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
        colors: ['#FFFFFF', '#2C2C2C'],
        sizes: ['36', '37', '38', '39', '40', '41'],
    },
    {
        id: 'p8',
        name: 'Silk Scarf Accessory',
        price: 78,
        category: 'Accessories',
        mainImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
        colors: ['#D4BFA8', '#C9A47B', '#FAF9F6'],
        sizes: ['One Size'],
    },
];
