import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001'
});

export const fetchFilms = (category, searchTerm) => {
    const params = {};
    
    if (category && category !== 'all') params.category = category;
    if (searchTerm) params.search = searchTerm;

    return api.get('/films', { params });
};

export const fetchFilmById = (id) => {
    return api.get(`/films/${id}`);
};
