import React, { useEffect, useState } from 'react';
import './form.css';

function Form() {

    // Movie data
    const [movie, setMovie] = useState({
        title: '',
        poster: '',
        language: '',
        genre: '',
        description: '',
        rating: '',
        releaseDate: ''
    });

    // all movies
    const [movies, setMovies] = useState([]);

    //  ID of movie edited
    const [editId, setEditId] = useState(null);

    // localStorage
    useEffect(() => {
        const savedMovies = localStorage.getItem('movies');

         if (savedMovies) {
            setMovies(JSON.parse(savedMovies));
        }
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    };

    // Add or update movie
    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            movie.title === '' ||
            movie.poster === '' ||
            movie.language === '' ||
            movie.genre === '' ||
            movie.description === '' ||
            movie.rating === '' ||
            movie.releaseDate === ''
        ){
            alert('Please fill all the fields');
            return;
        }

        // Update movie
        if (editId !== null) {

            const updatedMovies = movies.map((item) => {
                if (item.id === editId) {
                    return {
                        ...movie,
                        id: editId
                    };
                }

                return item;
            });

            setMovies(updatedMovies);
            setEditId(null);

        } 
        // Add new movie
        else {

            const newMovie = {
                ...movie,
                id: Date.now()
            };
            setMovies([...movies, newMovie]);
        }

        // Clear form
        setMovie({
            title: '',
            poster: '',
            language: '',
            genre: '',
            description: '',
            rating: '',
            releaseDate: ''
        });
    };

    // Edit movie
    const handleEdit = (id) => {

        const selectedMovie = movies.find((item) => item.id === id);
        setMovie(selectedMovie);
        setEditId(id);
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Delete movie
    const handleDelete = (id) => {

        const confirmDelete = window.confirm(
            'Are you sure you want to delete this movie?'
        );

        if (confirmDelete) {
            const remainingMovies = movies.filter(
                (item) => item.id !== id
            );
            setMovies(remainingMovies);
        }
    };

    // Clear form
    const handleClear = () => {
        setMovie({
            title: '',
            poster: '',
            language: '',
            genre: '',
            description: '',
            rating: '',
            releaseDate: ''
        });
        setEditId(null);
    };
    return(
        <div className="movie-pg">

            {/* Header */}
            <div className="movie-header">
                <h1>Movie Library</h1>
                <p>Manage your favourite movies</p>
            </div>

            {/* Form */}
            <div className="container">
                <div className="form-card">
                    <h2>
                        {editId !== null ? 'Edit Movie': 'Add New Movie' }
                    </h2>
                    <p className='form-subtitle'>Enter the movie details below</p>

                    <form onSubmit={handleSubmit}>
                        <div className="row">

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Movie Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={movie.title}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter movie title"
                                />
                            </div>

                            {/* Poster */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Poster URL</label>
                                <input
                                    type="text"
                                    name="poster"
                                    value={movie.poster}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter poster image URL"
                                />
                            </div>

                            {/* Lang */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Language</label>
                                <select
                                    name="language"
                                    value={movie.language}
                                    onChange={handleChange}
                                    className="form-select"
                                >
                                    <option value="">Select Language</option>

                                    <option value="English">English</option>

                                    <option value="Hindi">Hindi</option>

                                    <option value="Gujarati">Gujarati</option>

                                    <option value="Tamil">Tamil</option>

                                    <option value="Punjabi">Punjabi</option>

                                    <option value="Telugu">Telugu</option>
                                </select>
                            </div>

                            {/* Genere */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Genre</label>
                                <select
                                    name="genre"
                                    value={movie.genre}
                                    onChange={handleChange}
                                    className="form-select"
                                >
                                    <option value="">Select Genre</option>

                                    <option value="Action">Action</option>

                                    <option value="Comedy">Comedy</option>

                                    <option value="Drama">Drama</option>

                                    <option value="Horror">Horror</option>

                                    <option value="Romance">Romance</option>
                                    
                                    <option value="Thiller">Thiller</option>
                                </select>
                            </div>

                            {/* Rating */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Rating</label>
                                <input
                                    type="number"
                                    name="rating"
                                    value={movie.rating}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Rating out of 10"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                />
                            </div>

                            {/* release */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Release Date</label>
                                <input
                                    type="date"
                                    name="releaseDate"
                                    value={movie.releaseDate}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>

                            {/* Description */}
                            <div className="col-12 mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    name="description"
                                    value={movie.description}
                                    onChange={handleChange}
                                    className="form-control"
                                    rows="4"
                                    placeholder="Enter movie description"
                                ></textarea>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="button-section">

                            <button type="submit" className="btn btn-primary">
                                {editId !== null
                                    ? 'Update Movie'
                                    : 'Add Movie'}
                            </button>
                            
                            <button type="button" className="btn btn-secondary" onClick={handleClear}>
                                Clear
                            </button>

                        </div>
                    </form>
                </div>

                {/* Movie List */}
                <div className="movie-list-card">
                    <div className="list-heading">
                        <h2>Movie Collection</h2>
                        <span className="movie-count">{movies.length} Movies </span>
                    </div>

                    {movies.length === 0 ? (
                        <div className="empty-message">
                            <h4>No movies added yet 🎬</h4>
                            <p>
                                Add your first movie using the form above.
                            </p>
                        </div>

                    ) : (<div className="table-responsive">
                            <table className="table movie-table">
                                <thead>
                                    <tr>
                                        <th>Poster</th>
                                        <th>Title</th>
                                        <th>Language</th>
                                        <th>Genre</th>
                                        <th>Rating</th>
                                        <th>Release Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead><tbody>
                                    {movies.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <img
                                                    src={item.poster}
                                                    alt={item.title}
                                                    className="movie-poster"
                                                />
                                            </td>
                                            <td>
                                                <strong>
                                                    {item.title}
                                                </strong>
                                            </td>

                                            <td>
                                                {item.language}
                                            </td>

                                            <td>
                                                {item.genre}
                                            </td>

                                            <td>
                                                {item.rating}
                                            </td>

                                            <td>{item.releaseDate}</td>

                                             <td>

                                                <button
                                                    className="btn btn-sm btn-warning me-2"
                                                    onClick={() =>
                                                        handleEdit(item.id)
                                                    }
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() =>
                                                        handleDelete(item.id)
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Form;
