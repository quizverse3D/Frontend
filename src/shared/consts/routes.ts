export enum AppRoutes {
    HOME = 'home',
    AUTHORIZATION = 'authorization',
    SETTINGS = 'settings',
    MULTIPLAUER = 'multiplayer',
    AVATAR = 'avatar',
    GAME = 'game',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
}

export const getRouteHome = () => '/';
export const getRouteAuthorization = () => `/authorization/`;
export const getRouteSetting = () => '/settings';
export const getRouteMultiplayer = () => '/multiplayer';
export const getRouteAvatar = () => '/avatar';
export const getRouteGame = () => '/game';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteHome()]: AppRoutes.HOME,
    [getRouteAuthorization()]: AppRoutes.AUTHORIZATION,
    [getRouteSetting()]: AppRoutes.SETTINGS,
    [getRouteMultiplayer()]: AppRoutes.MULTIPLAUER,
    [getRouteAvatar()]: AppRoutes.AVATAR,
    [getRouteGame()]: AppRoutes.GAME,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
