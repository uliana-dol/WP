export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export const addToCart = (film) => ({
    type: ADD_TO_CART,
    payload: film
});

export const removeFromCart = (filmId) => ({
    type: REMOVE_FROM_CART,
    payload: filmId
});

export const increaseQuantity = (filmId) => ({
    type: INCREASE_QUANTITY,
    payload: filmId
});

export const decreaseQuantity = (filmId) => ({
    type: DECREASE_QUANTITY,
    payload: filmId
});
