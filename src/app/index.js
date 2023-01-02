import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/header/Navbar'

const App = () => {
    return (
        <div className='w-full'>
            <Navbar />
            <div className='w-full bg-gray-50 min-h-screen'>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
