import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/Buttons/PrimaryButton/PrimaryButton';
import NotFoundImage from '../../../Assets/Images/NotFoundImage/404-image.png';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1.3,
                }}
                className='text-center'
            >
                <motion.img
                    src={NotFoundImage}
                    alt='404 Error'
                    className='max-w-xs mx-auto transition-all ease-out'
                />
                <h1 className='text-5xl font-bold my-3 text-[#253d4e'>
                    Page Not Found
                </h1>
                <p className='mb-5 font-medium text-gray-500'>
                    The page you're looking for might be renamed, removed or
                    temporarily unavailable
                </p>
                <PrimaryButton>
                    <Link to={'/'}>Go to home</Link>
                </PrimaryButton>
            </motion.div>
        </div>
    );
};

export default NotFound;
