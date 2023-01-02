import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from '../../app';

import Dashboard from '../../app/dashboard'
import Users from '../../app/users'
import AddUser from '../../app/users/AddUser'
import Profile from '../../app/profile'
import Orders from '../../app/orders'
import CreateOrder from '../../app/orders/CreateOrder'
import Services from '../../app/services'
import NotFound from '../../app/NotFound'
import Signin from '../../app/Signin';

import UserRoutes from './ProtectedRoutes';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/" element={<Navigate to='/d' />} />
                <Route element={<UserRoutes />} >
                    <Route path="/" element={<App />} >
                        <Route path="d" element={<Dashboard />} />
                        <Route path="users" element={<Users />} />
                        <Route path="user/profile" element={<Profile />} />
                        <Route path="user/new" element={<AddUser />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="services" element={<Services />} />
                        <Route path="order/new" element={<CreateOrder />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
