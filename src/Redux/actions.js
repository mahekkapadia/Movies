import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';


// Get popular movies
export const fetchPopularMovies = () => {

    return async (dispatch) => {

        dispatch({
            type: 'MOVIES_LOADING'
        });

        try {

            const response = await axios.get(
                `${BASE_URL}/movie/popular?api_key=${API_KEY}`
            );

            dispatch({
                type: 'FETCH_MOVIES',
                payload: response.data.results
            });

        } catch (error) {

            dispatch({
                type: 'MOVIES_ERROR'
            });

        }

    };

};


// Search movies
export const searchMovies = (query) => {

    return async (dispatch) => {

        dispatch({
            type: 'MOVIES_LOADING'
        });

        try {

            const response = await axios.get(
                `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
            );

            dispatch({
                type: 'SEARCH_MOVIES',
                payload: response.data.results
            });

        } catch (error) {

            dispatch({
                type: 'MOVIES_ERROR'
            });

        }

    };

};


// Get movie details
export const fetchMovieDetails = (id) => {

    return async (dispatch) => {

        dispatch({
            type: 'MOVIES_LOADING'
        });

        try {

            const response = await axios.get(
                `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`
            );

            dispatch({
                type: 'MOVIE_DETAILS',
                payload: response.data
            });

        } catch (error) {

            dispatch({
                type: 'MOVIES_ERROR'
            });

        }

    };

};