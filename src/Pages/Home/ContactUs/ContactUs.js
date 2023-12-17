import React from 'react';
import {
    FaRegEnvelope,
    FaRegUser,
    FaMapMarkedAlt,
    FaPhone,
} from 'react-icons/fa';
import { MdOutlineMessage, MdSubject } from 'react-icons/md';
import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <section className='min-h-screen flex items-center bg-gray-100 justify-center w-full flex-1 px-10 py-10 lg:py-0 text-center lg:text-left'>
            {/* Wrapper */}
            <div className='flex rounded-2xl shadow-2xl lg:w-[75%] flex-col lg:flex-row'>
                {/* Contact Section */}
                <div className='lg:w-[90%] bg-white text-black rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl p-12'>
                    <form>
                        <div className='flex flex-col items-center lg:pr-64 '>
                            {/* Title */}
                            <h2 className='text-3xl font-bold text-[#3bb77e]'>
                                Contact Us
                            </h2>
                            {/* Title Underline */}
                            <div className='border-2 border-[#3bb77e] w-20 rounded-lg inline-block mt-4 mb-2'></div>
                            {/* Contact Form */}
                            <p className='text-center font-semibold pb-4 w-72 text-[#253d4e]'>
                                Feel Free to contact us any time.
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
                            {/* Subject Field */}
                            <div className='bg-gray-100 w-72 p-2 flex items-center mb-3 rounded-sm'>
                                <MdSubject className='text-gray-400 text-2xl m-[2px] mr-2' />
                                <input
                                    type='text'
                                    placeholder='Subject'
                                    className='bg-gray-100 outline-none flex-1'
                                />
                            </div>
                            {/* Message Field */}
                            <div className='bg-gray-100 w-72 p-2 flex mb-3 rounded-sm'>
                                <MdOutlineMessage className='text-gray-400 text-2xl m-[2px] mr-2' />
                                <textarea
                                    className='bg-gray-100 outline-none flex-1 h-20'
                                    placeholder="What's on your mind"
                                ></textarea>
                            </div>
                            {/* Submit Button */}
                            <input
                                type='submit'
                                value='Submit'
                                className='border-2 border-[#3bb77e] bg-[#3bb77e] hover:bg-transparent hover:text-[#3bb77e] mt-2 rounded-full px-28 py-2 font-semibold text-white transition-all duration-300 cursor-pointer'
                            />
                        </div>
                    </form>
                </div>
                {/* Contact info Section */}
                <div className='lg:relative lg:w-[10%] bg-[#3bb77e] lg:bg-white border-r-[50px] border-[#3bb77e] text-white rounded-bl-2xl rounded-br-2xl lg:rounded-bl-none lg:rounded-tr-2xl p-12 lg:pt-24'>
                    <motion.div
                        initial={{
                            x: 70,
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1.2,
                        }}
                        viewport={{ once: true }}
                        className='lg:absolute right-0 lg:w-[350px] lg:bg-[#3bb77e] lg:p-10 lg:rounded-bl-2xl lg:rounded-tl-2xl'
                    >
                        <h2 className='text-3xl font-bold mb-1'>
                            Contact Info
                        </h2>
                        <div className='border-2 border-white w-14 rounded-lg inline-block'></div>
                        <p className='flex justify-center lg:justify-start my-4 font-medium'>
                            <FaPhone class='text-white text-xl m-1 mr-3' />
                            +91 8009 054294
                        </p>

                        <p className='flex justify-center lg:justify-start my-4 font-medium'>
                            <FaRegEnvelope className='text-white text-xl m-1 mr-3' />
                            info@flightmantra.com
                        </p>
                        <p className='flex justify-center lg:justify-start my-4 font-medium leading-snug'>
                            <FaMapMarkedAlt className='text-white text-5xl m-1 mr-3' />
                            1000+ Travel partners and 65+ Service city across
                            India, USA, Canada & UAE
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
