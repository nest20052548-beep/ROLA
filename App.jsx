import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LineButton from './components/LineButton';
import Home from './pages/Home';
// Placeholder pages
const Products = () => <div className="pt-32 pb-20 container text-center"><h1 className="text-4xl text-white font-bold">All Products</h1><p className="text-slate-400 mt-4">Coming Soon</p></div>;
const About = () => <div className="pt-32 pb-20 container text-center"><h1 className="text-4xl text-white font-bold">About Us</h1><p className="text-slate-400 mt-4">Coming Soon</p></div>;
const Contact = () => <div className="pt-32 pb-20 container text-center"><h1 className="text-4xl text-white font-bold">Contact</h1><p className="text-slate-400 mt-4">Coming Soon</p></div>;
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <LineButton />
      </div>
    </Router>
  );
}
export default App;
