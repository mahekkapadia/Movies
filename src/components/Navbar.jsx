import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(
        (state) => state.user
    );

    const handleLogout = () => {
        localStorage.removeItem('movieUser');
        dispatch({
            type: 'LOGOUT'
        });
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                
                {/* Logo */}
                <Link
                    className="navbar-brand fw-bold"
                    to="/"
                >
                    Movie Library
                </Link>

                {/* Mobile button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarMenu"
                >

                    {/* Menu */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                            >
                                Popular Movies
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/search"
                            >
                                Search
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/manage"
                            >
                                Manage Movies
                            </Link>
                        </li>
                    </ul>

                    {/* Sign In / Sign Out */}
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
                                to="/profile"
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
