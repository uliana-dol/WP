import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import Catalog from './components/Catalog';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/catalog" element={<Catalog />} />

                        <Route path="*" element={<div className="container"><h2>404 Not Found</h2></div>} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
