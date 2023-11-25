import React from 'react'
import ReactDOM from 'react-dom/client'
import EValid from './components/Main/EmailValidator/EValid';
import QrGenerator from './components/Main/qrGen/QrGenerator.jsx';
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='/emailValidator' element={<EValid />} />
            <Route path='/qrGenerator' element={<QrGenerator />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
