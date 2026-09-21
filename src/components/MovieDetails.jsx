import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../Redux/actions';

function MovieDetails() {
    // Get movie id from URL
    const { id } = useParams();

    // Used to send action to Redux
    const dispatch = useDispatch();

    // Get movie details from Redux
    const movie = useSelector(
        (state) => state.selectedMovie
    );

    // Get loading status
    const loading = useSelector(
        (state) => state.loading
    );

    // Fetch movie details
    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    // Show loading message
    if (loading) {
        return (
            <h3 className="text-center mt-5">
                Loading movie details...
            </h3>
        );
    }

    // If movie is not available
    if (!movie) {
        return (
            <h3 className="text-center mt-5">
                Movie not found
            </h3>
        );
    }
    return (
        <div className="container mt-5">
            <div className="row">
                
                {/* Movie Poster */}
                <div className="col-md-4">
                    <img
                        src={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                : 'https://via.placeholder.com/500x750'
                        }
                        alt={movie.title}
                        className="img-fluid rounded"
                    />
                </div>

                {/* Movie Information */}
                <div className="col-md-8">
                    <h1>
                        {movie.title}
                    </h1>
                    <p>
                        <strong>Release Date:</strong>{' '}
                        {movie.release_date}
                    </p>
                    
                    <p>
                        <strong>Rating:</strong>{' '}
                        {movie.vote_average}
                    </p>

                    <p>
                        <strong>Language:</strong>{' '}
                        {movie.original_language}
                    </p>
                    
                    <p>
                        <strong>Genre:</strong>{' '}
                        {movie.genres &&
                            movie.genres.map((genre) => (
                                <span
                                    key={genre.id}
                                    className="badge bg-secondary me-2"
                                >
                                    {genre.name}
                                </span>
                            ))
                        }
                    </p>

                    <h5 className="mt-4">
                        Description
                    </h5>

                    <p>
                        {movie.overview}
                    </p>

                    <h5 className="mt-4">
                        Cast
                    </h5>

                    <p>
                        {movie.credits &&
                            movie.credits.cast
                                .slice(0, 5)
                                .map((actor) => (
                                    <span
                                        key={actor.id}
                                        className="me-3"
                                    >
                                        {actor.name}
                                    </span>
                                ))
                        }
                    </p>

                </div>
            </div>
        </div>
    );
}
export default MovieDetails;
