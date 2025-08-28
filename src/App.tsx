import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import BookOnline from './pages/BookOnline';
import Plumbing from './pages/Plumbing';
import HVAC from './pages/HVAC';
import Coupons from './pages/Coupons';
import React from 'react';
import ScrollToTop from '@/components/ScrollToTop.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-online" element={<BookOnline />} />
            <Route path="/plumbing" element={<Plumbing />} />
            <Route path="/hvac" element={<HVAC />} />
            <Route path="/coupons" element={<Coupons />} />
          </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
