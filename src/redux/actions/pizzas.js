import axios from "axios";

export const setPizzas = (items) => ({type: 'SET_PIZZAS', payload: items});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`)
        .then(res => dispatch(setPizzas(res.data)))
}

export const setLoaded = (payload) => ({type: 'SET_LOADED', payload});