import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PvtRoute({ children }) {

    // Get user from Redux
    const user = useSelector(
        (state) => state.user
    );

    // If user is not logged in
    if (!user) {
        return (
            <Navigate to="/profile" />
        );
    }

    // If user is logged in
    return children;
}
export default PvtRoute;
