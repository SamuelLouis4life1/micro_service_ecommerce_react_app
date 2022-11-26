import { useLocation, Navigate, Outlet } from 'react-router-dom'

export default function RequiredAuth({ roles }) {
    const location = useLocation();
    const { isAuthenticated, user, loading } = { isAuthenticated: false, user: { name: "user", roles: "Admin" }, loading: false };

    if (loading) {
        return <div>Loading...</div>
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    
    const userHasRequiredRole = roles.inclues(user.roles)

    if (isAuthenticated && !userHasRequiredRole) {
        return <Navigate to="/AccesDenied" state={{ from: location }} replace />
    }

    return <Outlet />
}