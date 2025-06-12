import { useMemo } from 'react';

export function useAuth() {
    // TODO: заменить на реальную логику авторизации
    const isAuthenticated = true;
    const user = { roles: ['user'] };
    return useMemo(() => ({ isAuthenticated, user }), [isAuthenticated]);
} 