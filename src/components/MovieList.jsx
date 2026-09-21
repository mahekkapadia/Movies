import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../Redux/actions';
import { Link } from 'react-router-dom';

function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(
        (state) => state.movies
    );
    const loading = useSelector(
        (state) => state.loading
    );
    const error = useSelector(
        (state) => state.error
    );

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch]);

    if (loading) {
        return (
            <h3 className="text-center mt-5">
                Loading movies...
            </h3>
        );
    }

    if (error) {
        return (
            <h3 className="text-center mt-5 text-danger">
                {error}
            </h3>
        );
    }
    return (
        <div className="container mt-5">
            <h2 className="mb-4">
                Popular Movies
            </h2>
            
            <div className="row">
                {movies.map((movie) => (
                    <div
                        className="col-md-3 mb-4"
                        key={movie.id}
                    >
                        <div className="card movie-card">
                            <img
                                src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                        : 'https://via.placeholder.com/500x750'
                                }
                                className="card-img-top"
                                alt={movie.title}
                            />
                            
                            <div className="card-body">
                                <h5 className="card-title">
                                    {movie.title}
                                </h5>
                                
                                <p>
                                {movie.vote_average}
                                </p>

                                <Link
                                    to={`/movie/${movie.id}`}
                                    className="btn btn-primary"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export defa MovieList;
