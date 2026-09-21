import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';


function Navbar() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // Get logged-in user from Redux
    const user = useSelector(
        (state) => state.user
    );


    // Sign out
    const handleLogout = () => {

        dispatch({
            type: 'LOGOUT'
        });

        navigate('/login');

    };


    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                {/* App Name */}

                <Link
                    className="navbar-brand fw-bold"
                    to="/"
                >
                    🎬 Movie Library
                </Link>


                {/* Mobile Menu Button */}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                >

                    <span className="navbar-toggler-icon"></span>

                </button>


                {/* Navigation Links */}

                <div
                    className="collapse navbar-collapse"
                    id="navbarMenu"
                >

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        {/* Popular Movies */}

                        <li className="nav-item">

                            <Link
                                className="nav-link"
                                to="/"
                            >
                                Popular Movies
                            </Link>

                        </li>


                        {/* Search */}

                        <li className="nav-item">

                            <Link
                                className="nav-link"
                                to="/search"
                            >
                                Search
                            </Link>

                        </li>


                        {/* CRUD */}

                        <li className="nav-item">

                            <Link
                                className="nav-link"
                                to="/manage"
                            >
                                Manage Movies
                            </Link>

                        </li>


                        {/* Profile */}

                        <li className="nav-item">

                            <Link
                                className="nav-link"
                                to="/profile"
                            >
                                Profile
                            </Link>

                        </li>

                    </ul>


                    {/* Right Side */}

                    <div className="d-flex">

                        {user ? (

                            <button
                                className="btn btn-outline-light"
                                onClick={handleLogout}
                            >
                                Sign Out
                            </button>

                        ) : (

                            <Link
                                to="/login"
                                className="btn btn-primary"
                            >
                                Sign In
                            </Link>

                        )}

                    </div>

                </div>

            </div>

        </nav>

    );

}


export default Navbar;