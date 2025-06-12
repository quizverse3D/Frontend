import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/shared/hooks/useAuth';

interface RequireAuthProps {
    children: React.ReactNode;
    roles?: string[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
    const { isAuthenticated, user } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/authorization/" state={{ from: location }} replace />;
    }
    if (roles && roles.length > 0 && !roles.some((role) => user.roles.includes(role))) {
        return <Navigate to="/forbidden" replace />;
    }
    return <>{children}</>;
}; 