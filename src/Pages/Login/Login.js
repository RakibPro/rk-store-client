import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const { loginUser } = useContext(AuthContext);

    const handleLogin = (data, e) => {
        console.log(data);
        loginUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                toast.success('Login Success');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };
    return (
        <section className='min-h-screen flex items-center bg-gray-100 justify-center w-full flex-1 px-10 pt-10 lg:pt-0 text-center'>
            {/* Wrapper */}
            <div className='rounded-2xl shadow-2xl flex lg:w-2/3 flex-col lg:flex-row '>
                {/* Login Section */}
                <form
                    onSubmit={handleSubmit(handleLogin)}
                    className='lg:w-3/5 bg-white text-black rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl p-12'
                >
                    {/* Title */}
                    <h2 className='text-3xl font-bold text-[#3bb77e]'>
                        Login To RK-Store
                    </h2>
                    <div className='border-2 border-[#3bb77e] w-20 rounded-lg inline-block mt-4 mb-2'></div>
                    {/* Login Form */}
                    <div className='flex flex-col items-center'>
                        <p className='text-left font-semibold pb-4 w-72 text-[#253d4e]'>
                            Use your email to login
                        </p>
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
                        <div className='flex w-72 my-1'>
                            <Link
                                to='/login'
                                className='text-sm font-medium text-black transition-all hover:text-red-500 '
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <input
                            type='submit'
                            value='Login'
                            className='border-2 border-[#3bb77e]  text-[#3bb77e] mt-2 rounded-full px-14 py-2 font-semibold hover:bg-[#3bb77e] hover:text-white transition-all duration-300 cursor-pointer'
                        />
                    </div>
                    {/* Social Login */}
                    <div className='divider font-medium text-[#253d4e]'>OR</div>
                    <div className='flex justify-center my-2'>
                        <Link
                            to='/login'
                            className='border-2 border-gray-200 rounded-full p-3 mx-1 text-xl hover:bg-[#3bb77e] hover:text-white hover:border-[#3bb77e] transition-all duration-300'
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            to='/login'
                            className='border-2 border-gray-200 rounded-full p-3 mx-1 text-xl hover:bg-[#3bb77e] hover:text-white hover:border-[#3bb77e] transition-all duration-300'
                        >
                            <FaGoogle />
                        </Link>
                        <Link
                            to='/login'
                            className='border-2 border-gray-200 rounded-full p-3 mx-1 text-xl hover:bg-[#3bb77e] hover:text-white hover:border-[#3bb77e] transition-all duration-300'
                        >
                            <FaGithub />
                        </Link>
                    </div>
                </form>

                {/* SignUp Section */}
                <div className='lg:w-2/5 bg-[#3bb77e] text-white rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl rounded-br-2xl p-12 lg:pt-36'>
                    <h2 className='text-3xl font-bold mb-1'>Hello Sir</h2>
                    <div className='border-2 border-white w-14 rounded-lg inline-block'></div>
                    <p className='my-2 font-medium'>
                        If you are new to this site
                        <br />
                        Enter your personal details and
                        <br />
                        start a new journey with us
                    </p>
                    <Link
                        to='/signup'
                        className='border-2 border-white mt-2 inline-block rounded-full px-12 py-2 font-semibold hover:bg-white hover:text-[#3bb77e] transition-all duration-300'
                    >
                        SignUp
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Login;
