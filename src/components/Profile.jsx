import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';


function Profile() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const user = useSelector(
        (state) => state.user
    );


    // Get saved user when page opens
    useEffect(() => {

        const savedUser = localStorage.getItem('movieUser');

        if (savedUser) {

            const userData = JSON.parse(savedUser);

            dispatch({
                type: 'LOGIN',
                payload: userData
            });

        }

    }, [dispatch]);


    // Sign In
    const handleLogin = (e) => {

        e.preventDefault();


        if (name.trim() === '') {
            alert('Please enter your name');
            return;
        }


        if (email.trim() === '') {
            alert('Please enter your email');
            return;
        }


        if (password.trim() === '') {
            alert('Please enter your password');
            return;
        }


        const userData = {
            name: name,
            email: email,
            password: password
        };


        // Save details in localStorage
        localStorage.setItem(
            'movieUser',
            JSON.stringify(userData)
        );


        // Save user in Redux
        dispatch({
            type: 'LOGIN',
            payload: userData
        });


        alert('Sign in successful!');

    };


    // Sign Out
    const handleLogout = () => {

        localStorage.removeItem('movieUser');

        dispatch({
            type: 'LOGOUT'
        });

    };


    // If user is not logged in
    if (!user) {

        return (

            <div className="container mt-5">

                <div
                    className="card shadow p-4 mx-auto"
                    style={{ maxWidth: '500px' }}
                >

                    <h2 className="text-center mb-4">
                        🎬 Sign In
                    </h2>


                    <form onSubmit={handleLogin}>

                        {/* Name */}

                        <div className="mb-3">

                            <label className="form-label">
                                Name
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


                        {/* Email */}

                        <div className="mb-3">

                            <label className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                            />

                        </div>


                        {/* Password */}

                        <div className="mb-3">

                            <label className="form-label">
                                Password
                            </label>

                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />

                        </div>


                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                        >
                            Sign In
                        </button>

                    </form>

                </div>

            </div>

        );

    }


    // If user is logged in
    return (

        <div className="container mt-5">

            <div
                className="card shadow p-4 mx-auto"
                style={{ maxWidth: '500px' }}
            >

                <h2 className="text-center mb-4">
                    👋 Welcome, {user.name}
                </h2>


                <div className="alert alert-light">

                    <p>
                        <strong>Name:</strong>{' '}
                        {user.name}
                    </p>

                    <p>
                        <strong>Email:</strong>{' '}
                        {user.email}
                    </p>

                </div>


                <button
                    className="btn btn-danger w-100"
                    onClick={handleLogout}
                >
                    Sign Out
                </button>

            </div>

        </div>

    );

}


export default Profile;
