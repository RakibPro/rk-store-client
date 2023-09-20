import React from 'react';
import { motion } from 'framer-motion';

const Inventory = () => {
    return (
        <div className='text-center'>
            <h1
                className='text-5xl py-5 mt-10 font-bold'
                style={{ color: 'var(--title-color)' }}
            >
                Our Grocery
            </h1>
            <p className='py-6 mx-auto w-1/2 text-[#253d4e] font-medium'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                mollitia culpa hic distinctio rem accusamus ad ratione ab!
                Incidunt, voluptates.
            </p>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mt-5 mx-10'>
                <motion.div
                    initial={{
                        y: 200,
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    viewport={{ once: true }}
                    className='card w-full h-[500px] bg-white-500 rounded-xl shadow-[0_0_30px_rgba(0,0,0,.14)] hover:shadow-[0_30px_50px_rgba(0,0,0,.14)] hover:duration-500'
                >
                    <figure>
                        <motion.img
                            whileHover={{ scale: 1.2 }}
                            src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/product-2-1.jpg'
                            alt='Shoes'
                            className='h-[200px] w-[200px] lg:h-[250px] lg:w-[250px]'
                        />
                    </figure>
                    <div className='card-body'>
                        <div className='items-start'>
                            {/* Product Name */}
                            <h2 className='card-title text-start'>
                                All Natural Style Chicken Meatballs
                            </h2>
                            {/* Product Description  */}
                            <p className='font-medium text-start my-2'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Odio, nobis!
                            </p>
                            {/* Supplier Name */}
                            <p className='font-semibold text-start'>
                                By{' '}
                                <span className='font-semibold text-[#3bb77e] hover:text-red-500 cursor-pointer transition duration-300'>
                                    Supplier Name
                                </span>
                            </p>
                            {/* Product Quantity */}
                            <p className='font-semibold mt-2 text-start mb-0'>
                                item{' '}
                                <span className='text-lg font-semibold text-[#3bb77e]'>
                                    5
                                </span>
                            </p>
                        </div>
                        <div className='card-actions justify-between mt-0'>
                            {/* Product Price */}
                            <div className='mt-3'>
                                <p className='text-xl font-semibold text-[#3bb77e]'>
                                    Price $32
                                </p>
                            </div>
                            <div>
                                <button className='btn btn-primary'>
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Inventory;
