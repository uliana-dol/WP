import React from 'react';
import { useNavigate } from 'react-router-dom';

const FilmCard = ({ film }) => {
    const navigate = useNavigate();

    return (
        <article className="film-card">
            <div className="thumb">
                <img 
                    src={film.img} 
                    alt={film.title} 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/200x300?text=No+Image" }}
                />
            </div>
            <h4>{film.title}</h4>
            
            <div className="card-info">
                <div>
                    <p className="year">{film.year}</p>
                    <p className="price">{film.price} UAH</p>
                </div>
                
                <button 
                    onClick={() => navigate(`/catalog/${film.id}`)}
                    style={{
                        padding: '8px 12px',
                        backgroundColor: 'transparent',
                        border: '1px solid #e50914',
                        color: '#e50914',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '0.8rem'
                    }}
                >
                    View More
                </button>
            </div>
        </article>
    );
};

export default FilmCard;
