const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = 3001; 

app.use(express.json());
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'build')));

let films = [
    { id: 1, title: 'All Too Well', year: 2021, img: '/films_photo/All Too Well (2021).jpg', price: 150, category: 'Short Film' },
    { id: 2, title: 'Miss Americana', year: 2020, img: '/films_photo/Miss Americana (2020).jpg', price: 120, category: 'Documentary' },
    { id: 3, title: 'Reputation', year: 2018, img: '/films_photo/Taylor Swift_ Reputation Stadium Tour (2018).jpg', price: 200, category: 'Concert' },
    { id: 4, title: 'The Eras Tour', year: 2023, img: '/films_photo/Taylor Swift_ The Eras Tour (2023).jpg', price: 250, category: 'Concert' },
    { id: 5, title: "The 1989 World Tour", year: 2015, img: "/films_photo/Taylor Swift_ The 1989 World Tour Live (2015).jpg", price: 180, category: 'Concert' },
    { id: 6, title: "Green Book", year: 2018, img: "/films_photo/Green Book (2018).jpg", price: 140, category: 'Drama' },
    { id: 7, title: "Oppenheimer", year: 2023, img: "/films_photo/Oppenheimer (2023).jpg", price: 220, category: 'Drama' },
    { id: 8, title: "Forrest Gump", year: 1994, img: "/films_photo/Forrest Gump (1994).jpg", price: 100, category: 'Drama' }
];

app.get('/films', (req, res) => {
    let result = films;
    const { category, search } = req.query;

    if (category && category !== 'all') {
        result = result.filter(f => f.category === category);
    }

    if (search) {
        result = result.filter(f => f.title.toLowerCase().includes(search.toLowerCase()));
    }

    setTimeout(() => {
        res.json(result);
    }, 1000);
});

app.get('/films/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const film = films.find(f => f.id === id);
    if (!film) return res.status(404).send('Film not found');
    res.json(film);
});

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
