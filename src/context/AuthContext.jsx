import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setUser({ name: "user", roles: ["admin", "customer"] });
        setIsAuthenticated(false);
    }, []);

    const login = (user, token) => {
        setIsLoading(true)
        if (user && token) {
            setUser(user);
            setToken(token);
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }

    const logout = () => {
        setUser(null);
        setToken(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}