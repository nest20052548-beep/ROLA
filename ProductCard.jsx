import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
const ProductCard = ({ product }) => {
    return (
        <div className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-lime-400/50 transition-all duration-300 hover:shadow-neon hover:-translate-y-2">
            <div className="relative aspect-[4/5] overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white">
                    {product.category}
                </div>
                {product.isNew && (
                    <div className="absolute top-4 left-4 bg-lime-400 text-slate-900 px-2 py-1 rounded text-xs font-bold uppercase">
                        New
                    </div>
                )}
            </div>
            <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-orange-400 text-xs">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="font-bold">4.9</span>
                    </div>
                    <span className="text-slate-400 text-sm">{product.reviews} reviews</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">{product.name}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-white">${product.price}</span>
                    <button className="p-3 bg-slate-700 hover:bg-lime-400 hover:text-slate-900 rounded-full transition-colors text-white">
                        <ShoppingBag className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProductCard;
