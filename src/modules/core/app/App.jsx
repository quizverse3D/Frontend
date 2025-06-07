import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from '@/routes';
import Loader from '@/ui/Loader/Loader.jsx';
import ErrorBoundary from '../error/ErrorBoundary';

export const App = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <div className='app-container'>
                    <div>
                        <Suspense fallback={<Loader />}>
                            <Routes>
                                {routes.map((route) => (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        element={route.element}
                                    >
                                        {route.children?.map((child) => (
                                            <Route
                                                key={child.path}
                                                path={child.path}
                                                element={child.element}
                                            />
                                        ))}
                                    </Route>
                                ))}
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    );
};
