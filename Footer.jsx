import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react'; // MessageCircle as generic chat icon if LINE not avail
const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-3xl font-black text-white mb-4">
                        N&L <span className="text-lime-400">SHOP</span>
                    </h2>
                    <p className="mb-6 max-w-sm">
                        Empowering your fitness journey with premium gear. Designed for performance, styled for the streets.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-lime-400 hover:text-slate-900 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                {/* Links */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Shop</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="hover:text-lime-400 transition-colors">New Arrivals</a></li>
                        <li><a href="#" className="hover:text-lime-400 transition-colors">Men's</a></li>
                        <li><a href="#" className="hover:text-lime-400 transition-colors">Women's</a></li>
                        <li><a href="#" className="hover:text-lime-400 transition-colors">Accessories</a></li>
                    </ul>
                </div>
                {/* Contact / Line */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
                    <ul className="space-y-4">
                        <li>123 Fitness Ave, Bangkok</li>
                        <li>support@nlshop.com</li>
                        <li className="flex items-center gap-2 text-lime-400 font-bold">
                            <MessageCircle className="w-5 h-5" /> LINE: @nlshop
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mt-12 pt-8 border-t border-slate-900 text-center text-sm">
                &copy; {new Date().getFullYear()} N&L Shop. All rights reserved.
            </div>
        </footer>
    );
};
export default Footer;
