import { useContext } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom' 
import { AuthContext } from '../context/AuthContext';
import { splitRoles } from './userRoles';

export default function RequiredAuth({requiredRoles}) {
    const location = useLocation();

    const {isAuthenticated, user, isLoading  } = useContext(AuthContext);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" state={{from: location}}/>
    }

    function userHasAllRoles (roles) {
        const res = roles.every(role => user.roles.includes(role));
        return res;
    }

    function verifyRoles(roles) {
        const res = requiredRoles?.some(role => userHasAllRoles(splitRoles(role)))
        return res
    }

    const userHasRequiredRole = verifyRoles(user.roles);

    if (isAuthenticated && !userHasRequiredRole) {
        return <Navigate to="/AccessDenied" state={{from: location}}/>
    }

    return <Outlet />
}