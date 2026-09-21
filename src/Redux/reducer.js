const initialState = {

    movies: [],

    selectedMovie: null,

    searchResults: [],

    loading: false,

    error: '',

    user: null

};


function reducer(state = initialState, action) {

    switch (action.type) {

        case 'MOVIES_LOADING':

            return {
                ...state,
                loading: true,
                error: ''
            };


        case 'FETCH_MOVIES':

            return {
                ...state,
                movies: action.payload,
                loading: false
            };


        case 'SEARCH_MOVIES':

            return {
                ...state,
                searchResults: action.payload,
                loading: false
            };


        case 'MOVIE_DETAILS':

            return {
                ...state,
                selectedMovie: action.payload,
                loading: false
            };


        case 'MOVIES_ERROR':

            return {
                ...state,
                loading: false,
                error: 'Something went wrong'
            };


        case 'LOGIN':

            return {
                ...state,
                user: action.payload
            };


        case 'LOGOUT':

            return {
                ...state,
                user: null
            };


        default:

            return state;
    }
}


export default reducer;
