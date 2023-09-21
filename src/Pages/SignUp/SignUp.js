import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaGoogle,
    FaGithub,
    FaRegEnvelope,
    FaRegUser,
} from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

const SignUp = () => {
    return (
        <section className='min-h-screen flex items-center bg-gray-100 justify-center w-full flex-1 px-10 pt-10 lg:pt-0 text-center'>
            {/* Wrapper */}
            <div className='rounded-2xl shadow-2xl flex lg:w-2/3 flex-col lg:flex-row '>
                {/* Login Section */}
                <div className='lg:w-3/5 bg-white text-black rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl p-12'>
                    {/* Title */}
                    <h2 className='text-3xl font-bold text-[#3bb77e]'>
                        Create Account
                    </h2>
                    <div className='border-2 border-[#3bb77e] w-20 rounded-lg inline-block mt-4 mb-2'></div>
                    {/* Login Form */}
                    <div className='flex flex-col items-center'>
                        <p className='text-left font-semibold pb-4 w-72 text-[#253d4e]'>
                            Use your email to registration
                        </p>
                        {/* Name Field */}
                        <div className='bg-gray-100 w-72 p-2 flex items-center mb-3 rounded-sm'>
                            <FaRegUser className='text-gray-400 text-xl m-1 mr-2' />
                            <input
                                type='text'
                                placeholder='Name'
                                className='bg-gray-100 outline-none flex-1'
                            />
                        </div>
                        {/* Email Field */}
                        <div className='bg-gray-100 w-72 p-2 flex items-center mb-3 rounded-sm'>
                            <FaRegEnvelope className='text-gray-400 text-xl m-1 mr-2' />
                            <input
                                type='email'
                                placeholder='Email'
                                className='bg-gray-100 outline-none flex-1'
                            />
                        </div>
                        {/* Password Field */}
                        <div className='bg-gray-100 w-72 p-2 flex items-center mb-3 rounded-sm'>
                            <MdLockOutline className='text-gray-400 text-2xl m-[2px] mr-2' />
                            <input
                                type='password'
                                placeholder='Password'
                                className='bg-gray-100 outline-none flex-1'
                            />
                        </div>
                        <input
                            type='submit'
                            value='SignUp'
                            className='border-2 border-[#3bb77e]  text-[#3bb77e] mt-2 rounded-full px-14 py-2 font-semibold hover:bg-[#3bb77e] hover:text-white duration-300 cursor-pointer'
                        />
                    </div>
                    {/* Social Login */}
                    <div className='divider font-medium text-[#253d4e]'>OR</div>
                    <div className='flex justify-center my-2'>
                        <Link
                            to='/login'
                            className='border-2 border-gray-200 rounded-full p-3 mx-1 text-xl hover:bg-[#3bb77e] hover:text-white hover:border-[#3bb77e] duration-300'
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            to='/login'
                            className='border-2 border-gray-200 rounded-full p-3 mx-1 text-xl hover:bg-[#3bb77e] hover:text-white hover:border-[#3bb77e] duration-300'
                        >
                            <FaGoogle />
                        </Link>
                        <Link
                            to='/login'
                            className='border-2 border-gray-200 rounded-full p-3 mx-1 text-xl hover:bg-[#3bb77e] hover:text-white hover:border-[#3bb77e] duration-300'
                        >
                            <FaGithub />
                        </Link>
                    </div>
                </div>
                {/* SignUp Section */}
                <div className='lg:w-2/5 bg-[#3bb77e] text-white rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl rounded-br-2xl p-12 lg:pt-36'>
                    <h2 className='text-3xl font-bold mb-1'>Welcome Back</h2>
                    <div className='border-2 border-white w-14 rounded-lg inline-block'></div>
                    <p className='my-2 font-medium'>
                        If you already have an account
                        <br /> login with your personal info
                    </p>
                    <Link
                        to='/login'
                        className='border-2 border-white mt-2 inline-block rounded-full px-12 py-2 font-semibold hover:bg-white hover:text-[#3bb77e] duration-300'
                    >
                        Login
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
