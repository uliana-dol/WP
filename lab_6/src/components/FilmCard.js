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
            <p className="year">{film.year}</p>
        </article>
    );
};

export default FilmCard;
