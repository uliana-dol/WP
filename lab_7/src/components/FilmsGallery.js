import React from 'react';
import FilmCard from './FilmCard';

const sampleFilms = [
    { id: 1, title: 'All Too Well', year: 2021, img: '/films_photo/All Too Well (2021).jpg', price: 150 },
    { id: 2, title: 'Miss Americana', year: 2020, img: '/films_photo/Miss Americana (2020).jpg', price: 120 },
    { id: 3, title: 'Reputation', year: 2018, img: '/films_photo/Taylor Swift_ Reputation Stadium Tour (2018).jpg', price: 180 },
    { id: 4, title: 'The Eras Tour', year: 2023, img: '/films_photo/Taylor Swift_ The Eras Tour (2023).jpg', price: 200 },
    { id: 5, name: "The 1989 World Tour", year: 2015, img: "/films_photo/Taylor Swift_ The 1989 World Tour Live (2015).jpg", price: 160 },
    { id: 6, name: "Green Book", year: 2018, img: "/films_photo/Green Book (2018).jpg", price: 95 },
    { id: 7, name: "Oppenheimer", year: 2023, img: "/films_photo/Oppenheimer (2023).jpg", price: 130 },
    { id: 8, name: "Forrest Gump", year: 1994, img: "/films_photo/Forrest Gump (1994).jpg", price: 140 }
];

const FilmsGallery = () => {
    return (
        <div>
            <h3>Featured Films</h3>
            <div className="films-grid">
                {sampleFilms.map((film) => (
                    <FilmCard key={film.id} film={film} />
                ))}
            </div>
        </div>
    );
};

export default FilmsGallery;
