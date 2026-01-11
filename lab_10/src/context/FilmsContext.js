import React, { createContext, useState } from 'react';

export const FilmsContext = createContext();

export const FilmsProvider = ({ children }) => {
    const [films] = useState([
        { id: 1, title: 'All Too Well', year: 2021, img: '/films_photo/All Too Well (2021).jpg', price: 150, category: 'Short Film' },
        { id: 2, title: 'Miss Americana', year: 2020, img: '/films_photo/Miss Americana (2020).jpg', price: 120, category: 'Documentary' },
        { id: 3, title: 'Reputation', year: 2018, img: '/films_photo/Taylor Swift_ Reputation Stadium Tour (2018).jpg', price: 200, category: 'Concert' },
        { id: 4, title: 'The Eras Tour', year: 2023, img: '/films_photo/Taylor Swift_ The Eras Tour (2023).jpg', price: 250, category: 'Concert' },
        { id: 5, title: "The 1989 World Tour", year: 2015, img: "/films_photo/Taylor Swift_ The 1989 World Tour Live (2015).jpg", price: 180, category: 'Concert' },
        { id: 6, title: "Green Book", year: 2018, img: "/films_photo/Green Book (2018).jpg", price: 140, category: 'Drama' },
        { id: 7, title: "Oppenheimer", year: 2023, img: "/films_photo/Oppenheimer (2023).jpg", price: 220, category: 'Drama' },
        { id: 8, title: "Forrest Gump", year: 1994, img: "/films_photo/Forrest Gump (1994).jpg", price: 100, category: 'Drama' }
    ]);

    return (
        <FilmsContext.Provider value={{ films }}>
            {children}
        </FilmsContext.Provider>
    );
};
