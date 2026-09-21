import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';


function Profile() {

    // Store name entered by user
    const [name, setName] = useState('');

    // Store favorite movie
    const [favoriteMovie, setFavoriteMovie] = useState('');

    // Get Redux dispatch
    const dispatch = useDispatch();

    // Get logged-in user from Redux
    const user = useSelector(
        (state) => state.user
    );


    // Login
    const handleLogin = () => {

        if (name.trim() === '') {

            alert('Please enter your name');

            return;
        }


        dispatch({

            type: 'LOGIN',

            payload: {
                name: name,
                favoriteMovie: favoriteMovie
            }

        });

    };


    // Logout
    const handleLogout = () => {

        dispatch({
            type: 'LOGOUT'
        });

    };


    return (

        <div className="container mt-5">

            <div className="card shadow p-4 mx-auto"
                 style={{ maxWidth: '500px' }}>


                {!user ? (

                    /* LOGIN */

                    <>

                        <h2 className="text-center mb-4">
                            👤 User Profile
                        </h2>


                        <div className="mb-3">

                            <label className="form-label">
                                Your Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                            />

                        </div>


                        <div className="mb-3">

                            <label className="form-label">
                                Favourite Movie
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter favourite movie"
                                value={favoriteMovie}
                                onChange={(e) =>
                                    setFavoriteMovie(e.target.value)
                                }
                            />

                        </div>


                        <button
                            className="btn btn-primary w-100"
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>

                    </>

                ) : (

                    /* LOGGED IN */

                    <>

                        <h2 className="text-center mb-4">
                            👋 Welcome, {user.name}
                        </h2>


                        <div className="alert alert-light">

                            <p>
                                <strong>Name:</strong>{' '}
                                {user.name}
                            </p>


                            <p>
                                <strong>Favourite Movie:</strong>{' '}

                                {user.favoriteMovie
                                    ? user.favoriteMovie
                                    : 'Not added'}
                            </p>

                        </div>


                        <button
                            className="btn btn-danger w-100"
                            onClick={handleLogout}
                        >
                            Sign Out
                        </button>

                    </>

                )}

            </div>

        </div>

    );
}


export default Profile;