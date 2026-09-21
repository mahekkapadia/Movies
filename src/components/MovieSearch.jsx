import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../Redux/actions';

function MovieSearch() {

    // Store what user types
    const [searchText, setSearchText] = useState('');

    // Used to send action to Redux
    const dispatch = useDispatch();

    // Get search results from Redux
    const movies = useSelector(
        (state) => state.searchResults
    );

    // Get loading status
    const loading = useSelector(
        (state) => state.loading
    );

    // Search movies
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchText(value);
        if (value.trim() !== '') {
            dispatch(searchMovies(value));
        }
    };
    
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">
                Search Movies
            </h2>
            
            {/* Search Box */}
            <div className="input-group mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a movie..."
                    value={searchText}
                    onChange={handleSearch}
                />
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        if (searchText.trim() !== '') {
                            dispatch(searchMovies(searchText));
                        }
                    }}
                >
                    Search
                </button>
            </div>

            {/* Loading */}
            {loading && (
                <p className="text-center">
                    Searching movies...
                </p>
            )}

            {/* Movie Results */}
            <div className="row">
                {movies.map((movie) => (
                    <div
                        className="col-md-3 mb-4"
                        key={movie.id}
                    >
                        <div className="card h-100 shadow">
                            <img
                                src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                        : 'https://via.placeholder.com/300x450'
                                }
                                className="card-img-top"
                                alt={movie.title}
                            />

                            <div className="card-body">
                                <h5 className="card-title">
                                    {movie.title}
                                </h5>

                                <p className="card-text">
                                    {movie.vote_average}
                                </p>

                                <p className="text-muted">
                                    {movie.release_date}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* No Results */}
            {!loading &&
                searchText !== '' &&
                movies.length === 0 && (

                    <p className="text-center">
                        No movies found.
                    </p>
                )}
        </div>
    );
}
export default MovieSearch;
