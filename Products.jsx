import React from 'react';
import ProductCard from '../components/ProductCard';
import productImage from '../assets/product.png';
const PRODUCTS = [
    {
        id: 1,
        name: "Velocity Pro Set",
        category: "Women's Set",
        price: 89.99,
        image: productImage,
        reviews: 128,
        isNew: true,
        description: "Engineered for high-intensity training with sweat-wicking technology."
    },
    {
        id: 2,
        name: "Core Focus Leggings",
        category: "Leggings",
        price: 54.99,
        image: productImage,
        reviews: 85,
        isNew: false,
        description: "Maximum compression meet ultimate comfort."
    },
    {
        id: 3,
        name: "Impact Sports Bra",
        category: "Sports Bra",
        price: 39.99,
        image: productImage,
        reviews: 204,
        isNew: false,
        description: "High support for your toughest workouts."
    },
    {
        id: 4,
        name: "Sprint Runners",
        category: "Footwear",
        price: 119.99,
        image: productImage,
        reviews: 45,
        isNew: true,
        description: "Lightweight, responsive, and built for speed."
    },
    {
        id: 5,
        name: "Men's Tech Tee",
        category: "Men's Top",
        price: 34.99,
        image: productImage,
        reviews: 56,
        isNew: false,
        description: "Breathable fabric that keeps you cool."
    },
    {
        id: 6,
        name: "Training Shorts",
        category: "Men's Bottoms",
        price: 44.99,
        image: productImage,
        reviews: 78,
        isNew: false,
        description: "Flexible movement for squats and lunges."
    },
    {
        id: 7,
        name: "Yoga Mat Pro",
        category: "Accessories",
        price: 69.99,
        image: productImage,
        reviews: 300,
        isNew: true,
        description: "Non-slip surface for perfect stability."
    },
    {
        id: 8,
        name: "Hydration Bottle",
        category: "Accessories",
        price: 24.99,
        image: productImage,
        reviews: 150,
        isNew: false,
        description: "Keep your drinks cold for 24 hours."
    }
];
const Products = () => {
    return (
        <div className="pt-24 pb-20 container animate-fade-in">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4">ALL PRODUCTS</h1>
                <p className="text-slate-400 max-w-2xl text-lg">
                    Browse our complete collection of premium sportswear and accessories.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {PRODUCTS.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default Products;
