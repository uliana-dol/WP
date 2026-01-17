import React from 'react';
import FilmCard from './FilmCard';

const FilmsGallery = ({ films }) => {
    if (films.length === 0) {
        return <h3 style={{ textAlign: 'center', width: '100%', color: '#b3b3b3' }}>No films found.</h3>;
    }

    return (
        <div className="films-grid">
            {films.map((film) => (
                <FilmCard key={film.id} film={film} />
            ))}
        </div>
    );
};

export default FilmsGallery;
