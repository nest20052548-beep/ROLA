import React from 'react';
import { MessageCircle } from 'lucide-react';
const LineButton = () => {
    return (
        <a
            href="https://line.me/ti/p/yourid"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#06C755] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-neon hover:-translate-y-1 transition-all duration-300 font-bold"
        >
            <MessageCircle className="w-6 h-6 fill-white" />
            <span>Chat on LINE</span>
        </a>
    );
};
export default LineButton;
