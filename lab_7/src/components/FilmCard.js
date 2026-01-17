import React from 'react';

const FilmCard = ({ film }) => {
    const title = film.title || film.name; 

    return (
        <article className="film-card">
            <div className="thumb">
                <img 
                    src={film.img} 
                    alt={title} 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/200x300?text=No+Image" }}
                />
            </div>
            <h4>{title}</h4>
            <div className="card-info" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 15px 15px' }}>
                <p className="year" style={{ margin: 0 }}>{film.year}</p>
                <p className="price" style={{ margin: 0, color: '#e50914', fontWeight: 'bold' }}>
                    {film.price} UAH
                </p>
            </div>
        </article>
    );
};

export default FilmCard;
