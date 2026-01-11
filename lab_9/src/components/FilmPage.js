import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import Loader from './Loader';
import { fetchFilmById } from '../api/filmsApi';

const FilmPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [film, setFilm] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFilmById(id)
            .then(res => {
                setFilm(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <Loader />;

    if (!film) {
        return <div className="container" style={{padding: '50px'}}><h2>Film not found</h2></div>;
    }

    return (
        <div className="container" style={{ padding: '60px 20px', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 300px', width: '100%' }}>
                <img 
                    src={film.img} 
                    alt={film.title} 
                    style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/300x450" }}
                />
            </div>

            <div style={{ flex: 1 }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', marginTop: 0 }}>{film.title}</h1>
                
                <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', color: '#b3b3b3' }}>
                    <span style={{ padding: '5px 10px', background: '#333', borderRadius: '4px' }}>{film.year}</span>
                    <span style={{ padding: '5px 10px', background: '#333', borderRadius: '4px' }}>{film.category}</span>
                </div>

                <h3 style={{ color: '#e50914', fontSize: '2rem', margin: '0 0 20px' }}>{film.price} UAH</h3>
                
                <p style={{ lineHeight: '1.6', marginBottom: '30px', fontSize: '1.1rem', color: '#ddd' }}>
                    Experience the magic of <strong>{film.title}</strong>. This masterpiece has captivated audiences 
                    worldwide. Don't miss the chance to add this incredible film to your collection. 
                </p>

                <div style={{ display: 'flex', gap: '15px' }}>
                    <PrimaryButton onClick={() => alert(`Added ${film.title} to cart!`)}>
                        Add to Cart
                    </PrimaryButton>
                    
                    <button 
                        onClick={() => navigate(-1)} 
                        style={{ 
                            padding: '10px 20px', 
                            background: 'transparent', 
                            border: '1px solid #b3b3b3', 
                            color: '#fff', 
                            borderRadius: '4px', 
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilmPage;
