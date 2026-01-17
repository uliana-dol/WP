import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FilmsProvider } from './context/FilmsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Catalog from './components/Catalog';
import FilmPage from './components/FilmPage';

function App() {
    return (
        <FilmsProvider>
            <Router>
                <div className="app">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/catalog/:id" element={<FilmPage />} />
                            <Route path="*" element={<div className="container" style={{ padding: '50px' }}><h2>404 Not Found</h2></div>} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </FilmsProvider>
    );
}

export default App;
