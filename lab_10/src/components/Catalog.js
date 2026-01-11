import React, { useState, useEffect } from 'react';
import FilmsGallery from './FilmsGallery';
import Select from './Select';
import Loader from './Loader';
import { fetchFilms } from '../api/filmsApi';

const Catalog = () => {
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');

    const categories = [
        { value: 'all', label: 'All Categories' },
        { value: 'Concert', label: 'Concert' },
        { value: 'Drama', label: 'Drama' },
        { value: 'Documentary', label: 'Documentary' }
    ];

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            try {
                const response = await fetchFilms(filterCategory, searchTerm);
                setFilms(response.data);
            } catch (error) {
                console.error("Error fetching films:", error);
            } finally {
                setIsLoading(false);
            }
        };

        const timer = setTimeout(() => {
            loadData();
        }, 500);

        return () => clearTimeout(timer);

    }, [filterCategory, searchTerm]);

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

            {isLoading ? (
                <Loader />
            ) : (
                <FilmsGallery films={films} />
            )}
        </div>
    );
};

export default Catalog;
