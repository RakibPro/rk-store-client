import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaGoogle,
    FaGithub,
    FaRegEnvelope,
    FaRegUser,
} from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm();
    const {
        createUser,
        updateUser,
        loginWithFacebook,
        loginWithGoogle,
        loginWithGithub,
    } = useContext(AuthContext);

    const handleSignUp = (data) => {
        // Create User
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                reset();
                toast.success('User Created Successfully');
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    // Display a custom error message to the user
                    toast.error('This User Already Exist');
                } else {
                    // Handle other Firebase authentication errors or generic error handling
                    console.error(error);
                }
            });

        // Update UserName
        const userInfo = {
            displayName: data.name,
        };
        updateUser(userInfo);
    };

    // Facebook Login Function
    const handleFacebookLogin = () => {
        loginWithFacebook()
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                toast.success('Login Success');
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
            });
    };

    // Login With Google
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                toast.success('Login Success');
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
            });
    };

    // Login With Github
    const handleGithubLogin = () => {
        loginWithGithub()
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                toast.success('Login Success');
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
            });
    };

    return (
        <section className='min-h-screen flex items-center bg-gray-100 justify-center w-full flex-1 px-10 py-10 lg:py-0 text-center'>
            {/* Wrapper */}
            <div className='rounded-2xl shadow-2xl flex lg:w-2/3 flex-col lg:flex-row '>
                {/* Login Section */}
                <div className='lg:w-3/5 bg-white text-black rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl p-12'>
                    <form onSubmit={handleSubmit(handleSignUp)}>
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
                                    {...register('name', {
                                        required: 'Please Enter Your Name !',
                                    })}
                                />
                            </div>
                            {errors.name && (
                                <p
                                    role='alert'
                                    className='text-error text-left font-medium pb-3 w-72'
                                >
                                    {errors.name?.message}
                                </p>
                            )}
                            {/* Email Field */}
                            <div className='bg-gray-100 w-72 p-2 flex items-center mb-3 rounded-sm'>
                                <FaRegEnvelope className='text-gray-400 text-xl m-1 mr-2' />
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className='bg-gray-100 outline-none flex-1'
                                    {...register('email', {
                                        required:
                                            'Please Enter Your Email Address !',
                                    })}
                                />
                            </div>
                            {errors.email && (
                                <p
                                    role='alert'
                                    className='text-error text-left font-medium pb-3 w-72'
                                >
                                    {errors.email?.message}
                                </p>
                            )}
                            {/* Password Field */}
                            <div className='bg-gray-100 w-72 p-2 flex items-center mb-3 rounded-sm'>
                                <MdLockOutline className='text-gray-400 text-2xl m-[2px] mr-2' />
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='bg-gray-100 outline-none flex-1'
                                    {...register('password', {
                                        required: 'Please Enter Password !',
                                        minLength: {
                                            value: 6,
                                            message:
                                                'Password must be 6 character or longer',
                                        },
                                        pattern: {
                                            value: /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))/,
                                            message:
                                                'Password must have uppercase, lowercase and number',
                                        },
                                    })}
                                />
                            </div>
                            {errors.password && (
                                <p
                                    role='alert'
                                    className='text-error text-left font-medium pb-3 w-72'
                                >
                                    {errors.password?.message}
                                </p>
                            )}
                            <input
                                type='submit'
                                value='SignUp'
                                className='border-2 border-[#3bb77e]  text-[#3bb77e] mt-2 rounded-full px-14 py-2 font-semibold hover:bg-[#3bb77e] hover:text-white transition-all duration-300 cursor-pointer'
                            />
                        </div>
                    </form>
                    {/* Social Login */}
                    <div className='divider font-medium text-[#253d4e]'>OR</div>
                    <div className='flex justify-center my-2'>
                        {/* Facebook */}
                        <button
                            onClick={handleFacebookLogin}
                            className='border-2 border-gray-200 rounded-full p-3 mx-1 text-xl hover:bg-[#3bb77e] hover:text-white hover:border-[#3bb77e] transition-all duration-300'
                        >
                            <FaFacebookF />
                        </button>
                        {/* Google */}
                        <button
                            onClick={handleGoogleLogin}
                            className='border-2 border-gray-200 rounded-full p-3 mx-1 text-xl hover:bg-[#3bb77e] hover:text-white hover:border-[#3bb77e] transition-all duration-300'
                        >
                            <FaGoogle />
                        </button>
                        {/* Github */}
                        <button
                            onClick={handleGithubLogin}
                            className='border-2 border-gray-200 rounded-full p-3 mx-1 text-xl hover:bg-[#3bb77e] hover:text-white hover:border-[#3bb77e] transition-all duration-300'
                        >
                            <FaGithub />
                        </button>
                    </div>
                </div>
                {/* SignUp Section */}
                <div className='lg:w-2/5 bg-[#3bb77e] text-white rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl rounded-br-2xl p-12 lg:pt-40'>
                    <h2 className='text-3xl font-bold mb-1'>Welcome Back</h2>
                    <div className='border-2 border-white w-14 rounded-lg inline-block'></div>
                    <p className='my-2 font-medium'>
                        If you already have an account
                        <br /> login with your personal info
                    </p>
                    <Link
                        to='/login'
                        className='border-2 border-white mt-2 inline-block rounded-full px-12 py-2 font-semibold hover:bg-white hover:text-[#3bb77e] transition-all duration-300'
                    >
                        Login
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
