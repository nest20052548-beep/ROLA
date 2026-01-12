import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import productImage from '../assets/product.png';
const FEATURED_PRODUCTS = [
    {
        id: 1,
        name: "Velocity Pro Set",
        category: "Women's Set",
        price: 89.99,
        image: productImage, // Using the same image for demo
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
    }
];
const Home = () => {
    return (
        <div className="animate-fade-in">
            <Hero />
            <section className="py-20 bg-slate-900">
                <div className="container">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">TRENDING NOW</h2>
                            <div className="h-1 w-20 bg-lime-400 rounded-full"></div>
                        </div>
                        <a href="/products" className="hidden md:block text-lime-400 font-bold hover:text-white transition-colors">
                            View All Products &rarr;
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {FEATURED_PRODUCTS.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="mt-12 text-center md:hidden">
                        <a href="/products" className="btn btn-outline w-full justify-center">
                            View All Products
                        </a>
                    </div>
                </div>
            </section>
            {/* Newsletter / CTA */}
            <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 border-t border-slate-800">
                <div className="container text-center max-w-2xl">
                    <h2 className="text-3xl font-black text-white mb-6">JOIN THE MOVEMENT</h2>
                    <p className="text-slate-400 mb-8 text-lg">
                        Sign up for exclusive drops, early access to sales, and workout tips from our pro trainers.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4">
                        <input type="email" placeholder="Enter your email" className="flex-1" />
                        <button className="btn btn-primary justify-center">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
};
export default Home;
