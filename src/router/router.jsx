import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../components/Home';

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            }
        ]
    }
])

export default router;