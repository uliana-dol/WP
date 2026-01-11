import React, { useState, useContext } from 'react';
import { FilmsContext } from '../context/FilmsContext';
import FilmsGallery from './FilmsGallery';
import Select from './Select';

const Catalog = () => {
    const { films } = useContext(FilmsContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');

    const categories = [
        { value: 'all', label: 'All Categories' },
        { value: 'Concert', label: 'Concert' },
        { value: 'Drama', label: 'Drama' },
        { value: 'Documentary', label: 'Documentary' }
    ];

    const filteredFilms = films.filter(film => {
        const matchesSearch = film.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'all' || film.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container gallery-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
                <h2>Catalog</h2>
                
                <div className="controls" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <input 
                        type="text" 
                        placeholder="Search films..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #333',
                            backgroundColor: '#2e2e2e',
                            color: 'white'
                        }}
                    />

                    <Select 
                        options={categories} 
                        onChange={(e) => setFilterCategory(e.target.value)} 
                    />
                </div>
            </div>

            <FilmsGallery films={filteredFilms} />
        </div>
    );
};

export default Catalog;
