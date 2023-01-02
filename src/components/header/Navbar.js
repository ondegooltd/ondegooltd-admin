import React from 'react';
import logo from '../../assets/images/ondegoo.jpg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center border w-full h-[4.5rem] shadow-lg px-8'>
            <div>
                <img src={logo} alt="logo" className='h-[4rem] w-[4.4rem] border' />
            </div>
            <div className='w-[35rem] hidden lg:block xl:block'>
                <ul className='flex justify-evenly'>
                    <li><NavLink to='/d' className=' text-xl'>Home</NavLink></li>
                    <li><NavLink to='/orders' className=' text-xl'>Orders</NavLink></li>
                    <li><NavLink to='/services' className=' text-xl'>Services</NavLink></li>
                    <li><NavLink to='/users' className=' text-xl'>Users</NavLink></li>
                    <li><NavLink to='/user/profile' className=' text-xl'>Profile</NavLink></li>
                </ul>
            </div>
            <div className='border'>
                Avatar
            </div>
        </nav>
    );
}

export default Navbar;
