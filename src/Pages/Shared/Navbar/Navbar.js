import React, { useContext } from 'react';
import logo from '../../../Assets/Images/logo.png';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/Buttons/PrimaryButton/PrimaryButton';
import { AuthContext } from '../../../context/AuthProvider';

function Navbar() {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
                console.error(error);
            });
    };

    const menuItems = (
        <>
            <li>
                <Link
                    className='hover:bg-transparent hover:text-[#3bb77e] transition duration-300'
                    to='/'
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    className='hover:bg-transparent hover:text-[#3bb77e] transition duration-300'
                    to='/inventory'
                >
                    Inventory
                </Link>
            </li>
            <li>
                <Link
                    className='hover:bg-transparent hover:text-[#3bb77e] transition duration-300'
                    to='/manageinventory'
                >
                    Manage Inventory
                </Link>
            </li>
            <li>
                <Link
                    className='hover:bg-transparent hover:text-[#3bb77e] transition duration-300'
                    to='/'
                >
                    Blogs
                </Link>
            </li>
        </>
    );
    return (
        <nav className='lg:px-5'>
            <div className='navbar py-0 max-w-[1440px] mx-auto'>
                <div className='navbar-start '>
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
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60  uppercase font-medium'
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
                    <ul className='menu menu-horizontal px-1 uppercase font-bold text-[#253d4e]'>
                        {menuItems}
                    </ul>
                </div>
                <div className='navbar-end'>
                    {user?.uid ? (
                        <button
                            onClick={handleLogOut}
                            className='btn text-white border-none tracking-widest
                            font-bold bg-red-500 hover:bg-[#fdc040] hover:text-black transition-all duration-300'
                        >
                            SignOut
                        </button>
                    ) : (
                        <Link to='/login' className=''>
                            <PrimaryButton>Login</PrimaryButton>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
