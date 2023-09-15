import React from 'react';
import logo from '../../../Assets/Images/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const menuItems = (
        <>
            <li className='nav-link'>
                <Link to='/'>Home</Link>
            </li>
            <li className='nav-link'>
                <Link to='/'>Home</Link>
            </li>
            <li className='nav-link'>
                <Link to='/'>About</Link>
            </li>
            <li className='nav-link'>
                <Link to='/'>Contact Me</Link>
            </li>
        </>
    );
    return (
        <div className='navbar'>
            <div className='navbar-start'>
                <div className='dropdown'>
                    <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h8m-8 6h16'
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60'
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img
                        src={logo}
                        alt='logo'
                        height={50}
                        width={150}
                        className='cursor-pointer'
                    />
                </Link>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal px-1'>{menuItems}</ul>
            </div>
            <div className='navbar-end'>
                <Link to='/' className='btn'>
                    Button
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
