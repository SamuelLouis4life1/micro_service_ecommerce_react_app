import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { splitRoles } from './userRoles';

export default function RequiredAuth({ requiredRoles }) {
    const location = useLocation();
    const { isAuthenticated, user, isLoading } = useContext(AuthContext);

    function userHasAllRoles(roles) {
        const res = roles.every(role => user.roles.includes(role));
        return res
    }
    
    function verifyRoles(roles) {
        const res = requiredRoles?.some(role => userHasAllRoles(splitRoles(role)))
        return res
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!isAuthenticated) {
        return <Navigate to="auth/login" state={{ from: location }} />
    }

    const userHasRequiredRole = verifyRoles(user.roles)
    if (isAuthenticated && !userHasRequiredRole) {
        return <Navigate to="/AccesDenied" state={{ from: location }} replace />
    }

    return <Outlet />
}